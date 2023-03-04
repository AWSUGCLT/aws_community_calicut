<template>
  <v-app>
    <MainNavBar class="mb-15" />
    <v-main class="main pt-10 ">
      <!-- secondary -->
      <v-sheet id="scrolling-techniques-7" class="overflow-y-auto">
        <!--max-height="100vh"  class="overflow-y-auto"   -->
        <router-view />
      </v-sheet>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import MainNavBar from "@/components/layout/MainNavBar.vue";
import Footer from "@/components/layout/FooterLayout.vue";
export default {
  name: "App",
  components: {
    MainNavBar,
    Footer,
  },
  data: () => ({
    //
  }),
  created() {
    console.log("helooii")
    this.animation()
  },
  methods: {
   
  },
};
</script>
<style>
/* .navBar{
  position: sticky  ;
  top: 0px ;
 
} */
/*  z-index: 99; */
.main {
  padding: 0 20px !important ;
}
.hidden {
  opacity: 0;
  filter: blur(5px);
  transform: translateX(-60%);
  transition: all 2s;
}
.show {
  opacity: 1;
  filter: blur(0px);
  transform: translateX(0);
}
</style>
