import Ember from 'ember';

export default Ember.Controller.extend({
	openCriteriaPicker: false,
	pickfilesChosen: false,

	actions: {
		OpenCriteriaPicker() {
			if(this.get('openCriteriaPicker')) {
				this.set('openCriteriaPicker', false);
			} else {
				this.set('openCriteriaPicker', true);
			}
		},

		openFilesSelector() {
			this.set('pickfilesChosen', true);
		}
	}
});