$(".search, .search-back").on("click", () => {
  $(".search-input, .menu, .logo").toggle("hidden");
});

$(".menu").on("click", () => {
  $(".mask, .menu, .close").toggle("hidden");
});

$(".close").on("click", () => {
  $(".close, .menu, .mask").toggle("hidden");
});

var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
num.forEach((value) => {
  $(`.ranking-btn-${value}`).on("click", (e) => {
    $(`.ranking-btn-${value}`).toggleClass("corner-black-lg corner-primary-lg");
    $(e.target.parentNode).find("i").toggleClass("fa-minus fa-plus");
    $(`.ranking-info-${value}`).toggle("hidden");
  });
});

var swiper = new Swiper(".mySwiper", {
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    720: {
      slidesPerView: 1,
    },
    960: {
      slidesPerView: 3,
    },
  },
});

var artWorkSwiper = new Swiper(".artWork-swiper", {
  slidesPerView: 2,
  grabCursor: true,
  spaceBetween: 24,
  watchOverflow: false,
  pagination: {
    el: ".artWork-swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    960: {
      slidesPerView: 3,
    },
    1320: {
      slidesPerView: 4,
    },
  },
});

try {
  const tabElements = [
    {
      id: "artWorks",
      triggerEl: document.querySelector("#artWorks-tab"),
      targetEl: document.querySelector("#artWorks"),
    },
    {
      id: "collection",
      triggerEl: document.querySelector("#collection-tab"),
      targetEl: document.querySelector("#collection"),
    },
  ];
  // options with default values
  const options = {
    defaultTabId: "artWorks",
    activeClasses: "border-x border-t border-black text-black",
    inactiveClasses: "border-b border-b-black text-darkGray hover:text-primary",
    onShow: () => {
      console.log("tab is shown");
    },
  };
  const tabs = new Tabs(tabElements, options);
} catch (error) {
  console.log(error);
}

$("#collection-tab").on("click", (e) => {
  var grid = document.querySelector(".grid-masonry");
  var msnry = new Masonry(grid, {
    // options
    percentPosition: true,
  });

  imagesLoaded(grid).on("progress", function () {
    // layout Masonry after each image loads
    msnry.layout();
  });
});

$(".grid-masonry").on("load", (e) => {
  var grid = document.querySelector(".grid-masonry");
  var msnry = new Masonry(grid, {
    // options
    percentPosition: true,
  });

  imagesLoaded(grid).on("progress", function () {
    // layout Masonry after each image loads
    msnry.layout();
  });
});
