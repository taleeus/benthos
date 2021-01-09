<template>
  <div class="home">
    <video autoplay muted loop id="background">
      <source src="@/assets/background.mp4" type="video/mp4" />
    </video>
    <img
      alt="Benthos logo"
      src="@/assets/logo.svg"
      cover="@/assets/cover.png"
      id="logo"
    />
    <Presave></Presave>
  </div>
</template>

<style scoped>
/* Style the video: 100% width and height to cover the entire window */
#background {
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

#logo {
  opacity: 0.5 !important;
  width: 30%;
}

@media (max-width: 1024px) {
  #logo {
    opacity: 0.5 !important;
    width: 80%;
  }
}
</style>

<script>
// @ is an alias to /src
import Presave from "@/components/Presave.vue";

export default {
  name: "Home",
  components: {
    Presave,
  },
};
</script>
