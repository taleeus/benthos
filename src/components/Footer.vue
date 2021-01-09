<template>
  <div id="footer">
    <div id="social-links">
      <a href="https://www.facebook.com/Benthos.Milano" target="_blank"
        ><i class="fa fa-facebook" aria-hidden="true"></i
      ></a>
      <a href="https://www.instagram.com/benthos_official/" target="_blank"
        ><i class="fa fa-instagram" aria-hidden="true"></i
      ></a>
      <a href="https://twitter.com/benthos_band" target="_blank"
        ><i class="fa fa-twitter" aria-hidden="true"></i
      ></a>
      <a
        href="https://www.youtube.com/channel/UCAoS8hqW5oR2xVZJH8P6z_w"
        target="_blank"
        ><i class="fa fa-youtube" aria-hidden="true"></i
      ></a>
      <a href="https://www.twitch.tv/benthosband" target="_blank"
        ><i class="fa fa-twitch" aria-hidden="true"></i
      ></a>
      <a href="mailto:benthos.milano@gmail.com" target="_blank"
        ><i class="fa fa-envelope" aria-hidden="true"></i
      ></a>
    </div>
  </div>
</template>

<style>
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");

#footer {
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
  color: #959082;
}

#social-links a:hover {
  color: #b48829;
}

@media (max-width: 1024px) {
  #footer {
    display: flex;
    flex-wrap: nowrap;

    align-items: center;
    justify-content: center;
    padding: 0;
    left: 10px;
    bottom: 15px;
  }

  #social-links a {
    letter-spacing: 25px;
  }
}
</style>