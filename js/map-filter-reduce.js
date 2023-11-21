
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];




const atleast3Languages = users.filter((user)=>{
   if(!user.languages || user.languages.length < 3){
       return false
   }
   return user;
});
console.log(atleast3Languages);





const userEmails = users.map((user)=>{
    return user.email;
});
console.log(userEmails);





const totalYearsExperience = users.reduce((acc, user, index)=>{
    if(index === users.length - 1){
        return (acc = user.yearsOfExperience) / users.length;
    }
    return acc + user.yearsOfExperience;
},0);
console.log(totalYearsExperience);

const averageYearsExperience = totalYearsExperience / users.length;
console.log(averageYearsExperience);






const longestEmail = users.reduce((acc, user)=> {
    if (user.email.length > acc.length) {
        return user.email;
    } else {
        return acc;
    }
}, users[0].email);
console.log(`this is the longest email`,longestEmail);





const listOfUsers = users.reduce((acc, user)=>{
    acc += `${user.name}, `;
    return acc;
}, ``);
console.log(`this is a list of users =>`, listOfUsers);





const specialLanguages = users.reduce((acc, user)=>{
    const userLanguages = user.languages;
    for (let language of userLanguages){
        if(acc.includes(language)){
            continue;
        } else {
            acc.push(language);
        }
    }
    return acc;
}, []);
console.log(`this is all the user languages =>`,specialLanguages.join(`,`));

(()=>{

})();