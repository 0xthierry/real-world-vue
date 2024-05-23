<script setup>
import { useRouter } from 'vue-router'
import { inject } from 'vue'

const props = defineProps(['event'])
const router = useRouter()
const gstore = inject('gstore')

const register = () => {
  // router.push({ name: 'EventDetails' })
  // router.push({ path: `/events/${props.event.id}` })
  gstore.flashMessage = 'You have successfully registered for ' + props.event.title

  setTimeout(() => {
    gstore.flashMessage = ''
  }, 3000)

  router.push({ name: 'EventDetails', params: { id: props.event.id } })
}
</script>

<template>
  <p>Register to the event</p>
  <button @click="register">Register Me!</button>
</template>

<style scoped></style>
