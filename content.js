

const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        console.log(mutation)
    })
});
// console.log(123456789)
const fr = document.getElementsByTagName("iframe");
observer.observe(fr, { childList: true });

// var frames = document.getElementsByTagName("iframe");
// console.log(frames.length)
// console.log(frames)

// for (let item of frames) {
//     // console.log(100)
//     // console.log(item.src);
//     console.log(item.baseURI);
// }

// for (let index = 0; index < frames.length; index++) {
//     console.log(1)
//     let element = frames[index];
//     console.log(element);
// }