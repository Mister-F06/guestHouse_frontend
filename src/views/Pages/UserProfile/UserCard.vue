<template>
  <b-card no-body class="card-profile" alt="Image placeholder" img-top>
    <b-row align-v="center" slot="header">
      <b-col cols="8">
        <h3 class="mb-0">Modifier le mot de passe</h3>
      </b-col>
      <b-col cols="4" class="text-right">
        <!-- Espace pour un bouton ou un lien supplémentaire si nécessaire -->
      </b-col>
    </b-row>
    <b-card-body class="pt-5">
      <div>
        <ul>
          <li>Le mot de passe doit contenir au moins 8 caractères.</li>
          <li>Il doit inclure au moins une lettre majuscule.</li>
          <li>Il doit inclure au moins une lettre minuscule.</li>
          <li>Il doit inclure au moins un chiffre.</li>
          <li>
            Il doit inclure au moins un caractère spécial (par exemple: !, @, #, $, etc.).
          </li>
        </ul>
      </div>
      <b-form @submit.prevent="updatePassword">
        <b-row>
          <b-col lg="12">
            <b-form-group label="Mot de passe actuel" label-for="current-password">
              <b-form-input
                id="current-password"
                type="password"
                v-model="form.password"
                required
                placeholder="Entrez votre mot de passe actuel"
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="6">
            <b-form-group label="Nouveau mot de passe" label-for="new-password">
              <b-form-input
                id="new-password"
                type="password"
                v-model="form.new_password"
                required
                placeholder="Entrez un nouveau mot de passe"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col lg="6">
            <b-form-group label="Confirmez le mot de passe" label-for="confirm-password">
              <b-form-input
                id="confirm-password"
                type="password"
                v-model="form.new_password_confirmation"
                required
                placeholder="Confirmez le mot de passe"
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="text-right">
            <b-button type="submit" variant="primary" v-if="!load"
              >Mettre à jour le mot de passe</b-button
            >
            <b-button type="submit" variant="primary" v-if="load">Chargement..</b-button>
          </b-col>
        </b-row>
      </b-form>
    </b-card-body>
  </b-card>
</template>
<script>
import store from "../../../store/index";

export default {
  data() {
    return {
      load: false, // Ajout de la variable load pour contrôler l'état de chargement

      form: {
        password: "",
        new_password: "",
        new_password_confirmation: "",
      },
    };
  },
  methods: {
    async updatePassword() {
      this.load = true;
      if (this.form.new_password !== this.form.new_password_confirmation) {
        this.$toast.error("Les nouveaux mots de passe ne correspondent pas.", {
          timeout: 2000,
        });
        this.load = false;
        return;
      } else {
        try {
          this.load = true;
          const response = await store.dispatch("auth/updatepassword", this.form);
          this.$toast.success("Mot de passe modifié avec succès !", {
            timeout: 2000,
          });
          this.load = false;
        } catch (error) {
          this.$toast.error("Erreur lors de la modification", {
            timeout: 2000,
          });
          this.load = false;
        }
      }
    },
  },
};
</script>
<style scoped>
li {
  font-size: 15px;
  list-style: inside;
}
</style>
