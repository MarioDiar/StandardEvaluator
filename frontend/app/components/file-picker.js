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
  		removeFile() {
  			this.get('files').removeObject(file);
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

// attachFiles(files, ticket, user, email) {
// 			var userId = null;

// 			if(Ember.isEmpty(user))
// 				userId = null;
// 			else
// 				userId = user.id;

// 			const uploader = EmberUploader.Uploader.create({
// 				url: 'api/attachments',
// 				paramName: 'attachment_path'
// 			});

// 			uploader.on('progress', () => {
// 				this.set('isUploading', true);
// 				return this.set('attachmentError', '');
// 			});

// 			uploader.on('didUpload', res => {
// 				this.store.pushPayload(res);
// 				return this.set('isUploading', false);
// 			});

// 			uploader.on('didError', (jqXHR, textStatus, errorThrown) => {
// 				this.set('attachmentError', errorThrown);
// 				return this.set('isUploading', false);
// 			});

// 			if (!Ember.isEmpty(files)) {
// 				for(var i = 0; i < files.length; ++i)
// 				uploader.upload(files[i], {
// 					"ticket_id": ticket.id,
// 					"visibility": true,
// 					"user_id": userId,
// 					"email": email
// 				});
// 			}
// 		}

// setFiles() {
//     	if(this.get('files') === null) {
//     		this.set('filesAreSetted', true);
//     		this.set('files', document.getElementById('request-attachments').files);
//     	} else {
//     		var myFiles = this.get('files');
//     		var newFiles = document.getElementById('request-attachments').files;
//     		var totalFiles = [];
//     		var  i;

//     		totalFiles.length = myFiles.length + newFiles.length;

//     		for(i = 0; i < myFiles.length; ++i){
//     			totalFiles[i] = myFiles[i];
//     		}

//     		for(var j = 0; j < newFiles.length; ++j){
//     			totalFiles[i] = newFiles[j];
//     			++i;
//     		}

//     		this.set('files', totalFiles);
//     	}
//     },

