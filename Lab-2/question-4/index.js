
let namePattern = /^[a-zA-Z\s]+$/;
let phonePattern = /^[0-9]{8}$/;
let mobilePattern = /^(010|011|012)[0-9]{8}$/;
let emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]{2,}$/;


let userName;
let phone;
let mobile;
let email;
let color;


do {
    userName = prompt("Enter your Name:");
    if (!userName || !namePattern.test(userName)) {
        alert("Please Enter Valid Name character only ");
    }
} while (!userName || !namePattern.test(userName));


do {
    phone = prompt("Enter Phone Number :");
    if (!phone || !phonePattern.test(phone)) {
        alert("Please Enter Valid phone 8 digits only ");
    }

} while (!phone || !phonePattern.test(phone));

do {
    mobile = prompt("Enter Mobile Number :");
    if (!mobile || !mobilePattern.test(mobile)) {
        alert("Please Enter Valid Mobile Number 11 digits, starting with (010, 011, or 012) Only ");
    }


} while (!mobile || !mobilePattern.test(mobile));


do {
    email = prompt("Enter Email Address:");

    if (!email || !emailPattern.test(email)) {
        alert("Please Enter Valid email  abc@123.com");
    }

} while (!email || !emailPattern.test(email));





let output = "<div > <h1>Welcome, dear guest " + userName + "</h1>" +
    "<p><strong>Telephone:</strong>" + phone + "</p>" +
    "<p><strong>Mobile:</strong> " + mobile + "</p>" +
    "<p><strong>Email:</strong> " + email + "</p>" +
    "<hr></div>";

document.write(output);