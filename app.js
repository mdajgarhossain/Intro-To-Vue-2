new Vue({
  el: "#app",
  data: {
    age: 5,
    x: 0,
    y: 0,
  },
  methods: {
    add(inc) {
      this.age += inc;
    },
    subtract(dec) {
      this.age -= dec;
    },
    updateXY(event) {
      console.log(event);
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
  },
});
