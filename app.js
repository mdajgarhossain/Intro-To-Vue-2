//First instance stored in variable one
var one = new Vue({
  el: "#vue-app-one",
  data: {
    title: "Vue App One",
  },
  methods: {},
  computed: {
    greet() {
      return "Hello from app one!";
    },
  },
});

//Second instance stored in variable two
var two = new Vue({
  el: "#vue-app-two",
  data: {
    title: "Vue App Two",
  },
  methods: {
    //interaction between both instances
    changeTitle() {
      one.title = "Title has changed from app two";
    },
  },
  computed: {
    greet() {
      return "Hello from app two!";
    },
    seeChange() {
      return one.title;
    },
  },
});
