import React from "react";

const ScrollFadeUp = () => {
  const callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      //console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fadeUp");
      }
    });
  };
  const observer = new IntersectionObserver(callback);

  const targets = document.querySelectorAll(".js-show-on-scroll");
  targets.forEach((target) => {
    target.classList.add("opacity-0");
    observer.observe(target);
  });
};

export default ScrollFadeUp;
