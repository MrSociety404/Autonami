<script setup>
defineProps({
  month: Object
})

const today = new Date().getDate()
</script>

<template>
  <div class="calendar">
    <div class="flex justify-center pb-6 pt-2 capitalize">
      <button class="text-2xl font-bold" @click="$emit('clickPrevious')">
       {{ '<' }}
      </button>

      <h1 class="px-8 text-3xl">{{ month.name }}</h1>
      
      <button class="text-2xl font-bold" @click="$emit('clickNext')">
        >
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
          class="text-center py-3 text-xl" style="width: 14.28%"
        >
          {{ day.date }}
        </div>
      </div>

      <div class="flex flex-wrap" v-else-if="month.days[0].weekday === 'mardi'">
        <div class="text-center py-3 text-xl" style="width: 14.28%"></div>

        <div
          v-for="(day, i) of month.days"
          :key="i"
          :class="day.date === today ? 'text-center py-3 text-xl bg-secondary' : 'text-center py-3 text-xl'" style="width: 14.28%"
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
          class="text-center py-3 text-xl" style="width: 14.28%"
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
          class="text-center py-3 text-xl" style="width: 14.28%"
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
          class="text-center py-3 text-xl" style="width: 14.28%"
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
          class="text-center py-3 text-xl" style="width: 14.28%"
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
          class="text-center py-3 text-xl" style="width: 14.28%"
        >
          {{ day.date }}
        </div>
      </div>
    </div>
  </div>
</template>
