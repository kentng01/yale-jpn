<script>
import { useLanguageStore } from '../stores/languageStore'
export default {
  setup() {
    const languageStore = useLanguageStore()

    return {
      language: languageStore
    }
  }
}
</script>

<template>
  <section id="intro" class="intro-body -wpx">
    <div class="intro-wrapper">
      <div class="intro-title">
        <h1 class="intro-head -jp-b" v-if="language.currLanguage === 'jp'">紹介の事</h1>
        <h1 class="intro-head -en-7" v-else>INTRODUCTION</h1>
      </div>
      <div class="intro-cc">
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
      <div class="intro-blurb">
        <div class="blurb-wrapper">
          <p class="-blurb -jp" v-if="language.currLanguage === 'jp'">
            <span class="-jp-b">目的：</span>
            イェール大学は世界的に有名な大学です。
            僕達の個人的には、イェール大学は特に日本においてもっと世界的な活動を行うことができると信じています。
            ということで、期末の発表はイェール大学を紹介する動画を作って、発表したいと思います。
          </p>
          <p class="-blurb -en" v-else>
            <span class="-en-6">Purpose: </span>
            Yale University is a world-renown institution. However, we personally believe that Yale
            can still do more in respect to international outreach, particularly in Japan. Hence,
            for our final project presentation, we have elected to create a video touring Yale
            University in Japanese.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.-i1 {
  --img: url('@/assets/images/intro/murray.jpg');
}

.-i2 {
  --img: url('@/assets/images/intro/commons.jpg');
}

.-i3 {
  --img: url('@/assets/images/intro/ccampus.jpg');
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

.y-gallery:hover .gallery-item {
  filter: grayscale(100%) opacity(24%);
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
  color: #fff;
  padding: 10px 10px 10px 14px;
  letter-spacing: 4px;
  text-transform: uppercase;
  transform: translateY(60px);
  opacity: 0;
  transition: all 400ms;
}

.gallery-item:hover::after {
  transform: translateY(0);
  opacity: 1;
  transition-delay: 400ms;
}

.intro-body {
  min-height: 100vh;
}

.intro-wrapper {
  max-width: 768px;
  margin: 0 auto;
  padding-bottom: 10rem;
}

.intro-title {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 4rem;
}

.intro-head {
  font-size: 2rem;
}

.intro-cc {
  margin-top: 4rem;
}

.intro-blurb {
  margin: 1.75rem 0 0 0;
}

.blurb-wrapper {
  padding: 0 0 0 1rem;
  border-left: solid 6px var(--y-blue);
}

.-blurb {
  font-size: 1.375rem;
}
</style>
