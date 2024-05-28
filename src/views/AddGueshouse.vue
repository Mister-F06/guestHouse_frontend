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

            <el-table class="table-responsive table-flush"
                    header-row-class-name="thead-light"
                    :data="projects">
                <el-table-column label="Project"
                                min-width="310px"
                                prop="name"
                                sortable>
                    <template v-slot="{row}">
                        <b-media no-body class="align-items-center">
                            <a href="#" class="avatar rounded-circle mr-3">
                                <img alt="Image placeholder" :src="row.img">
                            </a>
                            <b-media-body>
                                <span class="font-weight-600 name mb-0 text-sm"></span>
                            </b-media-body>
                        </b-media>
                    </template>
                </el-table-column>
                <el-table-column label="Budget"
                                prop="budget"
                                min-width="140px"
                                sortable>
                </el-table-column>

                <el-table-column label="Status"
                                min-width="170px"
                                prop="status"
                                sortable>
                    <template v-slot="{row}">
                        <badge class="badge-dot mr-4" type="">
                            <i :class="`bg-${row.statusType}`"></i>
                            <span class="status"></span>
                        </badge>
                    </template>
                </el-table-column>

                <el-table-column label="Users" min-width="190px">
                    <div class="avatar-group">
                    </div>
                </el-table-column>

                <el-table-column label="Completion"
                                prop="completion"
                                min-width="240px"
                                sortable>
                    <template v-slot="{row}">
                        <div class="d-flex align-items-center">
                            <span class="completion mr-2">%</span>
                            <div>
                                <base-progress :type="row.statusType" :value="row.completion"/>
                            </div>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column min-width="180px">
                    <template v-slot="{row}">
                        <el-dropdown trigger="click" class="dropdown">
                        <span class="btn btn-sm btn-icon-only text-light">
                        <i class="fas fa-ellipsis-v mt-2"></i>
                        </span>
                            <el-dropdown-menu class="dropdown-menu dropdown-menu-arrow show" slot="dropdown">
                                <b-dropdown-item>Action</b-dropdown-item>
                                <b-dropdown-item>Another action</b-dropdown-item>
                                <b-dropdown-item>Something else here</b-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </template>
                </el-table-column>
            </el-table>

            <b-card-footer class="py-4 d-flex justify-content-end">
                <base-pagination v-model="currentPage" :per-page="10" :total="50"></base-pagination>
            </b-card-footer>
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
                              name="Chambre"
                              required
                              prepend-icon="ni ni-shop"
                              placeholder="Chambre"
                              type="number"
                              v-model="model.bedrooms_nbr">
                            </base-input>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <base-input alternative
                              class="mb-3"
                              name="Lit"
                              required
                              prepend-icon="fa fa-bed" 
                              placeholder="Lit"
                              type="number"

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

                              v-model="model.toilets_nbr">
                            </base-input>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <base-input alternative
                              class="mb-3"
                              name="Salles de bains"
                              required
                              prepend-icon="fa fa-bath"
                              placeholder="Salles de bains"
                              type="number"

                              v-model="model.bathrooms_nbr">
                            </base-input>
                        </b-col>
                        <b-col>
                            <base-input alternative
                              class="mb-3"
                              name="Piscine"
                              required
                              prepend-icon="fa fa-swimmer"
                              placeholder="Piscine"
                              type="number"

                              v-model="model.has_pool">
                            </base-input>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <base-input alternative
                                        class="mb-3"
                                        name="Climatiseur"
                                        required
                                        prepend-icon="ni ni-settings-gear-65"
                                        placeholder="Climatiseur"
                                        type="number"

                                        v-model="model.has_air_conditioner">
                            </base-input>
                        </b-col>
                        <b-col>
                            <base-input alternative
                                        class="mb-3"
                                        name="Parking"
                                        required
                                        prepend-icon="ni ni-bus-front-12"
                                        placeholder="Parking"
                                        type="number"
                                        v-model="model.has_parking">
                            </base-input>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <base-input alternative
                                        class="mb-3"
                                        name="Cuisine"
                                        required
                                        prepend-icon="ni ni-settings-gear-65"
                                        placeholder="Cuisine"
                                        type="number"

                                        v-model="model.has_kitchen">
                            </base-input>
                        </b-col>
                        <b-col>
                            <base-input alternative
                                        class="mb-3"
                                        name="Jacuzzi"
                                        required
                                        prepend-icon="fa fa-bath"
                                         type="number"

                                        placeholder="Jacuzzi"
                                        v-model="model.has_jacuzzi">
                            </base-input>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <base-input alternative
                                        class="mb-3"
                                        name="Machine à laver"
                                        required
                                        prepend-icon="ni ni-ui-04"
                                        placeholder="Machine à laver"
                                        v-model="model.has_washing_machine">
                            </base-input>
                        </b-col>
                        <b-col>
                            <base-input alternative
                                        class="mb-3"
                                        name="Voiture"
                                        required
                                        prepend-icon="ni ni-delivery-fast"
                                        placeholder="Voiture"
                                        type="number"
                                        v-model="model.has_car">
                            </base-input>
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
            name: 'text',
            price: '5',
            description: 'text',
            address: '1',
            bedrooms_nbr: '1',
            beds_nbr: '1',
            toilets_nbr: '1',
            bathrooms_nbr: '1',
            has_pool: '1',
            has_air_conditioner: '1',
            has_kitchen: '1',
            has_jacuzzi: '1',
            has_washing_machine: '1',
            has_car: '1',
            has_parking: '1',
            other: '1',
            cover: '',
            pictures: [],
            videos: []
        },
        fileList: [],
      };
    },
    methods: {
      async addGuesthouse() {
        try {
            console.log(this.model)
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

            if (response.ok) {
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
                this.$refs['modal-1'].hide();
                this.$toast.success("Guesthouse ajoutée avec succès !", {
                    timeout: 2000
                });
            } else {
                this.$toast.error("Erreur lors de l\'ajout de la guesthouse", {
                    timeout: 2000
                });
            }
        } catch (error) {
            this.$toast.error('Une erreur est survenue', {
                timeout: 2000
            });
        } finally {
            this.load = false; // Fin du chargement, quel que soit le résultat
        }
    }

    }
  };
</script>

<style></style>