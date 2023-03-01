<template>
  <!-- <div class="zoom"  > -->
  <v-card class=" " elevation="5">
    <v-card-text>
      <div>21 Mar 2023</div>
      <p class="text-h6 primary--text">Aws Offline Meet Up</p>

      <p class="mr-n3 mt-n3">
        <v-icon>mdi-map-marker </v-icon>UL CyberPark - Calicut
      </p>
      <div class="primary--text">
        Hi Everyone...<br />
        Our next offline meet up will be held on 21 March 2023 at UL CyberPark,
        Nellikode (PO), Kozhikode (Calicut)
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn text color="primary " @click="reveal = true"> View More </v-btn>
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
          <v-btn text color="teal accent-4" @click="reveal = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
  <!-- </div> -->
</template>
<script>
export default {
  data: () => ({
    reveal: false,
  }),
};
</script>
<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
