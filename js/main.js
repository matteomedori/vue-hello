const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "VUE Hello!",
      urlImg: "img/prova.jpg",
      altImg: "Img prova",
    };
  },
}).mount("#app");
