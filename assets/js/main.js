const code = document.getElementById("result").contentWindow.document;
const html = document.getElementById("html");
const css = document.getElementById("css");
const js = document.getElementById("js");
const regex_balise = new RegExp('<[^>]+>');
const new_script = document.createElement("script");
new_script.setAttribute("type", "text/javascript");
document.body.appendChild(new_script);

js.addEventListener("change", () => {
    new_script.innerHTML = js.value;
})

function coding() {
    const new_style = document.createElement("style");
    
    html.onkeyup = function() {
        code.write(html.value);
        const style = code.body;
        style.appendChild(new_style);
        code.close();
        if(html.textLength < 200){
            const test = document.querySelector("#test");
            test.classList.add("test");
            test.style.setProperty('--length', (html.textLength/2) + '%');
            test.style.setProperty("border", "5px solid green");
            if(html.textLength > 99){
                test.style.setProperty("border", "5px solid orange");
            }
            if(html.textLength > 159){
                test.style.setProperty("border", "5px solid red");
            }

        }
        if(html.textLength >= 200){
            alert("votre html ne peut pas dépasser 200 caractères");
            return;
        }
    };
    
    css.onkeyup = function() {
        new_style.textContent = `${css.value}`;
        if(html.textLength > 200){
            alert("votre html ne peut pas dépasser 200 caractères");
            return;
        }
    }
}
coding();

function logo(){
    const logo = document.querySelector("#logo");
    html.addEventListener("input", () => {
        logo.classList.remove("display");
        if(html.value == ''){
            logo.classList.add("display");
        }
    })
    css.addEventListener("input", () => {
        logo.classList.remove("display");
        if(css.value == ''){
            logo.classList.add("display");
        }
    })
}
logo();


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

function add_balise_p(){
    const balise_p = document.querySelector("#balise_p");
    balise_p.addEventListener("click", () => {
        html.value += "<p></p>";
    })
}
add_balise_p();

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
