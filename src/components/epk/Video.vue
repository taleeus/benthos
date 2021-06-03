<template>
  <div id="video">
    <img id="second-dragonfly" src="@/assets/epk/1.libellula.png" alt />

    <h1>VIDEO</h1>
    <v-app style="background-color:#00000000">
      <v-carousel
        id="video-carousel"
        :hide-delimiters="width > 1024"
        :show-arrows="width > 1024"
        delimiter-icon="mdi-minus"
        hide-delimiter-background
        height="auto"
      >
        <v-carousel-item id="dragonfly-carousel">
          <div class="video-box">
            <iframe
              src="https://www.youtube.com/embed/iXOm0oeMGZc"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <div class="video-description">
              <div class="video-text-box-background"></div>
              Talk to Me, Dragonfly! wants to be a confrontation with one's
              negativity, aiming at the balance reached through a process of
              becoming aware, accepting and improving it
            </div>
          </div>
          <br />
          <br />
        </v-carousel-item>
        <v-carousel-item id="cartesio-carousel">
          <div class="video-box">
            <iframe
              src="https://www.youtube.com/embed/TQuuQxOuI_k"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <div class="video-description">
              <div class="video-text-box-background"></div>
              Cartesio represents the beginning of an inner journey, placing at
              the centre of the reflection the inability of materializing the
              beauty of ideas created through imagination
            </div>
          </div>
          <br />
          <br />
        </v-carousel-item>
        <v-carousel-item id="debris-carousel">
          <div class="video-box">
            <iframe
              src="https://www.youtube.com/embed/hzknSmWxw2I"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <div class="video-description">
              <div class="video-text-box-background"></div>
              Debris // Essence is an immersion through consciousness, bringing
              out instinctive passions oppressed by the imposed patterns
              dictated by reality
            </div>
          </div>
          <br />
          <br />
        </v-carousel-item>
      </v-carousel>
    </v-app>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
      this.onResize();
      const carousels = document.getElementsByClassName("v-window-item");

      this.observer = new MutationObserver(() => {
        this.onResize();
      });

      for (let index = 0; index < carousels.length; index++) {
        if (carousels.item(index).nodeName) {
          this.observer.observe(carousels.item(index), {
            attributes: true,
            childList: true,
          });
        }
      }
    });
  },

  data() {
    return {
      observer: {},
      width: window.innerWidth,
    };
  },

  updated() {
    this.onResize();
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
    this.observer.disconnect();
  },

  methods: {
    onResize() {
      this.width = window.innerWidth;

      const videoDescriptions = document.getElementsByClassName(
        "video-description"
      );

      for (let i = 0; i < videoDescriptions.length; i++) {
        let { width, height } = window.getComputedStyle(
          videoDescriptions.item(i)
        );
        let descriptionBox = document
          .getElementsByClassName("video-text-box-background")
          .item(i);

        descriptionBox.style.width = width;
        descriptionBox.style.height = height;
      }

      let videoBoxes = document.getElementsByClassName("video-box");
      const videoBoxHeight = _.max(
        _.map(videoBoxes, (el) => el.getBoundingClientRect().height)
      );

      const dragonfly = document.getElementById("second-dragonfly");
      dragonfly.style.marginTop = `${videoBoxHeight * 0.9}px`;
    },
  },
};
</script>

<style scoped>
.video-box {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

iframe {
  margin: 30px;

  width: 80%;
  height: 500px;
}

/* .v-window__next {
  right: 0;
} */

.video-description {
  direction: rtl;
  text-align: justify;
  color: #afa283;

  margin: 30px;
  width: 30%;

  margin-left: 70%;

  z-index: 0;

  word-spacing: 8px;
  line-height: 1.6;
}

.video-text-box-background {
  position: absolute;

  z-index: -1;

  margin-top: 30px;
  margin-right: 30px;
  background-color: #17111b;

  overflow: visible;
}

#second-dragonfly {
  z-index: 0;
  left: 0;

  position: absolute;
  width: 50%;
  height: auto;
  margin-top: 45%;
  transform: rotate(40deg);

  overflow: hidden;
  opacity: 0.4;
}

@media (max-width: 1024px) {
  iframe {
    width: 100%;
    height: auto;
  }

  #second-dragonfly {
    display: none;
  }

  .video-text-box-background {
    display: none;
  }

  .video-description {
    direction: ltr;
    margin: 0;
    width: auto;
  }
}
</style>