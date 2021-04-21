<template>
  <div id="footer">
    <div id="social-links">
      <a
        href="https://open.spotify.com/artist/0A7v88d7h8uYeGaBhflb45?si=teGeb8D8S92fEpK3VrAxGg"
        target="_blank"
        @click="trackSpotify"
        ><i class="fa fa-spotify" aria-hidden="true"></i
      ></a>
      <a
        href="https://www.facebook.com/Benthos.Milano"
        target="_blank"
        @click="trackFacebook"
        ><i class="fa fa-facebook" aria-hidden="true"></i
      ></a>
      <a
        href="https://www.instagram.com/benthos_official/"
        target="_blank"
        @click="trackInstagram"
        ><i class="fa fa-instagram" aria-hidden="true"></i
      ></a>
      <a
        href="https://twitter.com/benthos_band"
        target="_blank"
        @click="trackTwitter"
        ><i class="fa fa-twitter" aria-hidden="true"></i
      ></a>
      <a
        href="https://www.youtube.com/channel/UCAoS8hqW5oR2xVZJH8P6z_w"
        target="_blank"
        @click="trackYouTube"
        ><i class="fa fa-youtube" aria-hidden="true"></i
      ></a>
      <a
        href="https://www.twitch.tv/benthosband"
        target="_blank"
        @click="trackTwitch"
        ><i class="fa fa-twitch" aria-hidden="true"></i
      ></a>
      <a href="mailto:benthos.milano@gmail.com" target="_blank"
        ><i class="fa fa-envelope" aria-hidden="true"></i
      ></a>
    </div>
    <div id="label-link">
      <a href="https://www.eclipserecords.com/band/benthos/" target="_blank">
        <img src="@/assets/eclipse-logo.png" alt="eclipse-logo"
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    trackSpotify: function() {
      this.$gtag.event('Social', {
        'event_category': 'click',
        'event_label': 'Spotify',
      })
    },
    trackFacebook: function() {
      this.$gtag.event('Social', {
        'event_category': 'click',
        'event_label': 'Facebook',
      })
    },
    trackInstagram: function() {
      this.$gtag.event('Social', {
        'event_category': 'click',
        'event_label': 'Instagram',
      })
    },
    trackTwitter: function() {
      this.$gtag.event('Social', {
        'event_category': 'click',
        'event_label': 'Twitter',
      })
    },
    trackYouTube: function() {
      this.$gtag.event('Social', {
        'event_category': 'click',
        'event_label': 'YouTube',
      })
    },
    trackTwitch: function() {
      this.$gtag.event('Social', {
        'event_category': 'click',
        'event_label': 'Twitch',
      })
    },
  },
};
</script>
<style>
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");

#footer {
  background: linear-gradient(to bottom, #ffffff00 0%, #000000 100%);

  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

#social-links {
  font-size: 25px;
  letter-spacing: 15px;
}

#social-links a {
  opacity: 0.8;
  color: #959082;
}

#social-links a:hover {
  color: #b48829;
}

#label-link {
  padding-top: 5px;
  padding-right: 40px;
  opacity: 0.8;
}

#label-link img {
  width: 40px;
}

@media (max-width: 1024px) {
  #footer {
    display: flex;
    flex-wrap: nowrap;

    align-items: center;
    justify-content: center;
    padding: 0;
    /* left: 10px;
    bottom: 15px; */
  }

  #social-links a {
    letter-spacing: 15px;
  }

  #label-link {
    padding-right: 20px;
  }

  #label-link img {
    width: 30px;
  }

  #label-link {
    padding-right: 0px;
  }
}
</style>