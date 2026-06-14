/* ============================================================
   NEZO X ID — Core interactions
   ============================================================ */

const WHATSAPP_NUMBER = "6282298431688";
const INSTAGRAM_URL = "https://www.instagram.com/itx_imran_404?igsh=MW1jZzBkbTYyeHV6aQ==";

/* ---------------- Icon library ---------------- */
const ICONS = {
  gun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 14h11l3-3h4v3h-2l-2 4H7l-1-2H3z" stroke-linejoin="round" stroke-linecap="round"/><path d="M14 11V7h3v4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3" stroke-linecap="round"/></svg>`,
  sun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" stroke-linecap="round"/></svg>`,
  moon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" stroke-linejoin="round"/></svg>`,
  chevronDown: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  whatsapp: `<svg viewBox="0 0 32 32" fill="currentColor"><path d="M16 0C7.16 0 0 7.16 0 16c0 2.85.76 5.6 2.18 8.02L.34 31.34l7.5-1.97A15.9 15.9 0 0016 32c8.84 0 16-7.16 16-16S24.84 0 16 0zm0 29.2c-2.6 0-5.13-.7-7.32-2.02l-.52-.32-5.46 1.44 1.46-5.32-.34-.55A13.18 13.18 0 012.8 16C2.8 8.7 8.7 2.8 16 2.8S29.2 8.7 29.2 16 23.3 29.2 16 29.2zm7.24-9.86c-.4-.2-2.34-1.16-2.7-1.29-.36-.13-.63-.2-.9.2-.27.4-1.03 1.29-1.26 1.55-.23.27-.46.3-.86.1-2.32-1.16-3.84-2.06-5.37-4.67-.4-.7.4-.65 1.16-2.16.13-.27.06-.5-.07-.7-.13-.2-.6-1.43-.83-1.96-.22-.53-.45-.46-.62-.46-.16 0-.43-.03-.7-.03-.27 0-.7.1-1.07.5-.36.4-1.4 1.36-1.4 3.33 0 1.96 1.43 3.86 1.63 4.13.2.27 2.73 4.16 6.6 5.67 3.87 1.5 3.87 1 4.57.93.7-.06 2.34-.96 2.67-1.89.33-.93.33-1.73.23-1.9-.1-.16-.36-.27-.76-.46z"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>`,
  arrowUp: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19V5M5 12l7-7 7 7" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2l8 3.5v6c0 5-3.5 8.5-8 10.5-4.5-2-8-5.5-8-10.5v-6L12 2z" stroke-linejoin="round"/><path d="M9 12l2 2 4-4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  bolt: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" stroke-linejoin="round"/></svg>`,
  star: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.9-6.3 3.9 1.7-7L2 9.2l7.1-.6z"/></svg>`,
  headset: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 13a9 9 0 0118 0v5a2 2 0 01-2 2h-1v-7h3M3 13v5a2 2 0 002 2h1v-7H3" stroke-linejoin="round"/></svg>`,
  badge: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="8" r="5"/><path d="M8.5 13.5L7 22l5-3 5 3-1.5-8.5" stroke-linejoin="round"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12l5 5L20 7" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  alert: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 9v4M12 17h.01M10.3 3.6L2.7 17a1.5 1.5 0 001.3 2.3h16a1.5 1.5 0 001.3-2.3L13.7 3.6a1.5 1.5 0 00-2.6 0z" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  info: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8h.01M11 12h1v4h1" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6L6 18" stroke-linecap="round"/></svg>`,
  ghost: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2c4.4 0 8 3.6 8 8v9l-2.5-2-2.5 2-2.5-2-2.5 2-2.5-2L4 19v-9c0-4.4 3.6-8 8-8z" stroke-linejoin="round"/><circle cx="9" cy="10" r="1" fill="currentColor"/><circle cx="15" cy="10" r="1" fill="currentColor"/></svg>`,
};

/* ---------------- Currency formatter ---------------- */
function formatIDR(num) {
  return "Rp " + num.toLocaleString("id-ID");
}

/* ---------------- WhatsApp helper ---------------- */
function buildWhatsAppLink(account) {
  const msg = `Hello, I am interested in purchasing FF ID #${account.id} (${account.name}). Please provide more details.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}
function generalWhatsAppLink(customMsg) {
  const msg = customMsg || "Hello! I have a question about NEZO X ID accounts.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

/* ============================================================
   THEME SYSTEM
   ============================================================ */
(function initTheme() {
  const saved = localStorage.getItem("nezo-theme");
  const theme = saved || "dark";
  document.documentElement.setAttribute("data-theme", theme);
})();

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || "dark";
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("nezo-theme", next);
}

/* ============================================================
   LOADER
   ============================================================ */
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    setTimeout(() => loader.classList.add("hidden"), 450);
  }
});

/* ============================================================
   NAVBAR + MOBILE MENU + SCROLL PROGRESS + BACK TO TOP
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const progress = document.getElementById("scroll-progress");
  const fabTop = document.querySelector(".fab-top");
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");
  const overlay = document.querySelector(".menu-overlay");

  function onScroll() {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;

    if (navbar) navbar.classList.toggle("scrolled", scrollY > 30);
    if (progress) progress.style.width = pct + "%";
    if (fabTop) fabTop.classList.toggle("show", scrollY > 480);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (hamburger && mobileMenu && overlay) {
    const closeMenu = () => {
      hamburger.classList.remove("open");
      mobileMenu.classList.remove("open");
      overlay.classList.remove("open");
      document.body.style.overflow = "";
    };
    hamburger.addEventListener("click", () => {
      const willOpen = !mobileMenu.classList.contains("open");
      hamburger.classList.toggle("open", willOpen);
      mobileMenu.classList.toggle("open", willOpen);
      overlay.classList.toggle("open", willOpen);
      document.body.style.overflow = willOpen ? "hidden" : "";
    });
    overlay.addEventListener("click", closeMenu);
    mobileMenu.querySelectorAll("a").forEach(a => a.addEventListener("click", closeMenu));
  }

  // theme toggle buttons (desktop + mobile)
  document.querySelectorAll(".theme-toggle").forEach(btn => {
    btn.addEventListener("click", toggleTheme);
  });

  // back to top
  if (fabTop) {
    fabTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  initBackgroundFx();
  initRevealAnimations();
  initStatCounters();
  initAccountsRendering();
  initFaqPage();
  initContactForm();
  highlightActiveNav();
});

/* ============================================================
   ACTIVE NAV LINK
   ============================================================ */
function highlightActiveNav() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a, .mobile-menu a").forEach(a => {
    const href = a.getAttribute("href");
    if (href === path || (path === "" && href === "index.html")) {
      a.classList.add("active");
    }
  });
}

/* ============================================================
   BACKGROUND PARTICLE CANVAS
   ============================================================ */
function initBackgroundFx() {
  const canvas = document.getElementById("fx-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let w, h, particles;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  function createParticles() {
    const count = Math.min(70, Math.floor((w * h) / 22000));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.8 + 0.6,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      hue: Math.random() > 0.5 ? "74,158,255" : "139,92,246",
      a: Math.random() * 0.5 + 0.2,
    }));
  }
  function draw() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.hue},${p.a})`;
      ctx.fill();
    });
    if (!reduced) requestAnimationFrame(draw);
  }

  resize();
  createParticles();
  draw();
  window.addEventListener("resize", () => { resize(); createParticles(); });
}

/* ============================================================
   REVEAL ON SCROLL
   ============================================================ */
function initRevealAnimations() {
  const targets = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || targets.length === 0) {
    targets.forEach(t => t.classList.add("in-view"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  targets.forEach(t => observer.observe(t));
}

function observeCards(container) {
  const cards = container.querySelectorAll(".acct-card");
  if (!("IntersectionObserver" in window)) {
    cards.forEach(c => c.classList.add("in-view"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("in-view"), (i % 6) * 70);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  cards.forEach(c => observer.observe(c));
}

/* ============================================================
   STAT COUNTERS
   ============================================================ */
function initStatCounters() {
  const stats = document.querySelectorAll("[data-count]");
  if (!stats.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseFloat(el.getAttribute("data-count"));
      const suffix = el.getAttribute("data-suffix") || "";
      const duration = 1400;
      const start = performance.now();
      function step(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = target * eased;
        el.textContent = (target % 1 !== 0 ? value.toFixed(1) : Math.floor(value).toLocaleString("en-US")) + suffix;
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = (target % 1 !== 0 ? target.toFixed(1) : target.toLocaleString("en-US")) + suffix;
      }
      requestAnimationFrame(step);
      observer.unobserve(el);
    });
  }, { threshold: 0.4 });
  stats.forEach(s => observer.observe(s));
}

/* ============================================================
   TOAST SYSTEM
   ============================================================ */
function showToast(type, message) {
  let stack = document.getElementById("toast-stack");
  if (!stack) {
    stack = document.createElement("div");
    stack.id = "toast-stack";
    document.body.appendChild(stack);
  }
  const icon = type === "success" ? ICONS.check : type === "error" ? ICONS.alert : ICONS.info;
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `${icon}<span>${message}</span><button class="toast-close" aria-label="Dismiss">${ICONS.close}</button>`;
  stack.appendChild(toast);

  const remove = () => {
    toast.classList.add("out");
    setTimeout(() => toast.remove(), 350);
  };
  toast.querySelector(".toast-close").addEventListener("click", remove);
  setTimeout(remove, 4500);
}

/* ============================================================
   ACCOUNT CARD TEMPLATE
   ============================================================ */
function statusBadge(status) {
  if (status === "available") return `<span class="badge badge-available">Available</span>`;
  if (status === "sold") return `<span class="badge badge-sold">Sold</span>`;
  if (status === "pending") return `<span class="badge badge-pending">Pending</span>`;
  return "";
}

function accountCard(acc) {
  const skinTags = acc.skins.slice(0, 2).map(s => `<span class="tag">${s}</span>`).join("");
  const evoTags = acc.evoGuns.slice(0, 1).map(e => `<span class="tag tag-evo">${e}</span>`).join("");
  const extraCount = (acc.skins.length + acc.evoGuns.length) - (acc.skins.slice(0,2).length + acc.evoGuns.slice(0,1).length);
  const extraTag = extraCount > 0 ? `<span class="tag">+${extraCount} more</span>` : "";
  const isSold = acc.status === "sold";

  return `
  <article class="acct-card" data-id="${acc.id}">
    <div class="acct-thumb">
      <div class="acct-badges">
        ${acc.featured ? `<span class="badge badge-featured">Featured</span>` : ""}
        ${statusBadge(acc.status)}
      </div>
      <span class="badge badge-rank">${acc.rank}</span>
      <div class="gun-icon">${ICONS.gun}</div>
    </div>
    <div class="acct-body">
      <div class="acct-title-row">
        <div>
          <div class="acct-title">${acc.name}</div>
          <div class="acct-id">UID ${acc.uid} · #${acc.id}</div>
        </div>
        <span class="acct-level">Lv. ${acc.level}</span>
      </div>
      <p class="acct-desc">${acc.desc}</p>
      <div class="acct-tags">${skinTags}${evoTags}${extraTag}</div>
      <div class="acct-footer">
        <div class="acct-price">
          ${formatIDR(acc.price)}
          ${acc.oldPrice ? `<small><s>${formatIDR(acc.oldPrice)}</s></small>` : `<small>${acc.region}</small>`}
        </div>
        ${isSold
          ? `<a href="account.html?id=${acc.id}" class="btn btn-glass btn-sm">View</a>`
          : `<a href="${buildWhatsAppLink(acc)}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-sm">${ICONS.whatsapp} Buy Now</a>`
        }
      </div>
    </div>
  </article>`;
}

/* ============================================================
   RENDER ACCOUNT SECTIONS (home page + listing/search page)
   ============================================================ */
function initAccountsRendering() {
  // Featured
  const featuredGrid = document.getElementById("featured-grid");
  if (featuredGrid) {
    const items = ACCOUNTS.filter(a => a.featured).slice(0, 4);
    featuredGrid.innerHTML = items.map(accountCard).join("");
    observeCards(featuredGrid);
  }

  // Latest
  const latestGrid = document.getElementById("latest-grid");
  if (latestGrid) {
    const items = [...ACCOUNTS].sort((a,b) => new Date(b.dateAdded) - new Date(a.dateAdded)).slice(0, 4);
    latestGrid.innerHTML = items.map(accountCard).join("");
    observeCards(latestGrid);
  }

  // Popular
  const popularGrid = document.getElementById("popular-grid");
  if (popularGrid) {
    const items = ACCOUNTS.filter(a => a.popular).slice(0, 4);
    popularGrid.innerHTML = items.map(accountCard).join("");
    observeCards(popularGrid);
  }

  // Full catalog with filters (browse / search page section)
  const catalogGrid = document.getElementById("catalog-grid");
  if (catalogGrid) {
    initCatalog(catalogGrid);
  }

  // Account details page
  const detailRoot = document.getElementById("account-detail");
  if (detailRoot) {
    renderAccountDetail(detailRoot);
  }
}

/* ============================================================
   CATALOG (search + filters)
   ============================================================ */
function initCatalog(grid) {
  const searchInput = document.getElementById("catalog-search");
  const rankSelect = document.getElementById("filter-rank");
  const sortSelect = document.getElementById("filter-sort");
  const statusChips = document.querySelectorAll("[data-status-chip]");
  const resultCount = document.getElementById("result-count");
  const emptyState = document.getElementById("catalog-empty");

  let activeStatus = "all";

  function render() {
    const query = (searchInput?.value || "").trim().toLowerCase();
    const rank = rankSelect?.value || "all";
    const sort = sortSelect?.value || "newest";

    let items = ACCOUNTS.filter(acc => {
      const matchesQuery = !query ||
        acc.name.toLowerCase().includes(query) ||
        acc.uid.toLowerCase().includes(query) ||
        String(acc.id).includes(query) ||
        acc.skins.some(s => s.toLowerCase().includes(query)) ||
        acc.evoGuns.some(e => e.toLowerCase().includes(query));
      const matchesRank = rank === "all" || acc.rank === rank;
      const matchesStatus = activeStatus === "all" || acc.status === activeStatus;
      return matchesQuery && matchesRank && matchesStatus;
    });

    switch (sort) {
      case "price-asc": items.sort((a,b) => a.price - b.price); break;
      case "price-desc": items.sort((a,b) => b.price - a.price); break;
      case "level-desc": items.sort((a,b) => b.level - a.level); break;
      default: items.sort((a,b) => new Date(b.dateAdded) - new Date(a.dateAdded));
    }

    if (resultCount) resultCount.textContent = `${items.length} account${items.length === 1 ? "" : "s"} found`;

    if (items.length === 0) {
      grid.innerHTML = "";
      if (emptyState) emptyState.style.display = "block";
    } else {
      if (emptyState) emptyState.style.display = "none";
      grid.innerHTML = items.map(accountCard).join("");
      observeCards(grid);
    }
  }

  searchInput?.addEventListener("input", render);
  rankSelect?.addEventListener("change", render);
  sortSelect?.addEventListener("change", render);
  statusChips.forEach(chip => {
    chip.addEventListener("click", () => {
      statusChips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      activeStatus = chip.getAttribute("data-status-chip");
      render();
    });
  });

  // pre-fill from URL ?q=
  const params = new URLSearchParams(window.location.search);
  if (params.get("q") && searchInput) searchInput.value = params.get("q");

  render();
}

/* ============================================================
   ACCOUNT DETAIL PAGE
   ============================================================ */
function renderAccountDetail(root) {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"), 10);
  const acc = ACCOUNTS.find(a => a.id === id) || ACCOUNTS[0];

  document.title = `${acc.name} — FF ID #${acc.id} | NEZO X ID`;

  const skinList = acc.skins.map(s => `<li>${s}</li>`).join("");
  const evoList = acc.evoGuns.length ? acc.evoGuns.map(e => `<li>${e}</li>`).join("") : `<li>No evolved weapons yet</li>`;
  const thumbs = Array.from({ length: 4 }).map((_, i) =>
    `<div class="thumb${i === 0 ? " active" : ""}" data-thumb="${i}">${ICONS.gun}</div>`
  ).join("");
  const isSold = acc.status === "sold";

  root.innerHTML = `
    <div class="breadcrumbs">
      <a href="index.html">Home</a> &nbsp;/&nbsp; <a href="index.html#catalog">Accounts</a> &nbsp;/&nbsp; ${acc.name}
    </div>
    <div class="detail-grid">
      <div class="reveal">
        <div class="gallery-main">${ICONS.gun}</div>
        <div class="gallery-thumbs">${thumbs}</div>
      </div>
      <div class="reveal">
        <div class="acct-badges" style="position:static; margin-bottom:14px; display:flex; gap:8px;">
          ${acc.featured ? `<span class="badge badge-featured">Featured</span>` : ""}
          ${statusBadge(acc.status)}
          <span class="badge badge-rank" style="position:static;">${acc.rank}</span>
        </div>
        <h1 style="font-size: clamp(1.6rem, 4vw, 2.4rem); margin-bottom: 6px;">${acc.name}</h1>
        <div class="acct-id" style="margin-bottom: 18px;">UID ${acc.uid} &nbsp;·&nbsp; FF ID #${acc.id} &nbsp;·&nbsp; ${acc.region}</div>
        <p style="color: var(--text-dim); margin-bottom: 22px;">${acc.desc}</p>

        <div class="detail-info-card">
          <div class="acct-price" style="font-size: 1.8rem;">
            ${formatIDR(acc.price)}
            ${acc.oldPrice ? `<small><s>${formatIDR(acc.oldPrice)}</s></small>` : ""}
          </div>
          <div class="detail-stat-grid">
            <div class="detail-stat"><div class="ds-label">Level</div><div class="ds-value">${acc.level}</div></div>
            <div class="detail-stat"><div class="ds-label">Rank</div><div class="ds-value">${acc.rank}</div></div>
            <div class="detail-stat"><div class="ds-label">Region</div><div class="ds-value">${acc.region}</div></div>
            <div class="detail-stat"><div class="ds-label">Status</div><div class="ds-value">${acc.status.charAt(0).toUpperCase() + acc.status.slice(1)}</div></div>
          </div>

          <div class="detail-section-title">Skins &amp; Bundles</div>
          <ul style="padding-left: 20px; color: var(--text-dim); font-size: 0.9rem; display:flex; flex-direction:column; gap:6px;">${skinList}</ul>

          <div class="detail-section-title">Evo Guns</div>
          <ul style="padding-left: 20px; color: var(--text-dim); font-size: 0.9rem; display:flex; flex-direction:column; gap:6px;">${evoList}</ul>

          ${isSold
            ? `<a href="${generalWhatsAppLink("Hello, the account FF ID #" + acc.id + " (" + acc.name + ") looks sold — do you have anything similar available?")}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-block btn-lg mt-40">${ICONS.whatsapp} Ask About Similar Accounts</a>`
            : `<a href="${buildWhatsAppLink(acc)}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-block btn-lg mt-40">${ICONS.whatsapp} Buy Now via WhatsApp</a>`
          }
        </div>
      </div>
    </div>
  `;

  // thumb gallery interaction
  root.querySelectorAll("[data-thumb]").forEach(t => {
    t.addEventListener("click", () => {
      root.querySelectorAll("[data-thumb]").forEach(o => o.classList.remove("active"));
      t.classList.add("active");
    });
  });

  initRevealAnimations();
}

/* ============================================================
   FAQ PAGE
   ============================================================ */
function initFaqPage() {
  const list = document.getElementById("faq-list");
  if (!list) return;

  const searchInput = document.getElementById("faq-search");
  const categoryChips = document.querySelectorAll("[data-faq-cat]");
  const emptyState = document.getElementById("faq-empty");

  let activeCategory = "all";

  function highlight(text, query) {
    if (!query) return text;
    const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return text.replace(new RegExp(escaped, "gi"), (m) => `<mark style="background: var(--blue-soft); color: var(--blue); border-radius: 4px; padding: 0 2px;">${m}</mark>`);
  }

  function render() {
    const query = (searchInput?.value || "").trim().toLowerCase();
    const items = FAQ_DATA.filter(item => {
      const matchesQuery = !query || item.q.toLowerCase().includes(query) || item.a.toLowerCase().includes(query);
      const matchesCat = activeCategory === "all" || item.category === activeCategory;
      return matchesQuery && matchesCat;
    });

    if (items.length === 0) {
      list.innerHTML = "";
      if (emptyState) emptyState.style.display = "block";
      return;
    }
    if (emptyState) emptyState.style.display = "none";

    list.innerHTML = items.map((item, i) => `
      <div class="faq-item" data-index="${i}">
        <div class="faq-q">
          <div>
            <span class="faq-cat-tag">${item.category}</span>
            <div>${highlight(item.q, query)}</div>
          </div>
          ${ICONS.chevronDown.replace("<svg ", '<svg class="faq-chevron" ')}
        </div>
        <div class="faq-a"><div class="faq-a-inner">${highlight(item.a, query)}</div></div>
      </div>
    `).join("");

    list.querySelectorAll(".faq-item").forEach(item => {
      const q = item.querySelector(".faq-q");
      const a = item.querySelector(".faq-a");
      q.addEventListener("click", () => {
        const isOpen = item.classList.contains("open");
        list.querySelectorAll(".faq-item.open").forEach(open => {
          open.classList.remove("open");
          open.querySelector(".faq-a").style.maxHeight = null;
        });
        if (!isOpen) {
          item.classList.add("open");
          a.style.maxHeight = a.scrollHeight + "px";
        }
      });
    });
  }

  searchInput?.addEventListener("input", render);
  categoryChips.forEach(chip => {
    chip.addEventListener("click", () => {
      categoryChips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      activeCategory = chip.getAttribute("data-faq-cat");
      render();
    });
  });

  render();
}

/* ============================================================
   CONTACT FORM
   ============================================================ */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.querySelector("#cf-name")?.value.trim();
    const message = form.querySelector("#cf-message")?.value.trim();
    if (!name || !message) {
      showToast("error", "Please fill in your name and message before sending.");
      return;
    }
    showToast("success", "Message received! For the fastest reply, tap the WhatsApp button below.");
    form.reset();
  });
}

/* ============================================================
   GLOBAL SEARCH (hero search bar -> catalog page)
   ============================================================ */
function submitHeroSearch(e, inputId) {
  e.preventDefault();
  const input = document.getElementById(inputId);
  const query = input?.value.trim() || "";
  const target = window.location.pathname.includes("index.html") || window.location.pathname.endsWith("/")
    ? "#catalog"
    : "index.html#catalog";

  if (window.location.pathname.includes("index.html") || window.location.pathname.endsWith("/") || window.location.pathname === "") {
    const catalogSearch = document.getElementById("catalog-search");
    if (catalogSearch) {
      catalogSearch.value = query;
      catalogSearch.dispatchEvent(new Event("input"));
    }
    document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" });
  } else {
    window.location.href = `index.html?q=${encodeURIComponent(query)}#catalog`;
  }
}
