// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

let submit = document.getElementById("submit-button");

submit.onsubmit = message(); 

function message() {
    let thankYou = document.createElement("p");
    let msg = document.createTextNode("Thank you for your message");
    thankYou.appendChild(msg);
    let contactForm = document.getElementById('contact-us');
    contactForm.replaceChild(thankYou);
}


// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.
