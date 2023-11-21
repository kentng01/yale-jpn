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
  <section id="creators" class="crt-creds">
    <div class="crt-wrapper">
      <div class="crt-head">
        <h1 class="crt-title -jp-b" v-if="language.currLanguage === 'jp'">僕達</h1>
        <h1 class="crt-title -en-7" v-else>CREATORS</h1>
      </div>
      <div class="crt-cards">
        <div class="card-item">
          <div class="card-pic -p1">
            <img src="@/assets/images/creators/ken.jpeg" class="-pfp" alt="KT" />
          </div>
          <h3 class="card-name -jp-b" v-if="language.currLanguage === 'jp'">トウ<br />ケニー</h3>
          <h3 class="card-name -en-6" v-else>Kenny<br />'26</h3>
          <div class="card-bio">
            <p class="-bio -jp" v-if="language.currLanguage === 'jp'">ウェブマスター</p>
            <p class="-bio -en-4" v-else>Webmaster</p>
            <p class="-bio -jp" v-if="language.currLanguage === 'jp'">設計者</p>
            <p class="-bio -en-4" v-else>UI/UX Designer</p>
          </div>
        </div>
        <div class="card-item">
          <div class="card-pic -p2">
            <img src="@/assets/images/creators/darw.png" class="-pfp" alt="DC" />
          </div>
          <h3 class="card-name -jp-b" v-if="language.currLanguage === 'jp'">
            クルーズ <br />
            ダーウィン
          </h3>
          <h3 class="card-name -en-6" v-else>Darwin<br />'26</h3>
          <div class="card-bio">
            <p class="-bio -jp" v-if="language.currLanguage === 'jp'">ビデオグラファー</p>
            <p class="-bio -en-4" v-else>Videographer</p>
            <p class="-bio -jp" v-if="language.currLanguage === 'jp'">編集者</p>
            <p class="-bio -en-4" v-else>Editor</p>
          </div>
        </div>
      </div>
      <div class="crt-collabs">
        <div class="collab-wrap">
          <div class="collab-dets">
            <p class="collab-blurb -jp" v-if="language.currLanguage === 'jp'">
              この授業の為に、一緒に研究をしたり脚本を書いたり動画を作ったりしました。
            </p>
            <p class="collab-blurb -en" v-else>
              We collaboratively researched Yale, wrote the script, and created the video.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.crt-wrapper {
  max-width: 768px;
  margin: 0 auto;
}

.crt-creds {
  min-height: 100vh;
  background-image: linear-gradient(rgba(0, 53, 107, 0.7), rgba(0, 53, 107, 0.7)),
    url('@/assets/images/creators/umeda.jpeg');
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: cover;
  background-position: center;
}

.crt-head {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;
}

.crt-title {
  font-size: 2rem;
  color: #fff;
}

.crt-cards {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  margin-top: 3rem;
}

.card-item {
  padding: 1rem;
  width: 17rem;
  height: 23rem;
  background: var(--y-blue);
  border-radius: 5px;
  text-align: center;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.7);
  border-bottom: solid 0.5rem #fff;
  user-select: none;
  transition: 300ms ease;
}

.-p1 {
  background: url('@/assets/images/creators/urname.jpeg');
}

.-p2 {
  background: url('@/assets/images/creators/juju.png');
}

.card-pic {
  position: relative;
  background-size: cover;
  height: 10rem;
  border-radius: 5px 5px 0 0;
}

.-pfp {
  position: absolute;
  width: 120px;
  bottom: -60px;
  left: 15px;
  border-radius: 50%;
  border: 2px solid var(--y-blue);
  background: var(--y-blue);
  padding: 5px;
}

.card-name {
  font-size: 1.25rem;
  margin: 1.5rem 0 0 8rem;
  color: #fff;
}

.card-bio {
  color: #fff;
  margin-top: 1.25rem;
  font-size: 1rem;
  line-height: 1.6;
}
.crt-collabs {
  padding: 4rem 0 6rem 0;
}
.collab-wrap {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 20rem;
  background: url('@/assets/images/creators/dk-2.png');
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  border-bottom: solid 0.5rem #fff;
  border-radius: 5px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.7);
}
.collab-dets {
  width: 100%;
  padding: 10% 6% 3%;
  margin: 0 auto;
  background: -webkit-linear-gradient(top, transparent, rgb(0, 53, 107));
}
.collab-blurb {
  color: #fff;
  font-size: 1.125rem;
  text-align: center;
}

@media (hover: hover) {
  .card-item:hover {
    background: var(--7-blue);
  }
}
</style>
