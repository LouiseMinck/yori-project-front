<template>
  <main id="connect">
    <section>
      <article class="form-container">
        <div class="form-img"></div>

        <form>
          <header>
            <h1>Mot de passe oublié ?</h1>
          </header>

          <div class="input-container-blc input-icon-email">
            <input class="input-email" type="text" name="email" id="email" placeholder="Adresse e-mail" v-model="email"/>
          </div>
          <div class="form-btn-group">
            <input class="btn-secondary" type="submit" value="Demander un nouveau mot de passe" @click.prevent="sendMailReset()"/>
          </div>
          <p class="erreurs"  v-if="message">{{ message }}</p>
          <p class="erreurs" v-if="error">{{ error }}</p>
        </form>

      </article>
    </section>
  </main>
</template>

<script>
export default {
  name: "Oubli",

  data(){
    return{
      email: ""
    }
  },
  methods: {
    sendMailReset(){
      this.$store.dispatch('resetPassword', {email: this.email});
    }
  },
  computed: {
    message(){
      return this.$store.getters.successMessage;
    },
    error(){
      return this.$store.getters.error;
    }

  },
}
</script>
