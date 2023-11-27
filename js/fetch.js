

import{keys} from "./keys.js";

const getUser = async (username) =>{
    const url = `https://api.github.com/users/${username}`;
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${keys.github}`,
        },
    };
    try{
    const response = await fetch (url, options);
    const user = await response.json();
    console.log(user);
    } catch(error){
        console.log(error);
    }
};

const getUserEvents = async (username = "clydenberg") => {
    const url = `https://api.github.com/users/${username}/events`;
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${keys.github}`,
        }
    }
    try {
        const response = await fetch(url, options);
        let events = await response.json();
        return events;
    } catch(error){
        return console.log(error);
    }
}

(async()=>{
    const userdata = await getUser(`clydenberg`);
    console.log(userdata);

    const userEvents = await getUserEvents();
    const pushEvents = userEvents.filter(e=> e.type === "PushEvent");
    const lastPushDate = pushEvents[0];
    const createLastPushDate = new Date(lastPushDate.created_at)
    console.log("last push event date =>", createLastPushDate);
})();

