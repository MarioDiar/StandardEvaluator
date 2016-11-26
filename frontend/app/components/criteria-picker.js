import Ember from 'ember';

export default Ember.Component.extend({
	percentageReached100: false,

	isVariablesOn: false,

	isFunctionsOn: false,

	isConstantsOn: false,

	isCommentsInitialOn: false,

	isCommentsBeforeOn: false,

	isFilenameOn: false,

	isLibrariesOn: false,

	totalPercentage: Ember.computed('variablesValue', 'functionsValue', 'constantsValue', 'commentsInitialValue', 
					'commentsBeforeValue','filenameValue', 'librariesValue', function() {
		return this.get('variablesValue') + this.get('functionsValue') + this.get('constantsValue') + 
				this.get('commentsBeforeValue') + this.get('commentsInitialValue') + this.get('filenameValue') + this.get('librariesValue');
	}),

	percentageIs100: Ember.computed('totalPercentage', function() {
		if(this.get('totalPercentage') === 100) {
			this.set('percentageReached100', true);
			this.set('pickFilesChosen', true);
			return true;
		} else {
			return false;
		}
	}),

	percentageOver100: Ember.computed('totalPercentage', function() {
		if (this.get('totalPercentage') > 100) {
			return true; 
		} else {
			return false;
		}
	}),

	actions: {
		openFilesSelector() {
			this.set('pickFilesChosen', true);
		}
	}
});