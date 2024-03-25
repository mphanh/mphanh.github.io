<template>
  <div class="wrapper">
    <div class="main-container" id="about-me">
      <div class="container-1">
        <div class="profile">
          <img src="../assets/img/id.jpg" alt="" />
          <h3>Mai Phuong Anh</h3>
          <p>Software Developer</p>
        </div>
        <div class="social-links">
          <div class="link">
            <a href="https://github.com/mphanh">
              <img
                src="https://api.iconify.design/mdi:github.svg"
                alt="GitHub"
              />
              <h2>Github</h2>
            </a>
          </div>
          <div class="link">
            <a
              href="https://www.linkedin.com/in/mai-ph%C6%B0%C6%A1ng-anh-766a06150/"
            >
              <img
                src="https://api.iconify.design/mdi:linkedin.svg"
                alt="LinkedIn"
              />
              <h2>Linkedin</h2>
            </a>
          </div>
          <div class="link">
            <a href="https://www.instagram.com/mai.phanhh/">
              <img
                src="https://api.iconify.design/mdi:instagram.svg"
                alt="Instagram"
              />
              <h2>Instagram</h2>
            </a>
          </div>
          <div class="link">
            <a href="https://www.facebook.com/phanh1698">
              <img
                src="https://api.iconify.design/ic:baseline-facebook.svg"
                alt="Facebook"
              />
              <h2>Facebook</h2>
            </a>
          </div>
        </div>
      </div>
      <div class="container-2">
        <div class="about-me title">
          <h1>About Me</h1>
          <div>
            <h3 v-if="currentTextIndex === 0" class="fade-in">{{ intro }}</h3>
            <h3 v-else-if="currentTextIndex === 1" class="jump-in">
              {{ study }}
            </h3>
            <h3 v-else-if="currentTextIndex === 2" class="bounce-text">
              {{ experience }}
            </h3>
            <h3 v-else-if="currentTextIndex === 3" class="flip-in">
              {{ ending }}
            </h3>
            <button
              @click="showNextText"
              v-if="currentTextIndex < 3"
              class="button-74"
              role="button"
            >
              Get to know me more
            </button>
            <button
              onclick="location.href='#contact-form'"
              v-if="currentTextIndex == 3"
              class="button-74"
              role="button"
            >
              Contact me
            </button>
          </div>
        </div>
        <div class="technology title">
          <h1>Technologies</h1>
          <div class="logos">
            <h3>Backend</h3>
            <div
              class="backend"
              v-for="(image, index) in techstack.backend"
              :key="index"
            >
              <img :src="image.image" :alt="image.name" />
            </div>
            <h3>Frontend</h3>
            <div
              class="backend"
              v-for="(image, index) in techstack.frontend"
              :key="index"
            >
              <img :src="image.image" :alt="image.name" />
            </div>
            <h3>DevOps</h3>
            <div
              class="backend"
              v-for="(image, index) in techstack.devops"
              :key="index"
            >
              <img :src="image.image" :alt="image.name" />
            </div>
          </div>
        </div>
        <div class="button-container">
          <button
            onclick="location.href='#project-card'"
            class="button-74"
            role="button"
          >
            My Projects
          </button>
          <button
            onclick="location.href='/Resume-Mai-Phương-Anh.pdf'"
            class="button-74"
            role="button"
          >
            My Resume
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/css/style.css";
import techstack from "../assets/json/techstack.json";

export default {
  name: "MainCard",
  data() {
    return {
      intro:
        "Hello! I'm Phuong Anh, a versatile Software Engineer. With 2 years of experience in the industry, I thrive on learning more and more about new technical frameworks to create well-functioned and creative websites.",
      study:
        "I got my BS in Electronics and Telecommunication Engineering at HUST, a major that includes both electronics and programming courses.",
      experience:
        "Since then, I've had the privilege of working with NTT Data VDS, honing my craft and pushing boundaries to deliver exceptional results.",
      ending:
        "I'm thrilled to share my journey and portfolio with you. Let's connect and create something amazing together!",
      currentTextIndex: 0,
      techstack: techstack,
    };
  },
  methods: {
    showNextText() {
      this.currentTextIndex++;
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
}

img {
  height: 100px;
}

.main-container {
  display: flex;
  flex-direction: row;
  background-color: #6868ac;
  border-radius: 25px;
  width: 60%;
}

.container-1 {
  background-color: #7fa5ec;
  width: 30%;
  padding: 2.5%;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.profile img {
  height: 10rem;
  border-radius: 50%;
  transition: 700ms ease;
}

.profile img:hover {
  height: 15rem;
}

.profile h3 {
  font-size: 1.5rem;
  text-transform: uppercase;
  font-family: "Gambetta", serif;
  margin-bottom: 0.8rem;
  word-wrap: break-word;
}

.social-links h2 {
  word-wrap: break-word;
}

.link {
  overflow: visible;
  transition: transform 0.3s ease; /* Smooth transition effect: 
  property duration timing-function(ease, linear, etc.) delay */
}

.link a {
  text-decoration: none;
  color: #000;
  font-size: 12px;
}

.link img {
  height: 5rem;
}

.link img:hover {
  transform: scale(1.2); /* Scale up 20% the image on hover */
}

.container-2 {
  background-color: #6868ac;
  width: 70%;
  margin: 2.5%;
  color: lemonchiffon;
}

.about-me {
  padding-bottom: 30px;
}

.logos img {
  height: 2.5 rem;
}

.button-container div {
  margin: 10px;
}

.button-container a {
  text-decoration: none;
  color: #422800;
}

.button-container button {
  margin: 10px;
}

.button-container div:hover {
  transform: scale(1.1);
}

.logos div {
  position: relative;
  display: inline-block;
}

.logos img:hover {
  transform: scale(1.3);
}

@media screen and (max-width: 1750px) {
  .title h1 {
    font-size: 5rem;
    text-shadow: 3px 3px 0px #ffb650, 6px 6px 0px #ffd662, 9px 9px 0px #ff80bf,
      12px 12px 0px #ef5097, 15px 15px 0px #6868ac, 18px 18px 0px #90b1e0;
  }
}

@media screen and (max-width: 1200px) {
  .main-container {
    width: 95%;
  }

  .wrapper {
    transform: scale(0.9);
  }

  .wrapper img {
    height: 50px;
  }

  .profile img {
    height: 100px;
  }

  .profile p {
    font-size: 1rem;
  }

  button {
    transform: scale(0.5);
  }

  .container-2 {
    width: 58%;
  }

  .title h1 {
    font-size: 3.5rem;
    text-shadow: 2.5px 2.5px 0px #ffb650, 5px 5px 0px #ffd662,
      7.5px 7.5px 0px #ff80bf, 10px 10px 0px #ef5097, 12.5px 12.5px 0px #6868ac,
      15px 15px 0px #90b1e0;
  }

  .wrapper h3 {
    font-size: 1rem;
  }
}

@media screen and (max-width: 600px) {
  .title h1 {
    font-size: 2rem;
    text-shadow: 2px 2px 0px #ffb650, 4px 4px 0px #ffd662, 6px 6px 0px #ff80bf,
      8px 8px 0px #ef5097, 10px 10px 0px #6868ac, 12px 12px 0px #90b1e0;
  }

  .profile img {
    height: 80px;
  }

  .link img {
    transform: scale(0.8);
  }

  .link h2 {
    font-size: 0.8rem;
  }

  .profile img:hover {
    height: 100px;
  }

  .button-container button {
    margin: 0px;
    border: 0;
  }
}

@media screen and (max-width: 300px) {
  .profile img:hover {
    height: 80px;
  }
}
</style>
