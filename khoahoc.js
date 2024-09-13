const hinhs = document.querySelectorAll(".hinh");
const boxHienThi = document.querySelector(".box_hien_thi");

hinhs.forEach((hinh) => {
  hinh.addEventListener("click", () => {
    const imgSrc = hinh.querySelector("img").src;
    boxHienThi.innerHTML = `<img src="${imgSrc}" alt="">`;
  });
});
