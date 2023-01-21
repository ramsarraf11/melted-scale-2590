const Register_btn = document.querySelector(".register form");
Register_btn.addEventListener("submit", RegisterFunction);

async function RegisterFunction(event) {
  try {
    event.preventDefault();
    let all_input_tags = document.querySelectorAll(".register input");
    console.log(all_input_tags);
    let userObj = {};
    for (let i = 0; i < all_input_tags.length - 1; i++) {
      userObj[all_input_tags[i].id] = all_input_tags[i].value;
    }
    let register_request = await fetch("http://localhost:4500/users/register", {
      method: "POST",
      body: JSON.stringify(userObj),
      headers: {
        "Content-Type": "application/json",
      }
    })
    if (register_request.ok) {
      alert("Hurry, User has been created !!");
      window.location.href = "login.html"
    } else {
      alert("Bad request has been made.");
    }
  } catch (error) {
    alert("Something went wrong. Please try again later.");
    console.log(error);
  }
}
