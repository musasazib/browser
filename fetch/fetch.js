console.log('First person');
console.log('Secund person');
setTimeout(() => console.log('I am no body'), 5000);
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
console.log('Third person');
console.log('Fourth person');
for (let i = 0; i < 50; i++) {
    console.log(i);
}
