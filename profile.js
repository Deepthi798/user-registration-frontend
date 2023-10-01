const profileUrl = "http://localhost:3000/user/profile";
validateUser();

function validateUser(){
    if(!localStorage.getItem("token")){
        window.location.replace("./index.html")
    }
}

let logout = document.getElementById("logout");

logout.addEventListener("submit", (e) => {
    e.preventDefault();
    localStorage.clear();
    window.location.replace('./index.html')
})

fetch( profileUrl, {
    method: "GET",
    mode: "cors",
    headers: {
        "Authorization": "Bearer " + localStorage.getItem("token"),

    }
} ).then((response) => response.json())
.then((data) => {
    console.log(data);
    document.getElementById("message").innerHTML = data.message;
    document.getElementById("email").innerHTML = data.email;
}).catch((err) => console.log(err))