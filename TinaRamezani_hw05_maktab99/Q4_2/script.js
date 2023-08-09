let btn = document.getElementById("showtoast");

function showNotification() {
  let notification = document.querySelector(".notif");
  let inputMessage = document.getElementById("message");

  let position1 = document.getElementById("position1").value;
  let position2 = document.getElementById("position2").value;

  let topBottom = document.getElementById("top-buttom").value;
  let leftRight = document.getElementById("left-right").value;

  notification.style.display = "block";
  message = inputMessage.value;
  notification.innerText = message;

  notification.style.backgroundColor = "rgb(0,224,14)";
  if (position1 === "top") {
    notification.style.top = topBottom + "px";
    notification.style.bottom = null;
  } else {
    notification.style.bottom = topBottom + "px";
    notification.style.top = null;
  }

  if (position2 === "left") {
    notification.style.left = leftRight + "px";
    notification.style.right = null;
  } else {
    notification.style.right = leftRight + "px";
    notification.style.left = null;
  }
}

btn.addEventListener("click", showNotification);
