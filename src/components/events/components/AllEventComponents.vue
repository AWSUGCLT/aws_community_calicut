<template>
  <div>
    <v-tabs vertical grow height="70vh" v-model="tabs">
      <v-tab v-for="event in events" :key="event.name">
        <v-icon left> {{ event.icon }} </v-icon>
        <span style="text-transform: capitalize">{{ event.name }}</span>
      </v-tab>
      <v-tab-item>
        <v-layout justify-start class="pa-5" wrap>
          <v-flex xs12 sm6 md4 v-for="loop in 6" :key="loop">
            <div class="mb-5">
              <event class="zoom" />
            </div>
          </v-flex>
        </v-layout>
      </v-tab-item>
      <v-tab-item>
        <v-layout justify-start class="pa-5" wrap>
          <v-flex xs12 sm6 md4 v-for="loop in 2" :key="loop">
            <div class="mb-5">
              <event class="zoom" />
            </div>
          </v-flex>
        </v-layout>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import Event from "./Event.vue";
export default {
  components: { Event },
  data() {
    return {
      events: [
        { name: "Upcoming Events", icon: "mdi-account" },
        { name: "Past Events", icon: "mdi-account" },
      ],
      tabs: "",
    };
  },
};
</script>

<style>
.zoom:hover {
  transform: scale(
    1.03
  ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}
.zoom {
  transition: transform 0.3s;
}
</style>
