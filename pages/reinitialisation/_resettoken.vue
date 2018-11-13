<template>
  <main id="connect">
    <section>
      <article class="form-container">
        <div class="form-img"></div>

        <form>
          <header>
            <h1>Changez votre mot de passe</h1>
          </header>

          <div class="input-container-blc input-icon-password">
            <input class="input-password" type="password" name="password" id="password" placeholder="Mot de passe" v-model="password1"/>
          </div>
          <div class="input-container-blc input-icon-password">
            <input class="input-password" type="password" name="password" id="password2" placeholder="Mot de passe" v-model="password2"/>
          </div>
          <div class="form-btn-group">
            <input class="btn-secondary" type="submit" value="Changer mon mot de passe" @click.prevent="confirmPassword()"/>
          </div>
          <p class="erreurs" v-if="error">{{ error }}</p>
          <p class="erreurs" v-if="message">{{ message }}</p>
          <nuxt-link v-if="message" to="/">Retournez à la page d'accueil</nuxt-link>
          <p class="erreurs" v-if="errorNotSame">{{ errorNotSame }}</p>
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
        password1: "",
        password2: "",
        errorNotSame: "",
      }
    },
    methods: {
      confirmPassword(){
        if(this.password1 === this.password2){
          this.errorNotSame = null;

          this.$store.dispatch('newPassword', {newpassword: this.password1, resettoken: this.$route.params.resettoken})
        }
        else {
          this.errorNotSame = "Les mots de passe ne sont pas identiques"
        }
      }
    },
    computed: {
      error(){
        return this.$store.getters.error;
      },
      message(){
        return this.$store.getters.successMessage;
      },
    },
  }

</script>

<style scoped>

</style>
