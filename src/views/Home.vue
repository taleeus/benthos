<template>
  <div class="home">
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

    <video
      autoplay
      muted
      loop
      playsinline
      id="background"
      poster="@/assets/cover.png"
    >
      <source src="@/assets/background.mp4" type="video/webm" />
    </video>
    <div id="header">
      <img
        alt="Benthos logo"
        src="@/assets/logo.svg"
        cover="@/assets/cover.png"
        id="logo-home"
      />
    </div>
    <showcase title="LAST VIDEO">
      <iframe
        class="video-showcase"
        src="https://www.youtube.com/embed/iXOm0oeMGZc"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </showcase>
    <br />
    <br />
    <div id="announcements">
      <announcement
        announcement-name="AlbumStream"
        header-text="II OUT NOW"
        image-name="cover-art.jpg"
        button-text="STREAM"
        :onButtonClick="openAlbumStream"
      ></announcement>
    </div>
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Bodoni+Moda&display=swap");
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");

#home {
  font-family: "Bodoni Moda", serif;
  letter-spacing: 2px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #867c64;
}

#nav {
  font-family: "Bodoni Moda", serif;
  letter-spacing: 2px;

  display: flex;
  flex-wrap: nowrap;

  align-items: center;
  justify-content: center;

  font-size: 20px;
  padding: 30px;

  margin-top: 10px;
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

#logo-home {
  opacity: 0.5 !important;
  width: 30%;
}

#announcements {
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  justify-content: center;
}

#announcement {
  margin-bottom: 30px;
}

.video-showcase {
  width: 760px;
  height: 450px;
}

@media (max-width: 1024px) {
  #nav {
    font-size: 10px;
    padding: 15px;
  }

  #logo-home {
    opacity: 0.5 !important;
    width: 80%;
    margin-bottom: 0;
  }

  #announcements {
    flex-direction: column;
  }

  .video-showcase {
    width: 300px;
    height: 180px;
  }
}
</style>

<script>
// @ is an alias to /src
import Announcement from "@/components/Announcement.vue";
import Showcase from "@/components/Showcase.vue";

export default {
  name: "Home",
  components: {
    Announcement,
    Showcase,
  },
  methods: {
    openDebris: () => window.open("http://spoti.fi/3ahqw1R", "_blank"),
    openCartesio: () => window.open("http://spoti.fi/3te99XE", "_blank"),
    openAlbumStream: () => window.open("https://ffm.to/bnthii", "_blank"),
  },
};
</script>
