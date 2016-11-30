import Ember from 'ember';
import EmberUploader from 'ember-uploader';

export default Ember.Component.extend({
	store: Ember.inject.service(),
	files: [],
    criterias: [],

	didInsertElement() {
    	let multipleInput = document.getElementById("file-multiple-button");
    	let singleInput = document.getElementById("file-single-button");

        multipleInput.addEventListener("change", e => {
            let files = e.target.files;

            for (var i = 0, len = files.length; i < len; i++) {
				let extension = files[i].name.split(".").pop();
				if(extension === "cpp") {
					this.get('files').pushObject(files[i]);
				}
            }
        }, false);

        singleInput.addEventListener("change", e => {
			let files = e.target.files;

			for (var i = 0, len = files.length; i < len; i++) {
				let extension = files[i].name.split(".").pop();
				if(extension === "cpp") {
					this.get('files').pushObject(files[i]);
				}
            }
        }, false);
  	},

  	actions: {
  		removeFile(index) {
  			this.get('files').removeAt(index);
  		},

  		openSingleFileSelector() {
  			Ember.$('#file-single-button').trigger('click');
  		},

  		openMultipleFileSelector() {
  			Ember.$('#file-multiple-button').trigger('click');
  		},

		uploadFiles(files) {
			const uploader = EmberUploader.Uploader.create({
				url: '/archivos',
				paramName: 'archivos'
			});

			uploader.on('progress', () => {
				console.log('Uploading files');
			});

			uploader.on('didUpload', res => {
				var resJSON = JSON.stringify(res.archivos);

                this.send('setCriterias');

                console.log(this.get('criterias'));

                sortingArray(res.archivos, this.get('criterias'));
			});

			uploader.on('didError', res => {
				console.log(res);
			});

			if(!Ember.isEmpty(this.get('files'))) {
				let criterias = {"variables_criteria": this.get('variablesValue'),
				"funciones_criteria": this.get('functionsValue'),
				"constantes_criteria": this.get('constantsValue'),
				"comentariosAntes_criteria": this.get('commentsBeforeValue'),
				"comentariosInicial_criteria": this.get('commentsInitialValue'),
				"nombre_criteria": this.get('filenameValue'),
				"declaracion_criteria": this.get('librariesValue')}
                
				uploader.upload(this.get('files'), criterias);

			}
		},

        setCriterias() {
            let criteriasSelected = [];
            
            if(this.get('variablesValue') !== 0) {
                criteriasSelected.pushObject("Variables");
            } 

            if(this.get('functionsValue') !== 0) {
                criteriasSelected.pushObject("Funciones");
            } 

            if(this.get('constantsValue') !== 0) {
                criteriasSelected.pushObject("Constantes");
            } 

            if(this.get('commentsBeforeValue') !== 0) {
                criteriasSelected.pushObject("Comentarios");
            }

            if(this.get('commentsInitialValue') !== 0) {
                criteriasSelected.pushObject("Comentario Inicial");
            }

            if(this.get('filenameValue') !== 0) {
                criteriasSelected.pushObject("Nombre de Archivo");
            } 

            if(this.get('librariesValue') !== 0) {
                criteriasSelected.pushObject("Declaracion Librerias");
            }
            this.set('criterias', criteriasSelected);
        }
  	}
});

function sortingArray(arrData, criterias) {
    let output = [];

    arrData.forEach(file => {
        let initComment, filename;

        if(file.initComment === 0) {
            initComment = "No Puso";
        } else {
            initComment = "Correcto";
        }

        if(file.filename === 0) {
            filename = "Incorrecto";
        } else {
            filename = "Correcto";
        }

        let tempObject = { 
            Nombre : file.nombre,
            Calificacion : file.calificacion,
            Nombre_Archivo : filename,
            Comentario_Inicial : initComment,
            Variables : " " + file.varCorrect + "/" + file.varTotal,
            Constantes : " " + file.constCorrect + "/" + file.constTotal,
            Funciones : " " + file.funcCorrect + "/" + file.funcTotal,
            Comentarios: " " + file.commentsCorrect + "/" + file.commentsTotal,
            Declaracion_Librerias: " " + file.includesCorrect + "/" + file.includesTotal
        }

        output.pushObject(tempObject);
    });

    JSONToCSVConvertor(output, criterias,  "Calificaciones", true);
}

function JSONToCSVConvertor(JSONData, Criterias, ReportTitle, ShowLabel) {
    //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
    // var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;

    var arrData = JSONData;

    var CSV = '';
    //Set Report title in first row or line

    CSV += ReportTitle + '\r\n\n';

    var row = "Criterias Elegidas: ,";

    for (var i = 0; i < Criterias.length; i++) {
        row += '"' + Criterias[i] + '",';
    }

    CSV += row + '\r\n\n';

    //This condition will generate the Label/Header
    if (ShowLabel) {
        var row = "";

        //This loop will extract the label from 1st index of on array

        for (var index in arrData[0]) {
            //Now convert each value to string and comma-seprated
            row += index + ',';
        }

        row = row.slice(0, -1);

        //append Label row with line break
        CSV += row + '\r\n';
    }

    //1st loop is to extract each row
    for (var i = 0; i < arrData.length; i++) {
        var row = "";

        //2nd loop will extract each column and convert it in string comma-seprated
        for (var index in arrData[i]) {
            row += '"' + arrData[i][index] + '",';
        }

        row.slice(0, row.length - 1);

        //add a line break after each row
        CSV += row + '\r\n';
    }

    if (CSV == '') {
        alert("Invalid data");
        return;
    }

    //Generate a file name
    var fileName = "Reporte_";
    //this will remove the blank-spaces from the title and replace it with an underscore
    fileName += ReportTitle.replace(/ /g,"_");

    //Initialize file format you want csv or xls
    var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);

    //this trick will generate a temp <a /> tag
    var link = document.createElement("a");
    link.href = uri;

    //set the visibility hidden so it will not effect on your web-layout
    link.style = "visibility:hidden";
    link.download = fileName + ".csv";

    //this part will append the anchor tag and remove it after automatic click
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
