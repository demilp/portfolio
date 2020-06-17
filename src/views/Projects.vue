<template>
  <div>
    <section class="hero is-medium is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-2">
            Some of the projects that I have built
          </h1>
        </div>
      </div>
    </section>
    <section v-masonry>
      <div
        v-masonry-tile
        class="is-one-fifth post"
        v-for="(project, i) in projects"
        :key="i"
      >
        <post-card v-bind="project"></post-card>
      </div>
    </section>
  </div>
</template>

<style type="text/css"></style>

<script>
import ProjectsService from "@/services/ProjectsService";
import PostCard from "@/components/PostCard";
export default {
  name: "projects",
  components: {
    PostCard,
  },
  data() {
    return {
      airtableResponse: [],
    };
  },
  mounted: function() {
    let self = this;
    async function getProjects() {
      try {
        const response = await ProjectsService.getProjects();
        console.log(response);
        self.airtableResponse = response.data.records;
      } catch (err) {
        console.log(err);
      }
    }
    getProjects();
  },
  computed: {
    projects() {
      let self = this;
      let projectList = [];
      for (var i = 0; i < self.airtableResponse.length; i++) {
        if (self.airtableResponse[i].fields.Published) {
          let project = {
            title: self.airtableResponse[i].fields.Title,
            date: self.airtableResponse[i].fields["Date Published"],
            snippet: self.airtableResponse[i].fields.Excerpt,
            image: self.airtableResponse[i].fields.Image
              ? self.airtableResponse[i].fields.Image[0].url
              : "",
            slug: self.airtableResponse[i].fields.slug,
          };
          projectList.push(project);
        }
      }
      return projectList;
    },
  },
};
</script>
<style scoped>
.post {
  width: 20%;
  box-sizing: border-box;
  padding: 1vw;
}
</style>
