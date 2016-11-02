import Ember from 'ember';

export default Ember.Component.extend({

	tempValue: 0,

	actions: {
		changed(param) {
			console.log(param);
		}
	}
});