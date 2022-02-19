<script setup>
import Undo from "../assets/svg/Undo.svg"
import Add from "../assets/svg/Add.svg"
import Phone from "../assets/svg/Phone.svg"
import Home from "../assets/svg/Home.svg"

import { useRouter } from "vue-router"

const router = useRouter()

const handleAdd = () => {
  router.push("/event")
}
const handleHome = () => {
  router.push("/")
}
const handleCall = () => {
  router.push("/help")
}
const handleUndo = () => {
  router.back()
}

</script>

<template>
  <nav class="fixed z-10 bottom-0 left-0 right-0 rounded-t-3xl menuNav p-4 bg-white">
    <ul class="flex justify-between items-end">
      <li class="menuNav__item" @click="handleUndo()">
        <Undo />
        <span>Retour</span>
      </li>
      <li
        v-if="$route.name === 'Aide' || $route.name === 'Evènement'"
        class="menuNav__item relative"
        @click="handleHome()"
      >
        <div class="bg-primary rounded-full p-4 absolute -top-24 menuNav__add">
          <Home />
        </div>
        <span>Accueil</span>
      </li>
      <li v-else class="menuNav__item relative" @click="handleAdd()">
        <div class="bg-primary rounded-full p-4 absolute -top-24 menuNav__add">
          <Add />
        </div>
        <span>Ajouter</span>
      </li>
      <li class="menuNav__item" @click="handleCall()">
        <Phone />
        <span>Appel</span>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
.menuNav {
  box-shadow: 0px -4px 6px 2px rgba(0, 0, 0, 0.05);
  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    transition: transform 0.2s ease;
    & span {
      font-weight: bold;
      color: #75302d;
      font-size: 1.2rem;
      letter-spacing: 0.05rem;
    }
    &:active {
      transform: translateY(2px);
    }
  }
  &__add {
    border: 0.4rem solid white;
  }
}
</style>

