var names = [];

function create() {
  var add = document.getElementById("add").value;
  var added = document.getElementById("added");

  if (add == "") {
    added.textContent = "Enter a valid name!";
  } else if (names > 10) {
    added.textContent =
      "You have reached the maximum number of names you can add.";
  } else {
    names.push(add);
    added.textContent =
      "Name added successfully! You have " +
      names.length +
      " name(s) registered!";
  }
}

function read() {
  var read = document.getElementById("read");

  if (names == "") {
    read.textContent = "You need add a name to list it.";
  } else {
    read.innerHTML = "The added names are: <br>";

    for (var i = 0; i < names.length; i++) {
      read.innerHTML += names[i] + "<br>";
    }
  }
}
