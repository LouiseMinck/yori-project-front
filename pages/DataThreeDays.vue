<template>
    <div id="bodyboard">
      <div id="dashboard">
        <h1>Vos données sur 3 Jours</h1>
        <Chart :plantData="plantData"/>
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
  async fetch ({ store, params }) { //Charge les données avant le chargement de la page
    await store.dispatch('getPlantDataThreeDays');
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
