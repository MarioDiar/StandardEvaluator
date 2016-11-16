import Ember from 'ember';

export default Ember.Controller.extend({
	openCriteriaPicker: false,
	pickFilesChosen: false,

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