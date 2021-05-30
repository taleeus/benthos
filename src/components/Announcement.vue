<template>
  <div id="announcement">
    <h1>{{ headerText }}</h1>
    <div id="announcement-image">
      <custom-button :onButtonClick="trackAndOpenAnnouncement">
        {{ buttonText }}
      </custom-button>
      <img :src="require(`@/assets/${imageName}`)" id="image" />
    </div>
  </div>
</template>

<script>
import CustomButton from "./CustomButton";

export default {
  props: {
    announcementName: String,
    headerText: String,
    buttonText: String,
    onButtonClick: Function,
    imageName: String,
  },
  methods: {
    trackAndOpenAnnouncement: function () {
      this.$gtag.event("Announcement", {
        event_category: "click",
        event_label: this.announcementName,
      });

      this.onButtonClick();
    },
  },
  components: {
    CustomButton,
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#announcement {
  text-align: center;
}

#announcement-image {
  position: relative;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

h1 {
  font-family: "Montserrat", sans-serif;
  color: #b48829;
  opacity: 0.8;
  letter-spacing: 15px;
  font-weight: bold;
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
}
</style>
