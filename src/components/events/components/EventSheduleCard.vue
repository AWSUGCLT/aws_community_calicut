<template>
  <div>
    <v-card class="event-shedule-main" elevation="4" min-height="100">
      <!-- <div class="event-shedule-card"> -->
      <div class="card-shedule-one primary">
        <div class="card-shedule-one-div">
          <h1 class="time">{{ event.time }}</h1>
        </div>
      </div>
      <div class="card-shedule-two">
        <div v-if="event.break" class="card-shedule-two-div">
          <h1 class="text--center ma-auto">{{ event.name }}</h1>
        </div>
        <div v-else class="card-shedule-two-div">
          <v-tabs
            grow
            right
            class="card-tabs"
            vertical
            background-color=""
            color="primary"
            v-model="tabs"
          >
            <v-tab v-for="(venue, index) in event.venueDetials" :key="index">
              <!-- <v-icon left> {{ event.icon }} </v-icon> -->
              <span style="text-transform: capitalize">{{ venue.name }}</span>
            </v-tab>
            <v-tab-item
              class=""
              v-for="(venue, index) in event.venueDetials"
              :key="index"
            >
              <div class="pa-1 my-5 event-card">
                <!-- {{ venue }} -->
                <!-- <h1>heyy</h1> -->
                <div>
                  <v-card-title class="headline">
                    {{ venue.title }}
                  </v-card-title>
                  <v-card-subtitle>
                    <h3 class="font-italic mt-2 primary--text">{{ venue.subTitle }}</h3>
                    <div v-if="venue.topic && venue.topic.length " class="mt-2">
                      <h3 class="topic">Topic</h3>
                      <ul class="my-2">
                        <li v-for="topic in venue.topic" :key="topic">
                         <h3 class="topic-point ">{{ topic }}</h3> 
                        </li>
                      </ul>
                    </div>
                  </v-card-subtitle>
                </div>
              </div>
            </v-tab-item>
            <!-- <v-tab-item>
              <div class="pa-1 my-5 event-card">
                heyy
              </div>
            </v-tab-item> -->
          </v-tabs>
        </div>
      </div>
      <!-- </div> -->
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    event: {
      required: true,
    },
  },
  data: () => ({
    venues: [{ name: "Venue - 1" }, { name: "Venue - 2" }],
    tabs: "",
  }),
};
</script>

<style scoped>
.card-tabs {
  flex-direction: row-reverse;
  align-items: center;
  width: 100%;
}
.time {
  font-size: clamp(0.7rem, 6vw, 2.3rem);
  text-align: center;
}
.event-shedule-main {
  display: flex;
  /* align-items: center; */

  padding: 0 !important;
  margin: 0 !important;
}
.card-shedule-one {
  /* width: 250px; */
  flex: 1;
  padding: 3px 30px;
  border-radius: 4px 0px 0 4px !important;
  /* margin: 10px; */
}
.topic{
  text-decoration: underline;
}
.topic-point{
  /* letter-spacing: .8px; */
  /* font:italic; */
}
.card-shedule-one-div {
  display: flex;

  justify-content: center;
  align-items: center;
  height: 100%;
}
.card-shedule-two-div {
  /* width: 250px; */
  display: flex;
  /* justify-content: center; */
  align-items: center;
  height: 100%;
}
.card-shedule-two {
  flex: 4;
  padding-left: 30px;
}
.event-card {
  display: block;
}
@media screen and (max-width: 900px) {
  .event-shedule-main {
    flex-direction: column;
  }
  .card-shedule-two {
    padding-left: 0px;
  }
}
</style>