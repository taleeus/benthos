<template>
  <div id="contacts">
    <hr id="contacts-hr" />
    <div id="contacts-bar">
      <h1 id="contacts-title">{{ smallScreen ? 'CONTACTS' : 'CONTACTS / SOCIAL'}}</h1>
      <div id="social-buttons">
        <v-btn
          class="ma-2 social-icon"
          v-on:click="goToSite('https://www.instagram.com/benthos_official')"
          :x-small="smallScreen"
        >
          <v-icon :x-small="smallScreen" color="white">mdi-instagram</v-icon>
        </v-btn>
        <v-btn
          class="ma-2 social-icon"
          v-on:click="goToSite('https://www.facebook.com/Benthos.Milano')"
          :x-small="smallScreen"
        >
          <v-icon :x-small="smallScreen" color="white">mdi-facebook</v-icon>
        </v-btn>
        <v-btn class="ma-2 social-icon" v-on:click="sendEmail()" :x-small="smallScreen">
          <v-icon :x-small="smallScreen" color="white">mdi-email</v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "benthos.milano@gmail.com",
      smallScreen: window.innerWidth <= 1024,
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
    goToSite(url) {
      window.location.href = url;
    },
    sendEmail() {
      window.location.href = `mailto:${this.email}`;
    },
    onResize() {
      this.smallScreen = window.innerWidth <= 1024;
    },
  },
};
</script>

<style>
#contacts-hr {
  width: auto;
  margin-left: 60px;
  margin-right: 60px;
}

#contacts-bar {
  background-color: #17111b;

  margin-left: 120px;
  margin-right: 120px;

  height: 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

#contacts-title {
  margin-left: 20px;
  margin-top: 0px;
  margin-bottom: 0px;

  font-size: 20px;
}

#social-buttons {
  margin-right: 15px;
}

.social-icon {
  margin-left: 5px;
  margin-right: 5px;
}

@media (max-width: 1024px) {
  #contacts-hr {
    margin-left: 20px;
    margin-right: 20px;
  }

  #contacts-bar {
    margin-left: 40px;
    margin-right: 40px;

    height: 30px;
  }

  #contacts-title {
    margin-left: 5px;
    font-size: 8px;
    letter-spacing: normal;
  }

  #social-buttons {
    margin-right: 3px;
  }

  .social-icon {
    margin-left: 2px;
    margin-right: 2px;
  }
}
</style>