<script>
export default {
  data() {
    return {
      t: true,
      time: '',
      dark: true
    }
  },

  mounted() {
    this.liveTime()
  },

  created() {
    setInterval(() => {
      this.liveTime()
    }, 0)
  },

  methods: {
    liveTime() {
      this.time = new Date().toLocaleString([], {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      })
    },
    darkMode() {
      const html = document.querySelector('html')
      html.setAttribute(
        'theme',
        html.getAttribute('theme') === 'light-mode' ? 'dark-mode' : 'light-mode'
      )
    }
  }
}
</script>
<template>
  <div class="-time-wrap">
    <h1 class="-course-num">日本語150</h1>
    <time class="-t-x">
      <div
        class="-lx-dx"
        @click="
          dark = !dark;
          darkMode()
        "
      >
        <font-awesome-icon v-if="dark" :icon="['fas', 'moon']" class="-moon-x" />
        <font-awesome-icon v-else :icon="['fas', 'sun']" class="-sun-x" />
      </div>
      {{ time }}
    </time>
  </div>
</template>
<style scoped>
.-moon-x,
.-sun-x {
  padding-top: 0.36rem;
  font-size: 1.125rem;
  margin: 0.375rem 0;
  cursor: pointer;
  transition: 400ms ease;
  transform: rotate(-15deg);
  color: var(--y-blue);
}

@media (hover: hover) {
  .-moon-x:hover,
  .-sun-x:hover {
    transform: rotate(-30deg);
  }
}

.-time-wrap {
  position: fixed;
  top: 1rem;
  right: 1rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
}

.-course-num {
  font-size: 2rem;
  color: var(--y-blue);
  border-bottom: 2px solid var(--y-blue);
}

.-t-x {
  margin-top: 0.25rem;
  font-size: 1rem;
  color: var(--y-blue);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}
</style>
