<script setup>
import { ref, onMounted, computed, watchEffect } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService'

const props = defineProps(['page'])

const router = useRouter()

const events = ref(null)
const totalEvents = ref(0)

const page = computed(() => props.page)

const hasNextPage = computed(() => {
  return Math.ceil(totalEvents.value / 2) > page.value
})

onMounted(() => {
  watchEffect(() => {
    EventService.getEvents(page.value, 2)
      .then((reponse) => {
        events.value = reponse.data
        totalEvents.value = reponse.headers['x-total-count']
      })
      .catch(() => {
        router.push({ name: 'NetworkError' })
      })
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
      <div class="event-pagination-container">
        <RouterLink :to="`/?page=${page - 1}`" rel="prev" v-if="page !== 1"> Previous </RouterLink>
        <RouterLink :to="`/?page=${page + 1}`" rel="next" v-if="hasNextPage"> Next </RouterLink>
      </div>
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
.event-pagination-container {
  & > * {
    margin: 0 0.5rem;
  }
}
</style>
