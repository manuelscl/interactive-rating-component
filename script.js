const inputs = document.querySelectorAll('input[type="radio"]');
const btnSubmit = document.querySelector("#btnSubmit");
const form = document.querySelector(".rating-form");
const ratingCardState = document.querySelector(".rating-card");
const thankCardState = document.querySelector(".thanks-card");
const ratingTextContainer = document.querySelector(".rating-container");
const ratingText = document.createElement("p");
ratingTextContainer.appendChild(ratingText);
ratingText.classList.add("rating-text");

let inputValue;

inputs.forEach(input => {
    input.addEventListener("click", () => {
        console.log("input clicked");
        btnSubmit.disabled = false;
        inputValue = input.value
        ratingText.textContent = `You selected ${inputValue} out of 5`;
    });
});

form.addEventListener("submit", submit);

function submit(e) {
    console.log("submit")
    e.preventDefault();
    ratingCardState.style.visibility = "hidden";
    ratingCardState.style.opacity = "0";
    thankCardState.classList.remove("hidden");
    setTimeout(() => {
        thankCardState.classList.add("visible");
        ratingCardState.style.display = "none";
    }, 100);
}