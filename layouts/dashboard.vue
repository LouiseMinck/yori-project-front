<template>
  <div id="dash">
    <Nav/>
    <nuxt/>
  </div>
</template>

<script>

  import Nav from '../components/dashboard/DashNav';

  export default {
      name: "dashnav",

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

<style scoped>

</style>
