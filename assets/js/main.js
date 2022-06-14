const code = document.getElementById("result").contentWindow.document;

function coding() {
    const html = document.getElementById("html");
    const css = document.getElementById("css");
  
    html.onkeyup = function() {
        code.write(html.value);
        code.close();
    };
    const new_style = document.createElement("style");

    css.onkeyup = function() {
        const style = code.body;
        console.log(style.querySelector("style"));
        style.appendChild(new_style);
        new_style.textContent = `${css.value}`;
    }
}
coding();
