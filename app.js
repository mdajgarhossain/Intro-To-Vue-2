new Vue({
  el: "#app",
  data: {
    name: "VUE",
    job: "Front-end framework",
    website: "https://vuejs.org/v2/guide/",
    websiteTag: '<a href="https://vuejs.org/v2/guide/">vueJS</a>',
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
