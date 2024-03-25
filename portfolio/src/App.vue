<template>
  <HeaderCard/>
  <SlideShow />
  <MainCard />
  <ProjectsCard />
  <ContactForm/>
</template>

<script>
import MainCard from "./components/MainCard.vue";
import ProjectsCard from "./components/ProjectsCard.vue";
import ContactForm from "./components/ContactForm.vue";
import HeaderCard from "./components/HeaderCard.vue";
import SlideShow from "./components/SlideShow.vue"

export default {
  name: "App",
  components: {
    MainCard,
    ProjectsCard,
    ContactForm,
    HeaderCard,
    SlideShow
  },
};
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: Georgia, serif;
  font-size: 20px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f8dfc4;
  padding-bottom: 2.5%;
}
</style>
