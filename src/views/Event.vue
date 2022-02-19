<script setup>
import { onMounted, ref } from 'vue';
import Input from '../components/Input.vue';
import Button from '../components/Button.vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const today = new Date().toLocaleString("fr-FR", {
  day: '2-digit',
  year: 'numeric',
  month: '2-digit'
})

const user = ref(null)

const formdata = ref({
  name: "",
  date: "",
  heure: "",
  help: 0,
  location: "",
})

onMounted(() => {
  user.value = JSON.parse(localStorage.getItem('user'))
})

const goBack = () => {
  router.back();
}

const addEvent = () => {
  user.value.events.push(formdata.value);
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
      <Input label="Heure" type="time" v-model="formdata.time" />
      <Input label="Lieu" v-model="formdata.location" />
      <Button class="bg-secondary w-full" @click="addEvent()">Ajouter</Button>
      <Button class="bg-primary text-white w-full" @click="goBack()">Annuler</Button>
    </form>
  </main>
</template>

<style lang="scss">
</style>
