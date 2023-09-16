<template>
  <aside>
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
  min-height: 100vh;
  padding: 20px 10px;
  background-color: #2c3c4f;
  box-shadow: 3px 0px 8px rgb(17, 25, 34);
  text-align: right;

  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

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
</style>
