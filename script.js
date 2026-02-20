function linkedinAlert(){
    alert("Please add your LinkedIn profile link in script.js file.");
}

document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let formMessage = document.getElementById("formMessage");

    if(name === "" || email === "" || message === ""){
        formMessage.style.color = "red";
        formMessage.innerText = "Please fill all fields.";
        return;
    }

    formMessage.style.color = "#0d6efd";
    formMessage.innerText = "Message sent successfully! (Demo Mode)";

    document.getElementById("contactForm").reset();
});