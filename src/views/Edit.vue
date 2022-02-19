<script setup>
import Input from '../components/Input.vue';
import Button from '../components/Button.vue';

import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { v4 as uuid } from 'uuid'

const router = useRouter()
const route = useRoute()

const today = new Date().toLocaleString("fr-FR", {
  day: '2-digit',
  year: 'numeric',
  month: '2-digit'
})

const user = ref(null)

const formdata = ref({
  id: "",
  name: "",
  date: "",
  heure: "",
  help: "0",
  location: "",
})

onMounted(() => {
  user.value = JSON.parse(localStorage.getItem('user'))
  const getEvent = user.value.events.filter(event => event.id === route.params.id)
  formdata.value = getEvent[0]
})

const goBack = () => {
  router.back();
}

const addEvent = () => {
  user.value.events.push(formdata.value);
  user.value.events = user.value.events.map(event => {
    if (event.id === route.params.id) {
      return formdata.value
    } else {
      return event
    }
  })

  localStorage.setItem("user", JSON.stringify(user.value))
  router.push('/')
}
</script>

<template>
  <main class="pb-28">
    <h1 class="text-center text-3xl tracking-wide font-semibold">Ajouter une activité</h1>
    <form @submit.prevent class="px-6 py-4 z-10">
      <Input label="Nom de l'activité" v-model="formdata.name" />
      <Input label="Jour" type="date" :placeholder="today" v-model="formdata.date" />
      <Input label="Heure" type="time" v-model="formdata.heure" />
      <Input label="Lieu" v-model="formdata.location" />
      <div>
        <h3 class="font-semibold text-xl my-5">Un coup de main ?</h3>
        <div class="radio">
          <input
            type="radio"
            class="radio__input"
            id="1"
            name="help"
            value="1"
            v-model="formdata.help"
          />
          <label for="1" class="radio__label">Accompagné d'un bénévole</label>
        </div>

        <div class="radio">
          <input
            type="radio"
            class="radio__input"
            id="2"
            name="help"
            value="2"
            v-model="formdata.help"
          />
          <label for="2" class="radio__label">Accompagné d'un proche</label>
        </div>

        <div class="radio">
          <input
            type="radio"
            class="radio__input"
            id="0"
            name="help"
            value="0"
            v-model="formdata.help"
          />
          <label for="0" class="radio__label">Non merci</label>
        </div>
      </div>
      <Button class="bg-secondary w-full" @click="addEvent()">Modifier</Button>
      <Button class="bg-primary text-white w-full" @click="goBack()">Annuler</Button>
    </form>
  </main>
</template>

<style lang="scss">
.radio {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-block: 1rem;
  font-size: 1.2rem;
  &__input {
    width: 25px;
    height: 25px;
    background-color: #e7e5e4;
    border: 5px solid #dbd5d2;
    border-radius: 50%;
    &:checked {
      border-color: #ff9a55;
      background-color: #ffdfd0;
    }
  }
}
</style>
