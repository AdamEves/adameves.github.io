// script.js
function showDesign(imagePath) {
  document.getElementById('popup-image').src = imagePath;
  document.getElementById('popup').classList.remove('hidden');
}

function closePopup() {
  document.getElementById('popup').classList.add('hidden');
}
