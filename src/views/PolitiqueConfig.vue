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
    <div class="container mt-5 mb-5">
      <h1 style="font-size: 2.2rem">Politique de confidentialité de OFAD</h1>
      <p><em>Dernière mise à jour : [Date]</em></p>

      <h2 style="font-size: 2rem" class="tooplate-red">Introduction</h2>
      <p>
        Chez OFAD, nous accordons une grande importance à la confidentialité et à la
        sécurité de vos informations personnelles. Cette politique de confidentialité
        explique comment nous collectons, utilisons, divulguons et protégeons vos
        informations lorsque vous utilisez notre plate-forme. Nous vous encourageons à
        lire attentivement cette politique pour comprendre comment nous traitons vos
        données.
      </p>

      <h2 style="font-size: 2rem" class="tooplate-red">
        Collecte et Utilisation des Informations
      </h2>
      <h5>Informations Collectées</h5>
      <ul>
        <li>
          <span class="important">1. Propriétaires d'Appartements :</span>
          <ul style="list-style-type: disc">
            <li>
              Informations obligatoires lors de l'inscription : Nom complet, adresse
              e-mail, numéro de téléphone, adresse postale.
            </li>
            <li>
              Autres données personnelles obligatoires : Toutes données personnelles
              permettant de faire la vérification KYC (Know Your Customer) notamment
              (carte id, passeport…).
            </li>
            <li>
              Informations financières : Détails du compte bancaire pour le traitement des
              paiements.
            </li>
          </ul>
        </li>
        <li>
          <span class="important">2. Clients :</span>
          <ul>
            <li>
              Informations collectées lors de la réservation : Nom complet, adresse
              e-mail, numéro de téléphone.
            </li>
          </ul>
        </li>
      </ul>

      <h5>Utilisation des Informations</h5>
      <ul>
        <li>
          <span class="important">Propriétaires :</span> Vérification et validation des
          appartements avant qu'ils ne soient visibles aux clients. Traitement des
          paiements et pénalités. Envoi de notifications concernant la disponibilité des
          appartements, les pénalités et les mises à jour de la plateforme.
        </li>
        <li>
          <span class="important">Clients :</span> Traitement des réservations et envoi de
          confirmations par e-mail.
        </li>
      </ul>

      <h2 style="font-size: 2rem" class="tooplate-red">Obligations des Propriétaires</h2>
      <ul>
        <li>
          <span class="important">Inscription Obligatoire :</span> Tous les propriétaires
          doivent s'inscrire et fournir les informations nécessaires avant de pouvoir
          poster un appartement sur la plateforme.
        </li>
        <li>
          <span class="important">Vérification des Appartements :</span> Chaque
          appartement doit passer par un processus de vérification obligatoire avant
          d'être visible par les clients. Cela inclut des critères tels que
          l'accessibilité, la sécurité, la qualité du service, les prix attractifs, le
          confort et la propreté, et la localisation du logement.
        </li>
      </ul>

      <h2 style="font-size: 2rem" class="tooplate-red">Sécurité des Données</h2>
      <p>
        Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos
        informations personnelles contre l'accès non autorisé, l'altération, la
        divulgation ou la destruction. Cependant, aucune méthode de transmission sur
        Internet ou méthode de stockage électronique n'est sûre à 100%.
      </p>

      <h2 style="font-size: 2rem" class="tooplate-red">
        Modifications de cette Politique
      </h2>
      <p>
        Nous pouvons mettre à jour notre Politique de Confidentialité de temps en temps.
        Nous vous informerons de tout changement en publiant la nouvelle Politique de
        Confidentialité sur cette page. Nous vous conseillons de consulter cette Politique
        de confidentialité périodiquement pour tout changement.
      </p>

      <h2 style="font-size: 2rem" class="tooplate-red">Contact</h2>
      <p>
        Pour toute question concernant cette Politique de Confidentialité, veuillez nous
        contacter à : [l'adresse e-mail de contact]
      </p>
    </div>
    <footer class="site-footer section-padding pb-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-5 col-12 mb-3">
            <h5><a href="/" class="custom-link mb-1">OFAD GUESTHOUSE</a></h5>

            <p class="text-white">
              Profitez de nos chambres luxueuses et de notre hospitalité exceptionnelle.
              Chaque détail est pensé pour votre bien-être.
            </p>
          </div>

          <div class="col-lg-3 col-md-3 col-12 ms-lg-auto mb-3">
            <h5 class="text-white mb-3">Adresse</h5>

            <p class="text-white mt-2">
              <i class="bi-geo-alt"></i>
              Cotonou, Bénin
            </p>
          </div>

          <div class="col-lg-3 col-md-4 col-12 mb-3">
            <h5 class="text-white mb-3">Nous joindre</h5>

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
export default {
  name: "Politique",
};
</script>
<style scoped>
.important {
  font-weight: bold;
}
p {
  line-height: 1.6;
}
</style>
