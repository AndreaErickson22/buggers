<template>
  <div id="app">
    <div id="nav" class="col d-flex justify-content-center">
      <!-- Image and text -->
      <nav class="navbar fixed-top navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <div class="row d-flex justify-content-center">
            <img
              src="./assets/bugsbee-8.png"
              width="40"
              height="40"
              class="d-inline-block align-top ml-4"
              alt
            >
            <img
              src="./assets/bugsbutterfly-8.png"
              width="40"
              height="40"
              class="d-inline-block align-top ml-4"
              alt
            >
            <img
              src="./assets/bugsladybug-8.png"
              width="40"
              height="40"
              class="d-inline-block align-top mr-4 ml-4"
              alt
            >
            <h3 class="mt-1 font-weight-bold">Bug Log List Application</h3>
            <img
              src="./assets/bugsladybug-8.png"
              width="40"
              height="40"
              class="d-inline-block align-top ml-4 mr-4"
              alt
            >
            <img
              src="./assets/bugsbutterfly-8.png"
              width="40"
              height="40"
              class="d-inline-block align-top mr-4"
              alt
            >
            <img
              src="./assets/bugsbee-8.png"
              width="40"
              height="40"
              class="d-inline-block align-top mr-4"
              alt
            >
          </div>
        </a>
      </nav>
    </div>
    <div id="clickers" class="row">
      <div class="col justify-content-center">
        <router-link to="/">Home</router-link>|
        <router-link to="/details">Details</router-link>
        <router-view/>
      </div>
    </div>
  </div>
</template>

<style>
img {
  border-radius: 50%;
  -webkit-transition: -webkit-transform 0.8s ease-in-out;
  transition: transform 0.8s ease-in-out;
}
img:hover {
  -webkit-transform: rotate(360deg);
  transform: rotate(360deg);
}

#app {
  font-family: "BenchNine", sans-serif;
  font-weight: 500;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  justify-content: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  width: 100%;
  overflow: hidden;
  justify-content: center;
}

#nav a {
  font-weight: 500;
  font-weight: bold;
  color: #171311;
  background-color: #16d1e6;
  width: 100%;
  justify-content: center;
  padding: -10;
  /* padding-left: 100px;
  padding-right: 100px; */
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#clickers {
  margin-top: 10px;
  /* margin-bottom: 20px; */
  color: #16d1e6;
  font-family: "BenchNine", sans-serif, bold;
  justify-content: center;
}
h3 {
  margin-left: 10px;
  margin-right: 10px;
}
</style>
