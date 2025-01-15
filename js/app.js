const images_thumbnail = document.querySelectorAll('.image-thumbnail img');
const images = document.querySelectorAll('.image img');


images_thumbnail.forEach(image => {
  image.addEventListener('mouseover', (e) => {
    image.classList.add('mouseover-img');
  })

  image.addEventListener('mouseout', (e) => {
    image.classList.remove('mouseover-img');
  })

  image.addEventListener('click', () => {
    images_thumbnail.forEach(img => {
      img.classList.remove("clicked-img");
    })

    image.classList.add("clicked-img");

    if(image.className.includes("clicked-img")){
      let image_number = image.className.split("-")[2]
      images.forEach(img => {
        img.setAttribute("src", `img/image-product-${image_number}.jpg`);
      })
    }
  });
});

