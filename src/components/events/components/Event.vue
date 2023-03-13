<template>
  <!-- <div class="zoom"  > -->
  <v-card class="white--text" elevation="5">
    <div class="card-img">
      <img src="../../../assets/eventfinal.jpg" alt="" />
    </div>
    <div class="card-details">
      <v-card-text>
        <div class="tertiary--text">27 Mar 2023</div>
        <p class="text-h6 tertiary--text">Aws Offline Meet Up</p>

        <p class="mr-n3 mt-n3 primary--text">
          <v-icon color="primary">mdi-map-marker </v-icon>UL CyberPark - Calicut
        </p>
        <div class="tertiary--text">
          Hi Everyone...<br />
          Our next offline meet up will be held on 27 March 2023 at UL
          CyberPark, Nellikode (PO), Kozhikode (Calicut)
        </div>
      </v-card-text>
      <v-card-actions class="action-button">
        <div>
          <a
            href="https://forms.gle/osVWuo4ZcgxkT5MX7"
            class=""
            style="text-decoration: none"
          >
            <v-btn
              text
              color=""
              style="text-transform: capitalize; font-weight: 900"
              class="register-btn  lighten-1 white--text"
            >
              Register
            </v-btn>
          </a>
        </div>
        <div class="view-more-btn">
          <!-- <router-link to="/event" style="text-decoration: none"> -->
          <v-btn
            text
            color="white "
            style="text-transform: capitalize"
            class="view-more"
          >
            <!--  @click="reveal = true" -->
            View More
            <v-icon class="ml-3 arrow" color="primary">mdi-arrow-right </v-icon>
          </v-btn>
        <!-- </router-link> -->
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
.action-button{
  display: flex;
  gap:15px
}
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
.card-img img {
  width: 100%;
  height: 12rem;
}
.view-more-btn{
  flex: 1;
}
.view-more {
 width: 100%;
  /* background-image: linear-gradient(145deg, #ff2197 0%, #ffd625 100%); */
  background-image: linear-gradient(145deg, #890b79 0%, #cf1697 100%);
  /* border-radius: 10px; */
  letter-spacing: 2px;
  font-size: 14px;
  font-weight: 700 !important;
  padding: 12px 20px !important;
}
.arrow {
  /* transition: arrow-right ; */
  animation: arrow-right infinite 2s ease-out;
}
@keyframes arrow-right {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(30px);
  }
}
.register-btn {
  /* background-image:  linear-gradient(145deg,#ff2197 0%,#ffd625 100%); */

  color: #ffffff !important;
  border-width: 0px !important;
  /* border-radius: 10px; */
  letter-spacing: 2px;
  font-size: 14px;
  /* font-family: 'Ubuntu',Helvetica,Arial,Lucida,sans-serif!important; */
  font-weight: 700 !important;
  /* text-transform: uppercase!important; */
  background-image: linear-gradient(145deg, #7e5ce6 0%, #25b8ee 100%);
  /* padding-top: 12px!important;
    padding-right: 20px!important;
    padding-bottom: 12px!important;
    padding-left: 20px!important; */
  padding: 12px 20px !important;
}
</style>
