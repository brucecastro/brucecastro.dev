<!-- eslint-disable vue/singleline-html-element-content-newline -->
<template>
  <div class="experience">
    <h1>Experience.</h1>
    <h2>Generous Industries</h2>
    <div class="subtitle"><span>Senior Full-Stack Engineer</span><span>Dec 2022 - Jul 2023</span></div>
    <ul>
      <li>Technical Oversight</li>
      <li>Node.js GCP serverless data pipelines</li>
      <li>Rebuild site in Wordpress</li>
    </ul>
    <h2>Born Again Media</h2>
    <div class="subtitle"><span>Tech Lead</span><span>2016 - 2022</span></div>
    <ul>
      <li>In charge of production environment</li>
    </ul>
    <div class="subtitle"><span>Senior Full-Stack Engineer</span><span>2016 - 2018</span></div>
    <ul>
      <li>In charge of production environment</li>
    </ul>
    <h2>Leadvia</h2>
    <div class="subtitle"><span>Senior Full-Stack Engineer</span><span>2011 - 2016</span></div>
    <ul>
      <li>Wordpress plugin development</li>
      <li>Site feature development</li>
    </ul>
  </div>
</template>

<style>
.experience {
  p, ul {
    font-family: Garamond, 'Times New Roman', Times, serif;
    letter-spacing: .3px;
  }

  h2, h3 {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: 400;
  }

  h2 {
    padding:15px 0 5px;
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
  }
}
</style>
