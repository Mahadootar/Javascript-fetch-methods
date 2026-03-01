function onLoadFunc(){
    console.log('test');
    putDataFunc("/name/-OmcI5ik7lCD2LtB_amA", {liin: "Smoothie"});
    

}

const BASE_URL = "https://remotestoragetest-14149-default-rtdb.europe-west1.firebasedatabase.app/";



async function putDataFunc(path="", data){
    let response = await fetch(BASE_URL + path + ".json",{
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });

}