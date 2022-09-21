<template>
  <q-page padding>
    <!-- content -->
    <div class="flex flex-center column">

      <h3 class="">Connexion</h3>

      <div>
        <q-avatar size="162px">
          <img src="https://parlonssciences.ca/sites/default/files/styles/large/public/2021-01/wireframe_chatbot.png?itok=D-lfsiLg">
        </q-avatar>
      </div>

      <div class="q-pa-md " style="max-width: 600px; min-width: 400px">

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
            class="q-mb-md"
            label="mot de passe"
            placeholder="mon super mot de passe"
            v-model="password"
            lazy-rules
            type="password"
            :rules="[
              val => val !== null && val !== '' || 'le champ est vide...',
              // val => val < 4 || 'mot de passe trop court!'
            ]"
          />

          <div
            class="q-mb-lg"

          >
            <a @click="goToForgotPassword" style="text-decoration: underline; cursor: pointer; ">mot de passe oublié!</a>
          </div>

          <div class="q-mt-lg">
            <q-btn
              label="valider"
              type="submit"
              color="primary"
            />
          </div>

        </q-form>


      </div>

    </div>

  </q-page>
</template>

<script>

import { useQuasar } from 'quasar'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'LoginPage',
  setup(){

    const $q = useQuasar()
    const router = useRouter()

    const name = ref(null)
    const password = ref(null)
    const accept = ref(false)

    return {
      name, password,

      onSubmit(){
        router.push({name: 'home'})
      },

      goToForgotPassword(){
        router.push({name: 'forgotPassword'})
      }

    }

  }
}
</script>
