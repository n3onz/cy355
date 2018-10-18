let changeButton = document.getElementById('changePictureBtn');
let mainPicture = document.getElementById('mainPicture');
<<<<<<< HEAD
let mainHeading = document.getElementsByTagName('h1');
=======
>>>>>>> 943fc5d97e1328e79bd3fc009fae13f27a3d82ed
changeButton.onclick = function(){
  let curSrc = mainPicture.getAttribute('src');
  if (curSrc === 'images/firefox-icon.png') {
    mainPicture.setAttribute('src', 'images/awp.png');
    mainHeading[0].innerHTML = "Go Army!";
  } else {
    mainPicture.setAttribute('src', 'images/firefox-icon.png');
<<<<<<< HEAD
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
=======
  }
}

let hideButton.onclick = function() {
  mainPicture.style.display = "none";
}
>>>>>>> 943fc5d97e1328e79bd3fc009fae13f27a3d82ed
