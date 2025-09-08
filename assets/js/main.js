function getGithubUrl(githubUser) {
  return "https://github.com/" + githubUser;
}

function handleGenerateClick() {
  const githubUser = inputElement.value.trim();
  const usernameRegex = /^(?!-)(?!.*--)[a-zA-Z\d-]{1,39}(?<!-)$/;

  if (!githubUser) {
    appElement.innerText = "Please enter a GitHub username.";
    appElement.style.color = "red";
    return;
  }

  if (!usernameRegex.test(githubUser)) {
    appElement.innerText = "Invalid GitHub username format.";
    appElement.style.color = "red";
    return;
  }

  const githubUrl = getGithubUrl(githubUser);
  appElement.innerHTML = `<a href="${githubUrl}" target="_blank">${githubUrl}</a>`;
  appElement.style.color = "green";
}

const inputElement = document.getElementById("githubInput");
const buttonElement = document.getElementById("generateBtn");
const appElement = document.getElementById("app");

buttonElement.addEventListener("click", handleGenerateClick);
