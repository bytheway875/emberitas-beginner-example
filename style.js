var paletteButtons = document.getElementsByClassName('palette-btn');

for(var i = 0; i < paletteButtons.length; i++) {
  paletteButtons[i].addEventListener('click', function() {
     // use paletteButtons[i] instead of this to avoid the "what does this mean" conversation in the beginner course.
     return document.body.style.backgroundColor = paletteButtons[i].style.backgroundColor;
  });
}
