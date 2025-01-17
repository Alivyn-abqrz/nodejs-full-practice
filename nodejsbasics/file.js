const { error } = require('console');
const fs = require('fs');
// reading files
fs.readFile('./readingfiles/docs.txt', (err, data) => {
  if(err){
    console.log(err)
  }
  console.log(data.toString())
})

// directories create folder
if(!fs.existsSync('./newfolder')){
  fs.mkdir('./newfolder', (error) => {
    if (error){
      console.log(error)
    }
    console.log('successfully created a folder')
  })
}else{
fs.rm('./newfolder',{recursive:true, force:true}, (error) =>{
 try{
  if(error){
    console.log(error)
  }
  console.log('deleted folder') 
 }catch(error){
  console.log(error)
 }
 
})
}

// directories remove folder
if (fs.existsSync('./newfolder')){
  fs.rm('./newfolder',{ recursive: true, force: true }, (error)=>{
    if(error){
      console.log(error)
    }
    console.log('folder created')
  })
  
}


// writing files
fs.writeFile('./newfolder/docs.js', `console.log('hello world')`, () => {
  console.log(`it's working`)
})