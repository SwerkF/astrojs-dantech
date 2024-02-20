<template>
  <div class="relative overflow-hidden z-0">
    <div class="falling-images">
      <img
        v-for="i in screenlen"
        :key="i"
        :src="getRandomImage()"
        :style="{ animationDuration: `${generateRandomNumber()}s`}"
        class="falling-image"
      />
    </div>

    <div class="flex justify-center flex-col">
      <div class="hero min-h-screen hero-land">
        <div class="hero-content text-center">
          <div class="max-w-xl">
            <h1 class="lg:text-9xl text-7xl font-bold">OLIWER </h1>
            <span class="lg:text-9xl text-7xl font-bold title-blur">SKWERES</span>
            <p class="py-6 lg:text-2xl">Développeur Web Full Stack & Dev Ops</p>
            <div class="flex justify-center">
              <router-link to="/about" class="btn btn-primary btn-wide lg:text-xl">En savoir plus</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import svg1 from '../assets/1.svg';
import svg2 from '../assets/2.svg';
import svg3 from '../assets/3.svg';
import svg4 from '../assets/4.svg';
import svg5 from '../assets/5.svg';
import svg6 from '../assets/6.svg';
import svg7 from '../assets/7.svg';
import svg8 from '../assets/8.svg';
import svg9 from '../assets/9.svg';
import svg10 from '../assets/10.svg';
import svg11 from '../assets/11.svg';
import svg12 from '../assets/12.svg';
import svg13 from '../assets/13.svg';

const images = [
    svg1, svg2, svg3, svg4, svg5,
    svg6, svg7, svg8, svg9, svg10,
    svg11, svg12, svg13,
];

const screenlen = ref(100);

const getRandomImage = () => {
  return images[Math.floor(Math.random() * images.length)];
};

const generateRandomNumber = () => {
  return Math.random() * (1.4 - 3.8) + 4;
};

onMounted(() => {
  updateKeyframes();
  window.addEventListener('resize', updateKeyframes);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateKeyframes);
});

function updateKeyframes() {
  const fallingImages = document.querySelector('.falling-images');
  const containerHeight = fallingImages!.clientHeight;

  const keyframes = `@keyframes fall {
      0% {
          transform: translateY(-200%) rotate(0deg);
          filter: blur(0px);
      }
      70% {
          filter: blur(0px);
      }
      90% {
          opacity: 1;
      }
      100% {
          transform: translateY(${containerHeight - 100}px) rotate(360deg);
          filter: blur(10px);
          opacity: 0;
      }
  }`;

  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

  // Add animation classes to each image
  const images = Array.from(document.querySelectorAll('.falling-image'));
  images.forEach(image => {
    image.classList.add('fall');
  });
}
</script>


<style>
.falling-images {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
}

.falling-image {
  width: 45px;
  margin: 0 10px;
  filter: blur(0px);
  animation: fall linear infinite;
}

.title {
  font-size: 80px;
}

@keyframes gradientAnimation {
  0% { background-position: 0% 50% }
  100% { background-position: 150% 50% }
}

.title-blur {
  position: relative;
  background: linear-gradient(90deg, #7dd3fc, #bef264, #7dd3fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientAnimation 5s infinite; /* Adjust the duration and other properties as needed */
  background-size: 100vw auto;
}

.title-blur::before {
  content: 'SKWERES';
  position: absolute;
  filter: blur(30px);
  background: linear-gradient(90deg, #7dd4fc5a, #bef26452, #7dd4fc7b);
  background-size: 100vw auto;
  animation: gradientAnimation 5s infinite;
}

</style>
