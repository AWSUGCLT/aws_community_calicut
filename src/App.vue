<template>
  <v-app>
    <MainNavBar class="mb-15" />

    <v-main>
      <v-sheet
        id="scrolling-techniques-7"
        class="overflow-y-auto"
        max-height="100vh"
      >
        <!-- class="overflow-y-auto"   -->
        <router-view />
      </v-sheet>
       <Footer /> 
    </v-main>
   
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
};
</script>
<style>
/* .navBar{
  position: sticky  ;
  top: 0px ;
 
} */
/*  z-index: 99; */
</style>
