<!-- eslint-disable vue/singleline-html-element-content-newline -->
<template>
  <div class="about">
    <h1 class="typewriter">Hi, I'm <vue-typewriter-effect :strings="['Bruce Castro.', 'an Engineer.', 'a Team Lead.']" /></h1>
    <p>
      I'm a Full-Stack Engineer (PHP, Node.js and Vue.js) with 11 years of
      experience creating high-quality solutions for the web, and to support highly effective teams.
    </p>
    <p>
      My experience with PHP has been largely with Wordpress, developing features and plugins
      for production, high-revenue generating websites. On the other hand, Node.js has
      been at the forefront of various business-critical projects I have built on
      Serverless architecture (GCP). I also possess extensive Frontend experience with
      Javascript and jQuery, and more recently in Vue.js.
    </p>
    <p>
      Finally, I am familiar with scaling a development team, its resources and processes,
      as well as coordinating with other leaders. As a leader I care about the wellbeing
      of the team, believe in empathic communication, spend time to mentor others,
      take ownership of the projects I work on, foster innovation,
      and strongly support a healthy culture through encouraging feedback, clear communication,
      and positive relationships.
    </p>
    <p>
      I invite you to see my <NuxtLink to="/experience">experience</NuxtLink> in more detail,
      or explore a few recent <NuxtLink to="/projects">projects</NuxtLink>.
    </p>
  </div>
</template>

<style>
.about p {
  text-align: justify;
}

@media screen and (max-width:530px) {
  h1.typewriter {
    font-size:2.1em;
  }
}
</style>
