<script setup>
import Stethoscope from "../assets/svg/Stethoscope.svg";
import Hand from "../assets/svg/Hand.svg";
import AddSmall from "../assets/svg/AddSmall.svg";
import Button from "../components/Button.vue";

import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import Input from "../components/Input.vue";

const user = ref(null);
const formIsClose = ref(true);
const formData = ref({
  name: "",
  phone: "",
});

onMounted(() => {
  user.value = JSON.parse(localStorage.getItem("user"));
});

const handleAddContact = () => {
  formIsClose.value = !formIsClose.value;
};
const handleAddNewContact = () => {
  formIsClose.value = !formIsClose.value;
  user.value.contacts.push(formData.value);
  localStorage.setItem("user", JSON.stringify(user.value));
};
</script>

<template>
  <main class="pb-28">
    <h1 class="text-center text-3xl tracking-wide font-semibold">
      Appels prioritaires
    </h1>
    <section class="flex justify-between p-6 m-4 Help__fastcall">
      <div>
        <div class="Help__icon">
          <Stethoscope />
        </div>
        <p class="Help__legend">Médecin</p>
      </div>
      <div>
        <div class="Help__icon">
          <Hand />
        </div>
        <p class="Help__legend">ASBL</p>
      </div>
    </section>
    <section class="px-6 py-4 z-10" v-if="user">
      <h2 class="font-semibold text-2xl tracking-wider">Vos proches</h2>

      <ol>
        <li
          v-for="(contact, i) in user.contacts"
          :key="i"
          class="flex items-start gap-6 my-5 text-lg"
        >
          <img src="../assets/avatar.webp" alt="Avatar" />
          <div>
            <h3 class="font-semibold">{{ contact.name }}</h3>
            <p>{{ contact.phone }}</p>
          </div>
        </li>
      </ol>
      <!-- Add a contact button -->
      <Button
        class="bg-primary text-white flex items-center justify-around"
        @click="handleAddContact()"
        v-if="formIsClose"
      >
        <AddSmall />Ajouter un proche
      </Button>
      <!-- Add contact form -->
      <div v-else>
        <Input label="Nom du contact" v-model="formData.name" />
        <Input label="Numéro de téléphone" v-model="formData.phone" />
        <Button
          class="bg-primary text-white flex items-center justify-around"
          @click="handleAddNewContact()"
          v-if="!formIsClose"
          >Ajouter le contact</Button
        >
      </div>
    </section>
  </main>
</template>

<style lang="scss">
.Help {
  &__fastcall {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  &__icon {
    border-radius: 50%;
    background-color: #ff9a55;
    padding: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 112px;
    height: 112px;
  }
  &__legend {
    text-align: center;
    font-weight: 700;
    margin-block: 1rem;
    font-size: 1.4rem;
    letter-spacing: 0.05rem;
  }
}
</style>
