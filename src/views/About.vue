<template>
  <div>
    <section class="hero is-medium is-primary is-bold">
      <div class="hero-body">
        <div class="container about">
          <h1 class="title is-2">
            Meet Demián
          </h1>
          <figure class="image is-256x256" style="max-width: 256px;">
            <img class="is-rounded" src="../assets/profile.jpeg" />
          </figure>
        </div>
      </div>
    </section>
    <section class="section">
      <h2 class="title is-3 has-text-weight-medium has-text-centered">
        What I Bring
      </h2>
      <div class="container">
        <div class="columns">
          <div class="column">
            <div class="box">
              <h3 class="title is-4 has-text-weight-medium">
                Front End Focus
              </h3>
              <p>
                Focused on building user interfaces with JS (Vue, React, ES6),
                HTML, and CSS that are well designed and functional.
              </p>
            </div>
          </div>
          <div class="column">
            <div class="box">
              <h3 class="title is-4 has-text-weight-medium">
                Full Stack Experience
              </h3>
              <p>
                Experience working across the application stack using APIs,
                Node, Mongo, Heroku, ASP.NET, SQL Server and IIS to deliver
                production applications from design to deployment.
              </p>
            </div>
          </div>
          <div class="column">
            <div class="box">
              <h3 class="title is-4 has-text-weight-medium">
                Broad Customer Focused Experience
              </h3>
              <p>
                5 years of experience developing interactive experiences + 2
                years of experience developing a digital signage platform to
                help brands reach their audience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section has-background-light">
      <h2 class="title is-3 has-text-weight-medium has-text-centered">
        Where I Come From
      </h2>
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-four-fifths">
            <p>
              In 2015 I joined SIA Interactive, where I developed over hundreds
              of interactive experiences and R+D projects from begining to end,
              using a broad variety of technologies and devices like DSLR
              cameras, NFC and RFID tags, Kinect sensors, fingerprint readers,
              handheld devices, VR headsets and more. I learned to work under
              high pressure on a fast-paced environment as most projects are
              confirmed by the client one or two weeks before delivery time, and
              are subject to last minute changes on the client's demand. Because
              of this, I designed and developed diverse reusable modular systems
              that minimized developement time by over 50%, as well as the
              server that connects them all. This whole system consisting of
              modular clients allowed the company to sell projects with a higher
              added value that couldn't have been done before.<br />
              In 2017 I changed from the interactive experiences development
              area to Dex Manager, a digital signage platform that runs on
              Android, Chrome, Tizen and WebOs with a single JavaScript
              codebase. It was there that I learned how to work on a large scale
              project with long term support while designing the architecture of
              new features.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <h2 class="title is-3 has-text-weight-medium has-text-centered">
        Technologies I've Worked With
      </h2>
      <div class="container">
        <div class="columns is-centered">
          <Tech
            title="Vue.js"
            snippet="Full production applications written in Vue"
            image="vue-logo.png"
          />
          <Tech
            title="JavaScript"
            snippet="Proficient in ES6 and ES5 JS"
            image="js-logo.png"
          />
          <Tech
            title="Node.js"
            snippet="Back-ends written using Node and Express"
            image="node-logo.png"
          />
          <Tech
            title="Cordova"
            snippet="Mobile applications built with Cordova"
            image="cordova-logo.png"
          />
        </div>
        <div class="columns is-centered">
          <Tech
            title="Unity3d"
            snippet="Games and interactive experiences developed using Unity3D"
            image="unity-logo.png"
          />
          <Tech
            title="ASP.NET"
            snippet="Services and tools built with ASP.NET and .NET"
            image="asp-logo.png"
          />
          <Tech
            title="React.js"
            snippet="Web templates written in React"
            image="react-logo.png"
          />
          <Tech
            title="Tensorflow"
            snippet="Machine learning models build with Tensorflow"
            image="tensorflow-logo.png"
          />
        </div>
        <p
          class="tech-box-title title is-4 has-text-weight-light has-text-centered"
        >
          Web API's • Mongodb • Angular • Machine Learning • SQL Server • Git •
          Webpack • Entity Framework • jQuery • Photoshop • 3ds Max
        </p>
      </div>
    </section>
    <section class="section has-background-light">
      <h2 class="title is-3 has-text-weight-medium has-text-centered">
        What Drives Me
      </h2>
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-half content">
            <ul>
              <li>
                <Strong>An innate desire to learn:</Strong>
                Through the years I've been passionate about learning new
                technologies and being able to develop full-fledged applications
                from begining to end.
              </li>
              <li>
                <Strong>A passion for automatization:</Strong> Many of the
                projects that I am most proud of, are tools that can help a team
                focus on the most important parts of a development by automating
                repetitive tasks.
              </li>
              <li>
                <Strong>Always creating:</Strong> I believe that the best way of
                learning is by doing. Prototyping a proof of concept, failing
                fast if necessary and iterating even faster.
              </li>
              <li>
                <Strong>Being surrounded by great people:</Strong> I consider it
                essential to be able to work with a passionate, skilled and
                reliable group of people.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style type="text/css" scoped>
.box {
  height: 100%;
}
.tech-box-title {
  margin-top: 1.5rem;
}
.container.about {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
@media screen and (max-width: 768px) {
  .container.about {
    flex-direction: column;
  }
}
</style>

<script>
import Tech from "@/components/Tech";

export default {
  name: "about",
  components: {
    Tech
  }
};
</script>
