<template>
    <div id="data_circle" :class="color">
      <h2>{{infos.value}}{{infos.unite}}</h2>
    </div>
</template>

<script>
    export default {
      name: "DataCircle",
      props: {
        infos: Object
      },

      mounted(){
        this.colorDataTemp()
      },

      methods: {
        colorDataTemp: function () {
          var color = String;

          if(this.infos.value > this.infos.max){
            color = "red";
          }
          else if(this.infos.value <  this.infos.min){
            color = "blue";
          }
          else{
            color = "green";
          }
          return color;
        }
      },

      computed: {
        color(){
          return this.colorDataTemp()
        }
      }
    }


</script>

<style scoped>

</style>
