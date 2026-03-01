
const BASE_URL = "https://remotestoragetest-14149-default-rtdb.europe-west1.firebasedatabase.app/";


function onLoadFunc(){
    postDataFunc("namen", {"11": "mahad"} );
    

}

async function postDataFunc(path="", data={}){
    let response = await fetch(BASE_URL + path + ".json",{
        method : "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    return responseToJson = await response.json();
    

}
