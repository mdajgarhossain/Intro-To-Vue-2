new Vue({
  el: "#vue-app",
  data: {
    output1: "",
    output2: "",
  },
  methods: {
    readRefs() {
      console.log(this.$refs);
      this.output1 = this.$refs.input1.value;
      this.output2 = this.$refs.input2.value;
    },
  },
});
