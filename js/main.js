const projects = ["hey-around", "lost", "regiofair", "disconnected"];

projects.forEach((projectName) => {
  array = document.getElementById(`${projectName}-array`);
  image = document.getElementById(`${projectName}-image`);

  array.addEventListener("mouseleave", (e) => {
    document
      .getElementById(`${projectName}-array`)
      .classList.remove("button-hover");
    document
      .getElementById(`${projectName}-image`)
      .classList.remove("image-hover");
  });
  array.addEventListener("mouseenter", (e) => {
    document
      .getElementById(`${projectName}-array`)
      .classList.add("button-hover");
    document
      .getElementById(`${projectName}-image`)
      .classList.add("image-hover");
  });

  image.addEventListener("mouseleave", (e) => {
    document
      .getElementById(`${projectName}-array`)
      .classList.remove("button-hover");
    document
      .getElementById(`${projectName}-image`)
      .classList.remove("image-hover");
  });
  image.addEventListener("mouseenter", (e) => {
    document
      .getElementById(`${projectName}-array`)
      .classList.add("button-hover");
    document
      .getElementById(`${projectName}-image`)
      .classList.add("image-hover");
  });
});
