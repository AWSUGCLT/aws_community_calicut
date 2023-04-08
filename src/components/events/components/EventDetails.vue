<template>
  <div>
    <v-card elevation="5" class="card-full">
      <div class="card-img">
        <div class="card-image-padding">
          <img src="../../../assets/final_logo.png" alt="" />
        </div>
      </div>
      <div class="card-details">
        <v-card-text>
          <div class="tertiary--text">27 Mar 2023</div>
          <p v-if="isSpeaker" class="text-h6 tertiary--text">Event Speakers</p>
          <p v-else class="text-h6 tertiary--text">Event Images</p>

          <p class="mr-n3 mt-n3 primary--text">
            <v-icon color="primary">mdi-map-marker </v-icon>UL CyberPark -
            Calicut
          </p>
          <div>
            <p v-if="isSpeaker">
              We would like to extend sincere thanks to the speakers, Apar V.
              and Gaurav Gupta from AWS , Dijeesh Padinharethil, Muhamad Fizal,
              Vijaysai M S , Vishnu KS, Amal Mathew, Anoop G, Praveesh V,
              Sreerag Mohan
            </p>
            <p v-else>
              Special thanks mention to BHN Rewards (formerly Rybbon) and UL
              CyberPark for this event sponsorship and would also like to extend
              our gratitude to all the volunteers who worked tirelessly behind
              the scenes to make this event successful
            </p>
          </div>
        </v-card-text>
        <v-card-actions class="action-button text-center">
          <div class="view-more-btn">
            <v-btn
              text
              color=""
              style="text-transform: capitalize"
              class="register-btn"
              @click="openDialog = true"
            >
              View More
              <v-icon class="ml-3 arrow" color="primary"
                >mdi-arrow-right
              </v-icon>
            </v-btn>
            <both-event-dialog-box
              @dialogClose="dialogClose"
              :openDialog="openDialog"
              :isSpeaker="isSpeaker"
              v-show="false"
            />
          </div>
        </v-card-actions>
      </div>
    </v-card>
  </div>
</template>
  
  <script>
import BothEventDialogBox from "./BothEventDialogBox.vue";
// import DetailSpeakerDialogBox from './DetailSpeakerDialogBox.vue';
// import DetailDialogBox from "./DetailSpeakerDialogBox.vue";
export default {
  components: { BothEventDialogBox },
  props: {
    isSpeaker: {},
  },
  methods: {
    dialogClose() {
      this.openDialog = false;
    },
  },
  data() {
    return {
      openDialog: false,
    };
  },
};
</script>
  
  <style scoped>
.card-image-speaker {
  /* width: 70%; */
  /* height: 12rem; */
}
.card-image-padding {
  /* padding: 0px 60px; */
  /* padding: 40px; */
}
.card-img {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 20vw;
  background-image: linear-gradient(145deg, #890b79 0%, #cf1697 100%);
}
.card-full {
  display: flex;
  /* background: #000; */
}
.card-details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
@media screen and (max-width: 900px) {
  .card-full {
    flex-direction: column;
  }
}
</style>