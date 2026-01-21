console.log("Jewelry website loaded!");

function nextSlide(button) {
    const slider = button.closest(".slider");
    const slides = slider.querySelectorAll(".slide");
    const dots = slider.querySelectorAll(".dot");

    let index = [...slides].findIndex(slide =>
        slide.classList.contains("active")
    );

    slides[index].classList.remove("active");
    dots[index]?.classList.remove("active");

    index = (index + 1) % slides.length;

    slides[index].classList.add("active");
    dots[index]?.classList.add("active");
}

function prevSlide(button) {
    const slider = button.closest(".slider");
    const slides = slider.querySelectorAll(".slide");
    const dots = slider.querySelectorAll(".dot");

    let index = [...slides].findIndex(slide =>
        slide.classList.contains("active")
    );

    slides[index].classList.remove("active");
    dots[index]?.classList.remove("active");

    index = (index - 1 + slides.length) % slides.length;

    slides[index].classList.add("active");
    dots[index]?.classList.add("active");
}

function goToSlide(dot, slideIndex) {
    const slider = dot.closest(".slider");
    const slides = slider.querySelectorAll(".slide");
    const dots = slider.querySelectorAll(".dot");

    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));

    slides[slideIndex].classList.add("active");
    dots[slideIndex].classList.add("active");
}

function buyNow(product, price) {
  const message =
`Hello Rakrish Jewels 💎

I want to order:
Product: ${product}
Price: ₹${price}

Please confirm availability.`;

  window.open(
    "https://wa.me/919167903884?text=" + encodeURIComponent(message),
    "_blank"
  );
}

// HERO AUTO SLIDER
setInterval(() => {
    const heroSlider = document.querySelector(".hero-slider");
    if (!heroSlider) return;

    const slides = heroSlider.querySelectorAll(".slide");
    const dots = heroSlider.querySelectorAll(".dot");

    let index = [...slides].findIndex(slide =>
        slide.classList.contains("active")
    );

    slides[index].classList.remove("active");
    dots[index]?.classList.remove("active");

    index = (index + 1) % slides.length;

    slides[index].classList.add("active");
    dots[index]?.classList.add("active");
}, 4000); // 4 seconds

let modalImages = [];
let modalIndex = 0;
let scale = 1;
let startX = 0;

// OPEN MODAL
function openModal(img) {
    modalImages = [...img.closest(".slider").querySelectorAll(".slide")];
    modalIndex = modalImages.indexOf(img);

    updateModal();
    document.getElementById("imageModal").style.display = "flex";
}

// UPDATE CONTENT
function updateModal() {
    const img = modalImages[modalIndex];
    const modalImg = document.getElementById("modalImage");

    modalImg.src = img.src;
    scale = 1;
    modalImg.style.transform = "scale(1)";

    document.getElementById("modalTitle").innerText = img.dataset.title || "";
    document.getElementById("modalPrice").innerText = img.dataset.price || "";
}

// CLOSE
function closeModal(e) {
    document.getElementById("imageModal").style.display = "none";
}

// NEXT / PREV
function modalNext() {
    modalIndex = (modalIndex + 1) % modalImages.length;
    updateModal();
}

function modalPrev() {
    modalIndex = (modalIndex - 1 + modalImages.length) % modalImages.length;
    updateModal();
}

// MOUSE WHEEL ZOOM
document.getElementById("modalImage").addEventListener("wheel", e => {
    e.preventDefault();
    scale += e.deltaY * -0.001;
    scale = Math.min(Math.max(1, scale), 3);
    e.target.style.transform = `scale(${scale})`;
});

// TOUCH SWIPE
document.getElementById("modalImage").addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
});

document.getElementById("modalImage").addEventListener("touchend", e => {
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) modalNext();
    if (endX - startX > 50) modalPrev();
});

function doGet() {
  return HtmlService.createHtmlOutputFromFile('your-html-file-name');
}