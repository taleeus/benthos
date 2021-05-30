<template>
  <div id="app">
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
