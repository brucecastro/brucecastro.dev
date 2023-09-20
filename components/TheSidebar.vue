<template>
  <aside>
    <div class="brand">brucecastro.dev</div>
    <nav>
      <ul>
        <li>
          <NuxtLink to="/">
            About
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/skills">
            Skills
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/experience">
            Experience
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact">
            Contact
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<style scoped>
aside {
  position:relative;
  padding: 20px 10px;
  background-color: #2c3c4f;
  box-shadow: 1px 0px 4px 1px rgb(17, 25, 34);
  text-align: right;

  .hamburger-menu {
    display: none;
  }

  .brand {
    bottom:0;
    font-family: Sora, Arial, sans-serif;
    font-size: 1.2rem;
    color:#7f93aa;
    text-align:center;
  }

  nav {
    display: flex;
    flex-direction: column;
    justify-content:center;
    height: 100vh;

    ul {
      list-style-type: none;
      font-family: Poppins, Arial, Helvetica, sans-serif;
      text-transform: uppercase;
      letter-spacing: 3px;
      font-size: 0.9rem;
    }

    li {
      margin: 20px 0;
    }
  }
}

@media screen and (max-width:740px) {
  aside {
    height:30px;

    .brand {
      line-height: 30px;
    }

    nav {
      display: none;
      height:auto;
      flex-direction: row;
    }
  }
}

</style>
