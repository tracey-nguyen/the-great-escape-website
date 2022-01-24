document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '.splide', {
    type: 'slide',
    perPage: 3,
    pagination: false,
    focus: 'center',
    rewind: true,
    breakpoints: {
      1056: {
        perPage: 2,
       
      },
      764: {
        perPage: 1,
    
      },
    },
  }
  ).mount();
});