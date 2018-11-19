<template>
    <div id="bodyboard">
      <div id="dashboard">
        <div v-if="plantData">
          <h1>Votre plante</h1>
          <section class="data">
          <data-block type="temperature" :plant_type="plantData.plant" :plant_data="plantData.data"></data-block>
          </section>
          <section class="data">
          <data-block type="ph" :plant_type="plantData.plant" :plant_data="plantData.data"></data-block>
          </section>
          <section class="data">
          <data-block type="humidity" :plant_type="plantData.plant" :plant_data="plantData.data"></data-block>
          </section>
        </div>
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
      await store.dispatch('getPlantData', {app, redirect});
  },
  computed: {
    plantData () {
        return this.$store.getters.plantData;
    }
  },
  components:{
    DataBlock,
    Chart
  },
}

</script>

