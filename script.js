var modal = document.getElementById('form-modal');

var btn = document.getElementById("open-modal-button");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

window.addEventListener('resize', function() {
    if (window.innerWidth > 700) {
        modal.style.display = "none";
    }
  });

