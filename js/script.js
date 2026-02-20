console.log("Bharath Portfolio Loaded");

// Select Elements
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-link");

// Hamburger Menu Toggle
menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (navbar.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});

// Close Mobile Menu After Click
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");

        const icon = menuToggle.querySelector("i");
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Read More Toggle for Services
document.querySelectorAll(".project-cards p").forEach(paragraph => {

    const fullText = paragraph.innerHTML;

    if (fullText.length > 120) {

        const shortText = fullText.substring(0, 120) + "...";
        paragraph.innerHTML = shortText;

        const button = document.createElement("button");
        button.innerText = "Read More";
        button.classList.add("read-more-btn");

        paragraph.after(button);

        let expanded = false;

        button.addEventListener("click", () => {
            if (!expanded) {
                paragraph.innerHTML = fullText;
                button.innerText = "Read Less";
                expanded = true;
            } else {
                paragraph.innerHTML = shortText;
                button.innerText = "Read More";
                expanded = false;
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contact-form");
    const submitBtn = form.querySelector('button[type="submit"]');
    const popupContainer = document.getElementById("popup-container");
    const closePopupButton = document.getElementById("close-popup");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const originalText = submitBtn.textContent;

        submitBtn.textContent = "Sending...";
        submitBtn.disabled = true;

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (response.ok) {
                popupContainer.style.display = "flex"; // Show popup
                form.reset();
            } else {
                alert("Error: " + data.message);
            }

        } catch (error) {
            alert("Something went wrong. Please try again.");
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });

    closePopupButton.addEventListener("click", function () {
        popupContainer.style.display = "none";
    });

});
