<template>
  <div id="app">
    <router-view />
    <Footer></Footer>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Bodoni+Moda&display=swap");
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
@import url("https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap");
</style>

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
