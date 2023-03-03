<template>
  <div>
    <div class="home-main pt-10">
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
      <div class="home-about">
        <about />
      </div>
      <div class="home-img">
        <v-img
          class="images"
          aspect-ratio="1"
          contain
          src="@/assets/images/banner.jpg"
        />
        <!-- <iframe class="svg-icon" style="border: none;" src="https://embed.lottiefiles.com/animation/71003"></iframe> -->
        <!-- <iframe class="svg-icon" style="border: none;"  src="https://embed.lottiefiles.com/animation/51371"></iframe> -->
        <!-- <lottie-player
          src="https://assets8.lottiefiles.com/packages/lf20_3jezq8s4.json"
          background="transparent"
          speed="1"
          class="svg-icon" 
          
          loop
          autoplay
        ></lottie-player> -->
        <!-- <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_27uy4hg5.json"  background="transparent"  speed=".5" class="svg-icon"   loop  autoplay></lottie-player> -->
      </div>
    </div>
    <all-event-components />
  </div>
</template>

<script>
import AllEventComponents from "@/components/events/components/AllEventComponents.vue";
import About from "../components/About.vue";
export default {
  components: { About, AllEventComponents },

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
#attribution_block:first-child {
  display: none !important;
}
.home-main {
  display: flex;
  /* margin-top: 35px; */

  align-items: center;
}
.svg-icon {
  /* height="100%" width="100%" */
  height: 100%;
  width: 100%;
}

.home-about,
.home-img {
  flex: 1;
}
.images {
  height: 100%;
  background-blend-mode: multiply;
}
.home-img {
  /* background-color: red; */
  height: 65vh;
}
@media screen and (max-width: 900px) {
  .home-main {
    flex-direction: column;
    align-items: normal;
  }
  .svg-icon {
    margin-top: 20px;
    margin-bottom: 20px;
    /* height="100%" width="100%" */
    height: 500%;
    /* width: 100%; */
  }
}
</style>
