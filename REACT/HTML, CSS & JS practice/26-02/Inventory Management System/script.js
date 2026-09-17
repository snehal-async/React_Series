const bigImage = document.getElementById("bigImage");
const thumbs = document.querySelectorAll(".thumb");

thumbs.forEach(thumb => {
  thumb.addEventListener("click", function () {

    // remove active
    thumbs.forEach(t => t.classList.remove("active"));
    this.classList.add("active");

    // rotate animation
    bigImage.style.transform = "rotate(360deg) scale(0.5)";
    bigImage.style.opacity = "0";

    setTimeout(() => {
      bigImage.src = this.src;
      bigImage.style.transform = "rotate(0deg) scale(1)";
      bigImage.style.opacity = "1";
    }, 400);

  });
});