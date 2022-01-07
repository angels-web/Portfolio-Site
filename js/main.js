
array = document.getElementById("hey-around-array");
image = document.getElementById("hey-around-image");


array.addEventListener("mouseleave", effectsOffHover);
array.addEventListener("mouseenter", effectsOnHover);

image.addEventListener("mouseleave", effectsOffHover);
image.addEventListener("mouseenter", effectsOnHover);

function effectsOnHover(e){
  array.classList.add("button-hover");
  image.classList.add("image-hover")
}

function effectsOffHover(e){
  array.classList.remove("button-hover");
  image.classList.remove("image-hover")
}