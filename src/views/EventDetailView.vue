<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  id: Number
})

import EventService from '@/services/EventService'

const event = ref(null)
/* const route = useRoute()
const eventId = route.params.id */

onMounted(() => {
  EventService.getEvent(props.id).then((reponse) => {
    event.value = reponse.data
  })
})
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<style scoped></style>
