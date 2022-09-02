import fetch from 'node-fetch';

//promise
fetch('https://fake-tweets-api.herokuapp.com/posts')
.then(response => {
    return response.json()
}).then(tweets => {
    let sizeTweets = tweets.length
    console.log("panjang data = " + sizeTweets + "\n");
    console.log(tweets)

}).catch(err => {
    console.error(error);
});

//new promise
setTimeout(() => {
    console.log("Tick");
}, 1000);

const doSomething = function(){
    return new Promise((resolve, reject) => {
       
    })
};

let doIt = doSomething()

doIt.then(response => {

})

doIt.catch(error => {

})

const setTimeoutPromise = (duration) =>
new Promise((resolve, reject) => {
    setTimeout(resolve, duration);
});

setTimeoutPromise(1000).then(() =>
console.log("tick"));


// asyn atau await
(async() => {

    const response = await
    fetch('https://fake-tweets-api.herokuapp.com/posts');

    let tweets1 = await response.json();
    
    console.log(tweets1.length);
})();