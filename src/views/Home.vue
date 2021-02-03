<template>
  <div class="home">
    <video autoplay muted loop playsinline id="background">
      <source src="@/assets/background-debris.webm" type="video/webm" />
    </video>
    <div id="header">
      <img
        alt="Benthos logo"
        src="@/assets/logo.svg"
        cover="@/assets/cover.png"
        id="logo"
      />
    </div>
    <div id="announcements">
      <announcement
        header-text="SINGLE OUT NOW"
        image-name="debris-cover-art.jpg"
        button-text="LISTEN"
        onButtonClick="window.open('http://spoti.fi/3ahqw1R', '_blank')"
      ></announcement>
      <announcement
        header-text="APRIL 23, 2021"
        image-name="cover-art.jpg"
        button-text="PRESAVE"
        onButtonClick="window.open('https://ffm.to/bnthii', '_blank')"
      ></announcement>
    </div>
    <br />
    <br />
    <br />
    <br />
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

#header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#logo {
  opacity: 0.5 !important;
  width: 30%;
}

#announcements {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#announcement {
  margin-bottom: 30px;
}

@media (max-width: 1024px) {
  #logo {
    opacity: 0.5 !important;
    width: 80%;
    margin-bottom: 0;
  }

  #announcements {
    flex-direction: column;
  }
}
</style>

<script>
// @ is an alias to /src
import Announcement from "@/components/Announcement.vue";

export default {
  name: "Home",
  components: {
    Announcement,
  },
};
</script>
