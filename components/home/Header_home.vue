<template>
  <header id="home">
    <article id="title">
        <img src="img/logowhite.png" height="100px"/>
        <p>S’occuper de son bonsaï n’a jamais été aussi simple ! Grâce à Yori, devenez attentif aux besoins de votre arbre.
        </p>
      <a href="#" id="discover">Découvrir</a>
    </article>
    <aside id="head">
      <img id="imgbonsai" src="/img/trans2.png" height="92%"/>
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
