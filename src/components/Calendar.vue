<script setup>
import Month from '../composables/Month'
import { watchEffect } from 'vue'

let currentMonth = new Date().getMonth() + 1
let currentYear = new Date().getFullYear()
let month = new Month(currentMonth, currentYear)

const clickPrevious = () => {
  currentMonth = currentMonth === 1 ? 12 : currentMonth - 1
  currentYear = currentMonth === 12 ? currentYear - 1 : currentYear
  month = new Month(currentMonth, currentYear)
  console.log(currentMonth, currentYear)
}

const clickNext = () => {
  currentMonth = currentMonth === 12 ? 1 : currentMonth + 1
  currentYear = currentMonth === 1 ? currentYear + 1 : currentYear
  month = new Month(currentMonth, currentYear)
  console.log(currentMonth, currentYear)
}
</script>

<template>
  <div class="calendar">
    <div class="calendar__header"></div>
      <button class="previous" @click="clickPrevious">
        minus
      </button>
      
      <h1>{{ month.name }}</h1>
      
      <button class="next" @click="clickNext">
        plus
      </button>
  </div>

  <div class="grid">
    <div>
      <p class="day">lun</p>
      <p class="day">mar</p>
      <p class="day">mer</p>
      <p class="day">jeu</p>
      <p class="day">ven</p>
      <p class="day">sam</p>
      <p class="day">dim</p>
    </div>

    <div class="real-grid" v-if="month.days[0].weekday === 'lundi'">
      <div
        v-for="(day, i) of month.days"
        :key="i"
      >
        {{ day.date }}
      </div>
    </div>

    <div class="real-grid" v-else-if="month.days[0].weekday === 'mardi'">
      <div></div>

      <div
        v-for="(day, i) of month.days"
        :key="i"
      >
        {{ day.date }}
      </div>
    </div>

    <div class="real-grid" v-else-if="month.days[0].weekday === 'mercredi'">
      <div></div>

      <div></div>

      <div
        v-for="(day, i) of month.days"
        :key="i"
      >
        {{ day.date }}
      </div>
    </div>

    <div class="real-grid" v-else-if="month.days[0].weekday === 'jeudi'">
      <div></div>

      <div></div>

      <div></div>

      <div
        v-for="(day, i) of month.days"
        :key="i"
      >
        {{ day.date }}
      </div>
    </div>

    <div class="real-grid" v-else-if="month.days[0].weekday === 'vendredi'">
      <div></div>

      <div></div>

      <div></div>

      <div></div>

      <div
        v-for="(day, i) of month.days"
        :key="i"
      >
        {{ day.date }}
      </div>
    </div>

    <div class="real-grid" v-else-if="month.days[0].weekday === 'samedi'">
      <div></div>

      <div></div>

      <div></div>

      <div></div>

      <div></div>

      <div
        v-for="(day, i) of month.days"
        :key="i"
      >
        {{ day.date }}
      </div>
    </div>

    <div class="real-grid" v-else-if="month.days[0].weekday === 'dimanche'">
      <div></div>

      <div></div>

      <div></div>

      <div></div>

      <div></div>

      <div></div>

      <div
        v-for="(day, i) of month.days"
        :key="i"
      >
        {{ day.date }}
      </div>
    </div>
  </div>
</template>
