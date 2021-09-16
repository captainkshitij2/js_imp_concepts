function watchTutorialPromise() {
  let userLeft = false;
  let userWatchingCatMeme = false;
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: "User Left",
        message: ":("
      });
    } else if (userWatchingCatMeme) {
      reject({
        name: "User Watching Cat Meme",
        message: "WebDevSimplified < Cat"
      });
    } else {
      resolve("Thumbs up and Subscribe");
    }
  });
}
//--------------------------------------------
// function factorial (numb)
// {
//     var sam = 1 ;
//     for (var i=1; i<=numb; i++)
//     {
//         sam=sam*i
//     }
//     return sam;
// }
// console.log(factorial(4))
//--------------------------------------------
