const videoList = document.getElementById("videoList");
const videoPlayer = document.getElementById("myVideo");
const searchInput = document.getElementById("searchInput");

videoList.addEventListener("click", (event) => {
  event.preventDefault();
  const videoSrc = event.target.dataset.video;
  videoPlayer.src = videoSrc;
  videoPlayer.style.display = "block";
  videoPlayer.play();
});

searchInput.addEventListener("input", (event) => {
  const searchTerm = event.target.value.toLowerCase();
  const videos = videoList.querySelectorAll("li");

  videos.forEach((video) => {
    const title = video.textContent.toLowerCase();
    if (title.includes(searchTerm)) {
      video.style.display = "block";
    } else {
      video.style.display = "none";
    }
  });
});

// const hinhs = document.querySelectorAll(".hinh");
// const boxHienThi = document.querySelector(".box_hien_thi");

// hinhs.forEach((hinh) => {
//   hinh.addEventListener("click", () => {
//     const imgSrc = hinh.querySelector("img").src;
//     boxHienThi.innerHTML = `<img src="${imgSrc}" alt="">`;
//   });
// });
