const Login_btn = document.querySelector(".login form");
Login_btn.addEventListener("submit",LoginFunction);

async function LoginFunction(event){
    try {
        event.preventDefault();
        let all_login_input = document.querySelectorAll(".login input");
        let obj = {};
        for(let i=0;i<all_login_input.length-1;i++){
            obj[all_login_input[i].id] = all_login_input[i].value;
        }
        let login_request = await fetch("https://fine-puce-basket-clam-cap.cyclic.app/users/login",{
            method : "POST",
            body : JSON.stringify(obj),
            headers : {
                "Content-Type" : "application/json"
            },
        })
        window.location.href = "index.html";
        // if(login_request.ok){
        //     let token = await login_request.json();
        //     sessionStorage.setItem("access_token", token.accessToken);
        //     alert("User has been successfully Logged In.");
        //     window.location.href = "index.html";
        // }else{
        //     alert("User not found.");
        // }
    } catch (error) {
		console.log(error);
        alert("wrong username or password. Please try again later.");
    }
}
