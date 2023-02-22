import "../css/style.css";

tns({
  container: ".slider",
  items: 1,
  controlsContainer: "#customize-controls",
  responsive: {
    1023: {
      items: 3,
    },
    750: {
      items: 2,
    },
  },
});

function setupSlider() {
  let sliderHeader = document.getElementsByClassName("slider-header");
  let maxHeight = 0;
  for (const item of sliderHeader) {
    maxHeight = Math.max(maxHeight, item.offsetHeight);
    console.log(maxHeight);
    item.style.minHeight = `${maxHeight}px`;
  }
}

setupSlider();

window.onresize = setupSlider;
