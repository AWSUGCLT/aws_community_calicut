<template>
  <div class="">
    <v-tabs background-color="" color="primary" v-model="tabs">
      <v-tab v-for="event in events" :key="event.name">
        <v-icon left> {{ event.icon }} </v-icon>
        <span style="text-transform: capitalize">{{ event.name }}</span>
      </v-tab>
      <v-tab-item class="">
        <div class="pa-1 my-5 event-card">
          <event class="zoom" />
        </div>
      </v-tab-item>
      <v-tab-item>
        <div class="pa-1 my-5 event-card">
          <event />
        </div>
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
        // { name: "Past Events", icon: "mdi-account" },
      ],
      tabs: "",
    };
  },
};
</script>

<style>
.zoom:hover {
  transform: scale(
    /* 1.01 */
  ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}
.zoom {
  transition: transform 0.3s;
}
.event-card {
  /* display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); */
}
</style>
