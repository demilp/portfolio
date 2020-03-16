<template>
  <div class="column is-one-fifth">
    <div class="box">
      <figure class="image is-square">
        <img :src="require(`../assets/${image}`)" alt="Placeholder image" />
      </figure>
      <h3
        class="tech-box-title title is-4 has-text-weight-medium has-text-centered"
      >
        {{ title }}
      </h3>
      <p>
        {{ snippet }}
      </p>
    </div>
  </div>
</template>

<style type="text/css">
.box {
  height: 100%;
}
.tech-box-title {
  margin-top: 1.5rem;
}
</style>
<script>
export default {
  name: "Tech",
  props: {
    title: String,
    snippet: String,
    image: String
  }
};
</script>
