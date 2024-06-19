import { gsap } from "gsap";

const splitText = (elements: NodeListOf<HTMLElement>) => {
  elements.forEach((element) => {
    const text = element.textContent || "";
    element.innerHTML = "";
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const charElement = document.createElement("span");
      charElement.textContent = char;
      charElement.style.display = "inline-block";
      charElement.style.opacity = "0";
      charElement.style.transform = "translateY(100%)";
      element.appendChild(charElement);
      // Add a non-breaking space after each character if it is a space
      if (char === " ") {
        const spaceElement = document.createElement("span");
        spaceElement.innerHTML = "&nbsp;";
        element.appendChild(spaceElement);
      }
    }
  });
};

const animateText = (elements: NodeListOf<HTMLElement>) => {
  elements.forEach((element) => {
    gsap.to(element.children, {
      opacity: 1,
      y: 0,
      stagger: 0.05,
      duration: 1,
      ease: "power3.out",
    });
  });
};

export const animatePageIn = () => {
  const aksesorisOne = document.getElementById("aksesoris-1");

  if (aksesorisOne) {
    const tl = gsap.timeline();

    tl.set([aksesorisOne], {
      xPercent: 0,
    }).to([aksesorisOne], {
      duration: 1,
      xPercent: -100,
      ease: "power1.inOut",
      stagger: 0.2,
    });
  }
};

export const animateModalOpen = () => {
  const aksesoris = document.getElementById("aksesoris");
  const aksesorisRotated = document.getElementById("aksesoris-rotated");
  const bintik = document.getElementById("bintik");
  const bunga = document.getElementById("bunga");
  const textElements = document.querySelectorAll<HTMLElement>(".animated-text");

  if (aksesoris) {
    gsap.fromTo(
      aksesoris,
      { y: "-100%" },
      { y: "0%", duration: 1, ease: "bounce.out" }
    );
  }

  if (aksesorisRotated) {
    gsap.fromTo(
      aksesorisRotated,
      { y: "-100%" },
      { y: "0%", duration: 1, ease: "bounce.out" }
    );
  }

  if (bintik) {
    gsap.fromTo(bintik, { opacity: 0 }, { opacity: 1, duration: 1 });
  }

  if (bunga) {
    gsap.fromTo(
      bunga,
      { scale: 0 },
      { scale: 1, duration: 1, ease: "elastic.out(1)" }
    );
  }

  if (textElements) {
    splitText(textElements);
    animateText(textElements);
  }
};

export const animateModalClose = (onComplete: () => void) => {
  const modal = document.querySelector<HTMLElement>(".modal");

  if (modal) {
    gsap.to(modal, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        onComplete();
      },
    });
  }
};

export const animatedPartical = (event: MouseEvent) => {
  const { clientX, clientY } = event;
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const moveX = (clientX / windowWidth) * 50 - 10;
  const moveY = (clientY / windowHeight) * 50 - 10;

  gsap.to("#s-bintik", {
    x: moveX,
    y: moveY,
    ease: "power1.out",
    duration: 0.1,
  });
};
