import Ember from 'ember';

export default Ember.Controller.extend({
	openCriteriaPicker: false,
	pickFilesChosen: false,

	variablesValue: 0,

	functionsValue: 0,

	constantsValue: 0,

	commentsInitialValue: 0,

	commentsBeforeValue: 0,

	filenameValue: 0,

	librariesValue: 0,

	actions: {
		OpenCriteriaPicker() {
			if(this.get('openCriteriaPicker')) {
				this.set('openCriteriaPicker', false);
			} else {
				this.set('openCriteriaPicker', true);
			}
		},

		openFilesSelector() {
			this.set('pickFilesChosen', true);
		}
	}
});