function sayHello() {
  let name = document.getElementById("nameInput").value;
  document.getElementById("greeting").innerText = "Hello " + name + "! 👋";
}
