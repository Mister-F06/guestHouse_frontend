// Importez jQuery
import $ from 'jquery';

export default {
  mounted() {
    // Initialisation du diaporama avec backstretch
    $(this.$refs.heroSlide).backstretch([
      require("../../css_mosso/images/slideshow/white-wall-living-room-have-sofa-decoration-3d-rendering.jpg"),
      require("../../css_mosso/images/slideshow/interior-wall-mockup-with-sofa-cabinet-living-room-with-empty-white-wall-background-3d-rendering.jpg"),
      require("../../css_mosso/images/slideshow/wood-sideboard-living-room-interior-with-copy-space.jpg")
    ], { duration: 2000, fade: 750 });

    // Initialisation du carrousel de critiques avec Owl Carousel
    $(this.$refs.reviewsCarousel).owlCarousel({
      items: 3,
      loop: true,
      dots: false,
      nav: true,
      autoplay: true,
      margin: 30,
      responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 3 }
      }
    });

    // Défilement fluide pour les liens personnalisés
    $('.smoothscroll').click(function() {
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();

      scrollToDiv(elWrapped, header_height);
      return false;

      function scrollToDiv(element, navheight) {
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop - navheight;

        $('body,html').animate({
          scrollTop: totalScroll
        }, 300);
      }
    });
  }
}
