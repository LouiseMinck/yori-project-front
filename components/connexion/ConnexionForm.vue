<template>
  <main id="connect">
    <section>
      <article class="form-container">
        <div class="form-img"></div>

        <form>
          <header>
            <h1>Connexion</h1>
          </header>

          <div class="input-container-blc input-icon-email">
            <input class="input-email" type="text" name="email" id="email" placeholder="Adresse e-mail" v-model="mail"/>
          </div>
          <div class="input-container-blc input-icon-password">
            <input class="input-password" type="password" name="password" id="password" placeholder="Mot de passe" v-model="mdp"/>
          </div>
          <div class="form-btn-group">
            <input class="btn-secondary" type="submit" value="Se connecter" @click.prevent="connect()"/>
            <nuxt-link class="btn-register" to="/inscription">S'enregistrer</nuxt-link>
          </div>
          <nuxt-link to="/oubli">Mot de passe oublié ?</nuxt-link>
          <p v-if="error">{{ error }}</p>
        </form>

      </article>
    </section>
  </main>
</template>

<script>
    export default {
      name: "ConnexionForm",
      data(){
        return{
          mail: "",
          mdp: ""
        }
      },
      computed: {
        error(){
          return this.$store.getters.error;
        }
      },
      methods: {
        connect(){
          this.$store.dispatch('connectUser', {mail: this.mail, password: this.mdp})
        }
      }
    }
</script>
