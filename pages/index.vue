<template>
  <div class="container">
    <Header />
    <main>
      <Services/>
      <Box/>
      <Couverture/>
    </main>
  </div>
</template>

<script>
import Header from '../components/home/Header_home';
import Services from '../components/home/Services';
import Couverture from '../components/home/Box_couverture';
import Box from '../components/home/Box';

export default {
  name: "accueil",
  components: {
    Services,
    Box,
    Header,
    Couverture,
  }
}

</script>
