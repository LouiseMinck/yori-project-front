<template>
  <div>
    <canvas id="planet-chart"></canvas>
  </div>
</template>

<script>

import Chart from 'chart.js';
import chartData from '@/plugins/chart-data.js';

    export default {
      name: "Chart",
      components: {
        Chart,
        chartData,
      },
      data() {
        return {
          chartData: chartData,
        }
      },
      props:{
        plantData: Object,
        hours: false
      },
      methods: {
        createChart(chartId, chartData) {
          const ctx = document.getElementById(chartId);
          const myChart = new Chart(ctx, {
            type: chartData.type,
            data: chartData.data,
            options: chartData.options,
          });
        },
        addHours(){
          this.plantData.data.forEach((data, index) => {
            let d = new Date(data.createdAt);
            let hour = d.getHours();
            if(this.hours){
              this.chartData.data.labels.push(hour + " h");
            }
            else{
              let day = d.getDate();
              let month = d.getMonth();
              let str = day + " / " + month + " - " + hour + " h";

              this.chartData.data.labels.push(str);
            }

          });
          this.chartData.data.labels.reverse()
        },

        addPh(){
          this.plantData.data.forEach((data, index) => {
            let p = data.ph;
            this.chartData.data.datasets[0].data.push(p);
          });
          this.chartData.data.datasets[0].data.reverse();
        },

        addTemperature(){
          this.plantData.data.forEach((data, index) => {
            let t = data.temperature;
            this.chartData.data.datasets[1].data.push(t);
          });
          this.chartData.data.datasets[1].data.reverse();

        },
        addHumidity(){
          this.plantData.data.forEach((data, index) => {
            let h = data.humidity;
            this.chartData.data.datasets[2].data.push(h);
          });
          this.chartData.data.datasets[2].data.reverse();
        }

      },
      mounted() {
        this.addHours();
        this.addPh();
        this.addTemperature();
        this.addHumidity();
        this.createChart('planet-chart', this.chartData);
      }
    }


</script>

<style scoped>

</style>
