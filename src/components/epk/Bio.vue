<template>
  <div id="bio">
    <img id="first-dragonfly" src="@/assets/epk/2.libellula.png" />

    <h1>BIOGRAPHY</h1>
    <div id="bio-table">
      <div id="bio-text">
        <div id="bio-text-box-background"></div>
        Benthos is an experimental progressive metal band from Milan, Italy.
        Since 2018, the band have been developing a growing fanbase due to their
        unique songwriting style. By combining ethereal atmospheric song
        structures with geometric heavy riffs, the result is a unique universe
        of sounds which you must hear to believe. Gabriele Papagni and Enrico
        Tripoldi met towards the end of 2017, while they were both studying
        classical guitar at Italy’s largest music university, The Guiseppe Verdi
        Conservatory of Music. They both grew up playing many different styles
        of music, and quickly found they shared the same passion for classical
        music as well as progressive rock and metal. While on holiday break,
        Gabriele Landillo (who was Enrico’s classmate in high school) heard some
        demos the two of them had written and when he asked to get involved, the
        band quickly began to take shape. Throughout early-mid 2018, the trio
        held auditions for a drummer and bassist, however they couldn’t seem to
        find the right musicians for the band. By an accidental coincidence
        however, Gabriele Papagni stumbled upon Alberto Fiorani and Alessandro
        Tagliani at a local venue, and he was so impressed that the two ended up
        joining the band and the lineup was complete. The band wrote several
        songs during 2018, which also evolved as the lineup solidified. With
        many varying influences ranging from renaissance music, jazz fusion,
        math rock, classical guitar, and of course heavy metal, they began to
        develop a delicate balance among these varying elements and plot a
        course towards developing their own unique sound as a band. After
        scoring a support gig opening for The Contortionist at Circolo Svolta in
        Milan, the band was tapped by producer & engineer Matteo Magni
        (Anewrage, Deep As Ocean). Shortly thereafter in the Winter of 2019, the
        band entered Magnitude Recording Studio to begin tracking their debut
        album. Fortunately, the album which would be titled “II” was finished
        before the pandemic hit Europe and the Italian government locked down.
        Despite the band being in quarantine, they were able to reach out to a
        select few record companies and quickly gained the attention of Eclipse
        Records. After a few Zoom meetings the band signed an exclusive
        worldwide deal with the American record label. “II” was released
        worldwide via Eclipse Records on April 23, 2021.
        <br />
        <br />
        <h1>CREDITS</h1>
        “II” is mixed and mastered by Matteo Magni at Magnitude Recording Studio
        <br />Produced by Benthos and Matteo Magni <br />Cover artwork by Laura
        Salomoni <br />Photography by Alessandra Senna <br />Video by Stefano
        Galli
      </div>
      <iframe
        id="music-player"
        src="https://open.spotify.com/embed/album/5jLm0U00y9utdjUPT88B1l"
        width="300"
        height="380"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
      <div
        style="
          font-size: 10px;
          color: #cccccc;
          line-break: anywhere;
          word-break: normal;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-family: Interstate, Lucida Grande, Lucida Sans Unicode,
            Lucida Sans, Garuda, Verdana, Tahoma, sans-serif;
          font-weight: 100;
        "
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(() => {
      this.onResize();
      window.addEventListener("resize", this.onResize);
    });
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },

  methods: {
    onResize() {
      const { width, height } = window.getComputedStyle(
        document.getElementById("bio-text")
      );

      document.getElementById("bio-text-box-background").style.width = width;
      document.getElementById("bio-text-box-background").style.height = height;

      const musicPlayerRect = document
        .getElementById("music-player")
        .getBoundingClientRect();
      const dragonfly = document.getElementById("first-dragonfly");
      dragonfly.style.marginTop = `${musicPlayerRect.height * 1.8}px`;
    },
  },
};
</script>

<style>
#bio-table {
  display: flex;
  align-items: center;
  justify-content: center;
}

#bio-text {
  flex: 60%;
  text-align: justify;

  z-index: 0;

  word-spacing: 8px;
  line-height: 1.6;

  margin-right: 30px;
}

#bio-text-box-background {
  position: absolute;

  z-index: -1;

  margin-top: 30px;
  margin-left: 30px;
  background-color: #17111b;

  overflow: visible;
}

#music-player {
  z-index: 1;

  flex: 40%;
  padding-left: 100px;
  width: 200px;
  height: 440px;
}

#first-dragonfly {
  z-index: 0;

  position: absolute;
  width: 30%;
  height: auto;
  margin-left: 15%;

  transform: rotate(-30deg);
  opacity: 0.4;
}

@media (max-width: 1024px) {
  #bio-table {
    flex-direction: column-reverse;
  }

  #music-player {
    padding-left: 0;

    flex: auto;
    width: 90%;
    height: 310px;
  }

  #bio-text {
    flex: auto;
    margin-right: 0;
  }

  #first-dragonfly {
    display: none;
  }

  #bio-text-box-background {
    display: none;
  }
}
</style>