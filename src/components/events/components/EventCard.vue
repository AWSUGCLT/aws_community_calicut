<template>
  <div>
    <v-card elevation="5" class="card-full">
      <div class="card-img">
        <img src="../../../assets/eventfinal.jpg" alt="" />
      </div>
      <div class="card-details">
        <v-card-text>
          <div class="tertiary--text">27 Mar 2023</div>
          <p class="text-h6 tertiary--text">Aws in-person Meet Up</p>

          <p class="mr-n3 mt-n3 primary--text">
            <v-icon color="primary">mdi-map-marker </v-icon>UL CyberPark -
            Calicut
          </p>
        </v-card-text>
        <v-card-actions class="action-button text-center">
          <div class="view-more-btn">
            <!-- <a
              href="https://forms.gle/osVWuo4ZcgxkT5MX7"
              class=""
              style="text-decoration: none"
            > -->
            <v-btn
              text
              color=""
              style="text-transform: capitalize; font-weight: 900"
              class="lighten-1 white--text register-btn"
              @click="openDialog = true"
            >
              View More
              <v-icon class="ml-3 arrow" color="primary"
                >mdi-arrow-right
              </v-icon>
            </v-btn>
            <detail-speaker-dialog-box
              @dialogClose="dialogClose"
              :openDialog="openDialog"
              :isSpeaker="false"
              v-show="false"
            />

            <!-- </a> -->
          </div>
        </v-card-actions>

        <v-expand-transition>
          <v-card
            v-if="reveal"
            class="transition-fast-in-fast-out v-card--reveal"
            style="height: 100%"
          >
            <v-card-text class="pb-0">
              <p class="text-h4 text--primary">Event Details</p>
              <p>
                Our next offline meet up will be held on 21 March 2023 at UL
                CyberPark, Nellikode (PO), Kozhikode (Calicut)
              </p>
            </v-card-text>
            <v-card-actions class="pt-0">
              <v-btn
                text
                color="primary"
                style="text-transform: capitalize"
                @click="reveal = false"
              >
                Close
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-expand-transition>
      </div>
    </v-card>
  </div>
</template>

<script>
import detailSpeakerDialogBox from "./DetailSpeakerDialogBox.vue";

export default {
  components: { detailSpeakerDialogBox },
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
.view-more-btn {
  flex: 1;
}
.card-img {
  background-image: linear-gradient(145deg, #890b79 0%, #cf1697 100%);
}
</style>
