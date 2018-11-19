<template>
  <div id="bodyboard">
      <h1>Bonjour !</h1>
      <a href="DashData" class="btn retour">Acceder au suivi</a>
      <a href="DashData" class="btn retour">Nos conseils</a>
  </div>
</template>

<script>

  import DataBlock from "@/components/data/DataBlock";

  export default {
    name: "DashHome",
    layout: 'dashboard',
    components:{
      DataBlock,
    },
  }

</script>

