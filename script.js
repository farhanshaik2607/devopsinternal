
function submitform() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    if (name && email && phone) {
        document.getElementById("confirmation").innerText =
            "Thank You " + name + "! You have registered successfully.";

        console.log("Registration Details:");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Phone:", phone);
    } else {
        alert("Please fill all the fields.");
    }
}