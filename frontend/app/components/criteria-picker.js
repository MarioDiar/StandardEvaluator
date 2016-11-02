import Ember from 'ember';

export default Ember.Component.extend({
	isVariablesOn: false,
	isFunctionsOn: false,
	isConstantsOn: false,
	isCommentsInsideOn: false,
	isCommentsBeforeOn: false,
	isFilenameOn: false,
	isLibrariesOn: false,

	totalPercentage: 0,


	actions: {
		testValues() {
			console.log(this.get('isVariablesOn'));
		}
	}
});