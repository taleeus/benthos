<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">HOME</router-link>
      <!-- <router-link to="/music">MUSIC</router-link> -->
      <a
        href="https://teespring.com/it/stores/benthos"
        target="_blank"
        @click="trackMerch"
      >
        MERCH
      </a>
      <a
        href="https://www.bandsintown.com/a/1419641-benthos"
        target="_blank"
        @click="trackTour"
      >
        TOUR
      </a>
      <!-- <router-link to="/about">ABOUT</router-link> -->
    </div>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Bodoni+Moda&display=swap");
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");

#app {
  font-family: "Bodoni Moda", serif;
  letter-spacing: 2px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #867c64;
}

#nav {
  display: flex;
  flex-wrap: nowrap;

  align-items: center;
  justify-content: center;

  font-size: 20px;
  padding: 30px;
}

#nav a {
  text-decoration: none;
  font-weight: bold;
  margin: auto;
  color: #959082;
  opacity: 0.8;
}

#nav a:hover {
  color: #b48829;
}

#nav a.router-link-exact-active {
  color: #b48829;
}

@media (max-width: 1024px) {
  #nav {
    font-size: 10px;
    padding: 15px;
  }
}
</style>

<script>
import Footer from "@/components/Footer";
import { event } from "vue-analytics"

export default {
  methods: {
    trackMerch: () => event('Merch', 'click'),
    trackTour: () => event('Tour', 'click'),
  },
  mounted() {
    document.title = "Benthos";
  },
  components: {
    Footer,
  },
};
</script>
