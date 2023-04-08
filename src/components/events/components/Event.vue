<template>
  <div class="card-main mt-5">
    <!-- <event-card class="card-1 mt-5" /> -->
    <v-card elevation="5" class="card-full">
      <div class="card-img">
        <img  src="../../../assets/eventfinal.jpg" alt="" />
      </div>
      <div class="card-details">
        <v-card-text>
          <div class="tertiary--text">27 Mar 2023</div>
          <p class="text-h6 tertiary--text">Aws in-person Meet Up</p>

          <p class="mr-n3 mt-n3 primary--text">
            <v-icon color="primary">mdi-map-marker </v-icon>UL CyberPark -
            Calicut
          </p>
          <p>
            Excited to share the inauguration insights of the AWS User group
            Calicut had on March 27, 2023, at UL Cyberpark. The event was
            inaugurated by Mr. Rajeev Veettil Sr. Engineering Director, of
            Rybbon who has been instrumental in bringing this community
            together.
          </p>
        </v-card-text>
        <v-card-actions class="action-button text-center">
          <div class="view-more-btn">
            <v-btn
              text
              color=""
              style="text-transform: capitalize; font-weight: 900"
              class="black--text register-btn"
              @click="openDialog = true"
            >
              Read More
              <v-icon class="ml-3 arrow" color="primary"
                >mdi-arrow-right
              </v-icon>
            </v-btn>
            <main-event-dialog-box
              @dialogClose="dialogClose"
              :openDialog="openDialog"
              v-show="false"
            />
          </div>
        </v-card-actions>
      </div>
    </v-card>
  </div>
</template>
<script>
import MainEventDialogBox from "./MainEventDialogBox.vue";

export default {
  components: { MainEventDialogBox },
  data: () => ({
    reveal: false,
    openDialog: false,
  }),
  methods: {
    dialogClose() {
      this.openDialog = false;
    },
  },
};
</script>
<style>
.heading-event {
  display: inline;
  border-bottom: 3px red;
}
.heading-event-hr {
  width: 100px;
}
.event-extra {
  display: flex;
  gap: 10px;
}
.divider {
  background-color: red;
  width: 1px;
  height: 100%;
}
.card-1 {
  /* flex: 1; */
}
/* .speaker::-webkit-scrollbar {
  display: none; 
} */

.card-event-detail {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  flex: 1.3;
}
.card-extra-detail {
  flex: 3;
  /* margin-top: 110px; */
  display: flex;
  /* justify-content: center ; */
  /* background-color: green; */
}
.action-button {
  /* display: flex;
  justify-content: center; */
  /* gap: 15px; */
}
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
.card-img img {
  width: 100%;
  /* width: 20vw; */
  /* height: 100%; */
  height: 14rem;
}
.view-more-btn {
  flex: 1;
  margin: auto;
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
.event-detail-btn {
  width: 100%;
  /* background-image: linear-gradient(145deg, #ff2197 0%, #ffd625 100%); */
  background-image: linear-gradient(145deg, #ff2197 0%, #ffd625 100%);
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
    transform: translateX(20px);
  }
}
.register-btn {
  /* background-image:  linear-gradient(145deg,#ff2197 0%,#ffd625 100%); */
  /* align-items: center; */
  /* margin: auto; */
  width: 100%;
  /* background-image: linear-gradient(145deg, #7e5ce6 0%, #25b8ee 100%); */
  letter-spacing: 2px;
  font-size: 14px;
  font-weight: 700 !important;
  padding: 12px 20px !important;
}
.card-full {
  display: flex;
}
.card-details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.card-img {
  display: flex;
  align-items: stretch ;
  /* justify-content: s; */
  min-width: 20vw;
  /* background-image: linear-gradient(145deg, #890b79 0%, #cf1697 100%); */
}

/* @media only screen and (max-width: 700px) {
 
  .card-main {
    display: block;
  }
  .card-extra-detail {
    margin-top: 25px;
  }
} */
@media screen and (max-width: 900px) {
  .card-full {
    flex-direction: column;
  }
}
</style>
