console.log('Before');
getUser(1, function(user){
    getRepository(user.gitHubUsername, (repos)=>{
        console.log('repo', repos)
    })
})
// Get the repsitory 
// getRepositories(user.gitHubUsername, (repos)=>{
//     console.log('repo', repos)
// })
console.log('After');

// Callbacks
// Promises
// Async/await 

function getUser(id, callback) {
    setTimeout(()=>{
        console.log('Reading a user from a database...');
        callback({id: id, gitHubUsername: 'Jen'})
        return ;
    },2000);
}
function getRepository(username,cb){
    setTimeout(()=>{
        console.log('Calling github API..');
        cb(['repo1', 'repo2', 'repo3'])
    },2000);
}



