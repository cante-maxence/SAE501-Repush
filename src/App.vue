<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useGlobalStore } from '@/store/global'
import { onMounted } from 'vue';

// Accéder au store global
const globalStore = useGlobalStore()

onMounted(() => {
  const token = localStorage.getItem("token")
  globalStore.setToken(JSON.parse(token))
})
</script>

<template>
    <div class="">
      <div class="menu__wrapper">
        <div class="menu__bar">
          <div class="nav-but-wrap">
            <div class="logo-wrap">
              <a href="/" class="logo"><span>Tik</span>Tak : Origins</a>
            </div>
          </div>
          <img class="menu-icon" src="../public/burger-menu.svg" title='Burger Menu' alt='Burger Menu'
            @click="toggleMenu">
          <ul class="navigation">
            <li>
              <router-link to="/watch" @click="toggleMenu" title="Projets">
                Montre
              </router-link>
            </li>

            <li>
              <router-link to="/create" @click="toggleMenu" title="A propos">
                créer
              </router-link>
            </li>
            <li>
              <router-link to="/modify" @click="toggleMenu" title="Contact">
                Modify
              </router-link>
            </li>
            <li>
              <router-link to="/login" @click="toggleMenu" title="Contact">
                Login
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <RouterView />
    </div>
  <footer>

  </footer>
</template>

<style>
html, body {
  height: 100%;
  margin: 0;
}

.background {
  display: block;
  width: 100%;
  height: 100vh;
  background-image: url('background.png');
  opacity: 1;
  z-index: 1;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden; /* Ajoutez cette ligne pour activer le défilement si le contenu dépasse */
}


/* Styles pour le footer */



.footer {
  width: 100%;
  background-color: #000000;
  color: #ffffff;
  position: fixed;
  bottom: 0;
}





.footer h5 {
  font-weight: 500;
  margin-bottom: 28px;
  text-transform: capitalize;
  font-weight: 600;
  color: #fff;
  font-size: 21px
}



body {
  background-image: url(background.png);
  display: block;
  width: 100%;
  height: 100%;
  opacity: 1;
  z-index: 1;
  background-size: cover;
  background-repeat: no-repeat;
}







.logo-wrap {

  display: block;
  left: 0;
  right: 0;
  /* Ajoutez cette ligne pour centrer horizontalement */
  top: 0;
  bottom: 0;
  /* Ajoutez cette ligne pour centrer verticalement */
  margin: auto;
  /* Ajoutez cette ligne pour centrer horizontalement et verticalement */
  cursor: pointer;
}

.logo-wrap a {
  cursor: pointer;

  font-weight: 900;
  font-size: 20px;
  line-height: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #fff;
  transition: all 0.3s ease-out;
}

.logo-wrap a span {
  color: #df0000;
}

.logo-wrap a:hover {
  opacity: 0.9;
}

:root {
  --primary: #830000;
  --primary-hover: #e0dafd;
  --navbar-height: 60px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Poppins;
}

.menu__wrapper {
  display: flex;
  position: relative;
  flex-direction: row;
  z-index: 2;
}

.menu__bar {
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding-right: 24px;
  gap: 32px;
  background-color: var(--background);
  height: 60px;
  opacity: 0.9;
  background-color: black;
}

.menu-icon {
  cursor: pointer;
  display: flex;
  height: 32px;
  width: 32px;
}

.navigation {
  display: flex;
  flex-direction: row;
  list-style-type: none;
  align-items: center;
  gap: 24px;
  padding: 0px;
  background-color: var(--background);
}

.logo {
  margin-left: 30px;
  padding-top: 1rem;
  width: 32px;
  height: 32px;
  cursor: pointer;
}

.navigation>li {
  display: flex;
  position: relative;
  cursor: pointer;
  font-size: 1.25rem;
}

.navigation>li>a {
  color: white;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
  text-decoration: none;
  font-weight: 500;
  background-image: linear-gradient(to right,
      var(--primary-hover),
      var(--primary-hover) 50%,
      white 50%);
  background-size: 200% 100%;
  background-position: -100%;
  display: inline-block;
  padding: 3px 0;
  position: relative;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.2s ease-in-out;
}

.navigation>li>a:before {
  content: '';
  background: var(--primary-hover);
  display: block;
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  transition: all 0.2s ease-in-out;
}

.navigation>li>a:hover {
  background-position: 0;
}


.navigation>li>a:hover::before {
  width: 100%;
}

@media (min-width: 600px) {
  .menu-icon {
    display: none;
  }
}

@media (max-width: 600px) {

  .navigation {
    display: none;
  }

  .menu-icon {
    display: block;
  }

  .navigation--mobile {
    top: var(--navbar-height);
    position: absolute;
    right: 0px;
    display: flex;
    padding: 80px 60px;
    min-height: 100%;
    background-color: black;
    gap: 8px;
    flex-direction: column;
    align-items: flex-start;
    opacity: 0.95;
    animation: fadein 0.3s forwards;
  }

  @keyframes fadein {
    0% {
      opacity: 0;
      width: 0;
      height: 0;
    }

    100% {
      opacity: 1;
      width: 100%;
      height: calc(100vh - var(--navbar-height));
    }
  }

  .navigation--mobile--fadeout {
    animation: fadeout 300ms forwards;
  }

  @keyframes fadeout {
    0% {
      opacity: 1;
      width: 100%;
      height: calc(100vh - var(--navbar-height));
    }

    100% {
      opacity: 0;
      width: 0;
      height: 0;
    }
  }

}

/* test icon */
.social-media-buttons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  list-style: none;
}

.social-media-buttons li {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  cursor: pointer;
  display: grid;
  background-color: white;
  place-items: center;
  transition: all 0.3s;
  border: 1px solid red;
}

.social-media-buttons li a {
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  color: var(red);
}

.social-media-buttons li:hover {
  background-color: var(red);
  border: 1px solid var(white);
  border-radius: 8px;
}

.social-media-buttons li a svg {
  height: 24px;
  width: 24px;
  stroke: var(red);
  stroke-width: 1.75;
  transition: 0.8s;
}

.social-media-buttons li:hover svg {
  stroke: var(white);
  transform: rotateY(360deg);
  stroke-width: 1.75;
}



/* cursor */


</style>