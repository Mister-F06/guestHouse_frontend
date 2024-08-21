<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-light fixed-top shadow-lg">
      <div class="container">
        <a class="navbar-brand" href="/">
          <img src="../../assets/logo.png" alt="" style="width: 100px" />
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          @click="toggleMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse"
          id="navbarNav"
          :class="{ show: isMenuOpen }"
        >
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link click-scroll" href="#section_1">Accueil</a>
            </li>

            <li class="nav-item">
              <a class="nav-link click-scroll" href="#section_4">A propos</a>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link click-scroll" href="#section_3">Hébergement</a>
              <!-- <a class="nav-link dropdown-toggle click-scroll" href="#section_3" id="navbarLightDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Hébergement</a> -->
            </li>
            <li class="nav-item">
              <a class="nav-link click-scroll" href="#section_5">Nous contacter</a>
            </li>
            <li class="gerant">
              <a class="nav-link click-scroll" href="/auth/register">Je suis gérant !</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <main>
      <section
        class="hero-section hero-slide sectionBgImg"
        :style="{ backgroundImage: backgroundImage }"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-12 text-center mx-auto">
              <div class="hero-section-text">
                <h1 class="hero-title text-white mt-2">Bienvenue à</h1>
                <h1 class="hero-title text-white mb-4">OFAD GUESTHOUSE</h1>
                <!-- Autres éléments comme le formulaire, boutons, etc. -->
                <!-- Champ de recherche -->
                <div class="search-container">
                  <input
                    type="text"
                    class="search-input"
                    placeholder="Rechercher..."
                    @input="onSearchInput"
                  />
                  <button class="search-button">
                    <i class="fa fa-search"></i>
                  </button>
                </div>

                <!-- Liste des résultats -->
                <div class="search-results mt-4" v-if="data_guesthouse_search.length">
                  <ul>
                    <li v-for="guesthouse in data_guesthouse_search" :key="guesthouse.id">
                      <a :href="`/detail-guesthouse/${guesthouse.slug}`">{{
                        guesthouse.name
                      }}</a>
                    </li>
                  </ul>
                  <!-- <p v-else>Aucun guesthouse trouvé.</p> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="about-section section-padding mt-4" id="section_2">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-5 col-12">
              <small class="section-small-title">OFAD GUESTHOUSE</small>

              <h2 class="mt-2 mb-4">
                <span class="text-muted">Un Séjour </span> Inoubliable
              </h2>

              <h4 class="text-muted mb-3">
                Découvrez l'élégance et le confort de notre établissement, situé au cœur
                du monde
              </h4>

              <p>
                Profitez de nos chambres luxueuses et de notre hospitalité exceptionnelle.
                Chaque détail est pensé pour votre bien-être.
              </p>
            </div>

            <div class="col-lg-3 col-md-5 col-5 mx-lg-auto">
              <img
                src="../../css_mosso/images/sharing-design-ideas-with-family.jpg"
                class="about-image about-image-small img-fluid"
                alt=""
              />
            </div>

            <div class="col-lg-4 col-md-7 col-7">
              <img
                src="../../css_mosso/images/living-room-interior-wall-mockup-warm-tones-with-leather-sofa-which-is-kitchen-3d-rendering.jpg"
                class="about-image img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <!-- Liste guesthouse  -->
      <section class="shop-section section-padding" id="section_3">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-12">
              <small class="section-small-title">OFAD GUESTHOUSE</small>
              <h2 class="mt-2 mb-4">Maison d'<span class="tooplate-red">hôtes</span></h2>
            </div>

            <template v-if="isLoading">
              <div class="col-lg-6 col-12" v-for="n in 4" :key="n">
                <div class="shop-thumb">
                  <div class="shop-image-wrap skeleton skeleton-image"></div>
                  <div class="shop-body">
                    <div class="skeleton skeleton-text"></div>
                    <div class="skeleton skeleton-text" style="width: 60%"></div>
                  </div>
                </div>
              </div>
            </template>

            <template v-else>
              <div
                class="col-lg-4 col-12"
                v-for="item in displayedGuesthouse"
                :key="item.id"
              >
                <div class="shop-thumb">
                  <div class="shop-image-wrap">
                    <a :href="`/detail-guesthouse/${item.slug}`">
                      <div
                        class="shop-image img-fluid"
                        :style="{
                          backgroundImage: `url(${showMediaFromGoogle(
                            item.cover.original_url
                          )})`,
                          width: '600px',
                          height: '300px',
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }"
                      ></div>
                      <!-- <img
                        :src="showMediaFromGoogle(item.cover.original_url)"
                        class="shop-image img-fluid"
                        width="600px"
                        height="300px"
                        alt=""
                      /> -->
                    </a>
                    <div class="shop-icons-wrap">
                      <div class="shop-icons d-flex flex-column align-items-center">
                        <!-- <a href="#" class="shop-icon bi-heart"></a>
                          <a href="#" class="shop-icon bi-bookmark"></a> -->
                        <a href="/">
                          <img src="../../assets/logo.png" alt="" style="width: 50px" />
                        </a>
                      </div>
                      <p class="shop-pricing mb-0 mt-3">
                        <span class="badge custom-badge"
                          >{{ formatNumberCustom(item.price) }} FCFA</span
                        >
                      </p>
                    </div>
                    <div class="shop-btn-wrap">
                      <a
                        :href="`/detail-guesthouse/${item.slug}`"
                        class="shop-btn custom-btn btn d-flex align-items-center"
                        >Plus de détail</a
                      >
                    </div>
                  </div>
                  <div class="shop-body">
                    <h4>{{ item.name }}</h4>
                  </div>
                </div>
              </div>
            </template>

            <div class="col-lg-12 col-12">
              <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                  <li
                    class="page-item"
                    v-for="page in totalPages"
                    :key="page"
                    :class="{ active: currentPage === page }"
                  >
                    <a class="page-link" href="#" @click.prevent="changePage(page)">{{
                      page
                    }}</a>
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
                  Bienvenue à OFAD GUESTHOUSE, votre refuge de confort et de sérénité au
                  cœur du monde. Nous offrons une expérience unique alliant charme local
                  et commodités modernes. Que vous soyez en voyage d'affaires, en vacances
                  ou à la recherche d'un endroit paisible pour vous ressourcer, notre
                  maison d'hôtes est l'endroit idéal pour vous. Notre mission est de
                  rendre votre séjour aussi agréable et mémorable que possible. Chaque
                  chambre est soigneusement aménagée pour offrir le maximum de confort et
                  de détente. Nos services personnalisés et notre équipe dévouée sont là
                  pour répondre à tous vos besoins. Nous sommes fiers de notre accueil
                  chaleureux et de notre engagement envers la satisfaction de nos clients.
                  Chez OFAD GUESTHOUSE, vous êtes plus qu'un simple invité, vous êtes chez
                  vous.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="contact-section" id="section_5">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f9f9f9"
            fill-opacity="1"
            d="M0,96L40,117.3C80,139,160,181,240,186.7C320,192,400,160,480,149.3C560,139,640,149,720,176C800,203,880,245,960,250.7C1040,256,1120,224,1200,229.3C1280,235,1360,277,1400,298.7L1440,320L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
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

                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        class="form-control"
                        placeholder="Jack"
                        required
                      />
                    </div>
                  </div>

                  <div class="col-lg-6 col-md-6 col-12">
                    <div class="input-group align-items-center">
                      <label for="last-name">Prénoms</label>

                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        class="form-control"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div class="input-group align-items-center">
                  <label for="email">Adresse email</label>

                  <input
                    type="email"
                    name="email"
                    id="email"
                    pattern="[^ @]*@[^ @]*"
                    class="form-control"
                    placeholder="Jackdoe@gmail.com"
                    required
                  />
                </div>

                <div class="input-group textarea-group">
                  <label for="message">Message</label>

                  <textarea
                    name="message"
                    rows="6"
                    class="form-control"
                    id="message"
                    placeholder="Comment pouvons-nous vous aider ?"
                  ></textarea>
                </div>

                <div class="col-lg-3 col-md-4 col-6">
                  <button type="submit" class="form-control">Envoyer</button>
                </div>
              </form>
            </div>

            <div class="col-lg-6 col-12 mt-5 mt-lg-0">
              <div class="custom-block">
                <p style="color: black">
                  Bienvenue à OFAD GUESTHOUSE, votre havre de confort et de sérénité.
                  Située en plein cœur du monde, notre maison d'hôtes allie charme
                  authentique et équipements modernes pour vous offrir une expérience
                  inoubliable.
                </p>
                <h3 class="text-black mt-3 mb-2">Nous joindre</h3>

                <div class="d-flex flex-wrap">
                  <p class="text-black mb-2 me-4">
                    <i class="contact-icon bi-telephone me-1"></i>

                    <a href="tel: +2296565-6565" class="text-black"> +2296565-6565 </a>
                  </p>

                  <p class="text-white">
                    <i class="contact-icon bi-envelope me-1"></i>

                    <a href="mailto:info@ofad-gueshouse.com" class="text-black">
                      info@ofad-gueshouse.com
                    </a>
                  </p>
                </div>
                <div
                  class="col-lg-6 col-md-7 copyright-text-wrap col-12 d-flex flex-wrap align-items-center mt-4 ms-auto"
                >
                  <ul class="social-icon">
                    <li class="social-icon-item">
                      <a
                        href="#"
                        class="social-icon-link social-icon-twitter bi-twitter"
                      ></a>
                    </li>

                    <li class="social-icon-item">
                      <a
                        href="#"
                        class="social-icon-link social-icon-facebook bi-facebook"
                      ></a>
                    </li>

                    <li class="social-icon-item">
                      <a
                        href="#"
                        class="social-icon-link social-icon-instagram bi-instagram"
                      ></a>
                    </li>

                    <li class="social-icon-item">
                      <a
                        href="#"
                        class="social-icon-link social-icon-pinterest bi-pinterest"
                      ></a>
                    </li>

                    <li class="social-icon-item">
                      <a
                        href="#"
                        class="social-icon-link social-icon-whatsapp bi-whatsapp"
                      ></a>
                    </li>
                  </ul>
                </div>

                <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d638855.3464034839!2d2.0026331471709424!3d6.841961819609705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x102354e509f894f7%3A0xc8fde921f89849f6!2sCotonou!5e0!3m2!1sfr!2sbj!4v1720895149084!5m2!1sfr!2sbj"  width="100%" height="220" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> -->
              </div>
            </div>
          </div>
        </div>
      </section>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#36363e"
          fill-opacity="1"
          d="M0,96L40,117.3C80,139,160,181,240,186.7C320,192,400,160,480,149.3C560,139,640,149,720,176C800,203,880,245,960,250.7C1040,256,1120,224,1200,229.3C1280,235,1360,277,1400,298.7L1440,320L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </main>

    <footer class="site-footer section-padding pb-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-5 col-12 mb-3">
            <h3><a href="/" class="custom-link mb-1">OFAD GUESTHOUSE</a></h3>

            <p class="text-white">
              Profitez de nos chambres luxueuses et de notre hospitalité exceptionnelle.
              Chaque détail est pensé pour votre bien-être.
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

              <a href="tel: +2296565-6565" class="text-white"> +2296565-6565 </a>
            </p>

            <p class="text-white mb-0">
              <i class="bi-envelope me-1"></i>

              <a href="mailto:info@ofad-gueshouse.com" class="text-white">
                info@ofad-gueshouse.com
              </a>
            </p>
          </div>

          <div
            class="col-lg-6 col-md-7 copyright-text-wrap col-12 d-flex flex-wrap align-items-center mt-4 ms-auto"
          >
            <p class="copyright-text mb-0 me-4">Copyright © OFAD GUESTHOUSE</p>

            <ul class="social-icon">
              <li class="social-icon-item">
                <a href="#" class="social-icon-link social-icon-twitter bi-twitter"></a>
              </li>

              <li class="social-icon-item">
                <a href="#" class="social-icon-link social-icon-facebook bi-facebook"></a>
              </li>

              <li class="social-icon-item">
                <a
                  href="#"
                  class="social-icon-link social-icon-instagram bi-instagram"
                ></a>
              </li>

              <li class="social-icon-item">
                <a
                  href="#"
                  class="social-icon-link social-icon-pinterest bi-pinterest"
                ></a>
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
import store from "../../store/index";

export default {
  data() {
    return {
      isMenuOpen: false,
      isLoading: true,
      images: [
        require("../../css_mosso/images/slideshow/white-wall-living-room-have-sofa-decoration-3d-rendering.jpg"),
        require("../../css_mosso/images/slideshow/interior-wall-mockup-with-sofa-cabinet-living-room-with-empty-white-wall-background-3d-rendering.jpg"),
        require("../../css_mosso/images/slideshow/wood-sideboard-living-room-interior-with-copy-space.jpg"),
      ],
      currentImageIndex: 0,
      intervalId: null,
      fileList: [],
      data_guesthouse: [],
      data_guesthouse_search: [],
      itemsPerPage: 6,
      currentPage: 1,
      searchTimeout: null,
    };
  },
  mounted() {
    this.startSlideshow();
    this.listGuesthouse();
    this.listGuesthouseSearch();
  },
  methods: {
    onSearchInput(event) {
      this.searchKeyword = event.target.value;
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
      }

      // On configure un nouveau timeout pour lancer la recherche après 500ms
      this.searchTimeout = setTimeout(() => {
        this.listGuesthouseSearch(this.searchKeyword);
      }, 500);
    },

    async listGuesthouseSearch(keyword = "") {
      try {
        const response = await store.dispatch("guesthouse/listguesthouse");
        if (keyword) {
          this.data_guesthouse_search = response.data.filter((guesthouse) =>
            guesthouse.name.toLowerCase().includes(keyword.toLowerCase())
          );
        }
        this.isLoading = false;
      } catch (error) {
        console.log(error);
      }
    },

    showMediaFromGoogle(url) {
      let parsedUrl = new URL(url);
      let queryParams = new URLSearchParams(parsedUrl.search);
      return "https://drive.google.com/thumbnail?id=" + queryParams.get("id");
    },
    async listGuesthouse() {
      try {
        const response = await store.dispatch("guesthouse/listguesthouse");
        this.data_guesthouse = response.data;
        this.isLoading = false;
      } catch (error) {
        console.log(error);
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
      return numberString.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
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
    },
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
  },
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
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
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
  content: "";
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
.skeleton {
  background-color: #ddd !important;
  background-image: linear-gradient(
    0deg,
    transparent,
    transparent 50%,
    #ddd 0,
    #ddd
  ) !important;
  border-radius: 15px;
  margin-bottom: 10px;
  position: relative;
  overflow: hidden;
  width: 500px !important;
}

.skeleton::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 500px !important;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.8) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

.skeleton-text {
  height: 20px;
  width: 100%;
}

.skeleton-image {
  height: 300px;
  width: 600px;
}
.gerant {
  background: #ffd74f;
  border-radius: 50px !important;
}
.search-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.search-input {
  width: 100%;
  max-width: 500px;
  padding: 10px 20px;
  border-radius: 25px;
  border: 1px solid #ccc;
  font-size: 16px;
  outline: none;
}

.search-input:focus {
  border-color: #007bff; /* Couleur de la bordure lorsque l'input est sélectionné */
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.2); /* Ombre portée */
}

.search-button {
  background-color: #007bff;
  border: none;
  border-radius: 25px;
  padding: 10px 20px;
  margin-left: -5px; /* Pour que le bouton soit attaché à l'input */
  cursor: pointer;
  color: white;
  font-size: 16px;
}

.search-button i {
  margin-right: 5px;
}

.search-button:hover {
  background-color: #0056b3; /* Couleur de fond du bouton au survol */
}
.search-results {
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 5px;
  padding: 10px;
  max-height: 200px;
  overflow-y: auto;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.search-results ul {
  list-style-type: none;
  padding: 0;
}

.search-results li {
  padding: 8px 0;
  border-bottom: 1px solid #ccc;
}

.search-results li:last-child {
  border-bottom: none;
}

.search-results p {
  color: #999;
}
.custom-block {
  background-color: white !important;
}
</style>
