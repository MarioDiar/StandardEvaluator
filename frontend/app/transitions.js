import Ember from "ember";

export default function() {
    let duration = 1000;

      this.transition(
        this.hasClass('filePicker'),

        // this makes our rule apply when the liquid-if transitions to the
        // true state.
        this.toValue(true),
        this.use('crossFade', {duration}),

        // which means we can also apply a reverse rule for transitions to
        // the false state.
        this.reverse('crossFade', {duration})
    );
};