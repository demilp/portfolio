<template>
  <div>
    <section class="hero is-medium is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-2" v-if="project">
            {{ project.title }}
          </h1>
          <h2 class="subtitle is-4" v-if="project">
            {{ project.snippet }}
          </h2>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container is-fluid">
        <div class="columns">
          <div class="column is-two-thirds" v-if="project">
            <vue-simple-markdown :source="project.body"></vue-simple-markdown>
          </div>
          <div class="column is-one-third">
            <div class="columns is-multiline" v-if="project">
              <div
                class="column is-full"
                v-for="(image, i) in project.images"
                :key="i"
              >
                <img :src="image.url" />
              </div>
            </div>
          </div>
        </div>
        <div class="video-container" v-if="project && project.video">
          <iframe
            width="853"
            height="480"
            :src="project.video"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ProjectsService from "@/services/ProjectsService";
export default {
  name: "project",
  data() {
    return {
      airtableResponse: []
    };
  },
  mounted: function() {
    let self = this;
    async function getProject() {
      try {
        const response = await ProjectsService.getProject(
          self.$route.params.slug
        );
        console.log(response);
        self.airtableResponse = response.data.records;
      } catch (err) {
        console.log(err);
      }
    }
    getProject();
  },
  computed: {
    project() {
      let self = this;
      if (self.airtableResponse[0]) {
        let thisProject = {
          title: self.airtableResponse[0].fields.Title,
          snippet: self.airtableResponse[0].fields.Excerpt,
          images: self.airtableResponse[0].fields.Image,
          body: self.airtableResponse[0].fields.Body,
          video: self.airtableResponse[0].fields.Video
        };
        return thisProject;
      }
      return null;
    }
  }
};
</script>
<style scoped>
.video-container {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
}

.video-container iframe,
.video-container object,
.video-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
