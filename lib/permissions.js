/**
 * Created by swann on 28/04/2014.
 */

// check that the userId specified owns the documents
ownsDocument = function(userId, doc) {
    return doc && doc.userId === userId;
}