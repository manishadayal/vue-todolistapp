<template>
  <div id="footer-wrapper">
    <nav>
      <p>{{ copyright }}</p>
    </nav>
  </div>
</template>

<script>
export default {
  props: {},

  data() {
    return {
      copyright: "Copyright 2021 Project-Task",
    };
  },
};
</script>

<style scoped>
#footer-wrapper {
  width: 100%;
  text-align: center;
}
p {
  margin-bottom: 0rem;
}
</style>
