<template>
  <div :class="['menu', {active}]">
    <div class="menu-btn" @click="toggleMenu">
      <span>&nbsp;</span>
    </div>
    <nav class="menu-items">
      <ul @click="closeMenu">
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
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: false
    }
  },
  methods: {
    toggleMenu () {
      this.active = !this.active
    },
    closeMenu () {
      this.active = false
    }
  }
}
</script>

<style scoped>

.menu {
  user-select: none;
}

.menu-items {
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

.menu-btn {
  display: none;
}

@media screen and (max-width:740px) {

  .menu-items {
    position:absolute;
    top:0;
    left:0;
    width: 50%;
    flex-direction: row;
    padding-top:50px;
    background-color: #1b2b3e;
    box-shadow: 1px 0px 4px 1px rgb(17, 25, 34);
    transform: translate(-150%);
    transition: transform 0.5s ease-in-out;
  }

  .active .menu-items {
    position: fixed;
    display: flex;
    left: 0;
    transform: translateX(0);
  }

  .menu-btn {
    display: block;
    position: absolute;
    top:22px;
    left:2rem;
    width: 32px;
    height: 30px;
    cursor: pointer;
    z-index: 2;
  }

  .menu-btn > span,
  .menu-btn > span::before,
  .menu-btn > span::after {
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #ccc;
    transition-duration: .25s;
  }
  .menu-btn > span::before {
    content: '';
    top: 11px;
  }
  .menu-btn > span::after {
    content: '';
    top: 22px;
  }

  .active .menu-btn {
    position: fixed;
  }
  .active .menu-btn > span {
    top:11px;
    transform: rotate(45deg);
  }
  .active .menu-btn > span::before {
    top: 0px;
    transform: rotate(0deg);
  }
  .active .menu-btn > span::after {
    top:0px;
    transform: rotate(90deg);
  }
}
</style>
