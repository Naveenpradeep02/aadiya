const slider = document.getElementById("slider");
const slides = document.querySelectorAll(".hero");
const totalSlides = slides.length;

let index = 0;
let interval = setInterval(autoSlide, 5000); // auto every 5s

function autoSlide() {
  index = (index + 1) % totalSlides;
  updateSlide();
}

function updateSlide() {
  slider.style.transform = `translateX(-${index * 100}%)`;
}

document.querySelector(".prev").addEventListener("click", () => {
  index = (index - 1 + totalSlides) % totalSlides;
  updateSlide();
  resetInterval();
});

document.querySelector(".next").addEventListener("click", () => {
  index = (index + 1) % totalSlides;
  updateSlide();
  resetInterval();
});

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(autoSlide, 5000);
}

const serviceContent = {
  hair: {
    image: "./imgs/hair.jpg", // replace with actual path
    html: `
      <h2>Hair Regrowth Treatments</h2>
            <p>Restore Your Crown of Confidence
</p>

      <p>Advanced hair restoration techniques that work with your body's natural healing processes to bring back thick, healthy hair.</p>
<h3>Proven Solutions</h3>
      <ul>
        <li>Hair PRP Therapy - Natural regrowth stimulation</li>
        <li>Hair GFC Treatment - Advanced growth factors</li>
        <li>Oxygen Laser Therapy - Scalp rejuvenation</li>
        <li>Combination Therapies - Maximized results</li>
      </ul>
      <button class="btn">Get Hair Assessment</button>
    `,
  },
  skin: {
    image: "./imgs/skin.jpg",
    html: `
      <h2>Skin Treatments</h2>
      <p>The Foundation of Radiant Confidence</p>
      <p>Transform your skin with our advanced treatments that address every concern from acne to aging, revealing your natural glow.</p>
      <h3>Featured Treatments</h3>
      <ul>
        <li>Hydrafacial - Instant glow and deep cleansing</li>
        <li>Chemical Peels - Skin renewal and texture improvement</li>
        <li>Laser Hair Reduction - Permanent hair removal</li>
        <li>Botox & Fillers - Anti-aging solutions</li>
        <li>Microneedling - Collagen stimulation</li>
        <li>Acne Treatment - Scar solutions</li>
      </ul>
      <button class="btn">Explore Skin Treatments</button>
    `,
  },
  makeup: {
    image: "./imgs/makeup.jpg",
    html: `
      <h2>Semi-Permanent Makeup</h2>
            <p>Wake Up Beautiful Every Day
</p>

      <p>Professional permanent makeup services designed for precision and lasting results that enhance your natural features.</p>
      <h3>Artistic Services</h3>

      <ul>
        <li>Eyebrow Microblading - Full brows</li>
        <li>Combination Brows - Texture and shading</li>
        <li>Ombre Brows - Gradient effect</li>
        <li>Lip Tinting - Color enhancement</li>
        <li>Lip Neutralization - Color correction</li>
        <li>Eyeliner Enhancement - Long-lasting definition</li>
      </ul>
      <button class="btn">Book Beauty Consultation</button>
    `,
  },
  dental: {
    image: "./imgs/dentist.jpg",
    html: `
      <h2>Dental Care</h2>
            <p>Your Perfect Smile Journey
</p>

      <p>Comprehensive dental solutions that go beyond oral health to create smiles that boost confidence and transform lives.</p>
<h3>Complete Services</h3>
      <ul>
        <li>Dental Cleanings - Foundation of oral health</li>
        <li>Orthodontic Treatment - Straight teeth</li>
        <li>Dental Implants - Tooth replacement</li>
        <li>Crowns & Bridges - Restore function</li>
        <li>Root Canal Treatment - Save natural teeth</li>
        <li>Cosmetic Dentistry - Smile makeovers</li>
      </ul>
      <button class="btn">Schedule Dental Consultation</button>
    `,
  },
};

const boxes = document.querySelectorAll(".service-box");
const contentDiv = document.getElementById("serviceContent");
const imageDiv = document.getElementById("serviceImage");

function loadService(service) {
  // Update content
  contentDiv.innerHTML = serviceContent[service].html;
  imageDiv.style.backgroundImage = `url('${serviceContent[service].image}')`;

  // Handle active class
  boxes.forEach((b) => b.classList.remove("active"));
  document.querySelector(`[data-service="${service}"]`).classList.add("active");
}

// Initial load
loadService("hair");

// Add click listeners
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    const selected = box.dataset.service;
    loadService(selected);
  });
});

// faq
const questions = document.querySelectorAll(".faq-question");

questions.forEach((q) => {
  q.addEventListener("click", () => {
    const isActive = q.classList.contains("active");

    // Close all
    questions.forEach((btn) => {
      btn.classList.remove("active");
      btn.nextElementSibling.style.maxHeight = null;
    });

    // Open the clicked one if it wasn't already open
    if (!isActive) {
      q.classList.add("active");
      const answer = q.nextElementSibling;
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});
