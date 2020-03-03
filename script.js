document.querySelectorAll("input").forEach(inp => {
  inp.addEventListener("input", inputChanged);
});

function inputChanged(e) {
  document.documentElement.style.setProperty(
    `--${e.target.name}`,
    e.target.value
  );
}
