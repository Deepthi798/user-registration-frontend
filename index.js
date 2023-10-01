let loginForm=document.getElementById("loginForm");

const loginUrl="http://localhost:3000/auth/login";
loginForm.addEventListener( "submit", (e) => {
    e.preventDefault();
    console.log("hello");
    let username=document.getElementById("username");
    let password=document.getElementById("password");
    if(username.value && password.value){
        let userLogindetails = {
            username:username.value,
            password:password.value
        };
        fetch( loginUrl,{
            method:"POST",
            mode:"cors",
            headers: {
               "Content-Type" : "application/json",
               "Access-Control-Allow-Origin" : "*"
            },
            body: JSON.stringify(userLogindetails),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            localStorage.setItem("token", data.token)
            window.location.replace('./profile.html')
        })
        .catch((error) => console.error(error));
    }else{
        console.log("Please fill all the fields");   
    }
});
