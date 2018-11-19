<template>
    <div id="bodyboard">
      <div id="dashboard">
        <h1>Vos données sur 24 Heures</h1>
        <Chart :plantData="plantData" :hours="true"/>
      </div>
    </div>
</template>

<script>
import DataBlock from "@/components/data/DataBlock";
import Chart from '@/components/Chart';

export default {
  name: "DashHome",
  layout: 'dashboard',
  middleware: ['authenticated', 'plant'],
  async fetch ({ store, params, app, redirect }) { //Charge les données avant le chargement de la page
    await store.dispatch('getPlantDataDay', {app, redirect});
  },
  computed: {
    plantData () {
      return this.$store.getters.plantData
    }
  },
  components:{
    DataBlock,
    Chart
  },
}

</script>
