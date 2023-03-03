<template>
  <div>
    <!-- <v-navigation-drawer
      v-if="$vuetify.breakpoint.mdAndDown"
      v-model="navBar"
      absolute
      temporary
      right
      class="navDrawer"
    >
      <v-list-item>
        <v-spacer></v-spacer>
        <v-icon @click="openNavBar">mdi-close </v-icon> </v-list-item
      ><v-list dense nav>
        <v-list-item
          router
          :to="item.url"
          v-for="item in navBarList"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon
              :class="{
                'primary--text': $route.path === item.url,
              }"
              >{{ item.icon }}</v-icon
            >
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title
              :class="{
                'primary--text': $route.path === item.url,
              }"
              >{{ item.text }}</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <v-app-bar app color="white" elevate-on-scroll height="93">
      <!-- <v-layout class="red"> -->
      <v-img
        :src="require('@/assets/final_logo.png')"
        contain
        height="75"
        :position="!$vuetify.rtl ? 'left' : 'right'"
        class="mt-1"
      />
      <!--  :position="!$vuetify.rtl ? 'left' : 'right'" -->
      <!-- <v-toolbar-title class="primary--text font-weight-bold">
        <span>{{ title }}</span>
      </v-toolbar-title> -->
      <!-- </v-layout> -->

      <!-- app 
      absolute
      color="white"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7" -->
      <!-- scroll-target="#scrolling-techniques-7" -->
      <!-- <v-toolbar-title class="primary--text font-weight-bold ">
       
       <span>{{ title }}</span> 
       </v-toolbar-title> -->

      <v-spacer></v-spacer>

      <!-- <v-app-bar-nav-icon
        class="primary--text"
        @click="openNavBar"
        v-if="$vuetify.breakpoint.mdAndDown"
      ></v-app-bar-nav-icon>
      <span v-else>
        <span v-for="item in navBarList" :key="item.title">
          <v-btn router :to="item.url" icon class="mx-5">
            <span
              :class="{
                'primary--text': $route.path === item.url,
              }"
            >
              {{ item.text }}</span
            >
          </v-btn>
        </span>
      </span> -->
    </v-app-bar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navBar: false,
      navBarList: [
        { icon: "mdi-home", text: "Home", url: "/" },
        // { icon: "mdi-about", text: "About", url: "about" },
        { icon: "mdi-event", text: "Events", url: "/events" },
        { icon: "mdi-blog", text: "Blogs", url: "/blogs" },
        { icon: "mdi-persons", text: "Members", url: "/members" },
        { icon: "mdi-photos", text: "Photos", url: "/photos" },
      ],
    };
  },
  methods: {
    openNavBar() {
      this.navBar = !this.navBar;
    },
  },
};
</script>
<style>
/* .navDrawer{
  z-index: 99 ;
} */
</style>
