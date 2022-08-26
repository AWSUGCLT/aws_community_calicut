<template >
  <div >
    <v-layout class="mt-n15  " wrap >
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
    </v-layout>
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
