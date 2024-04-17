const form = document.querySelector('form')
const UserName = document.getElementById("name")
const userEmail = document.getElementById("email")
const userPhone = document.getElementById("phone")
const userMessage = document.getElementById("umessage")

function sendEmail() {
    const bodyMessage = `Full Name : ${UserName.value} <br>Email : ${userEmail.value} <br>Phone : ${userPhone.value} <br>Message : ${userMessage.value} <br>`
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "mohamedsaad5412@gmail.com",
        Password: "3D0AAAB8DF235B3A960127B9D937083BAE7C",
        To: 'eh.engineeringhouse@gmail.com',
        From: "mohamedsaad5412@gmail.com",
        Subject: "I contact you to ...",
        Body: bodyMessage
    }).then(
        message => 
        {
            if(message){
                Swal.fire({
                    title: "Good job!",
                    text: "Your message is sent successfully!",
                    icon: "success"
                  });
            }
        }
    );

}

form.addEventListener("submit" , (e)=> {
e.preventDefault()
sendEmail()
})