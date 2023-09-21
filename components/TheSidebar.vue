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
  padding: 20px 10px;
  background-color: #1b2b3e;
  box-shadow: 1px 0px 4px 1px rgb(17, 25, 34);
  text-align: right;

  .brand {
    font-family: Sora, Arial, sans-serif;
    text-transform: uppercase;
    font-size: 1.1rem;
    letter-spacing: 1px;
    text-align:center;
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
    height:30px;

    .brand {
      line-height: 30px;
    }
  }
}

</style>
