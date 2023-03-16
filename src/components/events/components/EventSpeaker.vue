<template>
  <div>
    <v-card elevation="5">
      <div class="card-img">
        <div class="card-image-padding">
          <img src="../../../assets/final_logo.png" alt="" />
        </div>
      </div>
      <div class="card-details">
        <v-card-text>
          <div class="tertiary--text">27 Mar 2023</div>
          <p v-if="isSpeaker" class="text-h6 tertiary--text">Event Speakers</p>
          <p v-else class="text-h6 tertiary--text">Event Schedule</p>

          <p class="mr-n3 mt-n3 primary--text">
            <v-icon color="primary">mdi-map-marker </v-icon>UL CyberPark -
            Calicut
          </p>
        </v-card-text>
        <v-card-actions class="action-button text-center">
          <div class="view-more-btn">
            <v-btn
              text
              color="white "
              style="text-transform: capitalize"
              class="register-btn"
              @click="openDialog = true"
            >
              View More
              <v-icon class="ml-3 arrow" color="primary"
                >mdi-arrow-right
              </v-icon>
            </v-btn>
            <detail-dialog-box
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
import DetailDialogBox from "./DetailSpeakerDialogBox.vue";
export default {
  components: { DetailDialogBox },
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
  padding: 0px 100px;
}
</style>