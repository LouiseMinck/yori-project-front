<template>
  <div class="data_block">
      <section class="data">
        <h2>{{info.title}}</h2>
        <data-circle :infos="info"></data-circle>
          <p>{{info.content}}{{info.min}} et {{info.max}}{{info.unite}}</p>
      </section>
  </div>
</template>

<script>
import DataCircle from "@/components/data/DataCircle";

export default {
  name: "DataBlock",
  props: {
    type: "",
    plant_type: Object,
    plant_data: Object,
  },
  data(){
    return {
      infos: {
        temperature: {
          title: "Température",
          content: "La température de votre plante doit se situer entre ",
          unite: "°C",
          value: this.plant_data.temperature,
          max: this.plant_type.temperatureRange.max,
          min: this.plant_type.temperatureRange.min,
        },
        ph:{
          title: "PH",
          content: "Le ph de votre plante doit se situer entre ",
          unite: "",
          value: this.plant_data.ph,
          max: this.plant_type.phRange.max,
          min: this.plant_type.phRange.min,
        },
        humidity: {
          title: "Humidité",
          content: "Le taux d'humidité de votre plante doit se situer entre ",
          unite: "%",
          value: this.plant_data.humidity,
          max: this.plant_type.humidityRange.max,
          min: this.plant_type.humidityRange.min,
        }
      },
    }
  },

  computed: {

    info(){
      for(let i in this.infos){
        if(i === this.type){
          return this.infos[i]
        }
      }

    }
  },
  mounted(){
    this.test()
  },
  methods: {
    test: function () {

    }
  },
  components:{
    DataCircle,
  }

}
</script>

<style scoped>

</style>
