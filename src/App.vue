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
        href="https://benthosmerch.bigcartel.com"
        target="_blank"
        @click="trackMerch"
      >
        BUY ALBUM
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

<script>
import Footer from "@/components/Footer";

export default {
  methods: {
    trackMerch: function() {
      this.$gtag.event("Merch", {
        event_category: "click",
      })
    },
    trackTour: function() {
      this.$gtag.event("Tour", {
        event_category: "click",
      })
    },
  },
  mounted() {
    document.title = "Benthos";
  },
  components: {
    Footer,
  },
};
</script>
