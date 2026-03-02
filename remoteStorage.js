let names = []
const BASE_URL = "https://remotestoragetest-14149-default-rtdb.europe-west1.firebasedatabase.app/";


async function onLoadFunc(){
    let userResponse = await getAllUsers('namen');
    console.log(userResponse);

    let userKeyArray = Object.keys(userResponse)

    for (let index = 0; index < userKeyArray.length; index++) {
        names.push(
        {
           id : userKeyArray[index],
           user : userResponse[userKeyArray[index]],

        }
    );
        
        
        
    }
    

    await adEditSingelUsers(names[1].id, {name: 'schemdy'});
}

async function putData(path="", data={}){
     let response = await fetch(BASE_URL + path + ".json",{
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    
}

async function adEditSingelUsers(id=1, user={name: 'maxa'}){
    putData(`namen/${id}`, user,)
}

async function getAllUsers(path=""){
    let response = await fetch(BASE_URL + path + ".json");
    return responsToJson = await response.json();
}
