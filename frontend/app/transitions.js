import Ember from "ember";

export default function() {
    let durationFilepicker = 1000;

      this.transition(
        this.hasClass('filePicker'),

        // this makes our rule apply when the liquid-if transitions to the
        // true state.
        this.toValue(true),
        this.use('crossFade', {durationFilepicker}),

        // which means we can also apply a reverse rule for transitions to
        // the false state.
        this.reverse('crossFade', {durationFilepicker})
    );

    let durationCriteria = 2000;
    this.transition(
        this.hasClass('criteriaTest'),

        // this makes our rule apply when the liquid-if transitions to the
        // true state.
        this.toValue(true),
        this.use('crossFade', {durationCriteria}),

        // which means we can also apply a reverse rule for transitions to
        // the false state.
        this.reverse('crossFade', {durationCriteria})
    );

    let durationCriteriaBanner = 3000;
    this.transition(
        this.hasClass('criteriaBanner'),

        // this makes our rule apply when the liquid-if transitions to the
        // true state.
        this.toValue(true),
        this.use('toLeft', {durationCriteriaBanner}),

        // which means we can also apply a reverse rule for transitions to
        // the false state.
        this.reverse('toLeft', {durationCriteriaBanner})
    );
};