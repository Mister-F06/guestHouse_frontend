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
      <b-form @submit.prevent="updatePassword">
        <b-row>
          <b-col lg="12">
            <b-form-group label="Mot de passe actuel" label-for="current-password">
              <b-form-input
                id="current-password"
                type="password"
                v-model="form.currentPassword"
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
                v-model="form.newPassword"
                required
                placeholder="Entrez un nouveau mot de passe"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col lg="6">
            <b-form-group
              label="Confirmez le nouveau mot de passe"
              label-for="confirm-password"
            >
              <b-form-input
                id="confirm-password"
                type="password"
                v-model="form.confirmPassword"
                required
                placeholder="Confirmez le nouveau mot de passe"
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="text-right">
            <b-button type="submit" variant="primary"
              >Mettre à jour le mot de passe</b-button
            >
          </b-col>
        </b-row>
      </b-form>
    </b-card-body>
  </b-card>
</template>
<script>
export default {
  data() {
    return {
      form: {
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      },
    };
  },
  methods: {
    updatePassword() {
      if (this.form.newPassword !== this.form.confirmPassword) {
        alert("Les nouveaux mots de passe ne correspondent pas.");
        return;
      }
      // Logique pour mettre à jour le mot de passe ici
      alert("Mot de passe mis à jour avec succès !");
    },
  },
};
</script>
