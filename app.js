var data = {
  name: "Javascript",
};

Vue.component("greeting", {
  template:
    "<p>Hey there, I am {{name}}. <button v-on:click='changeName'>Change name</button></p>",
  //data as a function for creating individual data object(reference) for every instance
  /*data() {
    return {
      name: "Javascript",
    };
  },*/
  //updating all instances data together by passing above global 'data' variable
  data() {
    return data;
  },
  methods: {
    changeName() {
      this.name = "vueJS";
    },
  },
});

//First instance stored in variable one
var one = new Vue({
  el: "#vue-app-one",
  data: {},
});

//Second instance stored in variable two
var two = new Vue({
  el: "#vue-app-two",
  data: {},
});
