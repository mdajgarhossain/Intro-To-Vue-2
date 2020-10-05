new Vue({
  el: "#app",
  data: {
    age: 18,
    a: 0,
    b: 0,
  },
  methods: {
    // addToA() {
    //   console.log("addToA");
    //   return this.a + this.age;
    // },
    // addToB() {
    //   console.log("addToB");
    //   return this.b + this.age;
    // },
  },
  computed: {
    addToA() {
      console.log("addToA");
      return this.a + this.age;
    },
    addToB() {
      console.log("addToB");
      return this.b + this.age;
    },
  },
});
