<template>
  <div>
    <!-- Header -->
    <div class="header pding bg-gradient-success py-7 py-lg-8 pt-lg-9">
      <b-container>
        <div class="header-body text-center mb-7">
          <b-row class="justify-content-center">
            <b-col xl="5" lg="6" md="8" class="px-5">
              <h2 class="text-white">Bienvenue sur GuestHouse !</h2>
            </b-col>
          </b-row>
        </div>
      </b-container>
      <div class="separator separator-bottom separator-skew zindex-100">
        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1"
             xmlns="http://www.w3.org/2000/svg">
          <polygon class="fill-default" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </div>
    <!-- Page content -->
    <b-container class="mt--8 pb-5">
      <b-row class="justify-content-center">
        <b-col lg="5" md="7">
          <b-card no-body class="bg-secondary border-0 mb-0">
            <b-card-header class="bg-transparent "  >
              <div class="text-muted text-center mt-2 mb-3"><h2>Vérifier votre adresse email</h2>
                <p class="text-lead text-white">Découvrez un séjour inoubliable dans notre charmante guesthouse, nichée au cœur du monde.</p>
              </div>
            </b-card-header>
            <b-card-body class="px-lg-5 py-lg-5">
              <validation-observer v-slot="{handleSubmit}" ref="formValidator">
                <b-form role="form" @submit.prevent="handleSubmit(onAskVerifyEmail)">
                  <base-input alternative
                              class="mb-3"
                              name="Email"
                              :rules="{required: true, email: true}"
                              prepend-icon="ni ni-email-83"
                              placeholder="Email"
                              v-model="model.email">
                  </base-input>
                  <div class="text-center">
                    <base-button type="primary" v-if="!load" native-type="submit" style="width:100% !important" class="my-4">Vérifier</base-button>
                    <b-button  variant="primary" v-else class="mt-4">Chargement..</b-button>
                  </div>
                </b-form>
              </validation-observer>
            </b-card-body>
          </b-card>
          <b-row class="mt-3">
            <b-col cols="6">
              <router-link to="/auth/login" class="text-light"><small>Connexion</small></router-link>
            </b-col>
            <b-col cols="6" class="text-right">
              <router-link to="/auth/register" class="text-light"><small>Créer un compte</small></router-link>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { Notification } from 'vue-notification';
import router from '../../routes/router';
import store from '../../store/index'

  export default {
    name: 'login',
    components: {
      Notification,
    },
    data() {
      return {
        load:false,
        model: {
            email  : "gh12@gmail.com",
        }
      }
    },
    methods: {
      async onAskVerifyEmail() {
      try {
        this.load = true
        const response = await store.dispatch("auth/askverifyEMail", this.model);
        this.$toast.success("Un lien a été envoyé a votre adresse email.", {
            timeout: 2000
        });
        this.load = false
        router.push({ path: '/auth/login' })
      } catch (error) {
        this.$toast.error("Adresse email incorrect", {
            timeout: 2000
        });
        this.load = false
      }
    }
    }

  };
</script>
