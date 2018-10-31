// Promisifying XMLHttpRequest
//https://developers.google.com/web/fundamentals/primers/promises

function get(url) {
    // return a new promise
    return new Promise(function(resolve, reject) {
        var req = new XMLHttpRequest();
        req.open('GET', url);

        req.onload = function() {
            if(req.status == 200) {
                resolve(req.response);
            }
            else {
                reject(Error(req.statusText));
            }
        };

        req.onerror = function() {
            reject(Error('network error.'));
        };

        req.send(); // make the request
    });
}

// now use it:
get('story.json').then(function(response) {
    console.log('Success! ', response);
}, function(error) {
    console.error("Failed! ", error);
});


function getJSON(url) {
    return get(url).then(JSON.parse);
}

var storyPromise;

function getChapter(i) {
    storyPromise = storyPromise || getJSON('story.json');

    return storyPromise.then(function(story) {
        return getJSON(story.chapterUrls[i]);
    })
}

getChapter(0).then(function(chapter) {
    console.log(chapter);
    return getChapter(1);
}).then(function(chapter) {
    console.log(chapter);
}).catch(function(error){
    console.log("Failed! ", error);
})

//Rejections happen when a promise is explicitly rejected, 
// but also implicitly if an error is thrown in the constructor callback:

//Creating a sequence
//We want to turn our chapterUrls array into a sequence of promises. We can do that using then():

// Start off with a promise that always resolves
var sequence = Promise.resolve();

// Loop through our chapter urls
story.chapterUrls.forEach(function(chapterUrl) {
  // Add these actions to the end of the sequence
  sequence = sequence.then(function() {
    return getJSON(chapterUrl);
  }).then(function(chapter) {
    addHtmlToPage(chapter.html);
  });
})