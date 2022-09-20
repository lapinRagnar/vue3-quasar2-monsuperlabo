<template>

  <q-page padding>
    <!-- content -->
    <div class="flex flex-center column">

      <h3>Créer un compte</h3>

      <div class="q-pa-md " style="max-width: 400px">

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
