import Ember from 'ember';

export default Ember.Component.extend({
	tempValue: 0,

	actions: {
		openCriteria() {
			this.set('openCriteriaPicker', true);
		}
	}
});