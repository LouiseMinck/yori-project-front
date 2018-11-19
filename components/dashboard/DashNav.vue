<template>
  <nav id="navboard">
    <a href="Home" class="logo"><img src="/img/faviconwhite.png" height="50px"/></a>
    <a href="DashData"><img src="/img/icon_suivi2.png" height="40px"/></a>
    <a href="DataDay"><img src="/img/icon_suivi1.png" height="40px"/></a>
    <a href="DashData"><img src="/img/icon_suivi3.png" height="40px"/></a>
    <div class="end">
      <a v-if="$store.state.token" @click="logout()"><img src="/img/icon_suivi5.png" height="30px"/></a>
      <a href="/"><img src="/img/icon_suivi4.png" height="30px"/></a>
    </div>

  </nav>
</template>

<script>
  //const Cookie = process.client ? require('js-cookie') : undefined;
    export default {
      name: "DashNav",
      methods: {
        logout(){
          this.$store.dispatch("disconnect")
        }
      }
    }
</script>
