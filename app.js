new Vue({
  el: "#app",
  data: {
    name: "",
    age: "",
  },
  methods: {
    logName(event) {
      console.log(event.target.value);
      this.name = event.target.value;
    },
    logAge() {
      console.log("you entered your age");
    },
  },
});
