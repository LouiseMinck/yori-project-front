<template>
  <nav id="navboard">

    <a href="/DashHome"><h5>Accueil</h5></a>
    <ul class="navboard">
      <li>Votre plante</li>
    </ul>

    <h5>Suivi</h5>
    <ul class="navboard">
      <li><a href="/DataWeek">7 Jours</a></li>
      <li><a href="/DataThreeDays">3 Jours</a></li>
      <li><a href="/DataDay">24 Heures</a></li>
    </ul>

    <h5>Settings</h5>
    <a v-if="$store.state.token" class="btn deconnect" @click="logout()">Se déconnecter</a>
    <div class="spacebtn"></div>
    <a href="/" class="btn retour" >Retournez au site</a>

  </nav>
</template>

<script>
  const Cookie = process.client ? require('js-cookie') : undefined;
    export default {
        name: "DashNav",
      methods: {
        logout(){
          Cookie.remove('token');
          Cookie.remove('hasplant');
          this.$store.commit('removeToken');
          this.$store.commit('removePlant');
          this.$router.push('/');
        }
      }
    }
</script>

<style scoped>

</style>
