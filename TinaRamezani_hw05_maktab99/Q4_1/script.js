let btn = document.getElementById("showtoast");
let notification = document.querySelector(".notif");
let inputMessage = document.getElementById("message");
let form = document.querySelector("#form");

function showNotification() {
  const formData = Object.fromEntries(new FormData(form).entries());
  console.log(formData);
  console.log(formData.position);
  notification.style.display = "block";

  notification.innerText = inputMessage.value;
  notification.style.backgroundColor = "rgb(0,224,14)";

  notification.style.top = "";
  notification.style.bottom = "";
  notification.style.right = "";
  notification.style.left = "";

  // if (formData.position === "top-right") {
  //   notification.style.top = 0;
  //   notification.style.right = 0;
  // }
  // if (formData.position === "top-left") {
  //   notification.style.top = 0;
  //   notification.style.left = 0;
  // }
  // if (formData.position === "bottom-right") {
  //   notification.style.bottom = 0;
  //   notification.style.right = 0;
  // }
  // if (formData.position === "bottom-left") {
  //   notification.style.bottom = 0;
  //   notification.style.left = 0;
  // }

  let [topOrBottom, leftOrRight] = formData.position.split("-");

  notification.style[topOrBottom] = 0;
  notification.style[leftOrRight] = 0;
}

btn.addEventListener("click", showNotification);
