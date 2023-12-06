<script setup>
import { ref } from 'vue'

const about = ref('紹介の事・目的')
const purpose = ref(
  'どうしてイェール大学についてのツアーを作りましたか？イェール大学は世界的に有名な大学です。 個人的には、イェール大学は特に日本においてもっともっと世界的な活動を行うことができると信じています。 ということで、期末の発表はイェール大学を紹介する動画を作って、発表したいと思います。その上に、サイトも作りたいと思いました。'
)
</script>

<template>
  <section id="intro" class="-intro-container">
    <div class="-intro-wrapper -wpx">
      <div class="-intro-title">
        <h1 class="-abt-x">{{ about }}</h1>
      </div>
      <div class="-intro-x">
        <div class="y-gallery">
          <figure class="gallery-item gallery-item-1 -i1 -en-4" data-text="寮・Dorms"></figure>
          <figure
            class="gallery-item gallery-item-2 -i2 -en-4"
            data-text="食堂・Dining Halls"
          ></figure>
          <figure
            class="gallery-item gallery-item-3 -i3 -en-4"
            data-text="キャンパス・Campus"
          ></figure>
          <figure
            class="gallery-item gallery-item-4 -i4 -en-4"
            data-text="図書館・Libraries"
          ></figure>
          <figure class="gallery-item gallery-item-5 -i5 -en-4" data-text="空・Aerial"></figure>
        </div>
      </div>
      <div class="-intro-purpose">
        <p class="-p-x">{{ purpose }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.-intro-container {
  min-height: 100vh;
  padding: 2rem 0;
}

.-abt-x {
  font-size: 2rem;
  font-weight: 700;
  color: var(--y-blue);
}

.-intro-x {
  margin-top: 3rem;
}

.-intro-purpose {
  padding: 0.625rem 0;
}

.-p-x {
  font-size: 1.125rem;
}

.-i1 {
  --img: url('@/assets/images/intro/murr.jpg');
}

.-i2 {
  --img: url('@/assets/images/intro/commons.jpg');
}

.-i3 {
  --img: url('@/assets/images/intro/cc.jpg');
}

.-i4 {
  --img: url('@/assets/images/intro/lib.jpg');
}

.-i5 {
  --img: url('@/assets/images/intro/aerial.jpg');
}

.y-gallery {
  font-family: var(--nu);
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 1em;
  height: 500px;
  transition: all 400ms;
  padding-bottom: 2rem;
}

@media (hover: hover) {
  .y-gallery:hover .gallery-item {
    filter: grayscale(100%) opacity(24%);
  }

  .y-gallery .gallery-item:hover {
    filter: grayscale(0%) opacity(100%);
  }

  .y-gallery:has(.gallery-item-1:hover) {
    grid-template-columns: 3fr 1fr 1fr 1fr 1fr;
  }

  .y-gallery:has(.gallery-item-2:hover) {
    grid-template-columns: 1fr 3fr 1fr 1fr 1fr;
  }

  .y-gallery:has(.gallery-item-3:hover) {
    grid-template-columns: 1fr 1fr 3fr 1fr 1fr;
  }

  .y-gallery:has(.gallery-item-4:hover) {
    grid-template-columns: 1fr 1fr 1fr 3fr 1fr;
  }

  .y-gallery:has(.gallery-item-5:hover) {
    grid-template-columns: 1fr 1fr 1fr 1fr 3fr;
  }

  .gallery-item:hover::after {
    transform: translateY(0);
    opacity: 1;
    transition-delay: 400ms;
  }
}

.gallery-item {
  position: relative;
  background: var(--img) center center;
  background-size: cover;
  transition: all 400ms;
  display: flex;
  justify-content: center;
  align-items: center;
}

.gallery-item:nth-child(odd) {
  transform: translateY(-16px);
}

.gallery-item:nth-child(even) {
  transform: translateY(16px);
}

.gallery-item::after {
  content: attr(data-text);
  font-size: 1rem;
  position: absolute;
  bottom: 20px;
  background: var(--y-blue);
  color: var(--wh-ite);
  padding: 10px 10px 10px 14px;
  letter-spacing: 4px;
  text-transform: uppercase;
  transform: translateY(60px);
  opacity: 0;
  transition: all 400ms;
}
</style>
