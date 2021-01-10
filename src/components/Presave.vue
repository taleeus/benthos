<template>
  <div class="presave">
    <h1>APRIL 23, 2021</h1>
    <div id="presave-image">
      <button onclick="window.open('https://ffm.to/bnthii', '_blank')">
        PRESAVE
      </button>
      <img
        src="@/assets/cover-art.jpg"
        alt="benthos-cover-art"
        id="cover-art"
      />
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

#presave {
  text-align: center;
}

#presave-image {
  position: relative;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}

#presave-image button {
  font-family: 'Montserrat', sans-serif;
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: #4b4842b4;
  color: #a79369;
  font-size: 20px;
  padding: 6px 14px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  opacity: 0.7 !important;
}

#presave-image button:hover {
  background-color: #35322eb4;
  color: #c28642be;
}

h1 {
  font-family: 'Montserrat', sans-serif;
  color: #b48829;
  opacity: 0.8;
  letter-spacing: 15px;
}

#cover-art {
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

  #presave-image {
    width: 100%;
  }

  #cover-art {
    padding: 4px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    width: 60%;
    height: auto;
  }

  #presave-image button {
    font-size: 12px;
    padding: 2px 8px;
  }
}
</style>
