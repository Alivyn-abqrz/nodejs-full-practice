const greet = 'Hello';
 
setTimeout(()=>{
  console.log(`${greet} kupal`)
  console.log(__filename)
  clearInterval(interval);
}, 3000 )

const interval = setInterval(() => {
  console.log(`${greet} alvin`);
  console.log(__dirname)
},1000)