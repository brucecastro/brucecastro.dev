<template>
  <div>
    <h1>Skills.</h1>
    <ul class="skills">
      <li>
        <h3>Backend Engineer</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor ullamcorper ipsum non fringilla.</p>
      </li>
      <li>
        <h3>Full-stack Engineer</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor ullamcorper ipsum non fringilla.</p>
      </li>
      <li>
        <h3>Leader</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor ullamcorper ipsum non fringilla.</p>
      </li>
      <li>
        <h3>Detail-oriented</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor ullamcorper ipsum non fringilla.</p>
      </li>
      <li>
        <h3>Solutions Architect</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor ullamcorper ipsum non fringilla.</p>
      </li>
      <li>
        <h3>Website Optimization</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor ullamcorper ipsum non fringilla.</p>
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
