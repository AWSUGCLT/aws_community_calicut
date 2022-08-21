<template>
  <!-- <div class="zoom"  > -->
    <v-card class="primary " max-width="344" elevation="1">
      <v-card-text>
        <div>24 Aug 2022</div>
        <p class="text-h6 white--text">Aws Offline Meet Up</p>
        
        <p class="mr-n3 mt-n3"><v-icon>mdi-map-marker  </v-icon>Mavoor Road - Calicut</p>
        <div class="white--text">
          Hi Everyone...<br />
          Our next offline meet up will be held on 24 Aug 2022 at Calicut
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn text color="white " @click="reveal = true">
          Learn More
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <v-card
          v-if="reveal"
          class="transition-fast-in-fast-out v-card--reveal"
          style="height: 100%"
        >
          <v-card-text class="pb-0">
            <p class="text-h4 text--primary">Details</p>
            <p>
              late 16th century (as a noun denoting a place where alms were
              distributed): from medieval Latin eleemosynarius, from late Latin
              eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’
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
