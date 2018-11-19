<template>
  <div id="dash">
    <Nav/>
    <nuxt/>
  </div>
</template>

<script>

  import Nav from '../components/dashboard/DashNav';

  export default {
      name: "dashboard",

      mounted () {
        this.$nextTick(() => {
          this.$nuxt.$loading.start();
          setTimeout(() => this.$nuxt.$loading.finish(), 500)
        })
      },

      components: {
        Nav
      }
    }
</script>

<style lang="sass">
  @import "../assets/style/dashboard/mainboard";
</style>
