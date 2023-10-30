// Открытие попопа
document.getElementById("buyButton").addEventListener("click", function() {
  document.getElementById("popup").style.display = "block";
});

// Закрытие попапа
document.getElementById("closeButton").addEventListener("click", function() {
  document.getElementById("popup").style.display = "none";
});

// Эффект перемещения фона
const element = document.querySelector('.page');

element.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const offsetX = mouseX / element.offsetWidth * 100;
  const offsetY = mouseY / element.offsetHeight * 100;

  element.style.backgroundPosition = `${offsetX}% ${offsetY}%`;
});
