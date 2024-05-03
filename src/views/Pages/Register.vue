<template>
  <div>
    <!-- Header -->
    <div class="header bg-gradient-success py-7 py-lg-8 pt-lg-9">
      <b-container class="container">
        <div class="header-body text-center mb-7">
          <b-row class="justify-content-center">
            <b-col xl="5" lg="6" md="8" class="px-5">
              <h1 class="text-white">Créer un compte</h1>
              <p class="text-lead text-white">Que vous soyez en voyage d'affaires, en escapade romantique ou en vacances en famille, nous sommes là pour rendre votre séjour aussi confortable que possible.</p>
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
      <!-- Table -->
      <b-row class="justify-content-center">
        <b-col lg="6" md="8" >
          <b-card no-body class="bg-secondary border-0">
            <b-card-header class="bg-transparent pb-5">
              <div class="text-muted text-center mt-2 mb-4"><h1>S'enregistrer</h1></div>
            </b-card-header>
            <b-card-body class="px-lg-5 py-lg-5">
              <validation-observer v-slot="{handleSubmit}" ref="formValidator">
                <b-form role="form" @submit.prevent="handleSubmit(onCreateUser)">
                  <base-input alternative
                              class="mb-3"
                              prepend-icon="ni ni-hat-3"
                              placeholder="Nom"
                              name="Firstname"
                              :rules="{required: true}"
                              v-model="model.firstname">
                  </base-input>
                  <base-input alternative
                              class="mb-3"
                              prepend-icon="ni ni-hat-3"
                              placeholder="Prenoms"
                              name="Lastname"
                              :rules="{required: true}"
                              v-model="model.lastname">
                  </base-input> 

                  <base-input alternative
                              class="mb-3"
                              prepend-icon="ni ni-email-83"
                              placeholder="Email"
                              name="Email"
                              :rules="{required: true, email: true}"
                              v-model="model.email">
                  </base-input>
                  <base-input alternative
                              class="mb-3"
                              prepend-icon="ni ni-mobile-button"
                              placeholder="Telephone"
                              name="Telephone"
                              :rules="{required: true}"
                              v-model="model.telephone">
                  </base-input>

                  <base-input alternative
                              class="mb-3"
                              prepend-icon="ni ni-lock-circle-open"
                              placeholder="password"
                              type="password"
                              name="Password"
                              :rules="{required: true, min: 6}"
                              v-model="model.password">
                  </base-input>
                  <base-input alternative
                              class="mb-3"
                              prepend-icon="ni ni-lock-circle-open"
                              placeholder="Confirmé le mot de passe"
                              type="password"
                              name="Password_confirmation"
                              :rules="{required: true, min: 6}"
                              v-model="model.password_confirmation">
                  </base-input>
                  <div class="text-muted font-italic"><small>password strength: <span
                    class="text-success font-weight-700">strong</span></small></div>
                  <b-row class=" my-4">
                    <b-col cols="12">
                      <base-input :rules="{ required: { allowFalse: false } }" name=Privacy Policy>
                        <b-form-checkbox v-model="model.agree">
                          <span class="text-muted">J'accepte les <a href="#!">Politiques de confidentiallités</a></span>
                        </b-form-checkbox>
                      </base-input>
                    </b-col>
                  </b-row>
                  <div class="text-center">
                    <b-button type="submit" variant="primary" v-if="!load" class="mt-4">S'inscrire</b-button>
                    <b-button  variant="primary" v-else class="mt-4">Chargement..</b-button>
                  </div>
                </b-form>
              </validation-observer>
            </b-card-body>
          </b-card>
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
    name: 'register',
    components: {
      Notification,  
    },
    data() {
      return {
        load:false,
        model: {
            email  : "gh@mail.com",
            password  : "Password@123",
            password_confirmation  : "Password@123",
            telephone  : "+229 00 00 0000",
            lastname  : "Guest",
            firstname  : "House"
        }
      }
    },
    methods: {
      async onCreateUser() {
        try {
          this.load = true;
          const response = await store.dispatch("auth/register", this.model);
          this.$notify({
            title: 'Success',
            text: 'User created successfully!',
            type: 'success'
          });
          this.load = false;
          router.push({ path: '/login' });
          console.log('User created successfully:', response);
        } catch (error) {
          console.error('Error creating user:', error);
          this.$notify({
            title: 'Error',
            text: 'Failed to create user. Please try again later.',
            type: 'error'
          });
          this.load = false;
        }
      }
    }

  };
</script>
<style></style>
