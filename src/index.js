/**
 * HINTS:
 * If it's a 'default' export, no need to use curly braces.
 */
import apiService from "./services/api.service";

document.querySelectorAll("button").forEach((button) => {
  button.classList.add("button");
});

document.querySelector("form").addEventListener("submit", async (event) => {
  event.preventDefault();

  const username = event.target.username.value;

  const data = await apiService.getReposByUsername(username);

  console.log(data);
});

document.getElementById("topics").addEventListener("click", (event) => {
  // With EVENT BUBBLING, we can listen to the parent element and get the target element from the event object.
  // lets make sure we only listen to the buttons.
  // this is synonymous with textContent & innerText
  // this code logs the inner text on a button that was clicked
  if (event.target.tagName === "BUTTON") {
    const topic = event.target.innerText;
    const data = await apiService.getReposByTopic(topic);
  }
});
