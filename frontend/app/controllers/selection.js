import Ember from 'ember';

export default Ember.Controller.extend({
	openCriteriaPicker: true,

	actions: {
		OpenCriteriaPicker() {
			if(this.get('openCriteriaPicker')) {
				this.set('openCriteriaPicker', false);
			} else {
				this.set('openCriteriaPicker', true);
			}
		}
	}
});