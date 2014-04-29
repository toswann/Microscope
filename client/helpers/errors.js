/**
 * Created by swann on 28/04/2014.
 */
Errors = new Meteor.Collection(null);
throwError = function(message) {
    Errors.insert({message: message, seen: false})
}
clearErrors = function() {
    Errors.remove({seen: true});
}