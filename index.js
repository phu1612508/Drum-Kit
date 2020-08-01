document.querySelectorAll("button").forEach(function(currentValue) {
  currentValue.addEventListener("click", function() {
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
  });
});

// document.querySelector("button").addEventListener("click",handleClick);
