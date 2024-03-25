<template>
  <div class="header">
    <h1>MPA</h1>
    <div class="right-header">
      <a href="#about-me" class="about-me button-28">About Me</a>
      <a href="#project-card" class="project button-28">My Projects</a>
      <a href="#contact-form" class="contact button-28">Contact</a>
    </div>
  </div>
</template>

<script>
import "../assets/css/style.css";

export default {};
</script>

<style scoped>
.header {
  text-align: center;
  background: #f8dfc4;
  overflow: hidden;
  padding: 0;
  width: 60%;
  margin: auto;
}
h1 {
  float: left;
  margin: auto;
  font-size: 5rem;
  color: #7fa5ec;
  margin-left: 20px;
  text-shadow: 3px 3px #6868ac;
}

.right-header {
  float: right;
  margin: 40px 10px;
}

.right-header a {
  color: #7fa5ec;
  text-decoration: none;
  margin: 20px 10px;
}

.right-header a:hover {
  color: #f8dfc4;
}

@media screen and (max-width: 1200px) {
  .header {
    width: 100%;
  }
}

@media screen and (max-width: 670px) {
  h1 {
    font-size: 3rem;
  }

  .right-header {
    display: none;
  }
}
</style>
