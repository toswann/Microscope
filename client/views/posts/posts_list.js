/**
 * Created by swann on 27/04/2014.
 */
Template.postsList.helpers({
    posts: function() {
        return Posts.find({}, {sort: {submitted: -1}});
    }
});