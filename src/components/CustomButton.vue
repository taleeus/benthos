<template>
  <div id="custom-button" :style="cssProps">
    <button @click="onButtonClick">
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    onButtonClick: Function,
    color: String,
    textColor: String
  },
  computed: {
    cssProps() {
      return {
        '--btn-color': this.color ?? '#4b4842b4',
        '--btn-text-color': this.textColor ?? '#a79369'
      }
    }
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

button {
  font-family: "Montserrat", sans-serif;
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: var(--btn-color);
  color: var(--btn-text-color);
  font-size: 20px;
  padding: 6px 14px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  opacity: 0.9 !important;
}

@media (max-width: 1024px) {
  button {
    font-size: 12px;
    padding: 2px 8px;
  }
}
</style>