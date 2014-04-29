/**
 * Created by swann on 28/04/2014.
 */
Template.errors.helpers({
    errors: function() {
        return Errors.find();
    }
});
Template.error.rendered = function() {
    var error = this.data;
    Meteor.defer(function() {
        Errors.update(error._id, {$set: {seen: true}});
    });
};