function code() {
    const html = document.getElementById("html");
    const code = document.getElementById("result").contentWindow.document;
  
    document.body.onkeyup = function() {
      code.innerHtml = `${html.value}`;
}}
code();