console.log('Before');
getUser(1, getRepository)
getCommits(repo, displayCommits);

function getUser(user){
    console.log(user)
}
function getCommits(repos){
    getCommits(repos, displayCommits)
}

function getRepository(username,cb){
    getRepositories(user.gitHubUsername, displayCommits)
}

function displayCommits(commits){
    console.log(commits);
}



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



