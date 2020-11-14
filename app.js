function generateSize() {

    var randomNumber = Math.floor(Math.random() * 10);

    var compliments = ["Nice peen bro.", "Hey nice.", "Wow that's a pretty nice peen", "Cool.", "8/10 peen", "Big peen energy 😎", "I wish my peen could be that big...", ];
    var insults = ["Honestly Embarrasing", "uh... 😦", "Barely anything there rip...", "ahem I'll just turn around and act like I didn't just see that..", "1/10 peen", "*cough*", "awkward that's tiny..", ];

    const peenText = document.getElementById("peen");
    const rateText = document.getElementById("rate");
    const button = document.getElementById("Button");

    button.style.visibility = "hidden";

    peenText.innerHTML = "8" + "=".repeat(randomNumber) + "D";

    if (randomNumber <= 4) {
        rateText.innerHTML = insults[Math.floor(Math.random() * compliments.length)];
    } else {
        rateText.innerHTML = compliments[Math.floor(Math.random() * compliments.length)];
    }

}