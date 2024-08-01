<template>
    <div>
         <!-- BootstrapVue Done -->
      <vue-confirm-dialog></vue-confirm-dialog>
      <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success pding"></base-header>
      <b-container fluid class="mt--7 ">
        <b-card no-body>
            <b-card-header class="border-0 d-flex justify-content-between align-content-center align-items-center" >
                <h4 class="mb-0">Liste des gueshouses</h4>
                <b-button v-b-modal.modal-1 variant="primary" style="width:200px !important" @click="changingUpdateValue()">Ajouter</b-button>
            </b-card-header>
            <div class="table-container m-5">
                <table class="table is-bordered   is-hoverable is-fullwidth">
                    <tr>
                        <th style=" text-align: left">Désignation</th>
                        <th style=" text-align: left">Prix</th>
                        <th style=" text-align: left">Adresse</th>
                        <th style=" text-align: right">Status</th>
                        <th style=" text-align: right">Visibilité</th>
                        <th style=" text-align: right">Action</th>
                    </tr>
                    <tr v-for="item in displayedGuesthouse" :key="item.id">
                        <td style=" text-align: left">{{ item.name }}</td>
                        <td style=" text-align: left">{{formatNumberCustom(item.price ) }}  <span>FCFA</span></td>
                        <td style=" text-align: left">{{ item.address }}</td>
                        <td style=" text-align: right">
                          <span v-if="item.status == 'validated'" class="tag is-primary is-light">Valider</span>
                          <span v-if="item.status == 'pending_validation'" class="tag is-warning is-light">En cours de traitement</span>
                          <span v-if="item.status == 'rejected'" class="tag is-danger is-light">Rejeter</span>
                          <a  v-b-modal.modal-5 variant="primary" @click="openStatusModal(item)">
                            <i class="fa fa-edit is-small" style="font-size: small;color:green"></i>
                          </a>
                        </td>
                        <td style=" text-align: right">
                          <span v-if="item.is_enabled == true" class="tag is-primary is-light">Visible</span>
                          <span v-if="item.is_enabled == false" class="tag is-danger is-light">Invisible</span>
                          <a  v-b-modal.modal-4 variant="primary" @click="openVisiblityModal(item)">
                            <i class="fa fa-edit is-small" style="font-size: small;color:green"></i>
                          </a>
                        </td>
                        <td style=" text-align: right">
                            <a class="button is-small mr-1" v-b-modal.modal-3 variant="danger"    @click="giveId(item.id)">
                                <span class="icon is-small">
                                <i class="fa fa-trash is-small" style="font-size: small;color:red"></i>
                                </span>
                                <span style="color:red">Supprimer</span>
                            </a>
                            <a class="button is-small" v-b-modal.modal-1 variant="primary" @click="detailInfoUpdated(item)">
                                <span class="icon is-small">
                                <i class="fa fa-edit is-small" style="font-size: small;color:green"></i>
                                </span>
                                <span style="color:green">Modifier</span>
                            </a>
                            <a class="button is-small ml-1" v-b-modal.modal-2 variant="primary" @click="detailInfoAdd(item)">
                                <span class="icon is-small">
                                <i class="fa fa-eye is-small" style="font-size: small;color:blue"></i>
                                </span>
                                <span style="color:blue">voir plus</span>
                            </a>
                        </td>
                    </tr>
                </table>
                <div v-if="Object.keys(displayedGuesthouse).length == 0 " class="nodata">
                   <h3>Aucune donnée</h3>
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
      <b-modal id="modal-1" :title="updated_ == false ? 'Ajouter un gueshouse' : 'Modifier le gueshouse'" size="lg" hide-footer>
        <validation-observer v-slot="{handleSubmit}" ref="formValidator">
                <b-form role="form" @submit.prevent="handleSubmit(updated_ == false ? addGuesthouse : updateGuesthouse )">
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
                                v-model="model.has_air_conditionner"
                                name="has_air_conditionner"
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
                    <b-row :class="updated_ ? 'visibilityClass' : 'texting'">
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
                              <div slot="tip" class="el-upload__tip">Fichiers mp4/webp avec une taille inférieure à 500kb</div>
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
      <!-- Modal voir plus  -->
      <b-modal id="modal-2" title="Détail sur le gueshouse" size="lg" hide-footer>
        <div class="columns is-multiline">
          <div class="column is-4" >
            <p>Désignation</p>
          </div>
          <div class="column is-8" >
            <p>{{this.detailInfo.name}}</p>
          </div>
        </div>
        <div class="columns is-multiline">
          <div class="column is-4" >
            <p>Prix</p>
          </div>
          <div class="column is-8" >
            <p>{{this.detailInfo.price}} <span>FCFA</span></p>
          </div>
        </div>
        <div class="columns is-multiline">
          <div class="column is-4" >
            <p>Description</p>
          </div>
          <div class="column is-8" >
            <p>{{this.detailInfo.description}}</p>
          </div>
        </div>
        <div class="columns is-multiline">
          <div class="column is-4" >
            <p>Adresse</p>
          </div>
          <div class="column is-8" >
            <p>{{this.detailInfo.address}}</p>
          </div>
        </div>
        <div class="columns is-multiline">
          <div class="column is-4" >
            <p>Salles de bains</p>
          </div>
          <div class="column is-8" >
            <p>{{this.detailInfo.bedrooms_nbr}}</p>
          </div>
        </div>
        <div class="columns is-multiline">
          <div class="column is-4" >
            <p>Chambre</p>
          </div>
          <div class="column is-8" >
            <p>{{this.detailInfo.beds_nbr}}</p>
          </div>
        </div>
        <div class="columns is-multiline">
          <div class="column is-4" >
            <p>Lit</p>
          </div>
          <div class="column is-8" >
            <p>{{this.detailInfo.toilets_nbr}}</p>
          </div>
        </div>
        <div class="columns is-multiline">
          <div class="column is-4" >
            <p>Toilettes</p>
          </div>
          <div class="column is-8" >
            <p>{{this.detailInfo.bathrooms_nbr}}</p>
          </div>
        </div>
        <div class="columns is-multiline">
          <div class="column is-4" >
            <p>Piscine</p>
          </div>
          <div class="column is-8" >
            <p v-if="this.detailInfo.has_pool == true">Disponible</p>
            <p v-else>Indisponible</p>
          </div>
        </div>
        <div class="columns is-multiline">
          <div class="column is-4" >
            <p>Climatiseur</p>
          </div>
          <div class="column is-8" >
            <p v-if="this.detailInfo.has_air_conditionner == true">Disponible</p>
            <p v-else>Indisponible</p>
          </div>
        </div>
        <div class="columns is-multiline">
          <div class="column is-4" >
            <p>Parking</p>
          </div>
          <div class="column is-8" >
            <p v-if="this.detailInfo.has_parking == true">Disponible</p>
            <p v-else>Indisponible</p>
          </div>
        </div>
        <div class="columns is-multiline">
          <div class="column is-4" >
            <p>Cuisine</p>
          </div>
          <div class="column is-8" >
            <p v-if="this.detailInfo.has_kitchen == true">Disponible</p>
            <p v-else>Indisponible</p>
          </div>
        </div>
        <div class="columns is-multiline">
          <div class="column is-4" >
            <p>Jacuzzi</p>
          </div>
          <div class="column is-8" >
            <p v-if="this.detailInfo.has_jacuzzi == true">Disponible</p>
            <p v-else>Indisponible</p>
          </div>
        </div>
        <div class="columns is-multiline">
          <div class="column is-4" >
            <p>Machine à laver</p>
          </div>
          <div class="column is-8" >
            <p v-if="this.detailInfo.has_washing_machine == true">Disponible</p>
            <p v-else>Indisponible</p>
          </div>
        </div>
        <div class="columns is-multiline">
          <div class="column is-4" >
            <p>Voiture</p>
          </div>
          <div class="column is-8" >
            <p v-if="this.detailInfo.has_car == true">Disponible</p>
            <p v-else>Indisponible</p>
          </div>
        </div>
        <div class="columns is-multiline">
          <div class="column is-4" >
            <p>Cover</p>
          </div>
          <div class="column is-8">
            <figure class="image is-128x128">
              <img :src="this.detailInfo.cover" alt="">
            </figure>
          </div>
        </div>
        <div class="columns is-multiline">
          <div class="column is-4" >
            <p>Images</p>
          </div>
          <div class="column is-8" >
            <div  v-for="(item, index) in detailInfo.pictures" :key="index">
              <figure class="image is-128x128">
                <img :src="item" alt="">
              </figure>
            </div>
          </div>
        </div>
        <div class="columns is-multiline">
          <div class="column is-4" >
            <p>Video</p>
          </div>
          <div class="column is-8" >
            <div v-for="(item, index) in detailInfo.videos" :key="index">
              <iframe width="100%" height="100%" :src="item"></iframe>
            </div>
          </div>
        </div>
      </b-modal>
      <b-modal id="modal-3" title="Confirmation de suppression" size="sm" hide-footer>
        <div style="text-align: center; display:flex;flex-direction:column;justify-content:center;align-content:center; align-items:center">
          <p>Êtes-vous sûr de vouloir supprimer cet élément ? Cette action est irréversible.</p>
          <img src="../assets/undraw_throw_away_re_x60k.svg" alt="" width="200px" class="mb-2">
          <b-button variant="primary" v-if="!load"  @click="deleteguesthouse()" style="width:200px">Confirmer</b-button>
          <b-button variant="primary" v-else  style="width:200px">chargement..</b-button>
        </div>
      </b-modal>
      <!-- Visibility Modal -->
      <b-modal  id="modal-4" title="Modifier la visibilité" size="sm" hide-footer>
        <validation-observer v-slot="{handleSubmit}" ref="formValidator">
                <b-form role="form" @submit.prevent="handleSubmit(updateVisibility)">
                    <b-row>
                        <b-col>
                          <label for="has_pool">Visiblité</label>
                            <b-form-checkbox
                                v-model="formV.visibility"
                                name="visibility"
                                value="1"
                                unchecked-value="0">
                                <i class="ni ni-settings-gear-65"></i> Visible/Invisible
                            </b-form-checkbox>
                        </b-col>
                    </b-row>
                    <div class="text-right">
                        <base-button type="primary" v-if="!load" native-type="submit" class="my-4">Enregistrer</base-button>
                        <b-button variant="primary" v-else class="mt-4">Chargement..</b-button>
                    </div>
                </b-form>
        </validation-observer>
      </b-modal>
      <!-- Status Modal -->
      <b-modal  id="modal-5" title="Modifier le status" size="sm" hide-footer>
        <validation-observer v-slot="{handleSubmit}" ref="formValidator">
                <b-form role="form" @submit.prevent="handleSubmit(updateStatus)">
                    <b-row>
                        <b-col>
                          <label for="has_pool">Status</label> <br> 
                          <div class="select">
                            <select v-model="formS.status">
                              <option>Sélectionner le status</option>
                              <option value="validated" >Valider</option>
                              <option value="pending_validation" >En cours de validation</option>
                              <option value="rejected" >Rejeter</option>
                            </select>
                          </div> 
                        </b-col> 
                    </b-row>

                    <b-row class="mt-4">
                      <b-col>
                          <label for="has_pool">Raison</label> <br> 
                          <textarea class="textarea" v-model="formS.reasons" placeholder="e.g. Raison"></textarea>
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
        load: false, // Ajout de la variable load pour contrôler l'état de chargement
        updated_:false,
        formV:{
          id:'',
          visibility :undefined,
        },
        formS:{
          id:'',
          status :'',
          reasons :'',
        },
        model: {
            id:'',
            name: '',
            price: '',
            description: '',
            address: '',
            bedrooms_nbr: '',
            beds_nbr: '',
            toilets_nbr: '',
            bathrooms_nbr: '',
            has_pool: 0,
            has_air_conditionner: 0,
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
        detailInfo:{
          name: '',
            price: '',
            description: '',
            address: '',
            bedrooms_nbr: '',
            beds_nbr: '',
            toilets_nbr: '',
            bathrooms_nbr: '',
            has_pool: undefined,
            has_air_conditionner: undefined,
            has_kitchen: undefined,
            has_jacuzzi: undefined,
            has_washing_machine: undefined,
            has_car: undefined,
            has_parking: undefined,
            cover: '',
            pictures: [],
            videos: []
        },
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
                    has_pool: 0,
                    has_air_conditionner: 0,
                    has_kitchen: 0,
                    has_jacuzzi: 0,
                    has_washing_machine: 0,
                    has_car: 0,
                    has_parking: 0,
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
    formatNumberCustom(number) {
        let numberString = number.toString();
        return numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    },

    async updateGuesthouse() {
        try {
          console.log("Updating guesthouse with ID:", this.model.id);
            this.load = true; // Indiquer que la soumission est en cours
            // Création de FormData
            const formData = new FormData();
            formData.append('id', this.model.id);
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
            const response = await store.dispatch("guesthouse/updateguesthouse", formData);
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
                    has_pool: 0,
                    has_air_conditionner: 0,
                    has_kitchen: 0,
                    has_jacuzzi: 0,
                    has_washing_machine: 0,
                    has_car: 0,
                    has_parking: 0,
                    cover: '',
                    pictures: [],
                    videos: []
                };
                // Fermeture du modal après la soumission réussie
                this.$toast.success("Guesthouse modifiée avec succès !", {
                    timeout: 2000
                });
            this.load = false;
            this.listGuesthouse()
            this.$bvModal.hide('modal-1')
            this.updated_ = false
        } catch (error) {
            console.log(error)
            this.$toast.error('Erreur lors de la modification de la guesthouse', {
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

    showMediaFromGoogle(url) {
        // Parse l'URL et extrait ses composants
        let parsedUrl = new URL(url);
        let queryParams = new URLSearchParams(parsedUrl.search);
        return "https://drive.google.com/thumbnail?id=" + queryParams.get('id');
    },
    showMediaFromGoogleVideo(url) {
        // Parse l'URL et extrait ses composants
        let parsedUrl = new URL(url);
        let queryParams = new URLSearchParams(parsedUrl.search);
        return "https://drive.google.com/file/d/" + queryParams.get('id') + "/preview";
    },
    // Autres méthodes...
    giveId(id){
        this.model.id = id
    },
    async deleteguesthouse() {
        try {
          this.load = true; // Indiquer que la soumission est en cours
            // Envoyer la requête au magasin Vuex
            const response = await store.dispatch("guesthouse/deleteguesthouse", this.model.id);
                // Fermeture du modal après la soumission réussie
                this.$toast.success("Guesthouse supprimée avec succès !", {
                    timeout: 2000
                });
            this.load = false;
            this.listGuesthouse()
            this.$bvModal.hide('modal-3')
        } catch (error) {
            console.log(error)
            this.$toast.error('Erreur lors de la suppression de la guesthouse', {
                timeout: 2000
            });
            this.load = false;
        }
    },

    detailInfoAdd(item){
      this.detailInfo.name = item.name
      this.detailInfo.price = item.price
      this.detailInfo.description = item.description
      this.detailInfo.address = item.address
      this.detailInfo.bedrooms_nbr = item.bedrooms_nbr
      this.detailInfo.beds_nbr = item.beds_nbr
      this.detailInfo.toilets_nbr = item.toilets_nbr
      this.detailInfo.bathrooms_nbr = item.bathrooms_nbr
      this.detailInfo.has_pool = item.has_pool
      this.detailInfo.has_air_conditionner = item.has_air_conditionner
      this.detailInfo.has_kitchen = item.has_kitchen
      this.detailInfo.has_jacuzzi = item.has_jacuzzi
      this.detailInfo.has_washing_machine = item.has_washing_machine
      this.detailInfo.has_car = item.has_car
      this.detailInfo.has_parking = item.has_parking
      this.detailInfo.cover = this.showMediaFromGoogle(item.cover);
      this.detailInfo.pictures = item.pictures.map(picture => this.showMediaFromGoogle(picture.original_url));
      this.detailInfo.videos = item.videos.map(video => this.showMediaFromGoogleVideo(video.original_url));
    },

    changingUpdateValue(){
      this.updated_ = false
    },
    detailInfoUpdated(item){
      this.updated_ = true
      this.model.id = item.id
      this.model.name = item.name
      this.model.price = item.price
      this.model.description = item.description
      this.model.address = item.address
      this.model.bedrooms_nbr = item.bedrooms_nbr
      this.model.beds_nbr = item.beds_nbr
      this.model.toilets_nbr = item.toilets_nbr
      this.model.bathrooms_nbr = item.bathrooms_nbr
      this.model.has_pool = item.has_pool  == true ? 1 : 0
      this.model.has_air_conditionner = item.has_air_conditionner  == true ? 1 : 0
      this.model.has_kitchen = item.has_kitchen  == true ? 1 : 0
      this.model.has_jacuzzi = item.has_jacuzzi == true ? 1 : 0
      this.model.has_washing_machine = item.has_washing_machine  == true ? 1 : 0
      this.model.has_car = item.has_car  == true ? 1 : 0
      this.model.has_parking = item.has_parking  == true ? 1 : 0
    },
    openVisiblityModal(item){
      this.formV.visibility  =  item.is_enabled  == true ? 1 : 0
      this.formV.id = item.id
    },
    openStatusModal(item){
      this.formS.status  =  item.status 
      this.formS.id = item.id
    },
    async updateVisibility() {
        try {
            this.load = true; // Indiquer que la soumission est en cours
            // Envoyer la requête au magasin Vuex
            const response = await store.dispatch("guesthouse/updateVisibility", this.formV);
                // Fermeture du modal après la soumission réussie
                this.$toast.success("Visiblité modifiée avec succès !", {
                    timeout: 2000
                });
            this.load = false;
            this.listGuesthouse()
            this.$bvModal.hide('modal-4')
        } catch (error) {
            console.log(error)
            this.$toast.error('Erreur lors de la modification', {
                timeout: 2000
            });
            this.load = false;
        }
    },
    async updateStatus() {
        try {
            this.load = true; // Indiquer que la soumission est en cours
            // Envoyer la requête au magasin Vuex
            const response = await store.dispatch("guesthouse/updateStatus", this.formS);
                // Fermeture du modal après la soumission réussie
                this.$toast.success("Status modifié avec succès !", {
                    timeout: 2000
                });
            this.load = false;
            this.listGuesthouse()
            this.$bvModal.hide('modal-5')
        } catch (error) {
            console.log(error)
            this.$toast.error('Erreur lors de la modification', {
                timeout: 2000
            });
            this.load = false;
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
.visibilityClasse {
  visibility: hidden;
}

.texting {
  color: auto;
}
</style>
