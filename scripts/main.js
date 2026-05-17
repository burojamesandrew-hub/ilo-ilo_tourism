// ============================================================
// ILOILO PROVINCE TOURISM — main.js
// ============================================================

// ============================================================
// 1. DESTINATIONS DATA ARRAY
//    Each entry has a `url` pointing to the existing HTML page
// ============================================================
const destinations = [
  {
    id: 1,
    name: "Islas de Gigantes",
    municipality: "Carles",
    category: "Island",
    image: "images/islasDeGigantes3.jpg",
    url: "islas-de-gigantes.html",
    shortDesc: "Famous for crystal-clear waters, white sand beaches, and world-class island hopping adventures.",
    fee: "Environmental fee: ₱50/person; boat rental: ₱1,500–₱3,000/day",
    hours: "Open daily; boat trips depart 7:00 AM from Estancia Port"
  },
  {
    id: 2,
    name: "Miagao Church",
    municipality: "Miagao",
    category: "Historical Site",
    image: "images/miagaoChurch2.jpg",
    url: "miagao-church.html",
    shortDesc: "A UNESCO World Heritage Site with stunning Baroque-Romanesque architecture dating back to 1797.",
    fee: "Free entry (donations welcome)",
    hours: "Open daily 6:00 AM – 6:00 PM"
  },
  {
    id: 3,
    name: "Jaro Cathedral",
    municipality: "Jaro, Iloilo City",
    category: "Historical Site",
    image: "images/jaroCathedral1.jpg",
    url: "jaro-cathedral.html",
    shortDesc: "The only cathedral in the Philippines with a separate belfry and the patroness of all dioceses in Western Visayas.",
    fee: "Free entry",
    hours: "Open daily 6:00 AM – 7:00 PM"
  },
  {
    id: 4,
    name: "Molo Church",
    municipality: "Molo, Iloilo City",
    category: "Historical Site",
    image: "images/moloChurch1.jpg",
    url: "molo-church.html",
    shortDesc: "Known as the 'feminist church' — a historic Baroque church administered by women during the Spanish era.",
    fee: "Free entry",
    hours: "Open daily 6:00 AM – 7:00 PM"
  },
  {
    id: 5,
    name: "Sicogon Island",
    municipality: "Carles",
    category: "Island",
    image: "images/sicogonIsland3.jpg",
    url: "sicogon-island.html",
    shortDesc: "A tropical paradise with pristine white beaches, crystal blue waters, and a laid-back island atmosphere.",
    fee: "Environmental fee applies; resort fees vary",
    hours: "Daily; boat trips from Estancia Port"
  },
  {
    id: 6,
    name: "Bucari Pine Forest",
    municipality: "Leon",
    category: "Mountain",
    image: "images/bucariPineForest1.jfif",
    url: "bucari-pine-forest.html",
    shortDesc: "A refreshing mountain escape with cool temperatures, lush pine forests, and stunning panoramic viewpoints.",
    fee: "₱20–₱50/person entrance fee",
    hours: "Open daily, sunrise to sunset"
  },
  {
    id: 7,
    name: "Bulabog Puti-an National Park",
    municipality: "Miagao",
    category: "Nature",
    image: "images/bulabogPuti-anNationalPark2.jfif",
    url: "bulabog-puti-an-national-park.html",
    shortDesc: "A protected natural forest reserve with diverse flora and fauna, waterfalls, and scenic hiking trails.",
    fee: "Minimal entrance fee",
    hours: "Open daily 7:00 AM – 5:00 PM"
  },
  {
    id: 8,
    name: "Antonia Beach",
    municipality: "Carles",
    category: "Beach",
    image: "images/antoniaBeach2.jpg",
    url: "antonia-beach.html",
    shortDesc: "A pristine white sand beach in the Islas de Gigantes group, known for its stunning sunsets and clear waters.",
    fee: "Included in island hopping package; environmental fee ₱50",
    hours: "Open daily; accessible via island hopping tours"
  },
  {
    id: 9,
    name: "Isla Naburot",
    municipality: "Carles",
    category: "Island",
    image: "images/islaNaburot2.jfif",
    url: "isla-naburot.html",
    shortDesc: "An exclusive private island resort with a rustic, eco-friendly atmosphere and crystal-clear waters.",
    fee: "Resort rates vary; advance booking required",
    hours: "By reservation; check-in 2:00 PM"
  },
  {
    id: 10,
    name: "Tangke Saltwater Lagoon",
    municipality: "Carles (Gigantes Sur)",
    category: "Adventure",
    image: "images/tangkeSaltwaterLagoon2.jpg",
    url: "tangke-saltwater-lagoon.html",
    shortDesc: "A hidden saltwater lagoon inside limestone cliffs — one of the most unique swimming spots in the Philippines.",
    fee: "Included in island hopping package; environmental fee ₱50",
    hours: "Accessible daily, timed to tides; 9:00 AM – 2:00 PM"
  },
  {
    id: 11,
    name: "Garin Farm Pilgrimage Resort",
    municipality: "San Joaquin",
    category: "Adventure",
    image: "images/garinfarmPilgrimageResort2.jfif",
    url: "garinfarm-pilgrimage-resort.html",
    shortDesc: "A unique pilgrimage resort combining Catholic faith, adventure, and farm tourism in a hillside setting.",
    fee: "₱150–₱200/person; additional fees for adventure activities",
    hours: "Open daily 7:00 AM – 5:00 PM"
  },
  {
    id: 12,
    name: "Calle Real",
    municipality: "Iloilo City",
    category: "Historical Site",
    image: "images/calleReal3.jpg",
    url: "calle-real.html",
    shortDesc: "Iloilo's historic heritage street lined with Spanish-era buildings, ancestral houses, and colonial architecture.",
    fee: "Free (public street)",
    hours: "Open 24 hours; businesses during regular hours"
  }
];

// ============================================================
// 2. GALLERY IMAGES ARRAY (35 images)
//    Each has a `url` so clicking navigates to that destination
// ============================================================
const galleryImages = [
  { src: "images/islasDeGigantes1.jpg",               caption: "Islas de Gigantes — Aerial View",             url: "islas-de-gigantes.html" },
  { src: "images/islasDeGigantes2.jpg",               caption: "Islas de Gigantes — Crystal Waters",          url: "islas-de-gigantes.html" },
  { src: "images/islasDeGigantes3.jpg",               caption: "Islas de Gigantes — White Sand Beach",        url: "islas-de-gigantes.html" },
  { src: "images/islasDeGigantes4.jpg",               caption: "Islas de Gigantes — Island Panorama",         url: "islas-de-gigantes.html" },
  { src: "images/islasDeGigantes5.jfif",              caption: "Islas de Gigantes — Scenic Cove",             url: "islas-de-gigantes.html" },
  { src: "images/antoniaBeach1.jpg",                  caption: "Antonia Beach — Sunrise",                     url: "antonia-beach.html" },
  { src: "images/antoniaBeach2.jpg",                  caption: "Antonia Beach — White Sands",                 url: "antonia-beach.html" },
  { src: "images/antoniaBeach3.jpg",                  caption: "Antonia Beach — Clear Waters",                url: "antonia-beach.html" },
  { src: "images/antoniaBeach4.jpg",                  caption: "Antonia Beach — Coastal View",                url: "antonia-beach.html" },
  { src: "images/antoniaBeach5.jpg",                  caption: "Antonia Beach — Sunset",                      url: "antonia-beach.html" },
  { src: "images/tangkeSaltwaterLagoon1.jpg",         caption: "Tangke Saltwater Lagoon — Hidden Pool",       url: "tangke-saltwater-lagoon.html" },
  { src: "images/tangkeSaltwaterLagoon2.jpg",         caption: "Tangke Saltwater Lagoon — Limestone Walls",   url: "tangke-saltwater-lagoon.html" },
  { src: "images/tangkeSaltwaterLagoon3.jpg",         caption: "Tangke Saltwater Lagoon — Turquoise Waters",  url: "tangke-saltwater-lagoon.html" },
  { src: "images/tangkeSaltwaterLagoon4.jpg",         caption: "Tangke Saltwater Lagoon — Entrance Cave",     url: "tangke-saltwater-lagoon.html" },
  { src: "images/tangkeSaltwaterLagoon5.jpg",         caption: "Tangke Saltwater Lagoon — Top View",          url: "tangke-saltwater-lagoon.html" },
  { src: "images/miagaoChurch1.jpg",                  caption: "Miagao Church — UNESCO Heritage",             url: "miagao-church.html" },
  { src: "images/miagaoChurch3.jpg",                  caption: "Miagao Church — Facade Details",              url: "miagao-church.html" },
  { src: "images/miagaoChurch4.jpg",                  caption: "Miagao Church — Baroque Architecture",        url: "miagao-church.html" },
  { src: "images/jaroCathedral1.jpg",                 caption: "Jaro Cathedral — Historic Tower",             url: "jaro-cathedral.html" },
  { src: "images/jaroCathedral3.jpg",                 caption: "Jaro Cathedral — Bell Tower",                 url: "jaro-cathedral.html" },
  { src: "images/moloChurch1.jpg",                    caption: "Molo Church — The Feminist Church",           url: "molo-church.html" },
  { src: "images/moloChurch2.jpg",                    caption: "Molo Church — Heritage Facade",               url: "molo-church.html" },
  { src: "images/sicogonIsland1.jpg",                 caption: "Sicogon Island — Pristine Beach",             url: "sicogon-island.html" },
  { src: "images/sicogonIsland3.jpg",                 caption: "Sicogon Island — Tropical Paradise",          url: "sicogon-island.html" },
  { src: "images/sicogonIsland5.jpg",                 caption: "Sicogon Island — Turquoise Waters",           url: "sicogon-island.html" },
  { src: "images/bucariPineForest1.jfif",             caption: "Bucari Pine Forest — Mountain Retreat",       url: "bucari-pine-forest.html" },
  { src: "images/bucariPineForest3.jfif",             caption: "Bucari Pine Forest — Pine Trees",             url: "bucari-pine-forest.html" },
  { src: "images/bucariPineForest5.jfif",             caption: "Bucari Pine Forest — Scenic View",            url: "bucari-pine-forest.html" },
  { src: "images/bulabogPuti-anNationalPark2.jfif",   caption: "Bulabog Puti-an — National Park Trail",       url: "bulabog-puti-an-national-park.html" },
  { src: "images/garinfarmPilgrimageResort1.jfif",    caption: "Garin Farm — Noah's Ark",                     url: "garinfarm-pilgrimage-resort.html" },
  { src: "images/garinfarmPilgrimageResort3.jfif",    caption: "Garin Farm — Hilltop View",                   url: "garinfarm-pilgrimage-resort.html" },
  { src: "images/islaNaburot2.jfif",                  caption: "Isla Naburot — Eco Resort",                   url: "isla-naburot.html" },
  { src: "images/islaNaburot4.jfif",                  caption: "Isla Naburot — Overwater Cottages",           url: "isla-naburot.html" },
  { src: "images/calleReal3.jpg",                     caption: "Calle Real — Heritage Architecture",           url: "calle-real.html" },
  { src: "images/frances-barcelo-g8suSx_1_bU-unsplash.jpg", caption: "Iloilo Province — Natural Beauty",     url: "islands.html" }
];

// ============================================================
// 3. HELPERS
// ============================================================
function getCategoryIcon(cat) {
  const icons = {
    "Island":        "bi-water",
    "Beach":         "bi-umbrella",
    "Mountain":      "bi-tree",
    "Historical Site":"bi-building",
    "Nature":        "bi-flower2",
    "Adventure":     "bi-lightning-charge",
    "Food Destination":"bi-cup-hot"
  };
  return icons[cat] || "bi-geo-alt";
}

// ============================================================
// 4. RENDER DESTINATION CARDS
//    - Card image is a clickable link to the destination page
//    - "View Details" button navigates to the destination page
// ============================================================
function renderDestinations(list) {
  const container = document.getElementById("destinationCards");
  const noResults  = document.getElementById("noResults");
  container.innerHTML = "";

  if (list.length === 0) {
    noResults.classList.remove("d-none");
    return;
  }
  noResults.classList.add("d-none");

  list.forEach(dest => {
    const isFree = dest.fee.toLowerCase().startsWith("free");
    const feeLabel = isFree
      ? `<span class="dest-meta-tag free"><i class="bi bi-ticket me-1"></i>Free Entry</span>`
      : `<span class="dest-meta-tag"><i class="bi bi-ticket-perforated me-1"></i>${dest.fee.split(';')[0]}</span>`;

    const col = document.createElement("div");
    col.className = "col-12 col-sm-6 col-lg-4";
    col.innerHTML = `
      <article class="dest-card-new h-100">
        <div class="dest-card-img-wrap">
          <a href="${dest.url}" class="dest-img-link" aria-label="View ${dest.name}">
            <img src="${dest.image}" alt="${dest.name}" loading="lazy">
            <div class="dest-img-hover-label">
              <i class="bi bi-arrow-right-circle-fill me-1"></i> Visit Page
            </div>
          </a>
          <span class="dest-category-badge">
            <i class="bi ${getCategoryIcon(dest.category)} me-1"></i>${dest.category}
          </span>
        </div>
        <div class="dest-card-body">
          <h3 class="dest-card-title">${dest.name}</h3>
          <p class="dest-card-location"><i class="bi bi-geo-alt-fill me-1"></i>${dest.municipality}</p>
          <p class="dest-card-desc">${dest.shortDesc}</p>
          <div class="dest-card-meta">${feeLabel}</div>
          <a href="${dest.url}" class="btn btn-view-details w-100 mt-3">
            View Details <i class="bi bi-arrow-right ms-1"></i>
          </a>
        </div>
      </article>
    `;
    container.appendChild(col);
  });
}

// ============================================================
// 5. SEARCH & FILTER
// ============================================================
let activeFilter = "All";

function filterAndSearch() {
  const query = document.getElementById("destSearch").value.toLowerCase().trim();
  const filtered = destinations.filter(d => {
    const matchCat   = activeFilter === "All" || d.category === activeFilter;
    const matchQuery = !query
      || d.name.toLowerCase().includes(query)
      || d.municipality.toLowerCase().includes(query)
      || d.category.toLowerCase().includes(query);
    return matchCat && matchQuery;
  });
  renderDestinations(filtered);
}

// ============================================================
// 6. GALLERY RENDER
//    - Clicking a gallery image navigates to the destination page
//    - Lightbox "Visit Page" button also navigates there
// ============================================================
function renderGallery() {
  const grid = document.getElementById("galleryGrid");
  grid.innerHTML = "";
  galleryImages.forEach((img, index) => {
    const item = document.createElement("div");
    item.className = "gallery-item";
    item.innerHTML = `
      <img src="${img.src}" alt="${img.caption}" loading="lazy">
      <div class="gallery-item-overlay">
        <i class="bi bi-zoom-in gallery-zoom-icon"></i>
        <span class="gallery-hover-label">${img.caption}</span>
      </div>
    `;

    // Left-click → open lightbox
    item.addEventListener("click", (e) => {
      openLightbox(index);
    });

    grid.appendChild(item);
  });
}

// ============================================================
// 7. LIGHTBOX
//    - Previous/Next to browse
//    - "Visit Page" button navigates to the destination
// ============================================================
let currentLightboxIndex = 0;

function openLightbox(index) {
  currentLightboxIndex = index;
  updateLightbox();
  document.getElementById("lightbox").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("active");
  document.body.style.overflow = "";
}

function updateLightbox() {
  const img = galleryImages[currentLightboxIndex];
  document.getElementById("lightboxImg").src     = img.src;
  document.getElementById("lightboxImg").alt     = img.caption;
  document.getElementById("lightboxCaption").textContent = img.caption;
  document.getElementById("lightboxCounter").textContent =
    `${currentLightboxIndex + 1} / ${galleryImages.length}`;

  // Update the "Visit Page" link in lightbox
  const visitBtn = document.getElementById("lightboxVisit");
  if (visitBtn) visitBtn.href = img.url;
}

function setupLightbox() {
  document.getElementById("lightboxClose").addEventListener("click", closeLightbox);

  document.getElementById("lightboxPrev").addEventListener("click", () => {
    currentLightboxIndex = (currentLightboxIndex - 1 + galleryImages.length) % galleryImages.length;
    updateLightbox();
  });

  document.getElementById("lightboxNext").addEventListener("click", () => {
    currentLightboxIndex = (currentLightboxIndex + 1) % galleryImages.length;
    updateLightbox();
  });

  // Close when clicking backdrop
  document.getElementById("lightbox").addEventListener("click", e => {
    if (e.target === document.getElementById("lightbox")) closeLightbox();
  });

  // Keyboard navigation
  document.addEventListener("keydown", e => {
    const lb = document.getElementById("lightbox");
    if (!lb.classList.contains("active")) return;
    if (e.key === "ArrowRight") {
      currentLightboxIndex = (currentLightboxIndex + 1) % galleryImages.length;
      updateLightbox();
    } else if (e.key === "ArrowLeft") {
      currentLightboxIndex = (currentLightboxIndex - 1 + galleryImages.length) % galleryImages.length;
      updateLightbox();
    } else if (e.key === "Escape") {
      closeLightbox();
    }
  });
}

// ============================================================
// 8. FORM VALIDATION
// ============================================================
function showError(inputId, errorId, message) {
  const input = document.getElementById(inputId);
  const error = document.getElementById(errorId);
  input.classList.add("is-invalid");
  input.classList.remove("is-valid");
  if (error) error.textContent = message;
}

function showValid(inputId) {
  const input = document.getElementById(inputId);
  input.classList.remove("is-invalid");
  input.classList.add("is-valid");
}

function clearValidation(inputId) {
  const input = document.getElementById(inputId);
  input.classList.remove("is-invalid", "is-valid");
}

function setupFormValidation() {
  const form = document.getElementById("inquiryForm");
  if (!form) return;

  // Real-time hints
  document.getElementById("fullName").addEventListener("input", function () {
    this.value.trim().length >= 2 ? showValid("fullName") : clearValidation("fullName");
  });
  document.getElementById("emailAddress").addEventListener("input", function () {
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.value.trim()) ? showValid("emailAddress") : clearValidation("emailAddress");
  });
  document.getElementById("contactNumber").addEventListener("input", function () {
    /^[\d\s\+\-\(\)]{7,15}$/.test(this.value.trim()) ? showValid("contactNumber") : clearValidation("contactNumber");
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let valid = true;

    const name = document.getElementById("fullName").value.trim();
    if (!name || name.length < 2) {
      showError("fullName", "nameError", "Full name is required (minimum 2 characters)."); valid = false;
    } else { showValid("fullName"); }

    const email = document.getElementById("emailAddress").value.trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showError("emailAddress", "emailError", "Please enter a valid email address."); valid = false;
    } else { showValid("emailAddress"); }

    const contact = document.getElementById("contactNumber").value.trim();
    if (!contact || !/^[\d\s\+\-\(\)]{7,15}$/.test(contact)) {
      showError("contactNumber", "contactError", "Contact number must contain numbers only (7–15 digits)."); valid = false;
    } else { showValid("contactNumber"); }

    const dest = document.getElementById("selectedDestination").value;
    if (!dest) {
      showError("selectedDestination", "destError", "Please select a destination."); valid = false;
    } else { showValid("selectedDestination"); }

    const date  = document.getElementById("travelDate").value;
    const today = new Date().toISOString().split("T")[0];
    if (!date) {
      showError("travelDate", "dateError", "Please select a travel date."); valid = false;
    } else if (date < today) {
      showError("travelDate", "dateError", "Travel date cannot be in the past."); valid = false;
    } else { showValid("travelDate"); }

    const visitors = parseInt(document.getElementById("numVisitors").value);
    if (!visitors || isNaN(visitors) || visitors < 1) {
      showError("numVisitors", "visitorsError", "Number of visitors must be at least 1."); valid = false;
    } else { showValid("numVisitors"); }

    const msg = document.getElementById("message").value.trim();
    if (!msg || msg.length < 10) {
      showError("message", "messageError", "Please include a message (minimum 10 characters)."); valid = false;
    } else { showValid("message"); }

    if (valid) {
      form.classList.add("d-none");
      document.getElementById("formSuccess").classList.remove("d-none");
    }
  });
}

// ============================================================
// 9. NAVBAR ACTIVE LINK ON SCROLL
// ============================================================
function setupNavHighlight() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks  = document.querySelectorAll(".navbar-nav .nav-link");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${entry.target.id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }, { rootMargin: "-40% 0px -50% 0px" });

  sections.forEach(s => observer.observe(s));
}

// ============================================================
// 10. INIT
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  renderDestinations(destinations);
  document.getElementById("destSearch").addEventListener("input", filterAndSearch);
  document.getElementById("filterTabs").addEventListener("click", e => {
    if (e.target.classList.contains("filter-btn")) {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");
      activeFilter = e.target.dataset.cat;
      filterAndSearch();
    }
  });
  renderGallery();
  setupLightbox();
  setupFormValidation();
  setupNavHighlight();
  document.getElementById("year").textContent = new Date().getFullYear();

  // ---- Auto-close mobile navbar when a nav link is clicked ----
  document.querySelectorAll(".nav-link-close").forEach(link => {
    link.addEventListener("click", () => {
      const collapse = document.getElementById("mainNav");
      if (collapse && collapse.classList.contains("show")) {
        const bsCollapse = bootstrap.Collapse.getInstance(collapse);
        if (bsCollapse) bsCollapse.hide();
      }
    });
  });
});
