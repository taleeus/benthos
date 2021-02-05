<template>
  <div id="announcement">
    <h1>{{ headerText }}</h1>
    <div id="announcement-image">
      <button @click="onButtonClick">
        {{ buttonText }}
      </button>
      <img
        :src="require(`@/assets/${imageName}`)"
        id="image"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    headerText: String,
    buttonText: String,
    onButtonClick: Function,
    imageName: String
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

#announcement-image {
  position: relative;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

#announcement-image button {
  font-family: "Montserrat", sans-serif;
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: #4b4842b4;
  color: #a79369;
  font-size: 20px;
  padding: 6px 14px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  opacity: 0.9 !important;
}

h1 {
  font-family: "Montserrat", sans-serif;
  color: #b48829;
  opacity: 0.8;
  letter-spacing: 15px;
}

#image {
  background: #817e77b4;
  padding: 12px;
  border: 1px solid #0000004b;
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  width: 50%;
  height: auto;
}

@media (max-width: 1024px) {
  h1 {
    font-size: 20px;
    letter-spacing: 5px;
  }

  #announcement-image {
    width: 100%;
  }

  #image {
    padding: 4px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    width: 60%;
    height: auto;
  }

  #announcement-image button {
    font-size: 12px;
    padding: 2px 8px;
  }
}
</style>
