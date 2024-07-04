<template>
    <div>
      <!-- Header -->
      <div class="header bg-gradient-success py-7 py-lg-8 pt-lg-9">
        <b-container class="container">
          <div class="header-body text-center mb-5">
            <b-row class="justify-content-center">
              <b-col xl="5" lg="6" md="8" class="px-5">
                <h1 class="text-white">Vérification de votre email</h1>
                <p class="text-lead text-white">
                    Peu importe la raison de votre séjour, nous sommes déterminés à ce que vous vous sentiez chez vous, où que vous soyez.
                </p>
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
         <div class="columns is-multiline" v-if="showPage1 == true">
            <div class="column is-6">
                <img src="../../assets/undraw_done_re_oak4.svg" alt="" width="500">
            </div>
            <div class="column is-6">
                  <div class="box" style="text-align: center;">
                    <p class="p_">Vous avez vérifié votre compte avec succès.</p>
                    <p>Cliquez  <router-link to="/auth/login" class="text-light"><span style="color: blue;">ici</span></router-link> pour accéder à la page de connexion.</p>
                  </div>
            </div>
         </div>
         <div class="columns is-multiline" v-if="showPage1 == false">
            <div class="column is-6">
                  <div class="box" style="text-align: center;">
                    <p class="p_">Echec de verification de votre adresse email.</p>
                    <b-button type="submit" variant="primary"
                        @click="getNewLink()"
                        :disabled="(timeResend>0)? true : false" class="mt-4"> {{(timeResend>0)?'Regénérer dans ' + timeResend + ' s':'Regénérer un nouveau lien de vérification'}}</b-button>
                  </div>
            </div>
            <div class="column is-6">
                <img src="../../assets/undraw_warning_re_eoyh (1).svg" alt="" width="500">
            </div>
         </div>
      </b-container>
    </div>
  </template>
  <script>
  import { Notification } from 'vue-notification';
  import router from '../../routes/router';
  import store from '../../store/index'
    export default {
      name: 'verifyEmail',
      props: ['expires', 'token', 'signature'],
      components: {
        Notification,
      },
      data() {
        return {
          load:false,
          timeResend:0,
          showPage1: undefined ,
          credentials:{
                token  : ""
            }
        }
      },
      mounted() {
        this.verifyEmail();
    },
      methods: {
        async verifyEmail() {
          try {
            this.load = true;
            const emailData = {
                expires: this.expires,
                token: this.token,
                signature: this.signature
            };
            const response = await store.dispatch("auth/verifyEmail", emailData);
            this.showPage1 = true;

            this.$toast.success("Action reussie", {
              timeout: 2000
          });
            this.load = false;
            router.push({ path: '/auth/login' });
          } catch (error) {
             this.$toast.error("Verifier les informations et reessayer", {
              timeout: 2000
          });
            this.load = false;
            this.showPage1 = false;
          }
        },

        async getNewLink(){
          const data = {
                token: this.token,
            };
               await store
                    .dispatch("auth/getNewLink",data)
                    .then(() => {
                      this.timeResend=120
                      let inter=setInterval(()=>{
                        if(this.timeResend>0){
                            this.timeResend=this.timeResend-1
                        }else{
                          clearInterval(inter)
                        }
                      },1000)

                    })
                    .catch((error)=>{
                      this.$toast.error(error.response.data.message, {
                          message:error.response.data.message,
                          timeout: 2000
                      });
                    })
        },


      }

    };
  </script>
  <style scoped>
    .p_{
        font-size: 2rem;
        font-weight: 500;
    }
  </style>
