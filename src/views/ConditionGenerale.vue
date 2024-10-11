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
      <h1 style="font-size: 2.2rem">Conditions générales d'utilisation</h1>
      <p>
        Bienvenue sur notre plate-forme de réservation en ligne. Avant d'utiliser nos
        services, veuillez lire attentivement les présentes conditions générales
        d'utilisation. En utilisant notre plate-forme, vous acceptez d'être lié par ces
        conditions.
      </p>

      <h2 style="font-size: 2rem" class="tooplate-red">Utilisation de la plate-forme</h2>
      <ul>
        <li>
          <strong>1.1 Inscription :</strong> Pour utiliser notre plate-forme, seuls les
          gérants des maisons d'hôtes doivent s’inscrire. Vous devez fournir des
          informations exactes, complètes et à jour lors de votre inscription. Vous êtes
          responsable de la confidentialité de votre compte et de toutes les activités qui
          y sont liées.
        </li>
        <li>
          <strong>1.2 Utilisation licite :</strong> Vous acceptez d'utiliser notre
          plate-forme conformément à toutes les lois et réglementations applicables. Vous
          ne devez pas utiliser notre plate-forme à des fins illégales, frauduleuses ou
          nuisibles.
        </li>
        <li>
          <strong>1.3 Contenu généré par l'utilisateur :</strong> Vous êtes responsable de
          tout contenu que vous publiez sur notre plate-forme, y compris les informations
          de votre profil, les commentaires et les évaluations. Vous garantissez que vous
          avez tous les droits nécessaires pour publier ce contenu et que celui-ci ne
          viole pas les droits de propriété intellectuelle ou les droits de tiers.
        </li>
      </ul>

      <h2 style="font-size: 2rem" class="tooplate-red">Réservation et paiement</h2>
      <ul>
        <li>
          <strong>2.1 Réservation :</strong> Notre plate-forme facilite la réservation de
          logements. Lorsque vous effectuez une réservation, vous acceptez les conditions
          spécifiques du logement telles que décrites par l'hôte. Vous êtes responsable de
          lire attentivement ces conditions avant de réserver.
        </li>
        <li>
          <strong>2.2 Paiement :</strong> Vous acceptez de payer le montant total indiqué
          lors de la réservation, y compris les frais de service et les taxes applicables.
          Le paiement est effectué via notre plate-forme de paiement sécurisée. Nous ne
          sommes pas responsables des problèmes liés aux paiements effectués en dehors de
          notre plate-forme.
        </li>
      </ul>

      <h2 style="font-size: 2rem" class="tooplate-red">Responsabilités de l'hôte</h2>
      <ul>
        <li>
          <strong>3.1 Exactitude des informations :</strong> En tant qu'hôte, vous êtes
          responsable de fournir des informations précises et complètes sur votre
          logement, y compris les tarifs, les disponibilités et les règles de la maison.
          Vous devez également vous assurer que votre logement est conforme à toutes les
          lois et réglementations applicables.
        </li>
      </ul>

      <h2 style="font-size: 2rem" class="tooplate-red">Responsabilités des clients</h2>
      <ul>
        <li>
          <strong>4.1 Respect des règles de séjour :</strong> En tant que client, vous
          devez respecter les règles de séjour établies par l'hôte. Vous êtes responsable
          de tout dommage causé au logement pendant votre séjour.
        </li>
        <li>
          <strong>4.2 Communication avec l'hôte :</strong> Vous devez communiquer de
          manière respectueuse et honnête avec l'hôte. En cas de problème ou de différend,
          vous devez contacter l'hôte et essayer de résoudre la situation de manière
          amiable.
        </li>
      </ul>

      <h2 style="font-size: 2rem" class="tooplate-red">Limitation de responsabilité</h2>
      <ul>
        <li>
          <strong>5.1 Exclusion de responsabilité :</strong> Nous ne sommes pas
          responsables des actes, des omissions ou du comportement des utilisateurs de
          notre plate-forme, y compris des hôtes et des clients. Nous ne garantissons pas
          l'exactitude, la fiabilité ou la qualité des logements répertoriés sur notre
          plate-forme.
        </li>
        <li>
          <strong>5.2 Indemnisation :</strong> Vous acceptez d'indemniser et de dégager de
          toute responsabilité notre plate-forme et ses dirigeants, administrateurs,
          employés et agents pour toute réclamation, perte, responsabilité, dommage ou
          dépense découlant de votre utilisation de notre plate-forme.
        </li>
      </ul>

      <h2 style="font-size: 2rem" class="tooplate-red">
        Modification des conditions générales d'utilisation
      </h2>
      <p>
        Nous nous réservons le droit de modifier ces conditions générales d'utilisation à
        tout moment. Les modifications prendront effet dès leur publication sur notre
        plate-forme. Il est de votre responsabilité de consulter régulièrement les
        conditions générales d'utilisation pour vous tenir informé des éventuelles
        modifications.
      </p>
      <p>
        En utilisant notre plate-forme après la publication des modifications, vous
        acceptez les conditions générales d'utilisation modifiées.
      </p>

      <p>
        Si vous avez des questions concernant ces conditions générales d'utilisation,
        veuillez nous contacter à l'adresse indiquée sur notre plate-forme.
      </p>
      <p><em>Dernière mise à jour : [Date]</em></p>
    </div>
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
export default {
  name: "CGU",
};
</script>
<style scoped>
p {
  line-height: 1.6;
}
</style>
