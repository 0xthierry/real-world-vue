<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService'

const events = ref(null)

onMounted(() => {
  EventService.getEvents().then((reponse) => {
    events.value = reponse.data
  })
})
</script>

<template>
  <h1>Events for Good</h1>
  <main>
    <div class="events">
      <RouterLink
        class="event-link"
        :to="`/events/${event.id}`"
        v-for="event in events"
        :key="event.id"
      >
        <EventCard :event="event" />
      </RouterLink>
    </div>
  </main>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.event-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
