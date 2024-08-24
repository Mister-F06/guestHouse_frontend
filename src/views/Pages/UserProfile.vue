<template>
  <div>
    <div
      class="header pb-8 pt-3 pt-lg-8 d-flex align-items-center profile-header"
      style="
        min-height: 600px;
        background-image: url(img/theme/profile-cover.jpg);
        background-size: cover;
        background-position: center top;
      "
    >
      <b-container fluid>
        <!-- Mask -->
        <span class="mask bg-gradient-success opacity-8"></span>
        <!-- Header container -->
        <b-container fluid class="d-flex align-items-center">
          <b-row>
            <b-col lg="7" md="10">
              <h1 class="display-2 text-white" v-if="userdata">
                Hello {{ userdata.firstname + " " + userdata.lastname }}
              </h1>
              <p class="text-white mt-0 mb-5">
                Ceci est votre page de profil. Vous pouvez voir les données personnelles
                et les modifiées.
              </p>
            </b-col>
          </b-row>
        </b-container>
      </b-container>
    </div>

    <b-container fluid class="mt--9">
      <b-row>
        <b-col xl="4" class="order-xl-2 mb-5">
          <user-card></user-card>
        </b-col>
        <b-col xl="8" class="order-xl-1">
          <edit-profile-form></edit-profile-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import EditProfileForm from "./UserProfile/EditProfileForm.vue";
import UserCard from "./UserProfile/UserCard.vue";
import store from "../../store/index";

export default {
  components: {
    EditProfileForm,
    UserCard,
  },
  data() {
    return {
      userdata: [],
    };
  },
  methods: {
    async meUser() {
      try {
        const response = await store.dispatch("guesthouse/me");
        this.userdata = response.data;
        console.log(this.userdata);
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.meUser();
  },
};
</script>
<style></style>
