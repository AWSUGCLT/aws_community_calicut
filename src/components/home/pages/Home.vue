<template>
  <div class="home-main mt-5">
    <!-- <v-layout class="mt-n15  " wrap >
      <v-flex xs12 sm12 md6>
        <about />
      </v-flex>
      <v-flex xs12  sm12 md6 class="mt-xs-n10"> 
        <v-img
          class="mt-md-10"
          height="65vh"
          aspect-ratio="1"
          contain
          src="@/assets/images/banner.jpg"
        />
      </v-flex>
    </v-layout> -->
    <div  class="home-about">
      <about />
    </div>
    <div class="home-img">
      <v-img
       height="65vh"
        aspect-ratio="1"
        contain
        src="@/assets/images/banner.jpg"
      />
    </div>
  </div>
</template>

<script>
import About from "../components/About.vue";
export default {
  components: { About },

  // props: {
  //   banner: {
  //     type: String,
  //     default: require("@/assets/img/banner.jpg"),
  //   },
  // },
  data() {
    return {};
  },
  methods: {},
  // computed: {
  //   headerStyle() {
  //     return {
  //       backgroundImage: `url(${this.image})`,
  //     };
  //   },
  //   signupImage() {
  //     return {
  //       backgroundImage: `url(${this.signup})`,
  //     };
  //   },
  // },
};
</script>
<style>
.home-main { 
  display: flex;
  /* align-items: center; */
}
.home-about,.home-img{
  flex: 1;
}
.home-img{
  /* background-color: red; */
}
@media screen and (max-width:900px){
  .home-main{
    flex-direction: column;
   align-items: normal;
  }
}
</style>
