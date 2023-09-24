<template>
  <div>
    <h1>Skills.</h1>
    <ul class="skills">
      <li>
        <h3>Backend</h3>
        <p>
          4 years accumulating Node.js experience, solving business data visibility challenges.
          11 years mastering PHP, developing plugins for Wordpress
          and productivity features for content managers.
        </p>
      </li>
      <li>
        <h3>Frontend</h3>
        <p>
          11 years creating with HTML, CSS3, and Javascript, delivering pixel-perfect,
          beautifully functional interfaces that users love to use, and also convert.
        </p>
      </li>
      <li>
        <h3>Solutions Architect</h3>
        <p>
          Passion for using technology to solve real-world problems. Asking thoughtful questions fuels my
          ability to identify opportunities, overcome challenges, and streamline business processes
          with a clear solution path.
        </p>
      </li>
      <li>
        <h3>Leadership</h3>
        <p>
          4 years building, and mentoring a team of Engineers, while supporting the growth of
          their individual and collective strengths.
          4 years creating synergies with fellow leaders, coordinating on various types of projects,
          and aligning priorities to achieve difficult goals.
        </p>
      </li>
      <li>
        <h3>Detail-oriented</h3>
        <p>
          Writing clean, testable code, and adhering to best practices as much as possible.
          Understanding the importance of well-written documentation to persist knowledge, and
          break down complexity for stakeholders.
        </p>
      </li>
      <li>
        <h3>Speed Optimization</h3>
        <p>
          Expert in all aspects of page speed performance analysis and optimization.
          From caching and CDN configuration, all the way to asset bundling, and lazy-loading.
        </p>
      </li>
    </ul>
  </div>
</template>

<style>
ul.skills {
  box-sizing:content-box;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0;
  list-style: none;
  gap: 20px;

  li {
    box-sizing: border-box;
    flex: 0 1 auto;
    min-width: 200px;
    padding: 20px 25px;
    background: radial-gradient(ellipse at 90% 90%, #283b4f 0%, #1d2733 60%);
    border: 1px solid rgb(44, 57, 72);
    box-shadow: 1px 0px 1px 0px rgb(17, 25, 34);
    border-radius: 10px;
  }

  h3 {
    font-weight: 300;
  }

  p {
    font-size: .9rem;
  }
}
</style>
