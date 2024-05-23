<script setup>
import { ref, onMounted, computed } from 'vue'
import { RouterLink, RouterView, useRouter } from 'vue-router'
import EventService from '@/services/EventService'

const props = defineProps({
  id: Number
})
const router = useRouter()

const event = ref(null)
/* const route = useRoute()
const eventId = route.params.id */
const eventId = computed(() => props.id)

onMounted(() => {
  EventService.getEvent(eventId.value)
    .then((reponse) => {
      event.value = reponse.data
    })
    .catch((error) => {
      if (error.response && error.response.status === 404) {
        router.push({ name: '404Resource', params: { resource: 'event' } })
      } else {
        router.push({ name: 'NetworkError' })
      }
    })
})
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <div id="nav">
      <RouterLink :to="{ name: 'EventDetails' }">Details</RouterLink>
      <RouterLink :to="{ name: 'EventRegister' }">Register</RouterLink>
      <RouterLink :to="{ name: 'EventEdit' }">Edit</RouterLink>
    </div>
    <RouterView :event="event" />
  </div>
</template>

<style scoped></style>
