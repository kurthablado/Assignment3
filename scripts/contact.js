// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

document.getElementById("submit-button").addEventListener("submit", message()); {
    function message () {
       var thankYou = document.createElement("p");
       thankYou.write = "Thank you for your message";
       thankYou.style.fontSize = "24px";
       document.bodyinnerHTML = "";
       document.body.appendChild(thankYou);
    }
};

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.
