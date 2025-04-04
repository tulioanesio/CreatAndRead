let names = [];

document.addEventListener("keydown", function (pressed) {
  if (pressed.key == "Enter") {
    create();
  } else if (pressed.key == "1") {
    read();
  } else if (pressed.key == "2") {
    update();
  } else if (pressed.key == "3") {
    delet();
  } else {
  }
});

function create() {
  let add = document.getElementById("add").value;
  let message = document.getElementById("message");

  if (add == "") {
    message.textContent = "Enter a valid name!";
  } else if (names > 10) {
    message.textContent =
      "You have reached the maximum number of names you can add.";
  } else {
    names.push(add);
    message.textContent =
      "Name added successfully! You have " +
      names.length +
      " name(s) registered!";
  }
}

function read() {
  let message = document.getElementById("message");

  if (names == "") {
    message.textContent = "You need add a name to list it.";
  } else {
    message.innerHTML = "The added names are: <br>";

    for (var i = 0; i < names.length; i++) {
      message.innerHTML += names[i] + "<br>";
    }
  }
}

function update() {
  let message = document.getElementById("message");
  let oldName = document.getElementById("add").value;
  let newName = prompt("Enter the new name:");

  if (newName == "" || !oldName) {
    message.textContent = "Please enter a valid name to update.";
    return;
  }

  let index = names.indexOf(oldName);

  if (index === -1) {
    message.textContent = "Name not found in the list.";
  } else {
    names[index] = newName;
    message.textContent = `Name updated successfully! The name is now: ${newName}`;
  }
}

function delet() {
  let message = document.getElementById("message");
  let deleted = document.getElementById("add").value;
  let deletedIndex = names.indexOf(deleted);

  if (deletedIndex == -1) {
    message.textContent = "Select a valid name to be deleted!";
  } else {
    names.splice(deletedIndex, 1);

    message.textContent = "Name deleted sucessfully!";
  }
}
