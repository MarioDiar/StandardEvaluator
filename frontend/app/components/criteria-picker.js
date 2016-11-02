import Ember from 'ember';

export default Ember.Component.extend({
	isVariablesOn: false,
	variablesValue: 0,

	isFunctionsOn: false,
	functionsValue: 0,

	isConstantsOn: false,
	constantsValue: 0,

	isCommentsInsideOn: false,
	commentsInsideValue: 0,

	isCommentsBeforeOn: false,
	commentsBeforeValue: 0,

	isFilenameOn: false,
	filenameValue: 0,

	isLibrariesOn: false,
	librariesValue: 0,

	totalPercentage: Ember.computed('variablesValue', 'functionsValue', 'constantsValue', 'commentsInsideValue', 
					'commentsBeforeValue','filenameValue', 'librariesValue', function() {
		return this.get('variablesValue') + this.get('functionsValue') + this.get('constantsValue') + 
				this.get('commentsBeforeValue') + this.get('commentsInsideValue') + this.get('filenameValue') + this.get('librariesValue');
	}),


	actions: {
		testValues() {
			console.log(this.get('isVariablesOn'));
		}
	}
});