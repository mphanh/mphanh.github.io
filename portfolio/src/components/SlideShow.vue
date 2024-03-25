<template>
  <div class="container">
    <!-- BUTTONS (input/labels) -->
    <input
      type="radio"
      name="slider"
      id="slide-1-trigger"
      class="trigger"
      checked
    />
    <label class="btn" for="slide-1-trigger"></label>
    <input type="radio" name="slider" id="slide-2-trigger" class="trigger" />
    <label class="btn" for="slide-2-trigger"></label>
    <input type="radio" name="slider" id="slide-3-trigger" class="trigger" />
    <label class="btn" for="slide-3-trigger"></label>
    <input type="radio" name="slider" id="slide-4-trigger" class="trigger" />
    <label class="btn" for="slide-4-trigger"></label>

    <!-- SLIDES -->
    <div class="slide-wrapper">
      <div id="slide-role">
        <div class="slide slide-1"></div>
        <div class="slide slide-2"></div>
        <div class="slide slide-3"></div>
        <div class="slide slide-4"></div>
      </div>
    </div>
  </div>
</template>

<script>
// import slides from "../assets/json/slides.json"

export default {};
</script>

<style scoped>
/*==================
    Base Styles
===================*/

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

input[type="radio"] {
  display: none;
}

.container {
  position: relative;
  height: 100vh;
  width: 100%;
  padding: 2em;
}

.slide-wrapper {
  position: relative;
  margin: 0 auto;
  padding: 3em;
  width: 40%;
  height: 80%;
  border-radius: 20px;
  box-shadow: 0px 1px 2px 0px rgb(53, 53, 53);
  overflow: hidden;
}

/*==================
    Slides
===================*/

#slide-role {
  background: inherit;
  position: absolute;
  top: 0;
  left: 0;
  width: 400%;
  height: 100%;
  z-index: 100;
  transition: left 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  /* flex */
  display: flex;
}

.slide {
  width: 50%;
  height: 100%;
  background-size: cover;
  background-position: bottom;
}

/* backgrounds */

.slide-1 {
  background-image: url("../assets/img/slide-1.jpeg");
}

.slide-2 {
  background-image: url("../assets/img/slide-2.jpeg");
}

.slide-3 {
  background-image: url("../assets/img/slide-3.jpeg");
}

.slide-4 {
  background-image: url("../assets/img/slide-4.jpeg");
}

/*===================
    BUTTONS
====================*/

.btn,
.btn::after {
  border-radius: 50%;
  transition: all 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86);
}

.btn {
  border: 1px solid rgba(0, 0, 0, 0.281);
  background: rgb(255, 255, 255);
  box-shadow: 0px 2px 2px rgba(56, 56, 56, 0.822);
  position: absolute;
  bottom: 12%;
  width: 30px;
  height: 30px;
  cursor: pointer;
  transform: scale(1.1);
  z-index: 1000;
}

.btn:nth-of-type(1) {
  left: 38%;
}

.btn:nth-of-type(2) {
  left: 45%;
}

.btn:nth-of-type(3) {
  left: 52%;
}

.btn:nth-of-type(4) {
  left: 59%;
}

.btn:hover {
  transform: scale(1.4);
}

/* buttons Atom! */

.btn::after {
  content: "";
  display: inline-block;
  border: 1px solid white;
  background: #7fa5ec;
  width: 20px;
  height: 20px;
  margin: 3px 3px;
  transform: scale(0.5, 0.5);
  box-shadow: 0px 1px 5px rgba(56, 56, 56, 0.822);
}

/*====================
        L O G I C 
 ===================*/

/* slide logic */

input[type="radio"]:checked#slide-2-trigger
  ~ div.slide-wrapper
  > div#slide-role {
  left: -100%;
}

input[type="radio"]:checked#slide-3-trigger
  ~ div.slide-wrapper
  > div#slide-role {
  left: -200%;
}

input[type="radio"]:checked#slide-4-trigger
  ~ div.slide-wrapper
  > div#slide-role {
  left: -300%;
}

/* button logic */

input[type="radio"]:checked + label.btn {
  transform: scale(1.2);
  border: 1px solid rgba(53, 53, 53, 0.308);
}

input[type="radio"]:checked + label.btn::after {
  transform: scale(1.1, 1.1);
  background: #7fa5ec;
}

/*=====================================================================================
                MEDIA QUERIES
=======================================================================================*/

@media only screen and (max-width: 1200px) {
  .slide-wrapper {
    width: 90%;
    height: 100%;
  }
  .btn:nth-of-type(1) {
    left: 93%;
    bottom: 60%;
  }
  .btn:nth-of-type(2) {
    left: 93%;
    bottom: 50%;
  }
  .btn:nth-of-type(3) {
    left: 93%;
    bottom: 40%;
  }
  .btn:nth-of-type(4) {
    left: 93%;
    bottom: 30%;
  }
}

@media only screen and (max-width: 500px) {
  .container {
    height: 70vh;
  }
  .btn:nth-of-type(1) {
    left: 91%;
  }
  .btn:nth-of-type(2) {
    left: 91%;
  }
  .btn:nth-of-type(3) {
    left: 91%;
  }
  .btn:nth-of-type(4) {
    left: 91%;
  }
}
</style>
