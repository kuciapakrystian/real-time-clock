function updateClock() {
  const now = new Date();
  const second = now.getSeconds();
  const minute = now.getMinutes();
  const hour = now.getHours();

  document.getElementById(`second`).style.transform = `rotate(${
    90 + second * 6
  }deg)`;
  document.getElementById(`minute`).style.transform = `rotate(${
    90 + minute * 6
  }deg)`;
  document.getElementById(`hour`).style.transform = `rotate(${
    90 + hour * 30
  }deg)`;
}
setInterval(updateClock, 1000);
