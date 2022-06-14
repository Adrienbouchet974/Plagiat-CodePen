function code() {
    const html = document.getElementById("html");
    const code = document.getElementById("result").contentWindow.document;
  
    document.body.onkeyup = function() {
      code.open();
      code.writeln(
        html.value
      );
      code.close();
    };
}
code();