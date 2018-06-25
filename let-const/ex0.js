/*
 * Programming Quiz: Using Let and Const (1-1)
 */

var CHARACTER_LIMIT = 255;
var posts = [
    "some posts "
];

// prints posts to the console
function displayPosts() {
    for (var i = 0; i < posts.length; i++) {
        console.log(posts[i].slice(0, CHARACTER_LIMIT));
    }
}

displayPosts();
