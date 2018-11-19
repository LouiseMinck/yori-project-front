<template>
    <nav id="navhome">
      <div class="tabs">
        <div class="menu-left">
          <a href="/">Accueil</a>
          <a href="#">Conseils & FAQ</a>
          <a href="#">Contact</a>
        </div>
        <div class="menu-right">
          <a v-if="$store.state.token" class="btn" href="/Dashboard/Home">Votre dashBoard</a>
          <a v-else class="btn" href="/connexion">Se connecter / S'enregistrer</a>
        </div>
      </div>
    </nav>

</template>

<script>
  const Cookie = process.client ? require('js-cookie') : undefined;
    export default {
      name: "Nav",
      methods: {
        logout(){
          Cookie.remove('token');
          this.$store.commit('removeToken');
          this.$router.push('/');
        }
      }
    }
</script>

<style scoped>

</style>
