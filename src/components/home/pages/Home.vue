<template >
  <div class="pt-5" >
    <v-layout justify-end align-center class="mt-10" wrap >
      <v-flex xs12 sm12 md6>
        <about />
      </v-flex>
      <v-flex xs12  sm12 md6 class="mt-xs-n10"> 
        <v-img
          class="mt-md-15"
          height="65vh"
          aspect-ratio="1"
          contain
          src="@/assets/1032.jpg"
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
