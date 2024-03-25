<template>
  <div class="main-container" id="project-card">
    <div
      class="project-card"
      v-for="(items, index) in projectData.ProjectsArray"
      v-bind:key="items"
    >
      <h2>{{ projectData.ProjectsArray[index].Title }}</h2>
      <img :src="projectData.ProjectsArray[index].ImageLink" alt="" />
      <p>{{ projectData.ProjectsArray[index].About }}</p>
      <div class="links">
        <a :href="projectData.ProjectsArray[index].Link1"
          ><img src="https://api.iconify.design/mdi:github.svg" alt="GitHub"
        /></a>
        <a :href="projectData.ProjectsArray[index].Link2"
          ><img
            src="https://api.iconify.design/material-symbols:add-link.svg"
            alt="Link"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
import jsonData from "../assets/json/projects.json";
export default {
  data() {
    return {
      projectData: jsonData,
    };
  },
};
</script>

<style scoped>
.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 2.5%;
}

.project-card {
  margin: 10px;
  padding: 10px;
  flex-wrap: 0 0 40%;
  background-color: #fff;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.project-card:hover {
  transform: scale(1.3);
}

.project-card img {
  height: 20rem;
}

.links {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  overflow: visible;
  transition: transform 0.3s ease;
}
.links img {
  height: 1.5rem;
  margin: 5px;
}

.links img:hover {
  transform: scale(1.2);
}

@media screen and (max-width: 600px) {
  .main-container {
    margin: auto;
  }
  .project-card {
    width: 95%;
  }

  .project-card img {
    width: 95%;
    height: 95%;
  }

  .project-card:hover {
    transform: scale(1);
  }
}
</style>
