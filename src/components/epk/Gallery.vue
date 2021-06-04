<template>
  <div id="gallery">
    <h1 id="gallery-title">GALLERY</h1>
    <v-carousel
      id="gallery-carousel"
      :continuous="true"
      :show-arrows="false"
      :height="carouselHeight"
      cycle
      hide-delimiter-background
      delimiter-icon="mdi-minus"
    >
      <v-carousel-item>
        <img class="gallery-image" src="@/assets/gallery/9_benthos-black.jpg" style="width:40%;" />
      </v-carousel-item>
      <v-carousel-item>
        <img class="gallery-image" src="@/assets/gallery/10_benthos-black-quadro.jpg" style="width:40%;" />
      </v-carousel-item>
      <v-carousel-item>
        <img class="gallery-image" src="@/assets/gallery/3_benthos-nature-1.jpg" />
      </v-carousel-item>
      <v-carousel-item>
        <img class="gallery-image" src="@/assets/gallery/4_benthos-nature-2.jpg" />
      </v-carousel-item>
      <v-carousel-item>
        <img class="gallery-image" src="@/assets/gallery/5_benthos-nature-3.jpg" />
      </v-carousel-item>
      <v-carousel-item>
        <img class="gallery-image" src="@/assets/gallery/6_benthos-dana-1.jpg" />
      </v-carousel-item>
      <v-carousel-item>
        <img class="gallery-image" src="@/assets/gallery/7_benthos-dana-2.jpg" />
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carouselHeight:
        window.innerWidth > 1024 ? (window.innerWidth / 100) * 35 : 200,
    };
  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },

  methods: {
    onResize() {
      this.carouselHeight =
        window.innerWidth > 1024 ? (window.innerWidth / 100) * 35 : 200;
    },
  },
};
</script>

<style scoped>
#gallery-title {
  text-align: right;
  margin-right: 25%;
}

#gallery {
  margin-left: 50px;
  margin-right: 50px;
}

.gallery-image {
  width: 60%;
  height: auto;
}

@media (max-width: 1024px) {
  #gallery-title {
    text-align: center;
    margin-right: 20px;
  }

  .gallery-image {
    width: 75%;
  }
}
</style>