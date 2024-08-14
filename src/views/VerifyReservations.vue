<template>
    <div class="reservation-verification">
        <a class="navbar-brand" href="/">
            <img src="../assets/logo.png" alt="" style="width: 140px;">
        </a>
      <div v-if="load" class="loading">Vérification en cours...</div>
      <div v-else>
        <div v-if="qrCodeUrl">
          <h3>Réservation effectuée avec succès !</h3>
          <img :src="qrCodeUrl"  class="qr-code"></img>
        </div>
        <div v-else>
          <p>Aucune réservation trouvée ou erreur lors de la vérification.</p>
        </div>
      </div>
      <div class="mt-3">
        <a href="/">Faites plus de réservation</a>
      </div>
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
          load: false,
          qrCodeUrl: null, // To store the QR code URL
        };
      },
      mounted() {
        this.verifyReservation();
      },
      methods: {
        async verifyReservation() {
            try {
                this.load = true;
                const response = await store.dispatch("guesthouse/verifyReservation", router.currentRoute.params.uid);
                
                const url = URL.createObjectURL(response.data);
                this.qrCodeUrl = url; // Create a URL for the QR code image
                this.$toast.success("Réservation effectuée avec succès !", {
                    timeout: 2000
                });
            } catch (error) {
                console.error(error);
                this.$toast.error('Erreur lors de la vérification', {
                    timeout: 2000
                });
            } finally {
                this.load = false;
            }
        }


      }
    };
  </script>
  
  <style scoped>
  .reservation-verification {
    text-align: center;
  }
  
  .loading {
    font-size: 18px;
    font-weight: bold;
  }
  
  .qr-code {
    margin-top: 20px;
    width: auto;
    height: auto;
  }
  </style>
  