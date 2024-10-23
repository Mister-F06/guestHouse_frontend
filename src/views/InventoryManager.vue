<template>
  <div>
    <!-- BootstrapVue Done -->
    <vue-confirm-dialog></vue-confirm-dialog>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success pding"></base-header>
    <b-container fluid class="mt--7">
      <b-card no-body>
        <b-card-header
          class="border-0 d-flex justify-content-between align-content-center align-items-center"
        >
          <h4 class="mb-0">Liste des inventaires</h4>
        </b-card-header>
        <div class="table-container m-5">
          <table class="table is-bordered is-hoverable is-fullwidth">
            <tr>
              <th style="text-align: left">GuestHouse</th>
              <th style="text-align: left">Manager</th>
              <th style="text-align: left">Remboursement</th>
              <th style="text-align: right">Status</th>
              <th style="text-align: right">
                <i class="fas fa-spinner spin" v-if="load"></i>
                Action
              </th>
            </tr>
            <tr v-for="item in displayedInventory" :key="item.id">
              <td style="text-align: left">{{ item.guest_house_name }}</td>
              <td style="text-align: left">{{ item.manager_name }}</td>
              <td style="text-align: left">
                {{ formatNumberCustom(item.refund_amount) }} <span>FCFA</span>
              </td>
              <td style="text-align: right">
                <span v-if="item.refunded == true" class="tag is-primary is-light"
                  >Rembourser</span
                >
                <span v-if="item.refunded == false" class="tag is-danger is-light"
                  >Pas rembourser</span
                >
              </td>
              <td style="text-align: right">
                <a
                  class="button is-small ml-1"
                  v-b-modal.modal-2
                  variant="primary"
                  @click="detailInfoAdd(item.reservations)"
                >
                  <span class="icon is-small">
                    <i
                      class="fa fa-eye is-small"
                      style="font-size: small; color: blue"
                    ></i>
                  </span>
                  <span style="color: blue">voir plus</span>
                </a>
              </td>
            </tr>
          </table>
          <div v-if="Object.keys(displayedInventory).length == 0" class="nodata">
            <h3>Aucune donnée</h3>
          </div>
          <div class="pagination mb-3 mt-3">
            <a class="button is-small" @click="previousPage">
              <span class="icon is-small">
                <i class="fa fa-angle-left mr-3" style="font-size: small"></i>
              </span>
              <span>Précedent</span>
            </a>
            <a class="button is-small" @click="nextPage">
              <span>Suivant</span>
              <span class="icon is-small">
                <i class="fa fa-angle-right ml-3" style="font-size: small"></i>
              </span>
            </a>
          </div>
        </div>
        <!-- Modal voir plus  -->
        <b-modal id="modal-2" title="Détail sur les réservations" size="lg" hide-footer>
          <div class="table-container m-5">
            <table class="table is-bordered is-hoverable is-fullwidth">
              <tr>
                <th style="text-align: left">Date</th>
                <th style="text-align: left">Client</th>
                <th style="text-align: left">Email</th>
                <th style="text-align: right">Délai</th>
                <th style="text-align: left">Référence ID</th>
                <th style="text-align: left">Téléphone</th>
              </tr>

              <tr v-for="item in this.detailInfo" :key="item.id">
                <td style="text-align: left">
                  {{ item.start_date + " - " + item.end_date }}
                </td>
                <td style="text-align: left">
                  {{ item.firstname + "  " + item.lastname }}
                </td>
                <td style="text-align: left">
                  {{ item.email }}
                </td>
                <td style="text-align: right">{{ item.delay }}jrs</td>
                <td style="text-align: left">
                  {{ item.referenceId }}
                </td>
                <td style="text-align: left">
                  {{ item.telephone }}
                </td>
              </tr>
            </table>
          </div>
        </b-modal>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import {
  Table,
  TableColumn,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Upload,
  Button,
} from "element-ui";
import Vue from "vue";
import VueClipboard from "vue-clipboard2";
import BaseHeader from "@/components/BaseHeader";
import store from "../store/index";

Vue.use(VueClipboard);
export default {
  name: "AddGuesthouse",
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
      data_inventory: [],
      load: false, // Ajout de la variable load pour contrôler l'état de chargement
      updated_: false,

      fileList: [],
      data_guesthouse: [],
      itemsPerPage: 5,
      currentPage: 1,
      role_id: undefined,
      detailInfo: [],
    };
  },
  methods: {
    detailInfoAdd(item) {
      this.detailInfo = [...item];
    },
    async listInventaire(roleId) {
      try {
        let data = {};
        if (roleId && roleId === 1) {
          const response = await store.dispatch("refund/inventoryAdmin");
          data = response.data;
        }
        if (roleId && roleId === 2) {
          const response = await store.dispatch("refund/inventoryManager");
          data = response.data;
        }

        // Transformer les données reçues en un tableau de maisons d'hôtes
        this.data_inventory = Object.values(data).flatMap((guestHouses) =>
          Object.values(guestHouses || {}).flatMap((guestHouse) => {
            if (!guestHouse) {
              console.error("Aucune guesthouse trouvée");
              return [];
            }
            return guestHouse;
          })
        );
      } catch (error) {
        this.$toast.error("Liste introuvable", {
          timeout: 2000,
        });
      }
    },
    formatNumberCustom(number) {
      let numberString = number.toString();
      return numberString.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    async meUser() {
      try {
        const response = await store.dispatch("guesthouse/me");
        this.role_id = response.data.role_id;
        this.listInventaire(this.role_id);
      } catch (error) {
        console.log(error);
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
    this.meUser();
    this.listInventaire();
  },
  computed: {
    start() {
      return (this.currentPage - 1) * this.itemsPerPage;
    },
    end() {
      return this.start + this.itemsPerPage;
    },

    displayedInventory() {
      return this.data_inventory.slice(this.start, this.end); // `data_inventory` est maintenant un tableau
    },
    totalPages() {
      return Math.ceil(this.data_inventory.length / this.itemsPerPage);
    },
  },
};
</script>

<style scoped>
th {
  font-size: 15px;
}
td {
  font-size: 13px;
}
.nodata {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-items: center;
  align-content: center;
  text-align: center;
}
.visibilityClasse {
  visibility: hidden;
}

.texting {
  color: auto;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.spin {
  animation: spin 2s linear infinite;
}
</style>
