const code = document.getElementById("result").contentWindow.document;

function coding() {
    const html = document.getElementById("html");
  
    document.body.onkeyup = function() {
      code.open();
      code.writeln(
        html.value
      );
      code.close();
    };
}
coding();

function css_editor() {
    const css = document.getElementById("css");
    
    css.addEventListener("click", () => {
        code.body.classList.add('style');
    })
}
css_editor();