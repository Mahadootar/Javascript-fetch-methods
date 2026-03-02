// der anfang von fetch und wie man daten in die firebase datenbank schreibt und auch wieder ausliest
async function loadData(path=""){
   let response = await fetch(BASE_URL + path + ".json")
   return responseToJson = await response.json();
   console.log(responseToJson);
}

// meine übungen 
function onLoadFunc(){
    console.log('test');
    postDataFunc("/name/users/user2", {ismael: "age 25"});
    

}

const BASE_URL = "https://remotestoragetest-14149-default-rtdb.europe-west1.firebasedatabase.app/";

async function postDataFunc(path="", data={}){
    let response = await fetch(BASE_URL + path + ".json",{
        method : "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    return responseToJson = await response.json();
    

}

// wie man was in den firebase schreibt Post macht 
async function postDataFunc(path="", data={}){
    let response = await fetch(BASE_URL + path + ".json",{
        method : "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    return responseToJson = await response.json();
    

}


// wie man was in den firebase löscht Delete macht
async function deleteFunc(path=""){
    let response = await fetch(BASE_URL + path + ".json",{
        method: "DELETE",
    });
    if (!response.ok) {
        throw new Error("Löschen fehlgeschlagen: " + response.status);
    }
}

// wiem man in der fire base sachen über schreibt 

async function putDataFunc(path="", data){
    let response = await fetch(BASE_URL + path + ".json",{
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });

}


async function onLoadFunc(){
    let userResponse = await getAllUsers('namen');

    await adEditSingelUsers();
}

async function putData(path="", data={}){
    
}

async function adEditSingelUsers(id=11, user={name: 'mahad'}){
    putData(`name/${id}`, user, data={})
}

async function getAllUsers(){
    let response = await fetch(BASE_URL + path + ".json",{

    })
}


async function postDataFunc(path="", data={}){
    let response = await fetch(BASE_URL + path + ".json",{
        method : "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
     console.log("FETCH STATUS:", response.status);
    

}


async function addName(id, name) {
    const response = await fetch(BASE_URL + "namen.json", {
        method: "PATCH",          // 👈 WICHTIG
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            [id]: name
        })
    });

    console.log("STATUS:", response.status);
}