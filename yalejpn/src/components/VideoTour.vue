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
  <section id="tour" class="tour-sect">
    <div class="tour-wrapper -wpx">
      <div class="tour-subwrap">
        <div class="tour-head">
          <h1 class="tour-title -jp-b" v-if="language.currLanguage === 'jp'">イェールのツアー</h1>
          <h1 class="tour-title -en-7" v-else>YALE TOUR</h1>
        </div>
        <div class="-divider"></div>
      </div>
      <div class="tour-video">
        <iframe src="https://www.youtube.com/embed/UM9XNpgrqVk" class="-tsua"></iframe>
      </div>
      <div class="tour-topics">
        <p class="tour-contents -jp" v-if="language.currLanguage === 'jp'">
          イェール大学へようこそ！今日、僕達は色々なことを話し合います。。。
        </p>
        <p class="tour-contents -en" v-else>
          Welcome to Yale University! ...things to elaborate upon...
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tour-subwrap {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.-divider {
  height: 4px;
  width: 7.5rem;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0 2rem 0;
}
.tour-sect {
  min-height: 100vh;
  background-color: var(--y-blue);
}
.tour-head {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;
}
.tour-title {
  font-size: 2rem;
  color: #fff;
}
.tour-video {
  box-shadow: 0 5px 10px #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.-tsua {
  border: none;
  margin: 0;
  padding: 0;
  width: 761px;
  height: 428px;
}
.tour-topics {
  margin: 2rem 0;
  padding: 0 0 0 1rem;
  border-left: solid 6px #fff;
}
.tour-contents {
  color: #fff;
  font-size: 1.125rem;
}
</style>
