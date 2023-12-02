<script>
export default {
  data() {
    return {
      t: true,
      time: ''
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
    }
  }
}
</script>
<template>
  <div class="-time-wrap">
    <h1 class="-course-num">日本語150</h1>
    <time class="-t-x">
      {{ time }}
    </time>
  </div>
</template>
<style scoped>
.-time-wrap {
  position: fixed;
  top: 2rem;
  right: 2rem;
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
}
</style>
