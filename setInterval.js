console.log('First');
console.log('Second');

setInterval(() => {
    console.log('Repeat for 3 seconds');
}, 3000)

let seconds = 0;
const timeId = setInterval(() => {
    // seconds++;
    console.log(++seconds);
    if (seconds > 15) {
        clearInterval(timeId);
    }
},1000)

console.log('Third');
console.log('Fourth');