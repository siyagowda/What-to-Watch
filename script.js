function action() {
  document.getElementById("h4").innerHTML = "";
  document.getElementById('h4').setAttribute("class", "style2");
  document.getElementById("5").innerHTML = "back";
  document.getElementById('5').setAttribute("class", "style1");

  document.getElementById("h1").innerHTML = "ACTION";
  document.getElementById("1a").innerHTML = "baby driver";
  document.getElementById("2a").innerHTML = "die hard";
  document.getElementById("3a").innerHTML = "venom";
  document.getElementById("4a").innerHTML = "kingsman: secret service";

  //credit to https://stackoverflow.com/questions/17972130/how-to-delete-the-last-column-in-an-html-table-using-by-jquery
  var allRows = document.getElementById('genres').rows;
  for (var i=0; i< allRows.length; i++) {
    allRows[i].deleteCell(-1); 
  }
}

function comedy() {
  document.getElementById("h4").innerHTML = "";
  document.getElementById('h4').setAttribute("class", "style2");
  document.getElementById("5").innerHTML = "back";
  document.getElementById('5').setAttribute("class", "style1");

  document.getElementById("h1").innerHTML = "COMEDY";
  document.getElementById("1a").innerHTML = "hot fuzz";
  document.getElementById("2a").innerHTML = "we're the millers";
  document.getElementById("3a").innerHTML = "superbad";
  document.getElementById("4a").innerHTML = "forrest gump";

  var allRows = document.getElementById('genres').rows;
  for (var i=0; i< allRows.length; i++) {
    allRows[i].deleteCell(-1); 
  }
}

function romance() {
  document.getElementById("h4").innerHTML = "";
  document.getElementById('h4').setAttribute("class", "style2");
  document.getElementById("5").innerHTML = "back";
  document.getElementById('5').setAttribute("class", "style1");

  document.getElementById("h1").innerHTML = "ROMANCE";
  document.getElementById("1a").innerHTML = "benjamin";
  document.getElementById("2a").innerHTML = "crazy rich asians";
  document.getElementById("3a").innerHTML = "me before you";
  document.getElementById("4a").innerHTML = "to all the boys i loved before";

  var allRows = document.getElementById('genres').rows;
  for (var i=0; i< allRows.length; i++) {
    allRows[i].deleteCell(-1); 
  }
}

function teen() {
  document.getElementById("h4").innerHTML = "";
  document.getElementById('h4').setAttribute("class", "style2");
  document.getElementById("5").innerHTML = "back";
  document.getElementById('5').setAttribute("class", "style1");

  document.getElementById("h1").innerHTML = "TEEN";
  document.getElementById("1a").innerHTML = "the duff";
  document.getElementById("2a").innerHTML = "10 things i hate about you";
  document.getElementById("3a").innerHTML = "handsome devil";
  document.getElementById("4a").innerHTML = "five feet apart";

  var allRows = document.getElementById('genres').rows;
  for (var i=0; i< allRows.length; i++) {
    allRows[i].deleteCell(-1); 
  }
}

function fantasy() {
  document.getElementById("h4").innerHTML = "";
  document.getElementById('h4').setAttribute("class", "style2");
  document.getElementById("5").innerHTML = "back";
  document.getElementById('5').setAttribute("class", "style1");

  document.getElementById("h1").innerHTML = "FANTASY";
  document.getElementById("1a").innerHTML = "fantastic beasts and where to find them";
  document.getElementById("2a").innerHTML = "the last dragonslayer";
  document.getElementById("3a").innerHTML = "black panther";
  document.getElementById("4a").innerHTML = "avatar";

  var allRows = document.getElementById('genres').rows;
  for (var i=0; i< allRows.length; i++) {
    allRows[i].deleteCell(-1); 
  }
}

function deep() {
  document.getElementById("h4").innerHTML = "";
  document.getElementById('h4').setAttribute("class", "style2");
  document.getElementById("5").innerHTML = "back";
  document.getElementById('5').setAttribute("class", "style1");

  document.getElementById("h1").innerHTML = "DEEP";
  document.getElementById("1a").innerHTML = "the way way back";
  document.getElementById("2a").innerHTML = "the fundamentals of caring";
  document.getElementById("3a").innerHTML = "about a boy";
  document.getElementById("4a").innerHTML = "me and earl and the dying girl";

  var allRows = document.getElementById('genres').rows;
  for (var i=0; i< allRows.length; i++) {
    allRows[i].deleteCell(-1); 
  }
}

function thriller() {
  document.getElementById("h4").innerHTML = "";
  document.getElementById('h4').setAttribute("class", "style2");
  document.getElementById("5").innerHTML = "back";
  document.getElementById('5').setAttribute("class", "style1");

  document.getElementById("h1").innerHTML = "THRILLER";
  document.getElementById("1a").innerHTML = "the imitation game";
  document.getElementById("2a").innerHTML = "the social network";
  document.getElementById("3a").innerHTML = "interstellar";
  document.getElementById("4a").innerHTML = "the martian";

  var allRows = document.getElementById('genres').rows;
  for (var i=0; i< allRows.length; i++) {
    allRows[i].deleteCell(-1); 
  }
}

function animated() {
  document.getElementById("h4").innerHTML = "";
  document.getElementById('h4').setAttribute("class", "style2");
  document.getElementById("5").innerHTML = "back";
  document.getElementById('5').setAttribute("class", "style1");

  document.getElementById("h1").innerHTML = "ANIMATED";
  document.getElementById("1a").innerHTML = "shrek";
  document.getElementById("2a").innerHTML = "mulan";
  document.getElementById("3a").innerHTML = "tangled";
  document.getElementById("4a").innerHTML = "finding nemo";

  var allRows = document.getElementById('genres').rows;
  for (var i=0; i< allRows.length; i++) {
    allRows[i].deleteCell(-1); 
  }
}