const joke = document.querySelector("#joke");
const jokeText = document.querySelector(".joke-text");
const jokecontainer = document.querySelector(".joke-container");
const newJoke = document.querySelector("#new-joke");
const twitter = document.querySelector("#twitter");
const loader = document.querySelector(".loader");
//loader
function loading(loaded) {
    loader.style.display = "block";
    jokecontainer.style.display = "none";
    if (loaded) {
        getJoke()
    }
}
//get joke from api
async function getJoke() {
    const apiUrl = "https://v2.jokeapi.dev/joke/Programming?type=single"
    try {
        const data = await (await fetch(apiUrl)).json();
        if (data.joke.length > 12) {
            jokeText.classList.add("long-joke");
        } else {
            jokeText.classList.remove("long-joke");
        }
        loader.style.display = "none";
        jokecontainer.style.display = "block";
        joke.innerHTML = data.joke;
    } catch (error) {
        console.log("no jokes", error);
    }
}
function twitte() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${joke.innerHTML}`;
    window.open(twitterUrl, '_blank');
}
//onloading
loading(false);
//loaded
document.addEventListener("DOMContentLoaded", () => {
    getJoke();
    newJoke.addEventListener("click", () => loading(true));
    twitter.addEventListener("click", twitte);
})