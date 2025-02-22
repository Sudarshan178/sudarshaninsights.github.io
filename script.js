document.addEventListener("DOMContentLoaded", function () {
    const searchTab = document.getElementById("search-tab");
    const searchBox = document.getElementById("search-box");
    const searchInput = document.getElementById("search-input");

    // Open Search Box
    searchTab.addEventListener("click", function (e) {
        e.preventDefault();
        searchBox.classList.add("active");
        searchInput.focus();
    });

    // Close Search Box
    window.closeSearch = function () {
        searchBox.classList.remove("active");
        searchInput.value = "";
        removeHighlights();
    };

    // Search Functionality
    window.searchContent = function () {
        removeHighlights();
        let query = searchInput.value.toLowerCase();
        if (query.trim() === "") return;

        let elements = document.querySelectorAll(".searchable");
        elements.forEach(el => {
            if (el.textContent.toLowerCase().includes(query)) {
                let regex = new RegExp(query, "gi");
                el.innerHTML = el.textContent.replace(regex, match => `<span class="highlight">${match}</span>`);
            }
        });
    };

    // Remove Highlights
    function removeHighlights() {
        document.querySelectorAll(".highlight").forEach(el => {
            el.outerHTML = el.innerHTML;
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Show the article when clicking on a bio-card
    document.querySelectorAll(".bio-card").forEach(card => {
        card.addEventListener("click", function() {
            let targetId = this.getAttribute("onclick").split("'")[1]; 
            document.querySelectorAll("article").forEach(article => {
                article.style.display = "none";
            });
            document.querySelector(targetId).style.display = "block";
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Loaded Successfully");

    // Highlight active tab in navigation
    let currentPage = window.location.pathname.split("/").pop();
    let navLinks = document.querySelectorAll("nav ul li a");
    
    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.style.color = "#FFD700"; // Golden color highlight for active tab
        }
    });

    // Smooth scroll effect for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            let target = document.querySelector(this.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth" });
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");

    if (searchInput && searchBtn) {
        searchBtn.addEventListener("click", function () {
            let query = searchInput.value.trim().toLowerCase();
            if (query !== "") {
                window.location.href = `search.html?q=${encodeURIComponent(query)}`;
            }
        });

        searchInput.addEventListener("keypress", function (e) {
            if (e.key === "Enter") {
                searchBtn.click();
            }
        });
    }
});

