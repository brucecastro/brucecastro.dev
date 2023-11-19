<template>
  <div>
    <h1><vue-typewriter-effect :strings="['Skills.']" :pause-for="8000" cursor="" /></h1>
    <ul class="skills">
      <li data-aos="zoom-out-up">
        <h3>Backend</h3>
        <p>
          4 years accumulating Node.js experience, solving business data visibility challenges.
          11 years mastering PHP, and developing plugins for Wordpress
          and productivity features for content managers.
        </p>
      </li>
      <li data-aos="zoom-out-up" data-aos-duration="400" data-aos-delay="100">
        <h3>Frontend</h3>
        <p>
          11 years creating with HTML, CSS3, and Javascript, delivering pixel-perfect,
          beautifully functional interfaces that users love to use, and also convert.
        </p>
      </li>
      <li data-aos="zoom-out-up" data-aos-duration="400" data-aos-delay="200">
        <h3>Solutions Architect</h3>
        <p>
          Passion for using technology to solve real-world problems. Asking thoughtful questions fuels my
          ability to identify opportunities, overcome challenges, and streamline business processes
          with a clear solution path.
        </p>
      </li>
      <li data-aos="zoom-out-up" data-aos-duration="400" data-aos-delay="300">
        <h3>Leadership</h3>
        <p>
          4 years building, and mentoring a team of Engineers, while supporting the growth of
          their individual and collective strengths.
          4 years creating synergies with fellow leaders, coordinating on various types of projects,
          and aligning priorities to achieve difficult goals.
        </p>
      </li>
      <li data-aos="zoom-out-up" data-aos-duration="400" data-aos-delay="400">
        <h3>Detail-oriented</h3>
        <p>
          Writing clean, testable code, and adhering to best practices as much as possible.
          Understanding the importance of well-written documentation to persist knowledge, and
          break down complexity for stakeholders.
        </p>
      </li>
      <li data-aos="zoom-out-up" data-aos-duration="400" data-aos-delay="500">
        <h3>Speed Optimization</h3>
        <p>
          Expert in all aspects of page speed performance and Core Web Vitals analysis and optimization.
          From caching and CDN configuration, all the way to asset bundling, and lazy-loading.
        </p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Skills'
})
</script>

<style>
ul.skills {
  box-sizing:content-box;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 0;
  list-style: none;
  gap: 20px;

  li {
    box-sizing: border-box;
    flex: 1 1 auto;
    padding: 20px 25px;
    border: 1px solid rgb(44, 57, 72);
    box-shadow: 1px 0px 1px 0px rgb(17, 25, 34);
    border-radius: 5px;
    background-color: #1a232f;
  }

  h3 {
    font-weight: 300;
    text-decoration: underline;
  }

  p {
    font-size: .95rem;
    text-align: justify;
  }
}
</style>
