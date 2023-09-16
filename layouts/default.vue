<template>
  <div class="layout default">
    <TheSidebar class="sidebar" />
    <div id="main">
      <slot />
    </div>
    <TheFooter class="footer" />
  </div>
</template>

<style>
.layout.default {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
}

.sidebar {
  position: relative;
  flex-shrink: 0;
  width: 30%;
  z-index: 1;
}

#main {
  flex: 1;
  width: 70%;
  padding: 6rem 3rem;
}

.footer {
  width: 100%;
  z-index: 2;
}
</style>
