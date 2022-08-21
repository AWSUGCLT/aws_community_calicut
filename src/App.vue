<template>
  <v-app>
    <MainNavBar class="mb-15" />

    <v-main>
      <v-sheet
        id="scrolling-techniques-7"
        class="overflow-y-auto" 
        max-height="100vh"  
      >
        <router-view
      /> 
      </v-sheet>  
    </v-main>
  </v-app>
</template>

<script>
import MainNavBar from "@/components/layout/MainNavBar.vue";
export default {
  name: "App",
  components: {
    MainNavBar,
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
