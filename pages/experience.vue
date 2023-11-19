<!-- eslint-disable vue/singleline-html-element-content-newline -->
<template>
  <div class="experience">
    <h1><vue-typewriter-effect :strings="['Experience.']" :pause-for="8000" cursor="" /></h1>
    <h2>Generous Industries</h2>
    <div class="subtitle"><span>Senior Full-Stack Engineer</span><span>Dec 2022 - Jul 2023</span></div>
    <ul>
      <li>Technical oversight of a development agency for a SaaS in the finance industry</li>
      <li>Development of serverless data pipelines (Node.js, GCP)</li>
      <li>Implementation of the marketing website on Wordpress (PHP, Javascript, Tailwind)</li>
    </ul>
    <h2>Born Again Media</h2>
    <div class="subtitle"><span>Tech Lead</span><span>2016 - 2022</span></div>
    <ul>
      <li>In charge of the production environment for Wordpress sites generating +$10m in revenue</li>
      <li>Design and implement business-critical tools for financial visibility, and other key-metric data tracking (Node.js, Vue)</li>
      <li>Scale the development team from 1 to 4 engineers, mentoring and leading with empathy and honest feedback</li>
      <li>Project planning, coordination, and reporting with stakeholders of various levels of technical knowledge</li>
    </ul>
    <div class="subtitle"><span>Senior Full-Stack Engineer</span><span>2016 - 2018</span></div>
    <ul>
      <li>Full-stack development of Wordpress plugins and website features (PHP, Javascript and SASS)</li>
    </ul>
    <h2>Leadvia</h2>
    <div class="subtitle"><span>Senior Full-Stack Engineer</span><span>2011 - 2016</span></div>
    <ul>
      <li>Full-stack development and DevOps for 5 Wordpress sites (EC2, PHP, Javascript, SASS)</li>
      <li>Full-stack development of a Magento e-commerce platform</li>
      <li>Development of 2 iOS apps for online marketplaces (Objective-C)</li>
    </ul>

    <p class="notice">This is just a brief overview. Please reach out for the complete resume.</p>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Experience'
})
</script>

<style>
.experience {
  p, ul {
    font-family: Garamond, 'Times New Roman', Times, serif;
    font-size: 1.1rem;
    line-height: 1.4;
  }

  h2, h3 {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: 400;
  }

  h2 {
    padding-bottom:5px;
    border-bottom: 1px solid #ccc;
  }

  .subtitle {
    display: flex;
    justify-content: space-between;
    color:#919191;
    font-size: .9rem;
  }

  ul {
    list-style-type: square;
    margin-bottom: 45px;
  }

  li {
    margin-bottom: 5px;
  }

  .notice {
    margin-top:50px;
    font-family: inherit;
    font-size: 1rem;
    text-align: center;
  }
}
</style>
