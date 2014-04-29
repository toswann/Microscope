/**
 * Created by swann on 28/04/2014.
 */
Template.comment.helpers({
    submittedText: function() {
        return new Date(this.submitted).toString();
    }
});