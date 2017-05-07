<template>
  <nav class="nav-extended light-blue darken-3">
    <div class="nav-wrapper">
      <a href="/" class="brand-logo">ProjectHub</a>
    </div>
    <div class="nav-content">
      <ul class="tabs tabs-transparent">
        <li href="/" class="tab active"><a>Główna</a></li>
        <li href="/projects" class="tab"><a>Projekty</a></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
  .tab {
    transition: background-color .5s ease-in-out;
  }
  .tab:hover {
    background-color: #1d4b6d;
    transition: background-color .5s ease-in-out;
  }
  .tab a {
    text-decoration: none;
  }
  .brand-logo {
    padding: 0 1.5rem;
    transition: color 1s ease-in-out;
  }
  .brand-logo:hover {
    text-decoration: none;
    color: #1d4b6d;
    transition: color .5s ease-in-out;
  }
</style>
