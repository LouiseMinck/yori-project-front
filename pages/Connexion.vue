<template>
  <ConnexionForm />
</template>

<script>
  import ConnexionForm from '../components/connexion/ConnexionForm';

    export default {
      name: "connexion",
      components: {
        ConnexionForm,
      },
      middleware: 'notauthenticated'

    }

</script>

<style scoped>

</style>
