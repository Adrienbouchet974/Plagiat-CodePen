const code = document.getElementById("result").contentWindow.document;

function coding() {
    const html = document.getElementById("html");
    const css = document.getElementById("css");
    const js = document.getElementById("js");
    const new_style = document.createElement("style");
    const new_script = document.createElement("script");
    new_script.setAttribute("type", "text/javascript");
  
    html.onkeyup = function() {
        code.write(html.value);
        code.close();
    };
    
    css.onkeyup = function() {
        const style = code.body;
        console.log(style.querySelector("style"));
        style.appendChild(new_style);
        new_style.textContent = `${css.value}`;
    }
    
    js.onkeyup = function() {
        const style = code.body;
        console.log(style.querySelector("script"));
        style.appendChild(new_script);
        new_script.innerText = `${js.value}`;
    }
}
coding();
