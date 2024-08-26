<template>
  <card>
    <b-row align-v="center" slot="header">
      <b-col cols="8">
        <h3 class="mb-0">Informations personnelles</h3>
      </b-col>
      <b-col cols="4" class="text-right">
        <!-- <a href="#!" class="btn btn-sm btn-primary">Settings</a> -->
      </b-col>
    </b-row>

    <b-form>
      <h6 class="heading-small text-muted mb-4">Profil</h6>

      <div class="pl-lg-4">
        <b-row>
          <b-col lg="6">
            <base-input type="text" label="Role" placeholder="Role" v-model="user.role">
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input type="email" label="Adresse email" v-model="user.email">
            </base-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="6">
            <base-input
              type="text"
              label="Nom"
              placeholder="Nom"
              v-model="user.firstName"
            >
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input
              type="text"
              label="Prénoms"
              placeholder="Prénoms"
              v-model="user.lastName"
            >
            </base-input>
          </b-col>
        </b-row>
      </div>
      <hr class="my-4" />
    </b-form>
  </card>
</template>

<script>
import store from "../../../store/index";

export default {
  data() {
    return {
      userdata: {}, // Initialize as an empty object
      user: {
        role: "",
        email: "",
        firstName: "",
        lastName: "",
      },
    };
  },
  methods: {
    async meUser() {
      try {
        const response = await store.dispatch("guesthouse/me");
        this.userdata = response.data;

        // Set the user properties after fetching data
        this.user.role = this.userdata.role.label;
        this.user.email = this.userdata.email;
        this.user.firstName = this.userdata.firstname;
        this.user.lastName = this.userdata.lastname;

        console.log(this.userdata);
      } catch (error) {
        console.log(error);
      }
    },

    updateProfile() {
      alert("Your data: " + JSON.stringify(this.user));
    },
  },
  mounted() {
    this.meUser();
  },
};
</script>
