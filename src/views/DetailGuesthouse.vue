<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-light fixed-top shadow-lg">
      <div class="container">
        <a class="navbar-brand" href="/">
          <img src="../assets/logo.png" alt="" style="width: 60px" />
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
            <li class="nav-item dropdown">
              <a class="nav-link click-scroll" href="/">Hébergement</a>
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
    <div class="mt-5 mb-5 container" style="margin-top: 4rem !important">
      <div
        v-if="isLoading"
        class="skeleton-loader mb-3"
        style="width: 100%; height: 40px; border-radius: 10px"
      ></div>
      <div class="mb-5" v-else>
        <p class="title">{{ this.data_guesthouse.name }}</p>
        <span class="tag is-danger mr-1 text-white"
          >{{ formatNumberCustom(this.data_guesthouse.price) }} FCFA / 24h</span
        >
        <span class="tag is-info mr-1">Conviviale </span>
        <span class="tag is-success mr-1">Confortable </span>
        <span class="tag is-warning mr-1">Intime </span>
      </div>
      <div>
        <strong style="font-size: 2rem">Description</strong>
        <p style="text-align: left">
          {{ truncatedDescription }}
          <span v-if="isTruncated">...</span>
        </p>
        <button @click="toggleDescription">
          {{ isTruncated ? "Voir plus" : "Voir moins" }}
        </button>
      </div>

      <div class="columns is-multiline">
        <div class="column is-4">
          <div v-if="isLoading">
            <!-- Skeleton loader for images -->
            <div
              class="skeleton-loader"
              style="width: 500px; height: 250px; margin-bottom: 10px"
            ></div>
            <div class="skeleton-loader" style="width: 500px; height: 250px"></div>
          </div>
          <div v-else>
            <img :src="pictures[0]" width="500px" alt="" class="mb-1" />
            <img :src="pictures[1]" width="500px" alt="" />
          </div>
        </div>
        <div class="column is-4">
          <div v-if="isLoading">
            <!-- Skeleton loader for images -->
            <div
              class="skeleton-loader"
              style="width: 500px; height: 250px; margin-bottom: 10px"
            ></div>
            <div class="skeleton-loader" style="width: 500px; height: 250px"></div>
          </div>
          <div v-else>
            <img :src="pictures[2]" width="500px" alt="" class="mb-1" />
            <img :src="pictures[3]" width="500px" alt="" />
            <div style="text-align: right">
              <a v-b-modal.modal-5 variant="primary">
                <i class="fa fa-eye is-small" style="font-size: small; color: blue"></i>
                <button>Voir plus</button>
              </a>
            </div>
          </div>
        </div>
        <div class="column is-4">
          <div v-if="isLoading">
            <!-- Skeleton loader for map -->
            <div class="skeleton-loader" style="width: 100%; height: 220px"></div>
            <!-- Skeleton loader for description -->
            <div
              class="skeleton-loader"
              style="width: 100%; height: 50px; margin: 10px 0"
            ></div>
            <div
              class="skeleton-loader"
              style="width: 150px; height: 40px; margin: 20px auto"
            ></div>
          </div>
          <div v-else>
            <iframe
              src="https://www.google.com/maps/embed?..."
              width="100%"
              height="220"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <p>{{ this.data_guesthouse.address }}</p>

            <base-button
              type="primary"
              v-b-modal.modal-6
              native-type="submit"
              class="my-4"
              >Réserver</base-button
            >
          </div>
        </div>
      </div>

      <div v-if="!isLoading">
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <i class="fas fa-home fa-2x"></i>
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">Appartement entier</p>
              </div>
            </div>

            <div class="content">
              <div class="columns is-multiline">
                <div class="column is-4">
                  <i class="fas fa-bed"></i>
                  <span>{{ this.data_guesthouse.beds_nbr }}</span> Chambres
                </div>
                <div class="column is-4">
                  <i class="fas fa-user"></i>
                  <span>{{ this.data_guesthouse.toilets_nbr }}</span> Lits
                </div>
                <div class="column is-4">
                  <i class="fas fa-bath"></i>
                  <span>{{ this.data_guesthouse.bathrooms_nbr }}</span> Toilettes
                </div>
                <!-- Cuisine -->
                <div
                  class="column is-4"
                  :class="{
                    'has-text-success': data_guesthouse.has_kitchen,
                    'has-text-danger': !data_guesthouse.has_kitchen,
                  }"
                >
                  <i class="fas fa-utensils"></i> Cuisine
                </div>

                <!-- Vue -->
                <div class="column is-4"><i class="fas fa-eye"></i> Vue</div>

                <!-- Jardin -->
                <div class="column is-4"><i class="fas fa-tree"></i> Jardin</div>

                <!-- Piscine -->
                <div
                  class="column is-4"
                  :class="{
                    'has-text-success': data_guesthouse.has_pool,
                    'has-text-danger': !data_guesthouse.has_pool,
                  }"
                >
                  <i class="fas fa-swimming-pool"></i> Piscine
                </div>

                <!-- Lave-linge -->
                <div
                  class="column is-4"
                  :class="{
                    'has-text-success': data_guesthouse.has_washing_machine,
                    'has-text-danger': !data_guesthouse.has_washing_machine,
                  }"
                >
                  <i class="fas fa-bath"></i> Lave-linge
                </div>

                <!-- Connexion Wi-Fi gratuite (suppression du doublon) -->
                <div class="column is-4">
                  <i class="fas fa-wifi"></i> Connexion Wi-Fi gratuite
                </div>

                <!-- Terrasse -->
                <div class="column is-4">
                  <i class="fas fa-umbrella-beach"></i> Terrasse
                </div>

                <!-- Parking -->
                <div
                  class="column is-4"
                  :class="{
                    'has-text-success': data_guesthouse.has_parking,
                    'has-text-danger': !data_guesthouse.has_parking,
                  }"
                >
                  <i class="fas fa-parking"></i> Parking gratuit
                </div>

                <!-- Bar -->
                <div class="column is-4">
                  <i class="fas fa-glass-martini-alt"></i> Bar
                </div>

                <!-- Air Conditionné -->
                <div
                  class="column is-4"
                  :class="{
                    'has-text-success': data_guesthouse.has_air_conditionner,
                    'has-text-danger': !data_guesthouse.has_air_conditionner,
                  }"
                >
                  <i class="fas fa-snowflake"></i> Climatisation
                </div>

                <!-- Jacuzzi -->
                <div
                  class="column is-4"
                  :class="{
                    'has-text-success': data_guesthouse.has_jacuzzi,
                    'has-text-danger': !data_guesthouse.has_jacuzzi,
                  }"
                >
                  <i class="fas fa-hot-tub"></i> Jacuzzi
                </div>

                <!-- Voiture -->
                <div
                  class="column is-4"
                  :class="{
                    'has-text-success': data_guesthouse.has_car,
                    'has-text-danger': !data_guesthouse.has_car,
                  }"
                >
                  <i class="fas fa-car"></i> Voiture disponible
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- modal img  -->
    <!-- Modal en plein écran -->
    <b-modal
      id="modal-5"
      title="Plus d'image"
      hide-footer
      :no-close-on-backdrop="true"
      :no-close-on-esc="true"
      class="fullscreen-modal"
      size="lg"
      @show="makeModalFullscreen"
    >
      <!-- Conteneur pour les images avec défilement horizontal -->
      <div
        class="image-slider d-flex"
        style="overflow-x: scroll; white-space: nowrap; height: 80%"
      >
        <div
          v-for="(item, index) in pictures"
          :key="index"
          class="image-item"
          style="flex: 0 0 auto"
        >
          <img
            :src="item"
            alt=""
            class="mb-1 zoom-image"
            style="width: 100%; height: 100%; padding: 1rem"
          />
        </div>
      </div>

      <!-- Conteneur pour les vidéos avec défilement horizontal -->
      <div
        class="video-slider d-flex"
        style="overflow-x: scroll; white-space: nowrap; margin-top: 20px; height: 20%"
      >
        <div
          v-for="(item, index) in videos"
          :key="index"
          class="video-item"
          style="flex: 0 0 auto"
        >
          <iframe
            width="300"
            height="200"
            :src="item"
            style="margin-right: 10px"
          ></iframe>
        </div>
      </div>
    </b-modal>

    <!-- Modal  reservation  -->
    <b-modal id="modal-6" title="Réserver Ici" size="lg" hide-footer>
      <section class="section">
        <div class="container">
          <h1 class="title">Dates occupées</h1>

          <div class="calendar-container">
            <div class="calendar-header">
              <button class="button is-small" @click="previousMonth">
                <span class="icon">
                  <i class="fas fa-chevron-left"></i>
                </span>
              </button>
              <div class="month-year">{{ monthName }} {{ currentYear }}</div>
              <button class="button is-small" @click="nextMonth">
                <span class="icon">
                  <i class="fas fa-chevron-right"></i>
                </span>
              </button>
            </div>
            <div class="calendar">
              <div class="calendar-row calendar-days">
                <div class="calendar-cell" v-for="day in daysOfWeek" :key="day">
                  {{ day }}
                </div>
              </div>
              <div class="calendar-row" v-for="week in weeks" :key="week[0].date">
                <div
                  class="calendar-cell"
                  v-for="day in week"
                  :key="day.date"
                  :class="{ 'is-occupied': isOccupied(day.date) }"
                >
                  {{ day.date.getDate() }}
                </div>
              </div>
            </div>
          </div>
          <h1 class="title mt-5">Informations personnelles</h1>
          <b-form role="form" @submit.prevent="reserver()">
            <b-row>
              <b-col>
                <label class="label" for="payment_type">Nom</label>

                <base-input
                  alternative
                  class="mb-3"
                  name="Nom"
                  required
                  prepend-icon="fas fa-user"
                  placeholder="Nom"
                  v-model="forms.lastname"
                >
                </base-input>
              </b-col>
              <b-col>
                <label class="label" for="payment_type">Prénom</label>

                <base-input
                  alternative
                  class="mb-3"
                  name="Prénom"
                  required
                  prepend-icon="fas fa-user"
                  placeholder="Prénom"
                  v-model="forms.firstname"
                >
                </base-input>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <label class="label" for="payment_type">Email</label>

                <base-input
                  alternative
                  class="mb-3"
                  name="Email"
                  required
                  prepend-icon="fas fa-envelope"
                  placeholder="Email"
                  type="email"
                  v-model="forms.email"
                >
                </base-input>
              </b-col>
              <b-col>
                <label class="label" for="payment_type">Téléphone</label>

                <base-input
                  alternative
                  class="mb-3"
                  name="Téléphone"
                  required
                  prepend-icon="fas fa-phone"
                  placeholder="Téléphone"
                  v-model="forms.telephone"
                  @input="formatPhoneNumber"
                  :class="{ 'is-invalid': !validPhoneNumber }"
                >
                </base-input>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <label class="label" for="payment_type">Date d'arrivée</label>

                <base-input
                  alternative
                  class="mb-3"
                  name="Date d'arrivée"
                  required
                  prepend-icon="fas fa-calendar-alt"
                  placeholder="Date d'arrivée"
                  type="datetime-local"
                  v-model="checkin"
                >
                </base-input>
              </b-col>
              <b-col>
                <label class="label" for="payment_type">Date de départ</label>
                <base-input
                  alternative
                  class="mb-3"
                  name="Date de départ"
                  required
                  prepend-icon="fas fa-calendar-alt"
                  placeholder="Date de départ"
                  type="datetime-local"
                  v-model="checkout"
                >
                </base-input>
              </b-col>
            </b-row>
            <h1 class="title">Informations de paiement</h1>
            <b-row>
              <b-col class="mb-5">
                <!-- Type de paiement -->
                <div class="field">
                  <label class="label" for="payment_type">Type de paiement</label>
                  <div class="control">
                    <div class="select">
                      <select id="payment_type" v-model="forms.payment_type" required>
                        <option value="momo">Mobile Money</option>
                        <option value="card">Carte Bancaire</option>
                      </select>
                    </div>
                  </div>
                </div>
              </b-col>
            </b-row>
            <b-row v-if="forms.payment_type === 'momo'">
              <b-col>
                <div class="control">
                  <label class="label" for="payment_type">Opérateur</label>
                  <div class="select">
                    <select id="payment_type" v-model="forms.operator" required>
                      <option value="mtn_open">MTN</option>
                      <option value="moov">MOOV</option>
                      <option value="sbin">CELTIS</option>
                    </select>
                  </div>
                </div>
              </b-col>
              <b-col>
                <label class="label" for="payment_type">Numéro Mobile Money</label>
                <base-input
                  alternative
                  class="mb-3"
                  name="Numéro Mobile Money"
                  required
                  prepend-icon="fas fa-mobile-alt"
                  placeholder="Numéro Mobile Money"
                  v-model="forms.payment_number"
                  @input="formatPaymentNumber"
                  :class="{ 'is-invalid': !validPaymentNumber }"
                >
                </base-input>
              </b-col>
            </b-row>
            <div v-else-if="forms.payment_type === 'card'">
              <b-row>
                <b-col>
                  <base-input
                    alternative
                    class="mb-3"
                    name="Numéro de carte"
                    required
                    prepend-icon="fas fa-credit-card"
                    placeholder="Numéro de carte"
                    v-model="forms.card_number"
                    v-mask="'#### #### #### ####'"
                    :class="{ 'is-invalid': !validCardNumber }"
                    @input="validateCardNumber"
                  >
                  </base-input>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <div class="field">
                    <label class="label" for="card_expiry">Mois d'expiration</label>
                    <div class="control">
                      <div class="select">
                        <select v-model="forms.card_expiry_month" required class="mb-2">
                          <option value="" disabled selected>Mois</option>
                          <option v-for="month in 12" :key="month" :value="month">
                            {{ month }}
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </b-col>
                <b-col>
                  <div class="field">
                    <label class="label" for="card_expiry">Année d'expiration</label>
                    <div class="control">
                      <div class="select">
                        <select v-model="forms.card_expiry_year" required>
                          <option value="" disabled selected>Année</option>
                          <option v-for="year in expiryYears" :key="year" :value="year">
                            {{ year }}
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </b-col>
                <b-col>
                  <div class="field">
                    <label class="label" for="card_cvc">Code CVC</label>
                    <base-input
                      alternative
                      class="mb-3"
                      name="CVC"
                      required
                      prepend-icon="fas fa-lock"
                      placeholder="CVC"
                      v-model="forms.card_cvc"
                      maxlength="3"
                      :class="{ 'is-invalid': !validCVC }"
                      @input="validateCVC"
                    >
                    </base-input>
                  </div>
                </b-col>
              </b-row>
            </div>
            <b-row>
              <b-col>
                <b-form-checkbox v-model="forms.isChecked" required>
                  J'accepte les
                  <b-link href="/cgu" target="_blank"
                    >conditions générales d'utilisation</b-link
                  >
                  et la
                  <b-link href="/politique-de-confidentialite" target="_blank"
                    >politique de confidentialité</b-link
                  >.
                </b-form-checkbox>
              </b-col>
            </b-row>
            <div class="text-right mt-3" v-if="this.forms.isChecked == 1">
              <base-button type="primary" v-if="!load" native-type="submit" class="my-4"
                >Réserver</base-button
              >
              <b-button variant="primary" v-else class="mt-4">Chargement..</b-button>
            </div>
          </b-form>
          <!-- Affichage du prix total -->
          <div class="box price-box">
            <h2 class="title is-4">
              Prix Total : <span>{{ totalPrice.toFixed(2) }}</span> XOF
            </h2>
          </div>
        </div>
      </section>
    </b-modal>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#36363e"
        fill-opacity="1"
        d="M0,96L40,117.3C80,139,160,181,240,186.7C320,192,400,160,480,149.3C560,139,640,149,720,176C800,203,880,245,960,250.7C1040,256,1120,224,1200,229.3C1280,235,1360,277,1400,298.7L1440,320L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
      ></path>
    </svg>
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
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
<script>
import store from "../store/index";
import router from "../routes/router.js";
import { openKkiapayWidget, addKkiapayListener, removeKkiapayListener } from "kkiapay";
export default {
  data() {
    return {
      forms: {
        isChecked: 0,
        lastname: "",
        firstname: "",
        name: "",
        email: "",
        telephone: "+22967037806",
        guest_house_id: "",
        delay: "",
        start_date: "",
        end_date: "",
        payment_type: "momo",
        payment_number: "64000001",
        operator: "mtn_open",
        card_number: "",
        card_expiry_year: "",
        card_expiry_month: "",
        card_cvc: "",
      },
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      daysOfWeek: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
      occupiedDates: undefined,
      validCardNumber: true,
      validCVC: true,
      validPhoneNumber: true,
      validPaymentNumber: true,
      checkin: "",
      checkout: "",
      guests: 1,
      roomType: "single",
      specialRequests: "",

      totalPrice: 0,
      isMenuOpen: false,
      data_guesthouse: [],
      expiryYears: [
        "2025",
        "2026",
        "2027",
        "2028",
        "2029",
        "2030",
        "2031",
        "2032",
        "2033",
        "2034",
        "2035",
        "2036",
        "2037",
        "2038",
        "2039",
        "2040",
      ],
      cover: "",
      pictures: [],
      videos: [],
      isLoading: true,
      isTruncated: true,
      maxLength: 100,
      load: false,
    };
  },
  computed: {
    monthName() {
      return new Date(this.currentYear, this.currentMonth).toLocaleString("default", {
        month: "long",
      });
    },
    weeks() {
      const start = new Date(this.currentYear, this.currentMonth, 1);
      const end = new Date(this.currentYear, this.currentMonth + 1, 0);
      const days = [];
      for (let day = start; day <= end; day.setDate(day.getDate() + 1)) {
        days.push(new Date(day));
      }

      const weeks = [];
      let week = [];

      days.forEach((day) => {
        week.push({ date: new Date(day) });
        if (day.getDay() === 6 || day === days[days.length - 1]) {
          weeks.push(week);
          week = [];
        }
      });

      return weeks;
    },
    truncatedDescription() {
      // Check if data_guesthouse and description are defined
      if (
        this.isTruncated &&
        this.data_guesthouse &&
        this.data_guesthouse.description &&
        this.data_guesthouse.description.length > this.maxLength
      ) {
        return this.data_guesthouse.description.slice(0, this.maxLength);
      }
      // Return description if it's defined, otherwise return an empty string or handle it as needed
      return this.data_guesthouse && this.data_guesthouse.description
        ? this.data_guesthouse.description
        : "";
    },
  },

  mounted() {
    this.calculatePrice();
    this.listGuesthouseBySlug();
  },
  watch: {
    checkin: "calculatePrice",
    checkout: "calculatePrice",
    guests: "calculatePrice",
    roomType: "calculatePrice",
  },

  methods: {
    isOccupied(date) {
      if (this.occupiedDates) {
        return this.occupiedDates.some((d) => d.toDateString() === date.toDateString());
      }
    },
    previousMonth() {
      if (this.currentMonth === 0) {
        this.currentMonth = 11;
        this.currentYear--;
      } else {
        this.currentMonth--;
      }
    },
    nextMonth() {
      if (this.currentMonth === 11) {
        this.currentMonth = 0;
        this.currentYear++;
      } else {
        this.currentMonth++;
      }
    },
    formatDate(date) {
      // Format the date as desired (e.g., "14 August 2024")
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString(undefined, options);
    },
    formatNumberCustom(number) {
      let numberString = number.toString();
      return numberString.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    validateCardNumber() {
      const regex = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/;
      this.validCardNumber = regex.test(this.forms.card_number);
    },
    validateCVC() {
      const regex = /^\d{3}$/;
      this.validCVC = regex.test(this.forms.card_cvc);
    },
    formatPhoneNumber() {
      if (!this.forms.telephone.startsWith("+229")) {
        this.forms.telephone = "+229";
      }
      const regex = /^\+229\s\d{8}$/;
      this.validPhoneNumber = regex.test(this.forms.telephone);
    },
    formatPaymentNumber() {
      this.validPaymentNumber = regexWithoutPrefix.test(this.forms.payment_number);
    },
    async listGuesthouseBySlug() {
      try {
        const response = await store.dispatch(
          "guesthouse/detailguesthousebyslug",
          router.currentRoute.params.id
        );
        this.data_guesthouse = response.data;
        this.pictures = this.data_guesthouse.pictures.map((picture) =>
          this.showMediaFromGoogle(picture.original_url)
        );
        this.videos = this.data_guesthouse.videos.map((video) =>
          this.showMediaFromGoogleVideo(video.original_url)
        );
        this.occupiedDates = this.data_guesthouse.busy_dates.map(
          (date) => new Date(date)
        );
        this.isLoading = false;
      } catch (error) {
        console.log(error);
      }
    },

    async reserver() {
      try {
        this.forms.guest_house_id = this.data_guesthouse.id;
        this.load = true;
        const response = await store.dispatch("guesthouse/createReservation", this.forms);
        this.$toast.success("Réservation éffectuée avec succès !", {
          timeout: 2000,
        });
        this.load = false;
        this.listGuesthouseBySlug();
        this.$bvModal.hide("modal-6");
      } catch (error) {
        console.log(error);
        this.$toast.error("Erreur lors de la réservation", {
          timeout: 2000,
        });
        this.load = false;
      }
    },

    toggleDescription() {
      this.isTruncated = !this.isTruncated;
    },

    showMediaFromGoogle(url) {
      // Parse l'URL et extrait ses composants
      let parsedUrl = new URL(url);
      let queryParams = new URLSearchParams(parsedUrl.search);
      return "https://drive.google.com/thumbnail?id=" + queryParams.get("id");
    },
    showMediaFromGoogleVideo(url) {
      // Parse l'URL et extrait ses composants
      let parsedUrl = new URL(url);
      let queryParams = new URLSearchParams(parsedUrl.search);
      return "https://drive.google.com/file/d/" + queryParams.get("id") + "/preview";
    },
    submitForm() {
      // Afficher la popup de confirmation avec SweetAlert2
      swal("Réservation effectuée avec succès!", {
        icon: "success",
        buttons: false,
        timer: 2000,
      });
    },
    calculatePrice() {
      (this.forms.start_date = this.checkin), (this.forms.end_date = this.checkout);
      const checkinDate = new Date(this.checkin);
      const checkoutDate = new Date(this.checkout);
      const oneDay = 24 * 60 * 60 * 1000;
      const diffDays = Math.round(Math.abs((checkoutDate - checkinDate) / oneDay));

      if (isNaN(diffDays) || diffDays <= 0) {
        this.totalPrice = 0;
        return;
      }

      (this.forms.delay = diffDays),
        (this.totalPrice = diffDays * this.data_guesthouse.price);
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
.skeleton-loader {
  background-color: #eee;
  animation: pulse 1.5s infinite ease-in-out;
  width: 400px !important;
  margin-right: 5rem !important;
}

@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
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
.zoom-image {
  transition: transform 0.2s; /* Animation de transition */
}

.zoom-image:hover {
  transform: scale(1.1); /* Effet de zoom */
}
.card-content .columns .column {
  margin-bottom: 10px;
}

.card-content .columns .column i {
  margin-right: 10px;
}
.price-box {
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
}
button {
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  text-align: center;
}
.gerant {
  background: #ffd74f;
  border-radius: 50px !important;
}
.date-overview {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
  max-width: 400px;
  margin: 0 auto;
}

.date-overview h3 {
  margin-bottom: 16px;
  font-size: 1.5rem;
  color: #333;
}

.dates-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.date-item {
  background-color: #ff4d4f;
  color: white;
  padding: 8px 12px;
  border-radius: 5px;
  font-size: 0.875rem;
  text-align: center;
  flex: 1 1 calc(50% - 10px); /* Two items per row, with spacing */
}
.calendar-container {
  max-width: 400px;
  margin: 0 auto;
}

.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.month-year {
  font-size: 1.5rem;
  font-weight: bold;
}

.calendar {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
}

.calendar-cell {
  padding: 10px;
  text-align: center;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  background-color: #f5f5f5;
  font-weight: bold;
}

.calendar-cell.is-occupied {
  background-color: #ffdddd;
  color: #ff0000;
}

.calendar-days .calendar-cell {
  background-color: transparent;
  color: #363636;
  font-weight: normal;
}
.fullscreen-modal {
  width: 100vw !important;
  height: 100vh !important;
  max-width: 100vw !important;
  max-height: 100vh !important;
  padding: 0 !important;
  margin: 0 !important;
}

.fullscreen-modal .modal-dialog {
  width: 100vw;
  max-width: 100vw;
  height: 100vh;
  max-height: 100vh;
  margin: 0;
}

.fullscreen-modal .modal-content {
  height: 100vh;
}

.fullscreen-modal .modal-body {
  padding: 0;
  height: 100%;
}
</style>
