// der anfang von fetch und wie man daten in die firebase datenbank schreibt und auch wieder ausliest
async function loadData(path=""){
   let response = await fetch(BASE_URL + path + ".json")
   return responseToJson = await response.json();
   console.log(responseToJson);
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