<template>
  <div>
    <div v-if="role_id">
      <base-header
        v-if="role_id && role_id === 2"
        class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success"
      >
        <!-- Card stats -->
        <b-row>
          <b-col xl="6" md="6">
            <stats-card
              title="Guesthouse rejetée"
              type="gradient-red"
              :sub-title="statsManagers.guest_house_rejected"
              icon="ni ni-active-40"
              class="mb-4"
            >
              <template slot="footer">
                <span class="text-success mr-2">2%</span>
                <span class="text-nowrap">depuis le mois dernier</span>
              </template>
            </stats-card>
          </b-col>
          <b-col xl="6" md="6">
            <stats-card
              title="Totale guesthouse "
              type="gradient-orange"
              :sub-title="statsManagers.guest_houses_number"
              icon="ni ni-chart-pie-35"
              class="mb-4"
            >
              <template slot="footer">
                <span class="text-success mr-2">12.18%</span>
                <span class="text-nowrap">depuis le mois dernier</span>
              </template>
            </stats-card>
          </b-col>
          <b-col xl="6" md="6">
            <stats-card
              title="Nombre clique"
              type="gradient-green"
              :sub-title="statsManagers.guest_house_with_max_views.views"
              icon="ni ni-money-coins"
              class="mb-4"
            >
              <template slot="footer">
                <span class="text-danger mr-2">5.72%</span>
                <span class="text-nowrap">depuis le mois dernier</span>
              </template>
            </stats-card>
          </b-col>
          <b-col xl="6" md="6">
            <stats-card
              title="Revenue annuel "
              type="gradient-info"
              :sub-title="statsManagers.yearly_income"
              icon="ni ni-chart-bar-32"
              class="mb-4"
            >
              <template slot="footer">
                <span class="text-success mr-2">54.8%</span>
                <span class="text-nowrap">depuis le mois dernier</span>
              </template>
            </stats-card>
          </b-col>
        </b-row>
      </base-header>
      <base-header
        v-if="role_id && role_id === 1"
        class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success"
      >
        <!-- Card stats -->
        <b-row>
          <b-col xl="6" md="6">
            <stats-card
              title="Guesthouse rejetée"
              type="gradient-red"
              :sub-title="statsAdmin.guest_houses_rejected"
              icon="ni ni-active-40"
              class="mb-4"
            >
              <template slot="footer">
                <span class="text-success mr-2">2%</span>
                <span class="text-nowrap">depuis le mois dernier</span>
              </template>
            </stats-card>
          </b-col>
          <b-col xl="6" md="6">
            <stats-card
              title="Totale guesthouse "
              type="gradient-orange"
              :sub-title="statsAdmin.guest_houses_submitted"
              icon="ni ni-chart-pie-35"
              class="mb-4"
            >
              <template slot="footer">
                <span class="text-success mr-2">12.18%</span>
                <span class="text-nowrap">depuis le mois dernier</span>
              </template>
            </stats-card>
          </b-col>
          <b-col xl="6" md="6">
            <stats-card
              title="Guesthouse validée"
              type="gradient-green"
              :sub-title="statsAdmin.guest_houses_validated"
              icon="ni ni-money-coins"
              class="mb-4"
            >
              <template slot="footer">
                <span class="text-danger mr-2">5.72%</span>
                <span class="text-nowrap">depuis le mois dernier</span>
              </template>
            </stats-card>
          </b-col>
          <b-col xl="6" md="6">
            <stats-card
              title="Totale réservation"
              type="gradient-info"
              :sub-title="statsAdmin.reservations_nbr"
              icon="ni ni-chart-bar-32"
              class="mb-4"
            >
              <template slot="footer">
                <span class="text-success mr-2">54.8%</span>
                <span class="text-nowrap">depuis le mois dernier</span>
              </template>
            </stats-card>
          </b-col>
        </b-row>
      </base-header>

      <!--Charts-->
      <b-container fluid class="mt--7">
        <b-row>
          <b-col xl="8" class="mb-5 mb-xl-0" v-if="role_id">
            <card type="default" header-classes="bg-transparent">
              <b-row align-v="center" slot="header">
                <b-col>
                  <h6 class="text-black text-uppercase ls-1 mb-1">Vue d'ensembles</h6>
                  <h5 class="h3 text-black mb-0">Réservations</h5>
                </b-col>
                <b-col>
                  <b-nav class="nav-pills justify-content-end">
                    <b-nav-item
                      class="mr-2 mr-md-0"
                      :active="bigLineChart.activeIndex === 0"
                      link-classes="py-2 px-3"
                      @click.prevent="initBigChart(0)"
                    >
                      <span class="d-none d-md-block">Mois</span>
                      <span class="d-md-none">M</span>
                    </b-nav-item>
                    <b-nav-item
                      link-classes="py-2 px-3"
                      :active="bigLineChart.activeIndex === 1"
                      @click.prevent="initBigChart(1)"
                    >
                      <span class="d-none d-md-block">Week</span>
                      <span class="d-md-none">W</span>
                    </b-nav-item>
                  </b-nav>
                </b-col>
              </b-row>
              <line-chart
                :height="350"
                ref="bigChart"
                :chart-data="bigLineChart.chartData"
                :extra-options="bigLineChart.extraOptions"
              >
              </line-chart>
            </card>
          </b-col>

          <b-col xl="4" class="mb-5 mb-xl-0" v-if="role_id && role_id === 2">
            <card header-classes="bg-transparent">
              <b-row align-v="center" slot="header">
                <b-col>
                  <h6 class="text-uppercase text-muted ls-1 mb-1">Vue d'ensembles</h6>
                  <h5 class="h3 mb-0">Revenus Mensuels</h5>
                </b-col>
              </b-row>

              <bar-chart :height="350" ref="barChart" :chart-data="redBarChart.chartData">
              </bar-chart>
            </card>
          </b-col>
          <b-col xl="4" class="mb-5 mb-xl-0" v-if="role_id && role_id === 1">
            <card header-classes="bg-transparent">
              <b-row align-v="center" slot="header">
                <b-col>
                  <h6 class="text-uppercase text-muted ls-1 mb-1">Vue d'ensembles</h6>
                  <h5 class="h3 mb-0">Totale Guesthouse / Mois</h5>
                </b-col>
              </b-row>

              <bar-chart
                :height="350"
                ref="barChart"
                :chart-data="redBarChart_.chartData"
              >
              </bar-chart>
            </card>
          </b-col>
        </b-row>
        <!-- End charts-->

        <!--Tables-->
        <!-- <b-row class="mt-5">
        <b-col xl="8" class="mb-5 mb-xl-0">
          <page-visits-table></page-visits-table>
        </b-col>
        <b-col xl="4" class="mb-5 mb-xl-0">
          <social-trafic-table></social-trafic-table>
        </b-col>
      </b-row> -->
        <!--End tables-->
      </b-container>
    </div>

    <div v-else>
      <!-- Skeleton loader for images -->
      <div class="columns is-multiline container">
        <div class="column is-4">
          <div
            class="skeleton-loader"
            style="width: auto; height: 250px; margin-bottom: 10px"
          ></div>
          <div class="skeleton-loader" style="width: auto; height: 250px"></div>
        </div>
        <div class="column is-4">
          <div
            class="skeleton-loader"
            style="width: auto; height: 250px; margin-bottom: 10px"
          ></div>
          <div class="skeleton-loader" style="width: auto; height: 250px"></div>
        </div>
        <div class="column is-4">
          <div
            class="skeleton-loader"
            style="width: auto; height: 250px; margin-bottom: 10px"
          ></div>
          <div class="skeleton-loader" style="width: auto; height: 250px"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// Charts
import * as chartConfigs from "@/components/Charts/config";
import LineChart from "@/components/Charts/LineChart";
import BarChart from "@/components/Charts/BarChart";

// Components
import BaseProgress from "@/components/BaseProgress";
import StatsCard from "@/components/Cards/StatsCard";

// Tables
import SocialTrafficTable from "./Dashboard/SocialTrafficTable";
import PageVisitsTable from "./Dashboard/PageVisitsTable";
import store from "../store/index";
export default {
  components: {
    LineChart,
    BarChart,
    BaseProgress,
    StatsCard,
    PageVisitsTable,
    SocialTrafficTable,
  },
  data() {
    return {
      role_id: undefined,

      statsManagers: {},
      statsAdmin: {},
      bigLineChart: {
        allData: [],
        activeIndex: 0,
        chartData: {
          datasets: [
            {
              label: "Réservations",
              data: [],
            },
          ],
          labels: [],
        },
        extraOptions: chartConfigs.blueChartOptions,
      },
      redBarChart: {
        chartData: {
          labels: [],
          datasets: [
            {
              label: "Revenus",
              data: [],
            },
          ],
        },
        extraOptions: chartConfigs.blueChartOptions,
      },

      redBarChart_: {
        chartData: {
          labels: [],
          datasets: [
            {
              label: "Guesthouse",
              data: [],
            },
          ],
        },
        extraOptions: chartConfigs.blueChartOptions,
      },
    };
  },
  methods: {
    async loadstatsAdmin(roleId) {
      try {
        if (roleId && roleId === 1) {
          const response = await store.dispatch("guesthouse/statsAdmin");
          this.statsAdmin = response.data;
          // Mise à jour des données du graphique des réservations
          const reservationsData = response.data.reservations_per_month.map(
            (item) => item.number
          );
          const reservationLabels = response.data.reservations_per_month.map(
            (item) => item.month
          );

          this.bigLineChart.chartData.datasets[0].data = reservationsData;
          this.bigLineChart.chartData.labels = reservationLabels;
          this.bigLineChart.allData = [reservationsData]; // Si vous souhaitez gérer plusieurs séries

          // Mise à jour des données du graphique des revenus
          const incomeData = response.data.guest_houses_per_month.map(
            (item) => item.number
          );
          const incomeLabels = response.data.guest_houses_per_month.map(
            (item) => item.month
          );

          this.redBarChart_.chartData.datasets[0].data = incomeData;
          this.redBarChart_.chartData.labels = incomeLabels;

          // Forcer la mise à jour du graphique
          this.$refs.barChart.$data._chart.update();
          this.$refs.bigChart.$data._chart.update();
        }
        if (roleId && roleId === 2) {
          const response = await store.dispatch("guesthouse/statsManagers");
          this.statsManagers = response.data;

          // Mise à jour des données du graphique des réservations
          const reservationsData = response.data.reservations_per_month.map(
            (item) => item.number
          );
          const reservationLabels = response.data.reservations_per_month.map(
            (item) => item.month
          );

          this.bigLineChart.chartData.datasets[0].data = reservationsData;
          this.bigLineChart.chartData.labels = reservationLabels;
          this.bigLineChart.allData = [reservationsData]; // Si vous souhaitez gérer plusieurs séries

          // Mise à jour des données du graphique des revenus
          const incomeData = response.data.income_per_month.map((item) => item.income);
          const incomeLabels = response.data.income_per_month.map((item) => item.month);

          this.redBarChart.chartData.datasets[0].data = incomeData;
          this.redBarChart.chartData.labels = incomeLabels;
        }
      } catch (error) {
        console.log(error);
      }
    },
    initBigChart(index) {
      let chartData = {
        datasets: [
          {
            label: "Réservations",
            data: this.bigLineChart.allData[index],
          },
        ],
        labels: this.bigLineChart.chartData.labels,
      };
      this.bigLineChart.chartData = chartData;
      this.bigLineChart.activeIndex = index;
    },

    async meUser() {
      try {
        const response = await store.dispatch("guesthouse/me");
        this.role_id = response.data.role_id;
        this.loadstatsAdmin(this.role_id);
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.initBigChart(0);
    this.meUser();
    this.loadstatsAdmin();
  },
};
</script>
<style>
.el-table .cell {
  padding-left: 0px;
  padding-right: 0px;
}
.skeleton-loader {
  background-color: #eee;
  animation: pulse 1.5s infinite ease-in-out;
  width: 400px !important;
  margin-right: 5rem !important;
}

@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>
