<template>
  <aside>
    <div class="brand">
      <NuxtLink to="/">
        brucecastro.dev
      </NuxtLink>
    </div>
    <Menu />
  </aside>
</template>

<style scoped>

aside {
  position:relative;
  width: 30%;
  padding: 20px 10px;
  background-color: #1b2b3e;
  box-shadow: 1px 0px 4px 1px rgb(17, 25, 34);
  text-align: right;
  z-index: 1;

  .brand {
    font-family: Sora, Arial, sans-serif;
    letter-spacing: 1px;
    user-select: none;
  }

  .brand a {
    color:#7f93aa;
  }

  .brand a:hover,
  .brand a:focus {
    color: #95b8d2;
  }

}

@media screen and (max-width:740px) {

  aside {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 30px;
    width: auto;

    .brand {
      line-height: 30px;
    }
  }
}

</style>
