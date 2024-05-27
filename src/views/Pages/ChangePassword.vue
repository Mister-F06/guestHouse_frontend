<template>
  <div>
    <!-- Header -->
    <div class="header bg-gradient-success py-7 py-lg-8 pt-lg-9">
      <b-container>
        <div class="header-body text-center mb-7">
          <b-row class="justify-content-center">
            <b-col xl="5" lg="6" md="8" class="px-5">
              <h1 class="text-white">Bienvenue sur GuestHouse !</h1>
              <p class="text-lead text-white">Découvrez un séjour inoubliable dans notre charmante guesthouse, nichée au cœur du monde.</p>
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
            <b-card-header class="bg-transparent pb-5"  >
              <div class="text-muted text-center mt-2 mb-3"><h1>Changer votre Mot de passe</h1></div>
            </b-card-header>
            <b-card-body class="px-lg-5 py-lg-5">
              <div class="text-center text-muted mb-4">
              </div>
              <validation-observer v-slot="{handleSubmit}" ref="formValidator">
                <b-form role="form" @submit.prevent="handleSubmit(onChangePassword)">
                  <base-input alternative
                              class="mb-3"
                              name="Password"
                              :rules="{required: true, min: 6}"
                              prepend-icon="ni ni-lock-circle-open"
                              type="password"
                              placeholder="Password"
                              v-model="model.password">
                  </base-input>
                  <base-input alternative
                              class="mb-3"
                              name="Password"
                              :rules="{required: true, min: 6}"
                              prepend-icon="ni ni-lock-circle-open"
                              type="password"
                              placeholder="Password"
                              v-model="model.password_confirmation">
                  </base-input>

                  <b-form-checkbox v-model="model.rememberMe">Se souvenir de moi</b-form-checkbox>
                  <div class="text-center">
                    <base-button type="primary" v-if="!load" native-type="submit" class="my-4">Enregistrer</base-button>
                    <b-button  variant="primary" v-else class="mt-4">Chargement..</b-button>
                  </div>
                </b-form>
              </validation-observer>
            </b-card-body>
          </b-card>
          <b-row class="mt-3">
            <b-col cols="6">
              <router-link to="/askEmailVerify" class="text-light"><small>Mot de passe oublié?</small></router-link>
            </b-col>
            <b-col cols="6" class="text-right">
              <router-link to="/register" class="text-light"><small>Créer un compte</small></router-link>
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
    props: ['expires', 'token', 'signature','password','password_confirmation'],

    components: {
      Notification,  
    },
    data() {
      return {
        load:false,
        model: {
            password  : "Password@123", 
            password_confirmation  : "Password@123", 
        }
      }
    },
    methods: {
      async onChangePassword() { 
        try {
          this.load = true
          const emailData = {
                  expires: this.expires,
                  token: this.token,
                  signature: this.signature,
                  password: this.model.password,
                  password_confirmation: this.model.password_confirmation,
              };
          const response = await store.dispatch("auth/changePassword", emailData);
          this.$toast.success("Mot de passe changer avec succes", {
              timeout: 2000
          });
          this.load = false
          // router.push({ path: '/dashboard' })
        } catch (error) {
          this.$toast.error("Veuillez vérifier les informations et réessayer.", {
              timeout: 2000
          });
          this.load = false
        }
      }
    }

  };
</script>