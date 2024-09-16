// const videoList = document.getElementById("videoList");
// const videoPlayer = document.getElementById("myVideo");
// const searchInput = document.getElementById("searchInput");

// videoList.addEventListener("click", (event) => {
//   event.preventDefault();
//   const videoSrc = event.target.dataset.video;
//   videoPlayer.src = videoSrc;
//   videoPlayer.style.display = "block";
//   videoPlayer.play();
// });



// const hinhs = document.querySelectorAll(".hinh");
// const boxHienThi = document.querySelector(".box_hien_thi");

// hinhs.forEach((hinh) => {
//   hinh.addEventListener("click", () => {
//     const imgSrc = hinh.querySelector("img").src;
//     boxHienThi.innerHTML = `<img src="${imgSrc}" alt="">`;
//   });
// });

// Giả sử các phần tử .box được thêm vào một container có id là "contentContainer"
const contentContainer = document.getElementById("contentContainer");

let totalBoxes;
let currentPage = 1;
const boxesPerPage = 10; // Declare boxesPerPage here

function updatePagination() {
  totalBoxes = contentContainer.querySelectorAll(".box").length;
  const totalPages = Math.ceil(totalBoxes / boxesPerPage);

  // Tạo các nút số trang
  const pageNumbersContainer = document.querySelector(".page-numbers");
  pageNumbersContainer.innerHTML = "";
  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement("button");
    pageButton.textContent = i;
    pageButton.dataset.page = i; // Add data-page attribute
    pageButton.addEventListener("click", () => showPage(i));
    pageNumbersContainer.appendChild(pageButton);
  }

  // Hiển thị trang đầu tiên (10 box) ngay sau khi tạo nút phân trang
  showPage(1);
}

updatePagination();

// Thêm sự kiện lắng nghe khi có phần tử .box mới được thêm vào
// contentContainer.addEventListener("DOMNodeInserted", updatePagination);

function showPage(pageNumber) {
  currentPage = pageNumber;
  const startBoxIndex = (pageNumber - 1) * boxesPerPage;
  const endBoxIndex = startBoxIndex + boxesPerPage;

  document.querySelectorAll(".box").forEach((box, index) => {
    if (index >= startBoxIndex && index < endBoxIndex) {
      box.style.display = "block";
    } else {
      box.style.display = "none";
    }
  });

  document.querySelectorAll(".pagination button").forEach((button) => {
    button.classList.remove("active"); // Remove active class from all buttons
  });

  // Thêm lớp "active" vào nút trang hiện tại
  document
    .querySelector(`.pagination button[data-page="${pageNumber}"]`)
    .classList.add("active");
}

// // Assuming you have prevPageButton and nextPageButton defined in your HTML
// const prevPageButton = document.getElementById("prevPage");
// const nextPageButton = document.getElementById("nextPage");

// prevPageButton.addEventListener("click", () => {
//   if (currentPage > 1) {
//     showPage(currentPage - 1);
//   }
// });

// nextPageButton.addEventListener("click", () => {
//   if (currentPage < totalPages) {
//     showPage(currentPage + 1);
//   }
// });

function searchContent() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  const contentBoxes = document.getElementById("contentContainer").querySelectorAll(".box");
  const noResultElement = document.getElementById("noResult");

  let hasResult = false;

  contentBoxes.forEach((box) => {
    const boxContent = box.textContent.toLowerCase();

    if (boxContent.includes(searchTerm)) {
      box.style.display = "block";
      hasResult = true; // Đánh dấu là có kết quả tìm kiếm
    } else {
      box.style.display = "none";
    }
  });

  if (!hasResult) {
    noResultElement.style.display = "block";
  } else {
    noResultElement.style.display = "none";
  }
}