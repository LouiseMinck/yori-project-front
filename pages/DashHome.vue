<template>
    <div id="bodyboard">
      <div id="dashboard">
        <h1>Votre plante</h1>

        <section class="data">
          <!--<div class="gauge">-->
            <!--<canvas width="70" height="70" id="canvas-preview"></canvas>-->
            <!--<div id="preview-textfield" style="font-size: 15px;">0%</div>-->
          <!--</div>-->
          <aside></aside>
          <article></article>
        </section>

        <section class="data">
          <aside></aside>
          <article></article>
        </section>

        <section class="data">
          <aside></aside>
          <article></article>
        </section>

      </div>
    </div>
</template>

<script>
export default {
  name: "Test",
  layout: 'dashboard',
  middleware: 'authenticated',
  mounted(){
    this.$store.dispatch('getPlantData')
  }
}

// let opts = {
//   lines: 12, // The number of lines to draw
//   angle: 0.22, // The length of each line
//   lineWidth: 0.1, // The line thickness
//   pointer: {
//     length: 0.9, // The radius of the inner circle
//     strokeWidth: 0.035, // The rotation offset
//     color: '#000000' // Fill color
//   },
//   limitMax: 'false', // If true, the pointer will not go past the end of the gauge
//   colorStart: '#2DA3DC', // Colors
//   colorStop: '#C0C0DB', // just experiment with them
//   strokeColor: '#EEEEEE', // to see which ones work best for you
//   generateGradient: true
// };
// let target = document.getElementById('canvas-preview'); // your canvas element
// let gauge = new Donut(target).setOptions(opts); // create sexy gauge!
// gauge.maxValue = 100; // set max gauge value
// gauge.animationSpeed = 32; // set animation speed (32 is default value)
// gauge.set(35); // set actual value
// gauge.setTextField(document.getElementById("preview-textfield"));

</script>
