<template>
  <nav id="navboard">

    <h5>Accueil</h5>
    <ul class="navboard">
      <li>Votre plante</li>
    </ul>

    <h5>Suivi</h5>
    <ul class="navboard">
      <li>7 Jours</li>
      <li>3 Jours</li>
      <li>1 Jour</li>
    </ul>

    <h5>Settings</h5>
    <a v-if="$store.state.token" class="btn" @click="logout()">Se déconnecter</a>

    <a href="/">Retour</a>

  </nav>
</template>

<script>
    export default {
        name: "DashNav"
    }
</script>

<style scoped>

</style>
