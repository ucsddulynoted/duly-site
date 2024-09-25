const carousel = document.getElementById('musicCarousel');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const scrollAmount = 550;

nextBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

var coll = document.getElementsByClassName("collapsible");
const buttons = document.querySelectorAll(".collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "grid") {
      content.style.display = "none";
    } else {
      content.style.display = "grid";
    }
  });
}

buttons.forEach(button => {
    button.addEventListener("click", function() {
        this.classList.toggle("clicked");
    });
});
