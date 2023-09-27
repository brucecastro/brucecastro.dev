<template>
  <div class="layout default">
    <Head>
      <Meta name="robots" content="noindex" />
    </Head>
    <TheSidebar class="sidebar" />
    <div id="main">
      <slot />
    </div>
    <TheFooter class="footer" />
  </div>
</template>

<script setup lang="ts">

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `Bruce Castro - ${titleChunk}` : 'Bruce Castro'
  }
})
</script>

<style>
.layout.default {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
  margin: 0 auto;
}

#main {
  flex: 1;
  width: 70%;
  max-width: 600px;
  padding: 5rem 3rem;
}

.footer {
  width: 100%;
  z-index: 2;
}

@media screen and (max-width:740px) {
  .layout.default {
    flex-direction: column;
  }

  #main {
    max-width: none;
    padding: 100px 20px 20px;
  }

  #main {
    width: auto;
  }
  .footer {
    margin-top:auto;
    z-index:0;
  }
}

</style>
