<template>
  <main id="connect">
    <section>
      <article class="form-container">
        <div class="form-img"></div>

        <form>
          <header>
            <h1>Inscription</h1>
          </header>

          <div class="input-container-blc">
            <input class="input-email" type="text" name="prenom" id="prenom" placeholder="Prenom" v-model="lastname"/>
          </div>
          <div class="erreurs" v-if="errors">{{ error.lastname.message }}</div>

          <div class="input-container-blc">
            <input class="input-email" type="text" name="nom" id="nom" placeholder="Nom" v-model="firstname"/>
          </div>
          <div class="erreurs" v-if="errors">{{ error.firstname.message }}</div>

          <div class="input-container-blc">
            <input class="input-email" type="text" name="nom-utilisateur" id="nom-utilisateur" placeholder="Nom d'utilisateur" v-model="username"/>
          </div>
          <div class="erreurs" v-if="errors">{{ error.username.message }}</div><br/>

          <div class="input-container-blc input-icon-email">
            <input class="input-email" type="text" name="email" id="email" placeholder="Adresse e-mail" v-model="email"/>
          </div>
          <div class="erreurs" v-if="errors">{{ error.email.message }}</div><br/>

          <div class="input-container-blc input-icon-password">
            <input class="input-password" type="password" name="password" id="password" placeholder="Mot de passe" v-model="password"/>
          </div>

          <div class="form-btn-group">
            <input class="btn-secondary" type="submit" value="S'inscrire" @click.prevent="inscri()"/>
          </div>

        </form>
      </article>
    </section>
  </main>
</template>

<script>
  export default {
    name: "InscriptionForm",

    data(){
      return{
        lastname: "",
        firstname: "",
        username: "",
        email: "",
        password: ""
      }
    },

    methods: {
      inscri(){
        this.$store.dispatch('inscriUser', {lastname: this.lastname, firstname: this.firstname, username: this.username, email: this.email, password: this.password})
      }
    },

    computed: {
      errors(){
        return this.$store.getters.error;
      }
    },

  }
</script>
