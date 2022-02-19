<script setup>
defineProps({
  month: Object
})
</script>

<template>
  <div class="calendar">
    <div class="calendar__header">
      <button class="previous" @click="$emit('clickPrevious')">
        minus
      </button>
      
      <h1>{{ month.name }}</h1>
      
      <button class="next" @click="$emit('clickNext')">
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
  </div>
</template>
