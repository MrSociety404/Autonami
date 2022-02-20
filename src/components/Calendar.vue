<script setup>
import ChevronLeft from '../assets/svg/ChevronLeft.svg'
import ChevronRight from '../assets/svg/ChevronRight.svg'
import { useRouter } from "vue-router"

const router = useRouter()

defineProps({
  month: Object
})

const today = new Date().getDate()
</script>

<template>
  <div class="calendar">
    <div class="flex justify-center pb-8 pt-2 capitalize">
      <button @click="$emit('clickPrevious')" aria-label="précedent">
        <ChevronLeft />
      </button>

      <h1 class="px-8 text-3xl font-bold">{{ month.name }}</h1>
      
      <button @click="$emit('clickNext')" aria-label="suivant">
        <ChevronRight />
      </button>
    </div>

    <div>
      <div class="flex justify-around">
        <p class="uppercase font-semibold">lun</p>
        <p class="uppercase font-semibold">mar</p>
        <p class="uppercase font-semibold">mer</p>
        <p class="uppercase font-semibold">jeu</p>
        <p class="uppercase font-semibold">ven</p>
        <p class="uppercase font-semibold">sam</p>
        <p class="uppercase font-semibold">dim</p>
      </div>

      <div class="flex flex-wrap" v-if="month.days[0].weekday === 'lundi'">
        <div
          v-for="(day, i) of month.days"
          :key="i"
          :class="day.date === today ? 'text-center py-3 text-xl bg-secondary rounded-xl cursor-pointer relative' : 'text-center py-3 text-xl cursor-pointer relative'" style="width: 14.28%"
          @click="router.push(`/${month.year}/${month.number}/${day.date}`)"
        >
          {{ day.date }}
        </div>
      </div>

      <div class="flex flex-wrap" v-else-if="month.days[0].weekday === 'mardi'">
        <div class="text-center py-3 text-xl" style="width: 14.28%"></div>

        <div
          v-for="(day, i) of month.days"
          :key="i"
          :class="day.date === today ? 'text-center py-3 text-xl bg-secondary rounded-xl cursor-pointer relative' : 'text-center py-3 text-xl cursor-pointer relative'" style="width: 14.28%"
          @click="router.push(`/${month.year}/${month.number}/${day.date}`)"
          :id="day.events.length > 0 ? 'chevron-date' : ''"
        >
          {{ day.date }}
        </div>
      </div>

      <div class="flex flex-wrap" v-else-if="month.days[0].weekday === 'mercredi'">
        <div class="text-center py-3 text-xl" style="width: 14.28%"></div>

        <div class="text-center py-3 text-xl" style="width: 14.28%"></div>

        <div
          v-for="(day, i) of month.days"
          :key="i"
          :class="day.date === today ? 'text-center py-3 text-xl bg-secondary rounded-xl cursor-pointer relative' : 'text-center py-3 text-xl cursor-pointer relative'" style="width: 14.28%"
          @click="router.push(`/${month.year}/${month.number}/${day.date}`)"
        >
          {{ day.date }}
        </div>
      </div>

      <div class="flex flex-wrap" v-else-if="month.days[0].weekday === 'jeudi'">
        <div class="text-center py-3 text-xl" style="width: 14.28%"></div>

        <div class="text-center py-3 text-xl" style="width: 14.28%"></div>

        <div class="text-center py-3 text-xl" style="width: 14.28%"></div>

        <div
          v-for="(day, i) of month.days"
          :key="i"
          :class="day.date === today ? 'text-center py-3 text-xl bg-secondary rounded-xl cursor-pointer relative' : 'text-center py-3 text-xl cursor-pointer relative'" style="width: 14.28%"
          @click="router.push(`/${month.year}/${month.number}/${day.date}`)"
        >
          {{ day.date }}
        </div>
      </div>

      <div class="flex flex-wrap" v-else-if="month.days[0].weekday === 'vendredi'">
        <div class="text-center py-3 text-xl" style="width: 14.28%"></div>

        <div class="text-center py-3 text-xl" style="width: 14.28%"></div>

        <div class="text-center py-3 text-xl" style="width: 14.28%"></div>

        <div class="text-center py-3 text-xl" style="width: 14.28%"></div>

        <div
          v-for="(day, i) of month.days"
          :key="i"
          :class="day.date === today ? 'text-center py-3 text-xl bg-secondary rounded-xl cursor-pointer relative' : 'text-center py-3 text-xl cursor-pointer relative'" style="width: 14.28%"
          @click="router.push(`/${month.year}/${month.number}/${day.date}`)"
        >
          {{ day.date }}
        </div>
      </div>

      <div class="flex flex-wrap" v-else-if="month.days[0].weekday === 'samedi'">
        <div class="text-center py-3 text-xl" style="width: 14.28%"></div>

        <div class="text-center py-3 text-xl" style="width: 14.28%"></div>

        <div class="text-center py-3 text-xl" style="width: 14.28%"></div>

        <div class="text-center py-3 text-xl" style="width: 14.28%"></div>

        <div class="text-center py-3 text-xl" style="width: 14.28%"></div>

        <div
          v-for="(day, i) of month.days"
          :key="i"
          :class="day.date === today ? 'text-center py-3 text-xl bg-secondary rounded-xl cursor-pointer relative' : 'text-center py-3 text-xl cursor-pointer relative'" style="width: 14.28%"
          @click="router.push(`/${month.year}/${month.number}/${day.date}`)"
        >
          {{ day.date }}
        </div>
      </div>

      <div class="flex flex-wrap" v-else-if="month.days[0].weekday === 'dimanche'">
        <div class="text-center py-3 text-xl" style="width: 14.28%"></div>

        <div class="text-center py-3 text-xl" style="width: 14.28%"></div>

        <div class="text-center py-3 text-xl" style="width: 14.28%"></div>

        <div class="text-center py-3 text-xl" style="width: 14.28%"></div>

        <div class="text-center py-3 text-xl" style="width: 14.28%"></div>

        <div class="text-center py-3 text-xl" style="width: 14.28%"></div>

        <div
          v-for="(day, i) of month.days"
          :key="i"
          :class="day.date === today ? 'text-center py-3 text-xl bg-secondary rounded-xl cursor-pointer relative' : 'text-center py-3 text-xl cursor-pointer relative'" style="width: 14.28%"
          @click="router.push(`/${month.year}/${month.number}/${day.date}`)"
        >
          {{ day.date }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  #chevron-date {
    &::after {
      content: '';
      width: 15px;
      height: 3px;
      position: absolute;
      background-color: #75302D;
      bottom: 5px;
      left: 18px;
    }
  }
</style>
