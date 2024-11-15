document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.1 }
    );

    const sections = document.querySelectorAll(".fade-in");
    sections.forEach(section => observer.observe(section));
});

const titles = ["Nihir Shah.", "Web Developer.", "Freelancer."];
let titleIndex = 0;
let charIndex = 0;
const nameElement = document.getElementById("name");

function typeWriter() {
    if (charIndex < titles[titleIndex].length) {
        nameElement.innerHTML += titles[titleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 100);
    } else {
        setTimeout(deleteText, 1000);
    }
}

function deleteText() {
    if (charIndex > 0) {
        nameElement.innerHTML = titles[titleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteText, 50);
    } else {
        titleIndex = (titleIndex + 1) % titles.length;
        setTimeout(typeWriter, 500);
    }
}

// Start the typing effect
typeWriter();

document.getElementById('scroll-down').addEventListener('click', () => {
    window.scrollTo({
        top: window.innerHeight, // Scrolls to the next section (height of the viewport)
        behavior: 'smooth',
    });
});
