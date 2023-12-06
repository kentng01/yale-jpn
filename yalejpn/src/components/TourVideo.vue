<script setup></script>

<template>
  <section id="tour" class="-tour-container">
    <div class="-tour-wrapper -wpx">
      <div class="-tour-x">
        <h2 class="-tsua-x">イェール大学のツアー</h2>
      </div>
      <div class="-tour-video">
        <iframe src="https://www.youtube.com/embed/b2Bd_bh82Yc" class="-tsua"></iframe>
      </div>
      <div class="-tour-topics">
        <p class="-tour-contents">
          <span class="-b">イェール大学へようこそ！</span>
          <br /><br />
          今日、僕達は色々なことを話し合うつもりです。
          <br />
          例えば、一般情報とか図書館とか寮とか。。。
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.-b {
  font-weight: 600;
}

.-tour-container {
  min-height: 100vh;
  padding: 5rem 0;
  background:
    linear-gradient(var(--rgba-1)),
    url('@/assets/images/creators/umeda.jpg') no-repeat scroll center/cover;
}
.-tour-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
}
.-tour-x {
  border-left: 0.625rem solid var(--7-blue);
  padding-left: 0.625rem;
}
.-tsua-x {
  font-size: 2rem;
  color: var(--y-blue);
  padding-bottom: 0.5rem;
}
.-tsua {
  border: none;
  margin: 0;
  padding: 0;
  width: 767px;
  height: 428px;
}
.-tour-contents {
  font-size: 1.125rem;
}
</style>
