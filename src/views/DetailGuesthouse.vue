<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-light fixed-top shadow-lg">
              <div class="container">
                  <a class="navbar-brand" href="/">
                  <img src="../assets/logo.png" alt="" style="width: 100px;">
                  </a>

                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav"  @click="toggleMenu" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                  </button>

                  <div class="collapse navbar-collapse" id="navbarNav"  :class="{ show: isMenuOpen }">
                      <ul class="navbar-nav ms-auto">
                          <li class="nav-item">
                              <a class="nav-link click-scroll" href="/#section_1">Accueil</a>
                          </li>

                          <li class="nav-item">
                              <a class="nav-link click-scroll" href="/#section_4">A propos</a>
                          </li>

                          <li class="nav-item dropdown">
                            <a class="nav-link click-scroll" href="/#section_3">Hébergement</a>
                              <!-- <a class="nav-link dropdown-toggle click-scroll" href="/#section_3" id="navbarLightDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Hébergement</a> -->
                          </li>
                          <li class="nav-item">
                              <a class="nav-link click-scroll" href="/#section_5">Nous contacter</a>
                          </li>
                          <li class="nav-item gerant">
                              <a class="nav-link click-scroll" href="/auth/register">Je suis gérant !</a>
                          </li>
                      </ul>
                  </div>
              </div>
        </nav>
        <div  class="mt-5 mb-5 container" style="margin-top: 4rem !important;">
            <div v-if="isLoading" class="skeleton-loader mb-3" style="width: 100%; height: 40px;border-radius: 10px;"></div>
            <div class="mb-5" v-else >
                <p class="title ">{{this.data_guesthouse.name}}</p> 
                <span class="tag  is-danger mr-1 text-white" >{{ formatNumberCustom(this.data_guesthouse.price) }} FCFA / 24h</span>
                <span class="tag is-info mr-1">Conviviale </span>
                <span class="tag is-success mr-1">Confortable </span>
                <span class="tag is-warning mr-1">Intime </span>
            </div>
            <div>
              <strong>Description</strong>
              <p style="text-align: center;">
                {{ truncatedDescription }}
                <span v-if="isTruncated">...</span>
              </p>
              <button @click="toggleDescription">{{ isTruncated ? 'Voir plus' : 'Voir moins' }}</button>
            </div>

            <div class="columns is-multiline">
                <div class="column is-4">
                  <div v-if="isLoading">
                    <!-- Skeleton loader for images -->
                    <div class="skeleton-loader" style="width: 500px; height: 250px; margin-bottom: 10px;"></div>
                    <div class="skeleton-loader" style="width: 500px; height: 250px;"></div>
                  </div>
                  <div v-else>
                    <img :src="pictures[0]" width="500px" alt="" class="mb-1">
                    <img :src="pictures[1]" width="500px" alt="">
                  </div>
                </div>
                <div class="column is-4">
                  <div v-if="isLoading">
                    <!-- Skeleton loader for images -->
                    <div class="skeleton-loader" style="width: 500px; height: 250px; margin-bottom: 10px;"></div>
                    <div class="skeleton-loader" style="width: 500px; height: 250px;"></div>
                  </div>
                  <div v-else>
                    <img :src="pictures[2]" width="500px" alt="" class="mb-1">
                    <img :src="pictures[3]" width="500px" alt="">
                    <div style="text-align: right;">
                      <a v-b-modal.modal-5 variant="primary">
                        <i class="fa fa-eye is-small" style="font-size: small;color:green"></i> voir plus
                      </a>
                    </div>
                  </div>
                </div>
                <div class="column is-4">
                  <div v-if="isLoading">
                    <!-- Skeleton loader for map -->
                    <div class="skeleton-loader" style="width: 100%; height: 220px;"></div>
                    <!-- Skeleton loader for description -->
                    <div class="skeleton-loader" style="width: 100%; height: 50px; margin: 10px 0;"></div>
                    <div class="skeleton-loader" style="width: 150px; height: 40px; margin: 20px auto;"></div>
                  </div>
                  <div v-else>
                    <iframe src="https://www.google.com/maps/embed?..." width="100%" height="220" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <p>{{this.data_guesthouse.address}}</p>
                  
                    <base-button type="primary" v-b-modal.modal-6 native-type="submit" class="my-4">Réserver</base-button>
                  </div>
                </div>
            </div>
            <div v-if='!isLoading'>
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
                                <div class="column is-4" >
                                  <span>{{this.data_guesthouse.beds_nbr}}</span> Chambres
                                </div>
                                <div class="column is-4" >
                                  <span>{{this.data_guesthouse.toilets_nbr}}</span> Lits
                                </div>
                                <div class="column is-4" >
                                  <span>{{this.data_guesthouse.bathrooms_nbr}}</span> Toilettes
                                </div>
                                <div class="column is-4">
                                    <i class="fas fa-ruler-combined"></i> 186 m² superficie
                                </div>
                                <div class="column is-4" v-if=" this.data_guesthouse.has_kitchen == true">
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
                                <div class="column is-4"  v-if=" data_guesthouse.has_pool == true">
                                    <i class="fas fa-swimming-pool"></i> Piscine
                                </div>
                                <div class="column is-4"  v-if=" data_guesthouse.has_washing_machine == true">
                                    <i class="fas fa-bath"></i> Lave-linge
                                </div>
                                <div class="column is-4" >
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
                                <div class="column is-4"  v-if=" data_guesthouse.has_parking == true">
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
            <!-- <div>
                <section class="section">
                    <div class="container">
                    <h1 class="title">Ses points forts</h1>
                    <div class="columns is-multiline">
                        <div class="column is-one-quarter">
                        <div class="box">
                            <i class="fas fa-swimming-pool fa-2x"></i>
                            <p>Piscine extérieure</p>
                        </div>
                        </div>
                        <div class="column is-one-quarter">
                        <div class="box">
                            <i class="fas fa-wifi fa-2x"></i>
                            <p>Connexion Wi-Fi gratuite</p>
                        </div>
                        </div>
                        <div class="column is-one-quarter">
                        <div class="box">
                            <i class="fas fa-shuttle-van fa-2x"></i>
                            <p>Navette aéroport (gratuite)</p>
                        </div>
                        </div>
                        <div class="column is-one-quarter">
                        <div class="box">
                            <i class="fas fa-water fa-2x"></i>
                            <p>Front de mer</p>
                        </div>
                        </div>
                        <div class="column is-one-quarter">
                        <div class="box">
                            <i class="fas fa-parking fa-2x"></i>
                            <p>Parking gratuit</p>
                        </div>
                        </div>
                        <div class="column is-one-quarter">
                        <div class="box">
                            <i class="fas fa-smoking-ban fa-2x"></i>
                            <p>Chambres non-fumeurs</p>
                        </div>
                        </div>
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
                        <div class="column is-one-quarter"  v-if=" data_guesthouse.has_kitchen == true">
                        <div class="box">
                            <i class="fas fa-utensils fa-2x"></i>
                            <p>Cuisine</p>
                        </div>
                        </div>
                        <div class="column is-one-quarter" v-if=" data_guesthouse.has_washing_machine == true">
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
                        <div class="column is-one-quarter" >
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
                <section class="section">
                  <div class="container">
                    <h2 class="title">Catégories :</h2>
                    <div class="columns is-multiline">
                        <div class="column is-6">
                          <div class="box">
                            <p><strong>Personnel</strong></p>
                            <progress class="progress is-info" value="7.7" max="10">77%</progress>
                          </div>
                        </div>
                        <div class="column is-6">
                          <div class="box">
                            <p><strong>Équipements</strong></p>
                            <progress class="progress is-info" value="7.1" max="10">71%</progress>
                          </div>
                        </div>
                        <div class="column is-6">
                          <div class="box">
                            <p><strong>Propreté</strong></p>
                            <progress class="progress is-info" value="7.7" max="10">77%</progress>
                          </div>
                        </div>
                        <div class="column is-6">
                          <div class="box">
                            <p><strong>Confort</strong></p>
                            <progress class="progress is-info" value="7.6" max="10">76%</progress>
                          </div>
                        </div>
                        <div class="column is-6">
                          <div class="box">
                            <p><strong>Rapport qualité/prix</strong></p>
                            <progress class="progress is-info" value="7.1" max="10">71%</progress>
                          </div>
                        </div>
                        <div class="column is-6">
                          <div class="box">
                            <p><strong>Situation géographique</strong></p>
                            <progress class="progress is-info" value="8.7" max="10">87%</progress>
                          </div>
                        </div>
                        <div class="column is-6">
                          <div class="box">
                            <p><strong>Connexion Wi-Fi gratuite</strong></p>
                            <progress class="progress is-info" value="8.0" max="10">80%</progress>
                          </div>
                        </div>
                    </div>
                  </div>
                </section>
            </div> -->
        </div>
        <!-- modal img  -->
        <b-modal id="modal-5" title="Plus d'image" size="lg" hide-footer>
          <div  v-for="(item, index) in pictures" :key="index">
            <img :src="item" width="100%" alt="" class="mb-1 zoom-image">
          </div>
          <div v-for="(item, index) in videos" :key="index">
              <iframe width="100%" height="100%" :src="item"></iframe>
          </div>
        </b-modal>
        <!-- Modal  reservation  -->
        <b-modal id="modal-6" title="Réserver Ici" size="lg" hide-footer>
          <section class="section">
            <div class="container">
              <h1 class="title">Informations personnelles</h1>
              <b-form role="form" @submit.prevent="reserver()">
                  <b-row>
                      <b-col>
                        <label class="label" for="payment_type">Nom</label>

                        <base-input alternative
                            class="mb-3"
                            name="Nom"
                            required
                            prepend-icon="fas fa-user"
                            placeholder="Nom"
                            v-model="forms.lastname">
                          </base-input>
                      </b-col>
                      <b-col>
                        <label class="label" for="payment_type">Prénom</label>

                        <base-input alternative
                            class="mb-3"
                            name="Prénom"
                            required
                            prepend-icon="fas fa-user"
                            placeholder="Prénom"
                            v-model="forms.firstname">
                          </base-input>
                      </b-col>
                  </b-row>
                  <b-row>
                      <b-col>
                        <label class="label" for="payment_type">Email</label>

                        <base-input alternative
                            class="mb-3"
                            name="Email"
                            required
                            prepend-icon="fas fa-envelope"
                            placeholder="Email"
                            type="email"
                            v-model="forms.email">
                          </base-input>
                      </b-col>
                      <b-col>
                        <label class="label" for="payment_type">Téléphone</label>

                        <base-input alternative
                            class="mb-3"
                            name="Téléphone"
                            required
                            prepend-icon="fas fa-phone"
                            placeholder="Téléphone"
                            v-model="forms.telephone"
                            @input="formatPhoneNumber"
                            :class="{'is-invalid': !validPhoneNumber}">
                        </base-input>
                      </b-col>
                  </b-row>
                  <b-row>
                      <b-col>
                        <label class="label" for="payment_type">Date d'arrivée</label>

                        <base-input alternative
                            class="mb-3"
                            name="Date d'arrivée"
                            required
                            prepend-icon="fas fa-calendar-alt"
                            placeholder="Date d'arrivée"
                            type="datetime-local"
                            v-model="checkin">
                          </base-input>
                      </b-col>
                      <b-col>
                        <label class="label" for="payment_type">Date de départ</label>
                        <base-input alternative
                            class="mb-3"
                            name="Date de départ"
                            required
                            prepend-icon="fas fa-calendar-alt"
                            placeholder="Date de départ"
                            type="datetime-local"
                            v-model="checkout">
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
                                <select id="payment_type" v-model="forms.payment_type" @change="resetPaymentDetails" required>
                                  <option value="momo">Mobile Money</option>
                                  <option value="card">Carte Bancaire</option>
                                </select>
                              </div>
                            </div>
                          </div>
                      </b-col> 
                  </b-row>
                  <b-row   v-if="forms.payment_type === 'momo'"> 
                      <b-col>
                            <div class="control">
                              <label class="label" for="payment_type">Opérateur</label>
                              <div class="select">
                                <select id="payment_type" v-model="forms.operator"   required>
                                  <option value="mtn">MTN</option>
                                  <option value="moov">MOOV</option>
                                </select>
                              </div>
                            </div>
                      </b-col> 
                      <b-col>
                        <label class="label" for="payment_type">Numéro Mobile Money</label>
                        <base-input alternative
                              class="mb-3"
                              name="Numéro Mobile Money"
                              required
                              prepend-icon="fas fa-mobile-alt"
                              placeholder="Numéro Mobile Money"
                              v-model="forms.payment_number"
                              @input="formatPaymentNumber"
                            :class="{'is-invalid': !validPaymentNumber}">
                            </base-input>
                      </b-col> 
                    
                  </b-row>
                  <div v-else-if="forms.payment_type === 'card'">
                    <b-row>
                        <b-col>
                          <base-input alternative
                                class="mb-3"
                                name="Numéro de carte"
                                required
                                prepend-icon="fas fa-credit-card"
                                placeholder="Numéro de carte"
                                v-model="forms.card_number"
                                v-mask="'#### #### #### ####'"
                                :class="{'is-invalid': !validCardNumber}"
                                @input="validateCardNumber">
                              </base-input>
                        </b-col> 
                    </b-row>
                    <b-row >
                      <b-col>
                          <div class="field">
                            <label class="label" for="card_expiry">Mois d'expiration</label>
                            <div class="control">
                              <div class="select">
                                <select v-model="forms.card_expiry_month" required class="mb-2">
                                  <option value="" disabled selected>Mois</option>
                                  <option v-for="month in 12" :key="month" :value="month">{{ month }}</option>
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
                                  <option v-for="year in expiryYears" :key="year" :value="year">{{ year }}</option>
                                </select>
                              </div>
                            </div>
                          </div>
                      </b-col> 
                      <b-col>
                        <div class="field">
                          <label class="label" for="card_cvc">Code CVC</label>
                          <base-input alternative
                              class="mb-3"
                              name="CVC"
                              required
                              prepend-icon="fas fa-lock"
                              placeholder="CVC"
                              v-model="forms.card_cvc"
                              maxlength="3"
                              :class="{'is-invalid': !validCVC}"
                              @input="validateCVC">
                          </base-input>
                        </div>
                      </b-col> 
                    </b-row>
                  </div>
                  <div class="text-right mt-3">
                      <base-button type="primary" v-if="!load" native-type="submit" class="my-4">Réserver</base-button>
                      <b-button variant="primary" v-else class="mt-4">Chargement..</b-button>
                  </div>
              </b-form> 
              <!-- Affichage du prix total -->
              <div class="box price-box">
                <h2 class="title is-4">Prix Total : <span>{{ totalPrice.toFixed(2) }}</span> XOF</h2>
              </div>
            </div>
          </section>
        </b-modal>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#36363e" fill-opacity="1" d="M0,96L40,117.3C80,139,160,181,240,186.7C320,192,400,160,480,149.3C560,139,640,149,720,176C800,203,880,245,960,250.7C1040,256,1120,224,1200,229.3C1280,235,1360,277,1400,298.7L1440,320L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
        <footer class="site-footer section-padding pb-5">
        <div class="container">
            <div class="row">

                <div class="col-lg-3 col-md-5 col-12 mb-3">
                    <h3><a href="/" class="custom-link mb-1">OFAD GUESTHOUSE</a></h3>

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
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
<script>
  import store from '../store/index'
  import router from '../routes/router.js'
  export default {
    data() {
      return {
        forms:{
          lastname: '',
          firstname: '',
          name: '',
          email: '',
          telephone: '+22967037806',
          guest_house_id: '',
          delay: '',
          start_date: '',
          end_date: '',
          payment_type: 'momo',
          payment_number: '64000001',
          operator: 'mtn',
          card_number: '',
          card_expiry_year: '',
          card_expiry_month: '',
          card_cvc: '',
        }, 
        validCardNumber: true,
        validCVC: true,
        validPhoneNumber: true,
        validPaymentNumber: true,
        checkin: '',
        checkout: '',
        guests: 1,
        roomType: 'single',
        specialRequests: '',

        totalPrice: 0,
        isMenuOpen: false,
        data_guesthouse:[],
        expiryYears:["2025","2026","2027","2028","2029","2030","2031","2032","2033","2034","2035","2036","2037","2038","2039","2040"],
        cover: '',
        pictures: [],
        videos: [],
        isLoading: true,
        isTruncated: true,
        maxLength: 100 ,
        load:false,
      };
    },
    computed: {
      truncatedDescription() {
        if (this.isTruncated && this.data_guesthouse.description.length > this.maxLength) {
          return this.data_guesthouse.description.slice(0, this.maxLength);
        }
        return this.data_guesthouse.description;
      }
    },
    mounted() {
        this.calculatePrice();  
        this.listGuesthouseBySlug()
      },
      watch: {
        checkin: 'calculatePrice',
        checkout: 'calculatePrice',
        guests: 'calculatePrice',
        roomType: 'calculatePrice'
      },
    methods: {
      formatNumberCustom(number) {
        let numberString = number.toString();
        return numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
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
        if (!this.forms.telephone.startsWith('+229')) {
          this.forms.telephone = '+229';
        }
        const regex = /^\+229\s\d{8}$/;
        this.validPhoneNumber = regex.test(this.forms.telephone);
      },
      formatPaymentNumber() {
        this.validPaymentNumber = regexWithoutPrefix.test(this.forms.payment_number);
      },                                                                                                                                                                                                                                                                                                                                                                  
     async listGuesthouseBySlug() {
      try {
        const response = await store.dispatch("guesthouse/detailguesthousebyslug", router.currentRoute.params.id);
        this.data_guesthouse = response.data;
        this.pictures = this.data_guesthouse.pictures.map(picture => this.showMediaFromGoogle(picture.original_url));
        this.videos = this.data_guesthouse.videos.map(video => this.showMediaFromGoogleVideo(video.original_url));
        this.isLoading = false;
      } catch (error) {
        console.log(error);
      }
    },

    async reserver() {
        try {
          this.forms.guest_house_id = this.data_guesthouse.id
            this.load = true; 
            const response = await store.dispatch("guesthouse/createReservation", this.forms);
                this.$toast.success("Réservation éffectuée avec succès !", {
                    timeout: 2000
                });
            this.load = false;
            this.listGuesthouseBySlug()
            this.$bvModal.hide('modal-6')
        } catch (error) {
            console.log(error)
            this.$toast.error('Erreur lors de la réservation', {
                timeout: 2000
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
        return "https://drive.google.com/thumbnail?id=" + queryParams.get('id');
    },
    showMediaFromGoogleVideo(url) {
        // Parse l'URL et extrait ses composants
        let parsedUrl = new URL(url);
        let queryParams = new URLSearchParams(parsedUrl.search);
        return "https://drive.google.com/file/d/" + queryParams.get('id') + "/preview";
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
         this.forms.start_date = this.checkin,
         this.forms.end_date = this.checkout
          const checkinDate = new Date(this.checkin);
          const checkoutDate = new Date(this.checkout);
          const oneDay = 24 * 60 * 60 * 1000;
          const diffDays = Math.round(Math.abs((checkoutDate - checkinDate) / oneDay));

          if (isNaN(diffDays) || diffDays <= 0) {
            this.totalPrice = 0;
            return;
          }

           this.forms.delay = diffDays,
          this.totalPrice = diffDays  * this.data_guesthouse.price;
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
  width:400px !important;
  margin-right:5rem !important;

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
.gerant{
  background: #ffd74f;
  border-radius: 50px !important;
}
</style>
