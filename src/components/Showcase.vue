<template>
  <div id="showcase">
    <h1>{{ title }}</h1>
    <div id="component" contenteditable v-html="component"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    component: String,
  },
};
</script>

<style>
h1 {
  font-family: "Montserrat", sans-serif;
  color: #b48829;
  opacity: 0.8;
  letter-spacing: 15px;
}

@media (max-width: 1024px) {
  h1 {
    font-size: 20px;
    letter-spacing: 5px;
  }
}
</style>