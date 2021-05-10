<template>
  <div>
    <nav>Header Space</nav>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
ul {
  list-style-type: none;
  text-align: center;
  margin: 0;
}
li {
  display: inline-block;
  font-size: 16px;
}
a {
  color: #fff;
  text-decoration: none;
  border-radius: 0px;
}
nav {
  background: #350030;
}
.router-link-active {
  background-color: #9d9ed7;
  color: #fff;
}
</style>
