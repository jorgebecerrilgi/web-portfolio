export default function observe() {
  let s = [
    '[class*=" intersect:"]',
    '[class*=":intersect:"]',
    '[class^="intersect:"]',
    '[class="intersect"]',
    '[class*=" intersect "]',
    '[class^="intersect "]',
    '[class$=" intersect"]',
  ];
  document.querySelectorAll(s.join(",")).forEach((t) => {
    let e = new IntersectionObserver(
      (c) => {
        c.forEach((n) => {
          if (!n.isIntersecting) {
            t.setAttribute("no-intersect", "");
            return;
          }
          t.removeAttribute("no-intersect"),
            t.classList.contains("intersect-once") && e.disconnect();
        });
      },
      {
        threshold: getThreshold(t),
      }
    );
    e.observe(t);
  });
}
function getThreshold(s: Element) {
  return s.classList.contains("intersect-full")
    ? 0.99
    : s.classList.contains("intersect-half")
    ? 0.5
    : 0;
}
