import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service(),
	files: [],

	didInsertElement() {
    	let multipleInput = document.getElementById("file-multiple-button");
    	let singleInput = document.getElementById("file-single-button");
    	let file = null;
        
        multipleInput.addEventListener("change", e => {
            let files = e.target.files;
            let filesJSON = {files:[]};
            
            for (var i = 1, len = files.length; i < len; i++) {
            	file = {id: i+1, fileName : files[i].name};
            	this.get('files').pushObject(file);
            }
        }, false);

        singleInput.addEventListener("change", e => {
            file = {id: this.get('files').length + 1, fileName: singleInput.files[0].name};
            this.get('files').pushObject(file);
        }, false);
  	},

  	actions: {
  		removeFile(file) {
  			this.get('files').removeObject(file);
  		},

  		openSingleFileSelector() {
  			Ember.$('#file-single-button').trigger('click');
  		},

  		openMultipleFileSelector() {
  			Ember.$('#file-multiple-button').trigger('click');
  		}
  	}
});
// <script>
//     $(document).on('ready', function() {
//         var files, 
//             file, 
//             extension,
//             input = document.getElementById("fileURL"), 
//             output = document.getElementById("fileOutput");
        
//         input.addEventListener("change", function(e) {
//             files = e.target.files;
//             output.innerHTML = "";
            
//             for (var i = 0, len = files.length; i < len; i++) {
//                 file = files[i];
//                 extension = file.name.split(".").pop();
//                 if(extension == "cpp"){
//                     output.innerHTML += "<li class='type-" + extension + "'>" + "<input type='checkbox'>" + file.name + "</li>";
//                 }
                
//             }
//         }, false);
//     });
// </script>