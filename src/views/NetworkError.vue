<script setup></script>

<template>
  <div id="networkError">
    <h1>Uh-oh!</h1>

    <h3>
      It looks like you're experiencing network issues. Please check your connection and
      <a href="#" @click="$router.go(-1)">click here</a> to try again.
    </h3>
  </div>
</template>

<style scoped>
#networkError {
  text-align: center;
  margin-top: 50px;
}

h1 {
  font-size: 3em;
  color: #f00;
}

h3 {
  font-size: 1.5em;
  color: #333;
}

a {
  color: #00f;
}
</style>
