const code = document.getElementById("result").contentWindow.document;
const html = document.getElementById("html");
const css = document.getElementById("css");
const js = document.getElementById("js");

function coding() {
    const new_style = document.createElement("style");
    const new_script = document.createElement("script");
    new_script.setAttribute("type", "text/javascript");
  
    html.onkeyup = function() {
        code.write(html.value);
        code.close();
    };
    
    css.onkeyup = function() {
        const style = code.body;
        style.appendChild(new_style);
        new_style.textContent = `${css.value}`;
    }
    
    js.onkeyup = function() {
        const style = code.body;
        style.appendChild(new_script);
        new_script.innerText = `${js.value}`;
    }
}
coding();


function add_bold(){
    const bold = document.querySelector("#bold");
    bold.addEventListener("click", () => {
        html.value += "<b></b>";
    })
}
add_bold();

function add_italic(){
    const italic = document.querySelector("#italic");
    italic.addEventListener("click", () => {
        html.value += "<i></i>";
    })
}
add_italic();

function add_color(){
    const color = document.querySelector("#color");
    color.addEventListener("click", () => {
        css.value += "{color: ;}";
    })
}
add_color();

function add_width(){
    const width = document.querySelector("#width");
    width.addEventListener("click", () => {
        css.value += "{width: ;}";
    })
}
add_width();

function add_height(){
    const height = document.querySelector("#height");
    height.addEventListener("click", () => {
        css.value += "{height: ;}";
    })
}
add_height();

function add_function(){
    const fonction = document.querySelector("#function");
    fonction.addEventListener("click", () => {
        js.value += "function() {};";
    })
}
add_function();

function add_addEventListener(){
    const event = document.querySelector("#event");
    event.addEventListener("click", () => {
        js.value += 'addEventListener("", () => {})';
    })
}
add_addEventListener();
