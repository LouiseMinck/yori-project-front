<template>
  <div>
    <Nav/>
    <nuxt/>
    <Footer/>
  </div>
</template>

<script>

  import Footer from '../components/Footer';
  import Nav from '../components/Nav';

  export default {
    mounted () {
      this.$nextTick(() => {
        this.$nuxt.$loading.start();

        setTimeout(() => this.$nuxt.$loading.finish(), 500)
      })
    },
    components: {
      Footer,
      Nav
    }
  }
</script>
