const consoleName = "auanye@dev ~ % ";

$(document).ready(function () {
  $("#cmdinput").focus();
});

$("#cmdinput").bind("enterKey", function (e) {
  var txt = this.value;
  var appendDefaultTxt = $("#content").append(
    "<div>" + consoleName + txt + "</div>"
  );

  if (txt == "me") {
    $("#content").append(
      "<div>* Objective : looking for a position as Web Developer.</div>" +
        "<div>* Personal Details :</div>" +
        "<div>&nbsp;&nbsp;&nbsp;Name : Chumpol Yuenyong</div>" +
        "<div>&nbsp;&nbsp;&nbsp;Age : 29 years</div>" +
        "<div>&nbsp;&nbsp;&nbsp;Date of Birth : 26 January 1993</div>" +
        "<div>&nbsp;&nbsp;&nbsp;Nationality : Thai</div>" +
        "<div>&nbsp;&nbsp;&nbsp;Religion : Buddhism</div>" +
        "<div>&nbsp;&nbsp;&nbsp;Personality : A productive team player,Energetic and responsible,Good relationship,Eager to learn new techologies.</div>" +
        "<div>&nbsp;&nbsp;&nbsp;Language: Thai (Native),English(Fair)</div>"
    );
  } else if (txt == "edu") {
    $("#content").append(
      "<div>* Education : Graduated with Bachelor degree in Business Computer from North Bangkok University.</div>"
    );
  } else if (txt == "skills") {
    $("#content").append(
      "<div>* Programing Language : C#, ES6, HTML, CSS, SQL, Javascript, JWT.</div>" +
        "<div>* Framework & Libraries : Bootstrap, jQuery, React Js (Basic).</div>" +
        "<div>* Tools : Git Version Control, MSSQL, SourceTree, NodeJs, MS Visual Studio, VS Code, Postman, Figma.</div>"
    );
  } else if (txt == "exp") {
    $("#content").append(
      "<div>* IT Support, Eastern Sugar; Sakaeo  –  (2017 - 2018).</div>" +
        "<div>* Programer, Eastern Sugar; Sakaeo  –  (2018 - Present).</div>"
    );
  } else if (txt == "clear") {
    $("#content").empty();
  } else {
    $("#content").append("<div>zsh: command not found: " + txt + "</div>");
  }
  $("#cmdinput").val("");
  $("#cmdinput").focus();
});

$("#cmdinput").keyup(function (e) {
  if (e.keyCode == 13) {
    $(this).trigger("enterKey");
  }
});
