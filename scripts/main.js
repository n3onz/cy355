let changeButton = document.getElementById('changePictureBtn');
let mainPicture = document.getElementById('mainPicture');
let mainHeading = document.getElementsByTagName('h1');
changeButton.onclick = function(){
  let curSrc = mainPicture.getAttribute('src');
  if (curSrc === 'images/firefox-icon.png') {
    mainPicture.setAttribute('src', 'images/awp.png');
    mainHeading[0].innerHTML = "Go Army!";
  } else {
    mainPicture.setAttribute('src', 'images/firefox-icon.png');
	mainHeading[0].innerHTML = "Mozilla is cool";
  }
}

let hideButton = document.getElementById('hidePictureBtn');
hideButton.onclick = function() {
	if (mainPicture.style.display === "none") {
		mainPicture.style.display = "block";
	} else {
		mainPicture.style.display = "none";
	}
}