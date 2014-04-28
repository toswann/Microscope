/**
 * Created by swann on 27/04/2014.
 */
Meteor.startup(function() {
    Deps.autorun(function() {
        console.log('There are ' + Posts.find().count() + ' posts');
    });
});