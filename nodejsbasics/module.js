const {users, powers} = require('./people');
const os = require('os')
for(let value of users){
  console.log(value)
}
for(let i = 0 ; i< powers.length-1; i++){
  console.log(powers[i])
}
users.forEach((value) => {
  console.log(value)
});
console.log(os.platform(), os.homedir())