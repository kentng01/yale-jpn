<script setup>
import DropDown from './drop-down/DropDown.vue'
</script>
<template>
  <section id="about" class="-faqs-answers">
    <div class="-faqs-wrapper -wpx">
      <div class="-faqs-title">
        <h2 class="-faqs-declare">概要・質問</h2>
      </div>
      <div class="-faqs-dd">
        <DropDown />
      </div>
    </div>
  </section>
</template>
<style scoped>
.-faqs-answers {
  min-height: 100vh;
  padding: 4rem 0;
}
.-faqs-title {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.-faqs-declare {
  font-size: 2rem;
  border-bottom: solid 0.375rem var(--bl-ack);
}
</style>
