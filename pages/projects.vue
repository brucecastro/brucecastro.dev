<template>
  <div>
    <ul class="projects">
      <li>
        <h3><a href="https://github.com/brucecastro/consolidate-stats">consolidate-stats</a></h3>
        <p>
          Node.js Cloud Function that fetches key statistics from multiple sources in various formats,
          normalizes the data, and stores it in BigQuery.
        </p>
      </li>
      <li>
        <h3><a href="https://github.com/brucecastro/debtplanner-api">Debt Planner</a></h3>
        <p>
          Node.js API that calculates a highly-optimized payment schedule for multiple debts.
          Implemented with AWS CDK to define infrastructure as code.
        </p>
      </li>
      <li>
        <h3><a href="https://github.com/brucecastro/brucecastro.dev">brucecastro.dev</a></h3>
        <p>This website, proudly built with Nuxt.</p>
      </li>
    </ul>
  </div>
</template>

<style>
ul.projects {
  box-sizing:content-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0;
  gap:20px;
  list-style: none;

  li {
    box-sizing: border-box;
    flex: 1 0 auto;
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
