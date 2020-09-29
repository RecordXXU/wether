<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <input
      type="text"
      placeholder="请输入要查询的城市"
      v-model="city"
      @keyup.enter="search"
    />
    <button @click="search">search</button>
    <ul>
      <li></li>
    </ul>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  data() {
    return {
      city: "",
      key: "4170ca33f489613942d6767e29d31b23"
    };
  },
  methods: {
    async search() {
      if (this.city == "") {
        return alert("请输入一个城市");
      } else {
        let res = await this.axios.get(
          `/query?city=${this.city}&key=${this.key}`
        );
        console.log(res);
        console.log(res.status);
      }
    }
  },
  created() {
    // console.log(res.data.result.future);
  },
  components: {
    // HelloWorld
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul {
  list-style-type: none;
}
</style>
