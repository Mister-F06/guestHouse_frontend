<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-light fixed-top shadow-lg">
            <div class="container">
                <a class="navbar-brand" href="index.html">
                 <img src="../../assets/logo.png" alt="" style="width: 100px;">
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav"  @click="toggleMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav"  :class="{ show: isMenuOpen }">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link click-scroll" href="#section_1">Accueil</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link click-scroll" href="#section_2">A propos</a>
                        </li>

                        <li class="nav-item dropdown">
                          <a class="nav-link click-scroll" href="#section_3">Hébergement</a>
                            <!-- <a class="nav-link dropdown-toggle click-scroll" href="#section_3" id="navbarLightDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Hébergement</a> -->
                        </li> 
                        <li class="nav-item">
                            <a class="nav-link click-scroll" href="#section_5">Nous contacter</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link click-scroll" href="/auth/register">Je suis gérant !</a>
                        </li>
                    </ul>
                </div>
            </div>
    </nav>

    <main>

        <section class="hero-section hero-slide sectionBgImg" :style="{ backgroundImage: backgroundImage }">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 col-12 text-center mx-auto">
                <div class="hero-section-text">
                  <h1 class="hero-title text-white mt-2">Bienvenue à</h1>
                  <h1 class="hero-title text-white mb-4">OFAD GUESTHOUSE</h1>
                  
                  <!-- Autres éléments comme le formulaire, boutons, etc. -->
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="about-section section-padding" id="section_2">
            <div class="container">
                <div class="row align-items-center">

                    <div class="col-lg-5 col-12">
                        <small class="section-small-title">OFAD GUESTHOUSE</small>

                        <h2 class="mt-2 mb-4"><span class="text-muted">Un Séjour </span> Inoubliable</h2>

                        <h4 class="text-muted mb-3">Découvrez l'élégance et le confort de notre établissement, situé au cœur du monde</h4>

                        <p>Profitez de nos chambres luxueuses et de notre hospitalité exceptionnelle. Chaque détail est pensé pour votre bien-être.</p>
                    </div>

                    <div class="col-lg-3 col-md-5 col-5 mx-lg-auto">
                        <img src="../../css_mosso/images/sharing-design-ideas-with-family.jpg" class="about-image about-image-small img-fluid" alt="">
                    </div>

                    <div class="col-lg-4 col-md-7 col-7">
                        <img src="../../css_mosso/images/living-room-interior-wall-mockup-warm-tones-with-leather-sofa-which-is-kitchen-3d-rendering.jpg" class="about-image img-fluid" alt="">
                    </div>

                </div>
            </div>
        </section>


        <section class="featured-section section-padding">
            <div class="container">
                <div class="row">

                    <div class="col-lg-5 col-12">
                        <div class="custom-block featured-custom-block">
                            <h2 class="mt-2 mb-4">Ouvert</h2>

                            <div class="d-flex">
                                <i class="featured-icon bi-clock me-3"></i>

                                <div>
                                    <p class="mb-2">
                                        Du - Lundi ~ Samedi
                                        <strong class="d-inline">
                                          8h - 23h
                                        </strong>
                                    </p>
                                    <p>Dimanche ~ 
                                        <strong class="d-inline">
                                           10h - 20h
                                        </strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>


        <section class="shop-section section-padding" id="section_3">
            <div class="container">
                <div class="row">

                    <div class="col-lg-12 col-12">
                        <small class="section-small-title">OFAD GUESTHOUSE</small>

                        <h2 class="mt-2 mb-4"><span class="tooplate-red">En</span> vedette</h2>
                    </div>

                    <div class="col-lg-6 col-12" v-for="item in displayedGuesthouse" :key="item.id">
                        <div class="shop-thumb">
                            <div class="shop-image-wrap">
                                <a href="/detail-guesthouse">
                                    <img :src="showMediaFromGoogle(item.cover)" class="shop-image img-fluid" width="600px" height="300px" alt="">
                                </a>

                                <div class="shop-icons-wrap">
                                    <div class="shop-icons d-flex flex-column align-items-center">
                                        <a href="#" class="shop-icon bi-heart"></a>

                                        <a href="#" class="shop-icon bi-bookmark"></a>
                                    </div>

                                    <p class="shop-pricing mb-0 mt-3">
                                        <span class="badge custom-badge">{{ formatNumberCustom(item.price) }} FCFA</span>
                                    </p>
                                </div>

                                <div class="shop-btn-wrap">
                                    <a href="/detail-guesthouse" class="shop-btn custom-btn btn d-flex align-items-center">Plus de détail</a>
                                </div>
                            </div>

                            <div class="shop-body">
                                <h4>{{ item.name }}</h4>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 col-12 loading-container" v-if="Object.keys(displayedGuesthouse).length == 0">
                        <div class="spinner"></div>
                        <p>Chargement des données, veuillez patienter...</p>
                    </div>

                    <div class="col-lg-12 col-12">
                        <nav aria-label="Page navigation example">
                            <ul class="pagination justify-content-center">
                                <li class="page-item" v-for="page in totalPages" :key="page" :class="{ active: currentPage === page }">
                                    <a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </section>


        <section class="reviews-section section-padding pb-0" id="section_4">
            <div class="container">
                <div class="row">

                    <div class="col-lg-12 col-12">
                        <small class="section-small-title">OFAD GUESTHOUSE</small>

                        <h2 class="mt-2 mb-4">À propos</h2>

                        <div class=" ">
                            <p>
                                Bienvenue à OFAD GUESTHOUSE, votre refuge de confort et de sérénité au cœur du monde. Nous offrons une expérience unique alliant charme local et commodités modernes. Que vous soyez en voyage d'affaires, en vacances ou à la recherche d'un endroit paisible pour vous ressourcer, notre maison d'hôtes est l'endroit idéal pour vous.
                                Notre mission est de rendre votre séjour aussi agréable et mémorable que possible. Chaque chambre est soigneusement aménagée pour offrir le maximum de confort et de détente. Nos services personnalisés et notre équipe dévouée sont là pour répondre à tous vos besoins.
                                Nous sommes fiers de notre accueil chaleureux et de notre engagement envers la satisfaction de nos clients. Chez OFAD GUESTHOUSE, vous êtes plus qu'un simple invité, vous êtes chez vous.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>


        <section class="contact-section" id="section_5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f9f9f9" fill-opacity="1" d="M0,96L40,117.3C80,139,160,181,240,186.7C320,192,400,160,480,149.3C560,139,640,149,720,176C800,203,880,245,960,250.7C1040,256,1120,224,1200,229.3C1280,235,1360,277,1400,298.7L1440,320L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
            <div class="container">
                <div class="row">

                    <div class="col-lg-12 col-12">
                        <small class="section-small-title">OFAD GUESTHOUSE</small>

                        <h2 class="mb-4">Nous contacter</h2>
                    </div>

                    <div class="col-lg-6 col-12">
                        <form class="custom-form contact-form" action="#" method="post" role="form">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-12">
                                    <div class="input-group align-items-center">
                                        <label for="first-name">Nom</label>

                                        <input type="text" name="first-name" id="first-name" class="form-control" placeholder="Jack" required>
                                    </div>
                                </div>

                                <div class="col-lg-6 col-md-6 col-12">
                                    <div class="input-group align-items-center">
                                        <label for="last-name">Prénoms</label>

                                        <input type="text" name="last-name" id="last-name" class="form-control" placeholder="Doe" required>
                                    </div>
                                </div>
                            </div>

                            <div class="input-group align-items-center">
                                <label for="email">Adresse email</label>

                                  <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" class="form-control" placeholder="Jackdoe@gmail.com" required>
                            </div>

                            <div class="input-group textarea-group">
                                <label for="message">Message</label>

                                <textarea name="message" rows="6" class="form-control" id="message" placeholder="Comment pouvons-nous vous aider ?"></textarea>
                            </div>

                            <div class="col-lg-3 col-md-4 col-6">
                                <button type="submit" class="form-control">Envoyer</button>
                            </div>
                        </form>
                    </div>

                    <div class="col-lg-6 col-12 mt-5 mt-lg-0">
                        <div class="custom-block">

                            <h3 class="text-white mb-2">Adresse</h3>

                            <p class="text-white mb-2">
                                <i class="contact-icon bi-geo-alt me-1"></i>

                               Cotonou, Benin
                            </p>

                            <h3 class="text-white mt-3 mb-2">Nous joindre</h3>

                            <div class="d-flex flex-wrap">
                                <p class="text-white mb-2 me-4">
                                    <i class="contact-icon bi-telephone me-1"></i>

                                    <a href="tel: +2296565-6565" class="text-white">
                                        +2296565-6565
                                    </a>
                                </p>

                                <p class="text-white">
                                    <i class="contact-icon bi-envelope me-1"></i>

                                    <a href="mailto:info@ofad-gueshouse.com" class="text-white">
                                        info@ofad-gueshouse.com
                                    </a>
                                </p>
                            </div>

                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d638855.3464034839!2d2.0026331471709424!3d6.841961819609705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x102354e509f894f7%3A0xc8fde921f89849f6!2sCotonou!5e0!3m2!1sfr!2sbj!4v1720895149084!5m2!1sfr!2sbj"  width="100%" height="220" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#36363e" fill-opacity="1" d="M0,96L40,117.3C80,139,160,181,240,186.7C320,192,400,160,480,149.3C560,139,640,149,720,176C800,203,880,245,960,250.7C1040,256,1120,224,1200,229.3C1280,235,1360,277,1400,298.7L1440,320L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
    </main>

    <footer class="site-footer section-padding pb-5">
        <div class="container">
            <div class="row">

                <div class="col-lg-3 col-md-5 col-12 mb-3">
                    <h3><a href="index.html" class="custom-link mb-1">OFAD GUESTHOUSE</a></h3>

                    <p class="text-white">
                        Profitez de nos chambres luxueuses et de notre hospitalité exceptionnelle. Chaque détail est pensé pour votre bien-être.
                    </p>
                </div>

                <div class="col-lg-3 col-md-3 col-12 ms-lg-auto mb-3">
                    <h3 class="text-white mb-3">Adresse</h3>

                    <p class="text-white mt-2">
                        <i class="bi-geo-alt"></i>
                        Cotonou, Bénin
                    </p>
                </div>

                <div class="col-lg-3 col-md-4 col-12 mb-3">
                    <h3 class="text-white mb-3">Nous joindre</h3>

                        <p class="text-white mb-1">
                            <i class="bi-telephone me-1"></i>

                            <a href="tel: +2296565-6565" class="text-white">
                                +2296565-6565
                            </a>
                        </p>

                        <p class="text-white mb-0">
                            <i class="bi-envelope me-1"></i>

                            <a href="mailto:info@ofad-gueshouse.com" class="text-white">
                                info@ofad-gueshouse.com
                            </a>
                        </p>
                </div>

                <div class="col-lg-6 col-md-7 copyright-text-wrap col-12 d-flex flex-wrap align-items-center mt-4 ms-auto">
                    <p class="copyright-text mb-0 me-4">Copyright © OFAD GUESTHOUSE</p>

                    <ul class="social-icon">
                        <li class="social-icon-item">
                            <a href="#" class="social-icon-link social-icon-twitter bi-twitter"></a>
                        </li>

                        <li class="social-icon-item">
                            <a href="#" class="social-icon-link social-icon-facebook bi-facebook"></a>
                        </li>

                        <li class="social-icon-item">
                            <a href="#" class="social-icon-link social-icon-instagram bi-instagram"></a>
                        </li>

                        <li class="social-icon-item">
                            <a href="#" class="social-icon-link social-icon-pinterest bi-pinterest"></a>
                        </li>

                        <li class="social-icon-item">
                            <a href="#" class="social-icon-link social-icon-whatsapp bi-whatsapp"></a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </footer>

  </div>
</template>

<script>
import store from '../../store/index'

export default {
  data() {
    return {
      isMenuOpen: false,
      images: [
        require('../../css_mosso/images/slideshow/white-wall-living-room-have-sofa-decoration-3d-rendering.jpg'),
        require('../../css_mosso/images/slideshow/interior-wall-mockup-with-sofa-cabinet-living-room-with-empty-white-wall-background-3d-rendering.jpg'),
        require('../../css_mosso/images/slideshow/wood-sideboard-living-room-interior-with-copy-space.jpg')
      ],
      currentImageIndex: 0,
      intervalId: null,
      fileList: [],
      data_guesthouse: [],
      itemsPerPage: 5,
      currentPage: 1,
    };
  },
  mounted() {
    this.startSlideshow();
    this.listGuesthouse();
  },
  methods: {
    showMediaFromGoogle(url) {
      let parsedUrl = new URL(url);
      let queryParams = new URLSearchParams(parsedUrl.search);
      return "https://drive.google.com/thumbnail?id=" + queryParams.get('id');
    },
    async listGuesthouse() {
      try {
        const response = await store.dispatch("guesthouse/listguesthouse");
        this.data_guesthouse = response.data;
      } catch (error) {
        this.$toast.error("Liste introuvable", {
          timeout: 2000
        });
      }
    },
    changePage(page) {
      this.currentPage = page;
    },
    startSlideshow() {
      this.intervalId = setInterval(() => {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
      }, 3000);
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    formatNumberCustom(number) {
        let numberString = number.toString();
        return numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    }

  },
  computed: {
    backgroundImage() {
      return `url(${this.images[this.currentImageIndex]})`;
    },
    start() {
      return (this.currentPage - 1) * this.itemsPerPage;
    },
    end() {
      return this.start + this.itemsPerPage;
    },
    displayedGuesthouse() {
      return this.data_guesthouse.slice(this.start, this.end);
    },
    totalPages() {
      return Math.ceil(this.data_guesthouse.length / this.itemsPerPage);
    }
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
  }
};
</script>
<style scoped>
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
}

.spinner {
  border: 8px solid #f3f3f3;
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.hero-section {
  height: 100vh; /* Hauteur de la section ajustée selon vos besoins */
  background-size: cover;
  background-position: center;
  /* Autres styles */
}
/* Pour l'icône hamburger */
.navbar-toggler {
  border: none;
  outline: none;
}

.navbar-toggler-icon {
  display: inline-block;
  width: 30px;
  height: 3px;
  background-color: #000;
  transition: all 0.3s;
  position: relative;
}

.navbar-toggler-icon::before,
.navbar-toggler-icon::after {
  content: '';
  display: inline-block;
  width: 30px;
  height: 3px;
  background-color: #000;
  transition: all 0.3s;
  position: absolute;
  left: 0;
}

.navbar-toggler-icon::before {
  top: -10px;
}

.navbar-toggler-icon::after {
  top: 10px;
}

.navbar-toggler.collapsed .navbar-toggler-icon {
  background-color: transparent;
}

.navbar-toggler.collapsed .navbar-toggler-icon::before {
  transform: rotate(45deg);
  top: 0;
}

.navbar-toggler.collapsed .navbar-toggler-icon::after {
  transform: rotate(-45deg);
  top: 0;
}

.collapse.show {
  display: block !important;
}

</style>
