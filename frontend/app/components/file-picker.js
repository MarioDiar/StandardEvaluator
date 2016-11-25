import Ember from 'ember';
import EmberUploader from 'ember-uploader';

export default Ember.Component.extend({
	store: Ember.inject.service(),
	files: [],

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
			console.log(index);
  			this.get('files').removeAt(index);
			console.log(this.get('files'));
  		},

  		openSingleFileSelector() {
  			Ember.$('#file-single-button').trigger('click');
  		},

  		openMultipleFileSelector() {
  			Ember.$('#file-multiple-button').trigger('click');
  		},

		uploadFiles(files) {
			console.log('test');
			const uploader = EmberUploader.Uploader.create({
				url: '/archivos',
				paramName: 'archivos'
			});

			uploader.on('progress', () => {
				console.log('Uploading files');
			});

			uploader.on('didUpload', res => {
				console.log(res);
			});

			uploader.on('didError', res => {
				console.log(res);
			});

			if(!Ember.isEmpty(this.get('files'))) {
				uploader.upload(this.get('files'));
			}
		}
  	}
});