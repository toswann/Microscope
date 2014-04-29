/**
 * Created by swann on 27/04/2014.
 */
Meteor.publish('posts', function() {
    return Posts.find();
});
Meteor.publish('comments', function(postId) {
    return Comments.find({postId: postId});
});