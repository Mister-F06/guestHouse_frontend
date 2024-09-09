<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-light fixed-top shadow-lg">
      <div class="container">
        <a class="navbar-brand" href="/">
          <img src="../../assets/logo.png" alt="" style="width: 60px" />
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
              <a class="nav-link click-scroll" href="/#section_1">Accueil</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link click-scroll" href="">Hébergement</a>
              <!-- <a class="nav-link dropdown-toggle click-scroll" href="#section_3" id="navbarLightDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Hébergement</a> -->
            </li>
            <li class="nav-item">
              <a class="nav-link click-scroll" href="/#section_5">Nous contacter</a>
            </li>
            <li>
              <a class="nav-link click-scroll gerant" href="/auth/register"
                >Je suis gérant !</a
              >
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
              <div class="hero-section-text" style="margin-top: -4rem">
                <h1 class="hero-title text-white">Réservez votre prochain séjour ici</h1>
                <!-- Autres éléments comme le formulaire, boutons, etc. -->
                <!-- Champ de recherche -->
                <div class="search-container">
                  <input
                    type="text"
                    v-model="searchKeyword"
                    class="search-input"
                    placeholder="Mot clé..."
                    @input="onSearchInput"
                  />
                  <input
                    type="text"
                    class="search-input"
                    placeholder="Ville..."
                    v-model="searchCity"
                    @input="onSearchInput"
                  />
                  <input
                    type="number"
                    class="search-input"
                    placeholder="Montant..."
                    v-model="searchAmount"
                    @input="onSearchInput"
                  />
                  <button
                    class="search-button"
                    @click="listGuesthouseSearch()"
                    v-if="!this.loader"
                  >
                    <i class="fa fa-search"></i>
                    <span class="search-text">Rechercher</span>
                  </button>

                  <button class="search-button button is-loading" v-if="this.loader">
                    <i class="fa fa-search"></i>
                    <span class="search-text">...</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="container mt-5">
        <button class="filter-button" v-b-modal.modal-6 native-type="submit">
          <i class="fa fa-filter"></i> Filtrer
        </button>

        <!-- Modal de filtre -->
        <b-modal id="modal-6" title="Filtres" size="lg" hide-footer>
          <div class="filter-modal-content">
            <div class="filter-section">
              <h5>Nombre de chambres</h5>
              <input
                type="number"
                v-model.number="filters.bedrooms_nbr"
                placeholder="Entrez le nombre de chambres"
                min="0"
              />
            </div>

            <div class="filter-section">
              <h5>Nombre de lits</h5>
              <input
                type="number"
                v-model.number="filters.beds_nbr"
                placeholder="Entrez le nombre de lits"
                min="0"
              />
            </div>

            <div class="filter-section">
              <h5>Nombre de toilettes</h5>
              <input
                type="number"
                v-model.number="filters.toilets_nbr"
                placeholder="Entrez le nombre de toilettes"
                min="0"
              />
            </div>

            <div class="filter-section">
              <h5>Nombre de salles de bain</h5>
              <input
                type="number"
                v-model.number="filters.bathrooms_nbr"
                placeholder="Entrez le nombre de salles de bain"
                min="0"
              />
            </div>

            <div class="filter-section">
              <h5>Équipements</h5>
              <label>
                <input type="checkbox" v-model="filters.has_kitchen" />
                Cuisine
              </label>
              <label>
                <input type="checkbox" v-model="filters.has_pool" />
                Piscine
              </label>
              <label>
                <input type="checkbox" v-model="filters.has_air_conditionner" />
                Air conditionné
              </label>
              <label>
                <input type="checkbox" v-model="filters.has_jacuzzi" />
                Jacuzzi
              </label>
              <label>
                <input type="checkbox" v-model="filters.has_washing_machine" />
                Machine à laver
              </label>
              <label>
                <input type="checkbox" v-model="filters.has_parking" />
                Parking
              </label>
              <label>
                <input type="checkbox" v-model="filters.has_car" />
                Voiture
              </label>
            </div>

            <!-- Bouton Appliquer -->
            <div class="filter-actions">
              <button
                class="btn btn-primary"
                @click="searchGuesthouse"
                v-if="!this.loader"
              >
                Appliquer les filtres
              </button>
              <button
                class="btn btn-primary"
                @click="searchGuesthouse"
                v-if="this.loader"
              >
               Chargement...
              </button>
            </div>
          </div>
        </b-modal>
      </div>

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
                v-if="data_guesthouse_search.length === 0"
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
                          >{{ formatNumberCustom(item.price) }} FCFA / 24h</span
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
              <div
                v-if="data_guesthouse_search.length != 0"
                class="col-lg-4 col-12"
                v-for="item in data_guesthouse_search"
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
                          >{{ formatNumberCustom(item.price) }} FCFA / 24h</span
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
      searchCity: "",
      searchAmount: "",
      searchKeyword: "",
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
      itemsPerPage: 9,
      currentPage: 1,
      searchTimeout: null,
      loader: false,
      showFilterModal: false,
      filters: {
        bedrooms_nbr: null,
        beds_nbr: null,
        toilets_nbr: null,
        bathrooms_nbr: null,
        has_kitchen: 0,
        has_pool: 0,
        has_air_conditionner: 0,
        has_jacuzzi: 0,
        has_washing_machine: 0,
        has_parking: 0,
        has_car: 0,
      },
    };
  },
  mounted() {
    this.startSlideshow();
    this.listGuesthouse();
  },
  methods: {
    closeFilterModal() {
      this.showFilterModal = false;
    },
    async listGuesthouseSearch() {
      try {
        this.loader = true;
        const response = await store.dispatch("guesthouse/listguesthouse");
        this.data_guesthouse_search = response.data.filter((guesthouse) => {
          const matchesCity = this.searchCity
            ? guesthouse.address.toLowerCase().includes(this.searchCity.toLowerCase())
            : true;
          const matchesAmount = this.searchAmount
            ? guesthouse.price <= parseFloat(this.searchAmount)
            : true;
          const matchesKeyword = this.searchKeyword
            ? guesthouse.name.toLowerCase().includes(this.searchKeyword.toLowerCase())
            : true;

          return matchesCity && matchesAmount && matchesKeyword;
        });
        this.loader = false;

        this.isLoading = false;
      } catch (error) {
        console.log(error);
        this.loader = false;
      }
    },
    async searchGuesthouse() {
      try {
        this.loader = true;

        const response = await store.dispatch(
          "guesthouse/guesthouseSearch",
          this.filters
        );
        this.loader = false;

        this.data_guesthouse_search = response.data;
        this.$bvModal.hide("modal-6");
        this.loader = false;
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
  border-color: #ffd74f; /* Couleur de la bordure lorsque l'input est sélectionné */
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.2); /* Ombre portée */
}

.search-button {
  background-color: #ffd74f;
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
  background-color: #ffd74f; /* Couleur de fond du bouton au survol */
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
.search-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px; /* Espacement entre les éléments */
  /* flex-wrap: wrap; */
}
@media screen and (max-width: 992px) {
  .search-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px; /* Espacement entre les éléments */
    flex-wrap: wrap;
  }
}
.search-input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
}

.search-button {
  padding: 10px 20px;
  border: none;
  background-color: #ffd74f;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.search-button .search-text {
  margin-left: 8px; /* Espacement entre l'icône et le texte */
}

.search-button:hover {
  background-color: #ffd74f;
}
</style>

<style scoped>
.filter-button {
  background-color: #ffd74f;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.filter-button i {
  margin-right: 8px;
}

.filter-modal-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.filter-section {
  margin-bottom: 1rem;
}

.filter-section h5 {
  margin-bottom: 0.5rem;
}

.filter-section input[type="number"] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.filter-section label {
  display: block;
  margin-bottom: 0.5rem;
}

.filter-actions {
  text-align: right;
}
</style>
