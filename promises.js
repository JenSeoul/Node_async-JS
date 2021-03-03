const p = new Promise((resolve, reject)=> {
    // Kick off some async work 
    // Both resolve and reject are functions 
    // What has been delivered to resolve will be injected to the variable, p 
    setTimeout(()=>{
        // resolve(1); pending=> resolved or fulfilled 
        reject(new Error('Somthing went wrong'))
    },2000)
});
// now p, the promise object has a value 1, use then using method .then to consume promise
p
.then(result => console.log('Result',result))
.catch(err=>console.log('Error:', err.message))