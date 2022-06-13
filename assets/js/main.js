const html = document.querySelector("#html");
const html_all = document.querySelectorAll("#html");
const coding_session = document.querySelector("#coding_session")
console.log(html_all);
console.log(html);

function entries() {
    html.addEventListener("keyup", () => {
        coding_session.textContent = `${html.value}`;
    })
}

entries();