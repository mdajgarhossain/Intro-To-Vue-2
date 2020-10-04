new Vue({
  el: "#app",
  data: {
    name: "VUE",
  },
  methods: {
    greet() {
      return "Good Morning";
    },
    greet2(time) {
      return `Good ${time} ${this.name}`;
    },
  },
});
