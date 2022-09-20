<template>

  <q-page padding>
    <!-- content -->
    <div class="flex flex-center column">

      <h3>Créer un compte</h3>

      <div class="q-pa-md fullwidth " style="max-width: 600px; min-width: 400px;">

        <q-form
          @submit="onSubmit"
        >

          <q-input
            label="ton email"
            placeholder="nom@exemple.fr"
            v-model="name"
            type="email"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'tape quelque chose stp!']"
          />

          <q-input
            label="mot de passe"
            placeholder="mon super mot de passe"
            v-model="password"
            lazy-rules
            :rules="[
              val => val !== null && val !== '' || 'le champ est vide...',
              val => val < 4 || 'mot de passe trop court!'
            ]"
          />

          <q-input
            class="q-mb-md"
            label="confirmer le mot de passe"
            placeholder="mon super mot de passe"
            v-model="confirm"
            lazy-rules
            :rules="[
              val => val !== null && val !== '' || 'le champ est vide...',
              val => val < 4 || 'mot de passe trop court!'
            ]"
          />



          <div class="q-mt-lg">
            <q-btn
              label="valider"
              type="submit"
              color="primary"
            />
          </div>

        </q-form>

        <div class="q-mt-xl">ou se sonnecter avec</div>

        <div class="se-connecter-avec  block ">

          <q-avatar size="40px" class="q-pr-xl cursor-pointer" >
            <img src="https://cdn.icon-icons.com/icons2/639/PNG/512/social_media_logo_google_icon-icons.com_59074.png">
          </q-avatar>

          <q-avatar size="40px" class="cursor-pointer">
            <img src="https://cdn.icon-icons.com/icons2/790/PNG/512/github_icon-icons.com_65450.png">
          </q-avatar>

          <q-avatar size="40px" class="q-pr-xl cursor-pointer">
            <img src="https://cdn.icon-icons.com/icons2/1/PNG/256/social_facebook_fb_75.png">
          </q-avatar>
        </div>


      </div>

    </div>
  </q-page>
</template>

<script>

import { useQuasar } from 'quasar'
import { ref } from 'vue'

export default {

  name: 'RegisterPage',

  setup(){

    const $q = useQuasar()

    const name = ref(null)
    const password = ref(null)
    const confirm = ref(null)
    const accept = ref(false)

    return {
      name, password, confirm, accept,

      // Todo la validation du formulaire
      onSubmit(){

      }
    }

  }

}
</script>
