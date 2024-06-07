<template>
    <div>
         <!-- BootstrapVue Done -->
      <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success"></base-header>
      <b-container fluid class="mt--7">
        <b-card no-body>
            <b-card-header class="border-0 d-flex justify-content-between align-content-center align-items-center" >
                <h3 class="mb-0">Liste des gueshouses</h3>
                <b-button v-b-modal.modal-1 variant="primary">Ajouter</b-button>
            </b-card-header>
            <div class="table-container m-5">
                <table class="table is-bordered   is-hoverable is-fullwidth">
                    <tr>
                        <th style=" text-align: left">Désignation</th>
                        <th style=" text-align: left">Prix</th>
                        <th style=" text-align: left">Adresse</th>
                        <th style=" text-align: right">Status</th>
                        <th style=" text-align: right">Action</th>
                    </tr>
                    <tr v-for="item in displayedGuesthouse":key="item.id">
                        <td style=" text-align: left">{{ item.name }}</td>
                        <td style=" text-align: left">{{ item.price }}</td>
                        <td style=" text-align: left">{{ item.address }}</td>
                        <td style=" text-align: right"><span class="tag is-primary is-light">Disponible</span></td>
                        <td style=" text-align: right">
                            <a class="button is-small" >
                                <span class="icon is-small">
                                <i class="fa fa-edit is-small" style="font-size: small;color:green"></i>
                                </span>
                                <span style="color:green">Modifier</span>
                            </a>
                            <a class="button is-small ml-1" >
                                <span class="icon is-small">
                                <i class="fa fa-trash is-small" style="font-size: small;color:red"></i>
                                </span>
                                <span style="color:red">Modifier</span>
                            </a>
                        </td>
                    </tr>
                </table>
                <div v-if="Object.keys(displayedGuesthouse).length == 0 " class="nodata">
                   <h2>Aucune donnée</h2>
                </div>
                <div class="pagination mb-3 mt-3">
                    <a class="button is-small" @click="previousPage" >
                    <span class="icon is-small">
                        <i class="fa fa-angle-left mr-3" style="font-size: small"></i>
                    </span>
                    <span>Précedent</span>
                    </a>
                    <a class="button is-small" @click="nextPage" >
                    <span>Suivant</span>
                    <span class="icon is-small">
                        <i class="fa fa-angle-right ml-3" style="font-size: small"></i>
                    </span>
                    </a>
                </div>
            </div>
        </b-card>
      </b-container>
      <!-- Model Form Add GuestHouse -->
      <b-modal id="modal-1" title="Ajouter un gueshouse" size="lg">
        <validation-observer v-slot="{handleSubmit}" ref="formValidator">
                <b-form role="form" @submit.prevent="handleSubmit(addGuesthouse)">
                    <b-row>
                        <b-col>
                            <base-input alternative
                              class="mb-3"
                              name="Désignation"
                              required
                              prepend-icon="ni ni-ruler-pencil"
                              placeholder="Désignation"
                              v-model="model.name">
                            </base-input>
                        </b-col>
                        <b-col>
                            <base-input alternative
                              class="mb-3"
                              name="Prix"
                              required
                              prepend-icon="ni ni-money-coins"
                              placeholder="Prix (FCFA)"
                              type="number"
                              min="5"
                              v-model="model.price">
                            </base-input>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <textarea class="form-control mb-3" id="exampleFormControlTextarea3" rows="3"
                              name="Description"
                              required
                              prepend-icon="ni ni-ruler-pencil"
                              placeholder="Description"
                              v-model="model.description"
                            ></textarea>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <base-input alternative
                              class="mb-3"
                              name="Adresse"
                              required
                              prepend-icon="ni ni-square-pin"
                              placeholder="Adresse"
                              v-model="model.address">
                            </base-input>
                        </b-col>
                        <b-col>
                            <base-input alternative
                              class="mb-3"
                              name="Salles de bains"
                              required
                              prepend-icon="fa fa-bath"
                              placeholder="Salles de bains"
                              type="number"
                              min="0"
                              v-model="model.bathrooms_nbr">
                            </base-input>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <base-input alternative
                              class="mb-3"
                              name="Chambre"
                              required
                              prepend-icon="ni ni-shop"
                              placeholder="Chambre"
                              type="number"
                              min="0"
                              v-model="model.bedrooms_nbr">
                            </base-input>
                        </b-col>
                        <b-col>
                            <base-input alternative
                              class="mb-3"
                              name="Lit"
                              required
                              prepend-icon="fa fa-bed" 
                              placeholder="Lit"
                              type="number"
                              min="0"
                              v-model="model.beds_nbr">
                            </base-input>
                        </b-col>
                        
                        <b-col>
                            <base-input alternative
                              class="mb-3"
                              name="Toilette"
                              required
                              prepend-icon="fa fa-toilet"
                              placeholder="Toilette"
                              type="number"
                              min="0"
                              v-model="model.toilets_nbr">
                            </base-input>
                        </b-col>
                    </b-row>
                    <b-row class="mb-4" >
                        <b-col>
                            <label for="has_pool">Piscine</label>
                            <b-form-checkbox
                                v-model="model.has_pool"
                                name="has_pool"
                                value="1"
                                unchecked-value="0">
                                <i class="fa fa-swimmer"></i> Oui/Non
                            </b-form-checkbox>
                        </b-col>
                    
                        <b-col>
                            <label for="has_pool">Climatiseur</label>
                            <b-form-checkbox
                                v-model="model.has_air_conditioner"
                                name="has_air_conditioner"
                                value="1"
                                unchecked-value="0">
                                <i class="ni ni-settings-gear-65"></i> Oui/Non
                            </b-form-checkbox>
                        </b-col>
                        
                        <b-col>
                            <label for="has_pool">Parking</label>
                            <b-form-checkbox
                                v-model="model.has_parking"
                                name="has_parking"
                                value="1"
                                unchecked-value="0">
                                <i class="ni ni-bus-front-12"></i> Oui/Non
                            </b-form-checkbox>
                        </b-col>
                    </b-row>
                    <b-row class="mb-4" >
                        <b-col>
                            <label for="has_pool">Cuisine</label>
                            <b-form-checkbox
                                v-model="model.has_kitchen"
                                name="has_kitchen"
                                value="1"
                                unchecked-value="0">
                                <i class="ni ni-settings-gear-65"></i> Oui/Non
                            </b-form-checkbox>
                        </b-col>
                        <b-col>
                            <label for="has_pool">Jacuzzi</label>
                            <b-form-checkbox
                                v-model="model.has_jacuzzi"
                                name="has_jacuzzi"
                                value="1"
                                unchecked-value="0">
                                <i class="fa fa-bath"></i> Oui/Non
                            </b-form-checkbox>
                        </b-col>
                        <b-col>
                            <label for="has_pool">Machine à laver</label>
                            <b-form-checkbox
                                v-model="model.has_washing_machine"
                                name="has_washing_machine"
                                value="1"
                                unchecked-value="0">
                                <i class="ni ni-ui-04"></i> Oui/Non
                            </b-form-checkbox>
                        </b-col>
                    </b-row>
                    <b-row class="mb-4" >
                        <b-col>
                            <label for="has_pool">Voiture</label>
                            <b-form-checkbox
                                v-model="model.has_car"
                                name="has_car"
                                value="1"
                                unchecked-value="0">
                                <i class="ni ni-delivery-fast"></i> Oui/Non
                            </b-form-checkbox>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <upload
                              class="upload-demo"
                              v-memo="model.cover"
                              limit="1"
                              :auto-upload="false"
                              ref="uploadCover"
                              :file-list="fileList">
                              <base-button size="sm" type="primary"   class="my-4">Cliquer pour envoyer le Cover</base-button>
                              <div slot="tip" class="el-upload__tip">Fichiers jpg/png avec une taille inférieure à 500kb</div>
                            </upload>
                        </b-col>
                        <b-col>
                            <upload
                              class="upload-demo"
                              ref="uploadPictures"
                              v-memo="model.pictures"
                              :file-list="fileList"
                              :auto-upload="false">
                              <base-button size="sm" type="primary"   class="my-4">Cliquer pour envoyer les images</base-button>
                              <div slot="tip" class="el-upload__tip">Fichiers jpg/png avec une taille inférieure à 500kb</div>
                            </upload>
                        </b-col>
                        <b-col>
                            <upload
                              class="upload-demo"
                              v-memo="model.videos"
                              ref="uploadVideos"
                              :auto-upload="false"
                              :file-list="fileList">
                              <base-button size="sm" type="primary"   class="my-4">Cliquer pour envoyer les vidéos</base-button>
                              <div slot="tip" class="el-upload__tip">Fichiers jpg/png avec une taille inférieure à 500kb</div>
                            </upload>
                        </b-col>
                    </b-row>
                    <div class="text-right">
                        <base-button type="primary" v-if="!load" native-type="submit" class="my-4">Enregistrer</base-button>
                        <b-button variant="primary" v-else class="mt-4">Chargement..</b-button>
                    </div>
                </b-form>
        </validation-observer>
      </b-modal>
    </div>
</template>
  
<script>
  import { Table, TableColumn, DropdownMenu, DropdownItem, Dropdown, Upload, Button } from 'element-ui'
  import Vue from 'vue'
  import VueClipboard from 'vue-clipboard2'
  import BaseHeader from '@/components/BaseHeader';
  import store from '../store/index'

  Vue.use(VueClipboard)
  export default {
    name: 'AddGuesthouse',
    components: {
      BaseHeader,
      [Table.name]: Table,
      [TableColumn.name]: TableColumn,
      Upload,
      Button,
      [Dropdown.name]: Dropdown,
      [DropdownItem.name]: DropdownItem,
      [DropdownMenu.name]: DropdownMenu,
    },
    data() {
      return {
        currentPage: 1,
        load: false, // Ajout de la variable load pour contrôler l'état de chargement
        model: {
            name: '',
            price: '',
            description: '',
            address: '',
            bedrooms_nbr: '',
            beds_nbr: '',
            toilets_nbr: '',
            bathrooms_nbr: '',
            has_pool: 0,
            has_air_conditioner: 0,
            has_kitchen: 0,
            has_jacuzzi: 0,
            has_washing_machine: 0,
            has_car: 0,
            has_parking: 0,
            cover: '',
            pictures: [],
            videos: []
        },
        fileList: [],
        data_guesthouse: [],
        itemsPerPage: 5,
        currentPage: 1,
      };
    },
    methods: {
      async addGuesthouse() {
        try {
            this.load = true; // Indiquer que la soumission est en cours
            
            // Création de FormData
            const formData = new FormData();
            for (const key in this.model) {
                formData.append(key, this.model[key]);
            }

            // Ajouter les fichiers de couverture
            const coverFiles = this.$refs.uploadCover.uploadFiles;
            coverFiles.forEach((file, index) => {
                formData.append(`cover`, file.raw);
            });

                      // Ajouter les fichiers d'images
            const pictureFiles = this.$refs.uploadPictures.uploadFiles;
            pictureFiles.forEach((file, index) => {
                formData.append(`pictures[${index}]`, file.raw);
            });

            // Ajouter les fichiers de vidéos
            const videoFiles = this.$refs.uploadVideos.uploadFiles;
            videoFiles.forEach((file, index) => {
                formData.append(`videos[${index}]`, file.raw);
            });


            // Envoyer la requête au magasin Vuex
            const response = await store.dispatch("guesthouse/addguesthouse", formData);
             // Réinitialisation du formulaire après la soumission réussie
             this.model = {
                    name: '',
                    price: '',
                    description: '',
                    address: '',
                    bedrooms_nbr: '',
                    beds_nbr: '',
                    toilets_nbr: '',
                    bathrooms_nbr: '',
                    has_pool: '',
                    has_air_conditioner: '',
                    has_kitchen: '',
                    has_jacuzzi: '',
                    has_washing_machine: '',
                    has_car: '',
                    has_parking: '',
                    cover: '',
                    pictures: [],
                    videos: []
                };
                // Fermeture du modal après la soumission réussie
                this.$toast.success("Guesthouse ajoutée avec succès !", {
                    timeout: 2000
                });
            this.load = false; 
            this.listGuesthouse()
            this.$bvModal.hide('modal-1')
        } catch (error) {
            console.log(error)
            this.$toast.error('Erreur lors de l\'ajout de la guesthouse', {
                timeout: 2000
            });
            this.load = false; 
        }  
    },
    async listGuesthouse() { 
      try {
        const response = await store.dispatch("guesthouse/listguesthouse",);
        this.data_guesthouse = response.data
      } catch (error) {
        this.$toast.error("Liste introuvable", {
            timeout: 2000
        });
      }
    },
     // Pagination
     changePage(page) {
          this.currentPage = page;
        },
        previousPage() {
          if (this.currentPage > 1) {
            this.currentPage--;
          }
        },
        nextPage() {
          if (this.currentPage < this.totalPages) {
            this.currentPage++;
          }
        },


    },
    mounted() {
        this.listGuesthouse()
    },
    computed: {
        start() {
          return (this.currentPage - 1) * this.itemsPerPage;
        },
        end() {
          return this.start + this.itemsPerPage;
        },
        displayedGuesthouse() {
          return this.data_guesthouse.slice(this.start, this.end);
        },
        totalPages() {
          return Math.ceil(this.data_guesthouse.length / this.itemsPerPage);
        }
    }
  };
</script>

<style scoped>
th{
    font-size: 15px;
}
td{
    font-size: 13px;
}
.nodata{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-items: center;
  align-content: center;
  text-align: center
}
</style>