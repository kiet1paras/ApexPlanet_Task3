async function fetchJoke() {
    const jokeBox = document.getElementById("jokeBox");
    jokeBox.textContent = "Loading... 😂";

    try {
        const response = await fetch("https://official-joke-api.appspot.com/random_joke");
        const data = await response.json();
        jokeBox.textContent = `${data.setup} 😂 ${data.punchline}`;
    } catch (error) {
        jokeBox.textContent = "Oops! Couldn't fetch a joke right now.";
    }
}
