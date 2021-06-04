<template>
  <div id="header">
    <img src="@/assets/epk/header.png" id="header-image" />
    <div id="blurring"></div>

    <img src="@/assets/logo.svg" id="logo" />
    <div id="navbar">
      <div>
        <a href="#bio">BIOGRAPHY</a>
      </div>
      <div>
        <a href="#video">VIDEO</a>
      </div>
      <div>
        <a href="#gallery">GALLERY</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
a {
  color: #efdfba;
  text-decoration: none;
}

#header-image {
  width: 100%;
  height: auto;
  overflow: hidden;
}

#logo {
  position: absolute;

  top: 0;
  left: 0;

  background-color: #30243c;
  opacity: 0.5;

  width: 100%;
  height: 250px;
}

#navbar {
  position: absolute;

  top: 250px;
  left: 0;

  background-color: #30243c;

  height: 50px;
  width: 100%;

  padding: 0;
  margin: 0;

  opacity: 0.8;

  display: flex;
  flex-wrap: nowrap;

  align-items: center;
  justify-content: center;
}

#navbar > div {
  margin: auto;
  text-align: center;
}

#blurring {
  background-image: url("../../assets/epk/header.png");
  background-position: top left;
  background-size: cover;

  position: absolute;
  top: 0;

  height: 308px;
  width: 100%;

  filter: blur(10px);
}

@media (max-width: 1024px) {
  #logo {
    height: 50px;
  }

  #navbar {
    top: 50px;
    height: 20px;
    font-size: 10px;
  }

  #blurring {
    height: 78px;
  }

  #navbar > div {
    margin: auto;
    text-align: center;

    font-size: 8px;
  }
}
</style>