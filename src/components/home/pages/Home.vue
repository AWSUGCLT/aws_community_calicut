<template>
  <div>
    <div class="home-main">
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
.home-main {
  display: flex;
  /* margin-top: 35px; */
  align-items: center;
}
.home-about,
.home-img {
  flex: 1;
}
.images {
  height: 100%;
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
}
</style>
