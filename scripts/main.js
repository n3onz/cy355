let changeButton = document.getElementById('changePictureBtn');
let mainPicture = document.getElementById('mainPicture');
changeButton.onclick = function(){
  let curSrc = mainPicture.getAttribute('src');
  if (curSrc === 'images/firefox-icon.png') {
    mainPicture.setAttribute('src', 'images/awp.png');
    mainHeading[0].innerHTML = "Go Army!";
  } else {
    mainPicture.setAttribute('src', 'images/firefox-icon.png');
  }
}

let hideButton.onclick = function() {
  mainPicture.style.display = "none";
}
