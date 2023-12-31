// script.js
function showImage(imagePath) {
    document.getElementById('popup-image').src = imagePath;
    document.getElementById('popup').classList.remove('hidden');
}

function closePopup() {
    document.getElementById('popup').classList.add('hidden');
}


function addImage() {
  const fileInput = document.getElementById('imageFile');
  const file = fileInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function(e) {
      const imgElement = document.createElement('img');
      imgElement.src = e.target.result;
      imgElement.alt = 'Dynamically Added Image';
      imgElement.width = 150; // Thumbnail width
      imgElement.onclick = function() {
        showImage(e.target.result);
      };
      document.getElementById('gallery').appendChild(imgElement);
    };
  }
}
