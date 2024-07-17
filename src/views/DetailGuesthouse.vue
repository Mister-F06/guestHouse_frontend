<template>
    <div> 
        <nav class="navbar navbar-expand-lg bg-light fixed-top shadow-lg">
            <div class="container">
                <a class="navbar-brand" href="index.html">
                 <img src="../assets/logo.png" alt="" style="width: 100px;">
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav"  @click="toggleMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav"  :class="{ show: isMenuOpen }">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link click-scroll" href="/">Accueil</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link click-scroll" href="/#section_2">A propos</a>
                        </li>

                        <li class="nav-item dropdown">
                          <a class="nav-link click-scroll" href="/#section_3">Hébergement</a>
                            <!-- <a class="nav-link dropdown-toggle click-scroll" href="#section_3" id="navbarLightDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Hébergement</a> -->
                        </li>

                        <li class="nav-item">
                            <a class="nav-link click-scroll" href="/auth/register">S'inscire</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link click-scroll" href="/#section_5">Nous contacter</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div  class="mt-5 mb-5 container" style="margin-top: 4rem !important;">
            <div class="mb-5" >
                <p class="title">The Gritti Palace</p>  
                <span class="tag is-info mr-1">Au bord de la plage</span>
                <span class="tag is-success mr-1">Navette aéroport</span>
                <span class="tag is-warning mr-1">En bord de plage</span>
                <base-button type="primary"   native-type="submit" class="my-4">Réserver</base-button>
            </div>
            <div class="columns is-multiline">
                <div class="column is-4">
                    <img src="../assets/guesht/574135970 (1).jpg" width="500px" alt="" class="mb-1"> 
                    <img src="../assets/guesht/1707318678_Magmove-700C-lancement-du-velo-electrique-de-ville-en.jpg" width="500px" alt=""> <br>
                </div>
                <div class="column is-4">
                    <img src="../assets/guesht/574135975.jpg" width="500px" alt="" class="mb-1"> 
                    <img src="../assets/guesht/574135970.jpg" width="500px" alt="">
                    <div style="text-align: right;">
                        <a  v-b-modal.modal-5 variant="primary"  > 
                            <i class="fa fa-eye is-small" style="font-size: small;color:green"></i> voir plus
                        </a>
                    </div>
                </div>
                <div class="column is-4">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d638855.3464034839!2d2.0026331471709424!3d6.841961819609705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x102354e509f894f7%3A0xc8fde921f89849f6!2sCotonou!5e0!3m2!1sfr!2sbj!4v1720895149084!5m2!1sfr!2sbj"  width="100%" height="220" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <p style="text-align: center;" >
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente dolore fugit facere modi dignissimos maiores labore quo enim eaque consectetur consequatur id odio eius unde, reprehenderit similique nesciunt eos doloribus.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente dolore fugit facere modi dignissimos maiores labore quo enim eaque consectetur consequatur id odio eius unde, reprehenderit similique nesciunt eos doloribus.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente dolore fugit facere modi digns doloribus.
                    </p>
                <base-button type="primary"   native-type="submit" class="my-4">Réserver</base-button>
                </div>
            </div>
            <div>
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
                                    <i class="fas fa-ruler-combined"></i> 186 m² superficie
                                </div>
                                <div class="column is-4">
                                    <i class="fas fa-utensils"></i> Cuisine
                                </div>
                                <div class="column is-4">
                                    <i class="fas fa-eye"></i> Vue
                                </div>
                                <div class="column is-4">
                                    <i class="fas fa-tree"></i> Jardin
                                </div>
                                <div class="column is-4">
                                    <i class="fas fa-paw"></i> Animaux domestiques admis
                                </div>
                                <div class="column is-4">
                                    <i class="fas fa-swimming-pool"></i> Piscine
                                </div>
                                <div class="column is-4">
                                    <i class="fas fa-bath"></i> Lave-linge
                                </div>
                                <div class="column is-4">
                                    <i class="fas fa-wifi"></i> Connexion Wi-Fi gratuite
                                </div>
                                <div class="column is-4">
                                    <i class="fas fa-umbrella-beach"></i> Terrasse
                                </div>
                                <div class="column is-4">
                                    <i class="fas fa-swimmer"></i> Piscine extérieure
                                </div>
                                <div class="column is-4">
                                    <i class="fas fa-wifi"></i> Connexion Wi-Fi gratuite
                                </div>
                                <div class="column is-4">
                                    <i class="fas fa-shuttle-van"></i> Navette aéroport (gratuite)
                                </div>
                                <div class="column is-4">
                                    <i class="fas fa-water"></i> Front de mer
                                </div>
                                <div class="column is-4">
                                    <i class="fas fa-parking"></i> Parking gratuit
                                </div>
                                <div class="column is-4">
                                    <i class="fas fa-ban"></i> Chambres non-fumeurs
                                </div>
                                <div class="column is-4">
                                    <i class="fas fa-glass-martini-alt"></i> Bar
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <section class="section">
                    <div class="container">
                    <h1 class="title">Ses points forts</h1>
                    <div class="columns is-multiline">
                        <!-- Piscine extérieure -->
                        <div class="column is-one-quarter">
                        <div class="box">
                            <i class="fas fa-swimming-pool fa-2x"></i>
                            <p>Piscine extérieure</p>
                        </div>
                        </div>
                        <!-- Connexion Wi-Fi gratuite -->
                        <div class="column is-one-quarter">
                        <div class="box">
                            <i class="fas fa-wifi fa-2x"></i>
                            <p>Connexion Wi-Fi gratuite</p>
                        </div>
                        </div>
                        <!-- Navette aéroport (gratuite) -->
                        <div class="column is-one-quarter">
                        <div class="box">
                            <i class="fas fa-shuttle-van fa-2x"></i>
                            <p>Navette aéroport (gratuite)</p>
                        </div>
                        </div>
                        <!-- Front de mer -->
                        <div class="column is-one-quarter">
                        <div class="box">
                            <i class="fas fa-water fa-2x"></i>
                            <p>Front de mer</p>
                        </div>
                        </div>
                        <!-- Parking gratuit -->
                        <div class="column is-one-quarter">
                        <div class="box">
                            <i class="fas fa-parking fa-2x"></i>
                            <p>Parking gratuit</p>
                        </div>
                        </div>
                        <!-- Chambres non-fumeurs -->
                        <div class="column is-one-quarter">
                        <div class="box">
                            <i class="fas fa-smoking-ban fa-2x"></i>
                            <p>Chambres non-fumeurs</p>
                        </div>
                        </div>
                        <!-- Bar -->
                        <div class="column is-one-quarter">
                        <div class="box">
                            <i class="fas fa-glass-martini-alt fa-2x"></i>
                            <p>Bar</p>
                        </div>
                        </div>
                    </div>

                    <h2 class="title">Parking</h2>
                    <div class="box">
                        <i class="fas fa-parking fa-2x"></i>
                        <p>Un parking gratuit et privé est disponible sur place (sans réservation préalable).</p>
                    </div>

                    <h2 class="title">Internet</h2>
                    <div class="box">
                        <i class="fas fa-wifi fa-2x"></i>
                        <p>Une connexion Wi-Fi est disponible dans tout l'établissement gratuitement.</p>
                    </div>

                    <h2 class="title">Cuisine</h2>
                    <div class="columns is-multiline">
                        <div class="column is-one-quarter">
                        <div class="box">
                            <i class="fas fa-baby fa-2x"></i>
                            <p>Chaise haute pour enfants</p>
                        </div>
                        </div>
                        <div class="column is-one-quarter">
                        <div class="box">
                            <i class="fas fa-fire fa-2x"></i>
                            <p>Plaque de cuisson</p>
                        </div>
                        </div>
                        <div class="column is-one-quarter">
                        <div class="box">
                            <i class="fas fa-tshirt fa-2x"></i>
                            <p>Sèche-linge</p>
                        </div>
                        </div>
                        <div class="column is-one-quarter">
                        <div class="box">
                            <i class="fas fa-utensils fa-2x"></i>
                            <p>Cuisine</p>
                        </div>
                        </div>
                        <div class="column is-one-quarter">
                        <div class="box">
                            <i class="fas fa-tshirt fa-2x"></i>
                            <p>Lave-linge</p>
                        </div>
                        </div>
                        <div class="column is-one-quarter">
                        <div class="box">
                            <i class="fas fa-washer fa-2x"></i>
                            <p>Lave-vaisselle</p>
                        </div>
                        </div>
                        <div class="column is-one-quarter">
                        <div class="box">
                            <i class="fas fa-microchip fa-2x"></i>
                            <p>Micro-ondes</p>
                        </div>
                        </div>
                        <div class="column is-one-quarter">
                        <div class="box">
                            <i class="fas fa-icicles fa-2x"></i>
                            <p>Réfrigérateur</p>
                        </div>
                        </div>
                    </div>

                    <h2 class="title">Chambre</h2>
                    <div class="box">
                        <i class="fas fa-bed fa-2x"></i>
                        <p>Linge de maison</p>
                    </div>

                    <h2 class="title">Salle de bains</h2>
                    <div class="columns is-multiline">
                        <div class="column is-one-quarter">
                        <div class="box">
                            <i class="fas fa-toilet-paper fa-2x"></i>
                            <p>Papier toilette</p>
                        </div>
                        </div>
                        <div class="column is-one-quarter">
                        <div class="box">
                            <i class="fas fa-towel fa-2x"></i>
                            <p>Serviettes</p>
                        </div>
                        </div>
                        <div class="column is-one-quarter">
                        <div class="box">
                            <i class="fas fa-wind fa-2x"></i>
                            <p>Sèche-cheveux</p>
                        </div>
                        </div>
                    </div>

                    <h2 class="title">Coin salon</h2>
                    <div class="box">
                        <i class="fas fa-couch fa-2x"></i>
                        <p>Bureau</p>
                    </div>

                    <h2 class="title">High-tech</h2>
                    <div class="box">
                        <i class="fas fa-tv fa-2x"></i>
                        <p>Console de jeux</p>
                    </div>
                    <div class="box">
                        <i class="fas fa-tv fa-2x"></i>
                        <p>Télévision à écran plat</p>
                    </div>

                    <h2 class="title">Équipements en chambre</h2>
                    <div class="columns is-multiline">
                        <div class="column is-one-quarter">
                        <div class="box">
                            <i class="fas fa-door-open fa-2x"></i>
                            <p>Entrée privée</p>
                        </div>
                        </div>
                        <div class="column is-one-quarter">
                        <div class="box">
                            <i class="fas fa-temperature-high fa-2x"></i>
                            <p>Chauffage</p>
                        </div>
                        </div>
                        <div class="column is-one-quarter">
                        <div class="box">
                            <i class="fas fa-iron fa-2x"></i>
                            <p>Fer à repasser</p>
                        </div>
                        </div>
                        <div class="column is-one-quarter">
                        <div class="box">
                            <i class="fas fa-hot-tub fa-2x"></i>
                            <p>Bain à remous</p>
                        </div>
                        </div>
                    </div>

                    <h2 class="title">Animaux domestiques</h2>
                    <div class="box">
                        <i class="fas fa-paw fa-2x"></i>
                        <p>Les animaux de compagnie sont admis (sans supplément).</p>
                    </div>

                    <h2 class="title">En extérieur</h2>
                    <div class="columns is-multiline">
                        <div class="column is-one-quarter">
                        <div class="box">
                            <i class="fas fa-water fa-2x"></i>
                            <p>Front de mer</p>
                        </div>
                        </div>
                        <div class="column is-one-quarter">
                        <div class="box">
                            <i class="fas fa-swimmer fa-2x"></i>
                            <p>Piscine privée</p>
                        </div>
                        </div>
                        <div class="column is-one-quarter">
                        <div class="box">
                            <i class="fas fa-umbrella-beach fa-2x"></i>
                            <p>Balcon</p>
                        </div>
                        </div>
                        <div class="column is-one-quarter">
                        <div class="box">
                            <i class="fas fa-tree fa-2x"></i>
                            <p>Terrasse</p>
                        </div>
                        </div>
                        <div class="column is-one-quarter">
                        <div class="box">
                            <i class="fas fa-seedling fa-2x"></i>
                            <p>Jardin</p>
                        </div>
                        </div>
                    </div>

                    <h2 class="title">Piscine extérieure</h2>
                    <div class="box">
                        <i class="fas fa-swimming-pool fa-2x"></i>
                        <p>Gratuit !</p>
                        <p>Ouverte toute l'année</p>
                        <p>Tous les âges sont les bienvenus</p>
                        <p>Piscine sur le toit</p>
                        <p>Piscine à débordement</p>
                        <p>Piscine avec vue</p>
                    </div>

                    <h2 class="title">Bien-être</h2>
                    <div class="box">
                        <i class="fas fa-hot-tub fa-2x"></i>
                        <p>Bain à remous/jacuzzi</p>
                    </div>

                    <h2 class="title">Restauration</h2>
                    <div class="box">
                        <i class="fas fa-glass-martini-alt fa-2x"></i>
                        <p>Bar</p>
                        <p>Plateau / bouilloire</p>
                    </div>

                    <h2 class="title">Activités</h2>
                    <div class="box">
                        <i class="fas fa-paint-brush fa-2x"></i>
                        <p>Galeries d'art temporaires</p>
                        <p>Plage</p>
                    </div>

                    <h2 class="title">Extérieur/Vues</h2>
                    <div class="box">
                        <i class="fas fa-eye fa-2x"></i>
                        <p>Vue</p>
                    </div>

                    <h2 class="title">Transports</h2>
                    <div class="box">
                        <i class="fas fa-shuttle-van fa-2x"></i>
                        <p>Navette aéroport</p>
                    </div>

                    <h2 class="title">Divertissements et services aux familles</h2>
                    <div class="box">
                        <i class="fas fa-plug fa-2x"></i>
                        <p>Cache-prises pour enfants</p>
                    </div>

                    <h2 class="title">Divers</h2>
                    <div class="columns is-multiline">
                        <div class="column is-one-quarter">
                        <div class="box">
                            <i class="fas fa-wind fa-2x"></i>
                            <p>Climatisation</p>
                        </div>
                        </div>
                        <div class="column is-one-quarter">
                        <div class="box">
                            <i class="fas fa-smoking-ban fa-2x"></i>
                            <p>Établissement entièrement non-fumeurs</p>
                        </div>
                        </div>
                        <div class="column is-one-quarter">
                        <div class="box">
                            <i class="fas fa-elevator fa-2x"></i>
                            <p>Ascenseur</p>
                        </div>
                        </div>
                        <div class="column is-one-quarter">
                        <div class="box">
                            <i class="fas fa-bed fa-2x"></i>
                            <p>Chambres non-fumeurs</p>
                        </div>
                        </div>
                    </div>

                    <h2 class="title">Sécurité</h2>
                    <div class="columns is-multiline">
                        <div class="column is-one-third">
                        <div class="box">
                            <i class="fas fa-bell fa-2x"></i>
                            <p>Alarme de sécurité</p>
                        </div>
                        </div>
                        <div class="column is-one-third">
                        <div class="box">
                            <i class="fas fa-id-card fa-2x"></i>
                            <p>Cartes d'accès</p>
                        </div>
                        </div>
                        <div class="column is-one-third">
                        <div class="box">
                            <i class="fas fa-key fa-2x"></i>
                            <p>Clés d'accès</p>
                        </div>
                        </div>
                    </div>

                    <h2 class="title">Langues parlées</h2>
                    <div class="box">
                        <i class="fas fa-language fa-2x"></i>
                        <p>Anglais</p>
                    </div>
                    </div>
                </section>
            </div>
        </div>
        <!-- modal img  -->
        <b-modal id="modal-5" title="Plus d'image" size="lg" hide-footer>
            <img src="../assets/guesht/574135979.jpg" width="100%" alt="" class="mb-1 zoom-image"> 
            <img src="../assets/guesht/574135990.jpg" width="100%" alt="" class="mb-1 zoom-image"> 
            <img src="../assets/guesht/574135997.jpg" width="100%" alt="" class="mb-1 zoom-image"> 
            <img src="../assets/guesht/574136089.jpg" width="100%" alt="" class="mb-1 zoom-image"> 
            <img src="../assets/guesht/574136037.jpg" width="100%" alt="" class="mb-1 zoom-image"> 
            <img src="../assets/guesht/574136089.jpg" width="100%" alt="" class="mb-1 zoom-image"> 
            <img src="../assets/guesht/574136130.jpg" width="100%" alt="" class="mb-1 zoom-image"> 
            <img src="../assets/guesht/574136150.jpg" width="100%" alt="" class="mb-1 zoom-image"> 
            <img src="../assets/guesht/574136096.jpg" width="100%" alt="" class="mb-1 zoom-image"> 
            <img src="../assets/guesht/574135997.jpg" width="100%" alt="" class="mb-1 zoom-image"> 
            <img src="../assets/guesht/574136096.jpg" width="100%" alt="" class="mb-1 zoom-image"> 
            <img src="../assets/guesht/574136089.jpg" width="100%" alt="" class="mb-1 zoom-image"> 
        </b-modal>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#36363e" fill-opacity="1" d="M0,96L40,117.3C80,139,160,181,240,186.7C320,192,400,160,480,149.3C560,139,640,149,720,176C800,203,880,245,960,250.7C1040,256,1120,224,1200,229.3C1280,235,1360,277,1400,298.7L1440,320L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
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
  export default {
    data() {
      return {
          isMenuOpen: false,
      };
    },
    mounted() {
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      }
    },
  };
</script>
  
  
<style scoped>
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

</style>
  