<template>
  <div id="epk">
    <Header />
    <Bio />
    <br />
    <br />

    <Video />
    <br />
    <br />

    <Gallery />
    <br />
    <br />
  </div>
</template>

<script>
import Header from "@/components/epk/Header";
import Bio from "@/components/epk/Bio";
import Video from "@/components/epk/Video";
import Gallery from "@/components/epk/Gallery";

export default {
  components: {
    Header,
    Bio,
    Video,
    Gallery,
  },
  mounted() {
    document.title = "Benthos EPK";
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap");

html {
  scroll-behavior: smooth;
}

h1 {
  letter-spacing: 20px;

  font-weight: normal;
  font-size: 30px;

  margin: 40px;
}

h2 {
  letter-spacing: 20px;

  font-weight: normal;
  font-size: 20px;

  margin: 20px;
}

#epk {
  background-image: url('../assets/epk/background.jpg');
  background-size: cover;

  text-align: center;
  font-family: "Libre Baskerville", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #afa283;

  font-size: 18px;
  line-height: 2;
  word-spacing: 8px;
}

#bio {
  margin-left: 200px;
  margin-right: 200px;
}

#video {
  margin-left: 200px;
  margin-right: 200px;
}

#gallery {
  margin-left: 200px;
  margin-right: 200px;
}

@media (max-width: 1024px) {
  #epk {
    font-size: 10px;
  }

  #bio {
    margin: 0 30px 0 30px;
  }

  #video {
    margin: 0 30px 0 30px;
  }

  #gallery {
    margin: 0 30px 0 30px;
  }

  h1 {
    letter-spacing: 10px;

    font-weight: normal;
    font-size: 20px;

    margin: 20px;
  }
}
</style>