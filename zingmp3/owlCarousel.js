/* JS FOR CAROUSEL SLIDER*/
// mv list carousel
$(".mv-list").owlCarousel({
  loop: true,
  margin:10,
  autoplay: true,
  autoplayTimeout: 2000,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    500: {
      items: 1,
      nav: false,
    },
    // 600: {
    //   items: 2,
    //   nav: false,
    // },
    700: {
      items: 2,
      nav: false,
    },
    1000: {
      items: 3,
      nav: false,
    },
    1300: {
      items: 4,
      nav: false,
    },
  },
});

// artist list carousel
$(".artist-list").owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 2000,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 2,
      nav: false,
    },
    480: {
      items: 3,
      nav: false,
    },
    600: {
      items: 3,
      nav: false,
    },
    1000: {
      items: 4,
      nav: false,
    },
    1280: {
      items: 4,
      nav: false,
    },
  },
});
