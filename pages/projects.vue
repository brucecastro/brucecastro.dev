<template>
  <div>
    <h1><vue-typewriter-effect :strings="['Projects.']" :pause-for="8000" cursor="" /></h1>
    <ul class="projects">
      <li>
        <h3><a href="https://github.com/brucecastro/debt-planner-api">debt-planner</a></h3>
        <p>
          A Node.js API that calculates a highly-optimized payment schedule for multiple debts.
          Implemented with AWS CDK to define infrastructure as code.
        </p>
      </li>
      <li>
        <h3><a href="https://github.com/brucecastro/nuxt-starter">nuxt-starter</a></h3>
        <p>
          A custom Nuxt 3 starter template that explores fetching data from a Headless Wordpress backend,
          querying Advanced Custom Fields, and deploying statically to Cloudflare Pages.
        </p>
      </li>
      <li>
        <h3><a href="https://github.com/brucecastro/brucecastro.dev">brucecastro.dev</a></h3>
        <p>This website, built in Nuxt 3.</p>
      </li>
    </ul>
    <p class="notice">
      A few other private projects are available, please reach out to review.
    </p>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Projects'
})
</script>

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

.notice {
  margin-top:50px;
  font-family: inherit;
  font-size: 1rem;
  text-align: center;
}
</style>
