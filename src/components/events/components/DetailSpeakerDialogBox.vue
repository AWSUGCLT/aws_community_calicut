<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      :scrim="false"
      transition="dialog-bottom-transition"
    >
      <v-card v-if="isSpeaker">
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Speakers</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <div class="ma-5">
          <h1>Speakers</h1>
          <div class="speaker mt-5">
            <speaker-card
              :speaker="speaker"
              v-for="speaker in speakerData"
              :key="speaker.name"
            />
          </div>
        </div>
      </v-card>
      <v-card v-else>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Event Details</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <div class="ma-5">
          <div class=" mt-5">
            <event-details />
          </div>
        </div>
      </v-card>
    </v-dialog>
  </v-row>
</template>
  <script >
import EventDetails from "./EventDetails.vue";
import SpeakerCard from "./SpeakerCard.vue";
export default {
  components: { SpeakerCard, EventDetails },
  props: {
    openDialog: {},
    isSpeaker: {},
  },
  watch: {
    openDialog(newVal) {
      if (newVal) {
        this.dialog = true;
      }
    },
    dialog(newVal) {
      if (!newVal) {
        this.$emit("dialogClose");
      }
    },
  },
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      speakerData: [
        {
          name: "Aparajithan Vaidyanathan",
          src: "aparajithan.png",
          designation: "Principal Solutions Architect at AWS, Bangalore, India",
        },
        {
          name: "Gaurav Gupta",
          src: "Gaurav.png",
          designation: "Principal Solutions Architect at AWS, Bangalore, India",
        },
        // { name: "Dijeesh Padinharethil", src: "Dij" },
        // { name: "Gaurav Gupta", src: "" },
        {
          name: "Praveesh V",
          src: "praveesh.jpg",
          designation: "AWS Community builder, Cloud Architect",
        },
        {
          name: "Dijeesh Padinharethil",
          src: "Dijeesh.jpg",
          designation:
            "Director of Engineering, AWS Container Hero, Organizer - AWSUGKOCHI / CNCFKOCHI, Sedai",
        },
        {
          name: "Vishnu KS",
          src: "Vishnuks.jpg",
          designation: "DevOps Engineer and Developer, Toptal",
        },
        {
          name: "Muhamad Fizal",
          src: "faizal.png",
          designation: "Manager, Database Administration, Rybbon",
        },
        {
          name: "Vijay sai",
          src: "vijay.png",
          designation: "Sr. Software QA Engineer, Rybbon",
        },
        {
          name: "Anoop",
          src: "anoopg.jpg",
          designation: "Sr. Software Engineer, Rybbon",
        },
        {
          name: "Amal Mathew",
          src: "Amal.jpg",
          designation: "Sr. Software Engineer, QBurst",
        },
        {
          name: "Sreerag Mohan",
          src: "sreerag.png",
          designation: "FULL STACK ENGINEER at ACTC",
        },
      ],
    };
  },
};
</script>
<style>
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform 0.2s ease-in-out;
}
.speaker {
  /* display: flex;
  gap: 8px;
  flex-wrap: wrap; */
  /* display: grid;
    gap: 10px;
    grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
    grid-template-rows: 600px; */
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}
</style>