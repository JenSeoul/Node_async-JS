// console.log('Before');
// getUser(1, getRepository)
// getCommits(repo, displayCommits);

// function getUser(user){
//     console.log(user)
// }
// function getCommits(repos){
//     getCommits(repos, displayCommits)
// }

// function getRepository(username,cb){
//     getRepositories(user.gitHubUsername, displayCommits)
// }

// function displayCommits(commits){
//     console.log(commits);
// }



// Get the repsitory 
// getRepositories(user.gitHubUsername, (repos)=>{
//     console.log('repo', repos)
// })
// console.log('After');

// Callbacks
// Promises
// Async/await 

function getUser(id) {
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log('Reading user from userdatabase')
            res({id: id, name:'Jen'})
            rej(new Error('something went wrong'))
        },2000);
    })
}
function getRepositories(username) {
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log('Calling Github')
            res(['repo1', 'repo2'])
            rej(new Error('something went wrong'))
        },2000);
    })
}
function getCommits(repos) {
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log('Calling Github')
            res(['commit'])
            rej(new Error('something went wrong'))
        },2000);
    })
}
getUser(1)
.then(user => getRepositories(user.gitHubname))
.then(repos => getCommits(repos[0]))
.then(commits=> console.log('Commits:',commits))

