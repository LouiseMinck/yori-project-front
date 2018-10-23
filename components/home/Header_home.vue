<template>
  <header id="home">
    <article id="title">
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
        <p> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
      <a href="#" id="discover">Découvrir</a>
    </article>
    <aside id="head">
      <img id="imgbonsai" src="/img/trans2.png" height="90%"/>
    </aside>
  </header>
</template>

<script>

  import Nav from '../Nav';

    export default {
        name: "Header_home",
      components: {
        Nav,
      }
    }
</script>

<style scoped>

</style>
