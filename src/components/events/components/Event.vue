<template>
  <div class="card-main">
    <event-card class="card-1 mt-5" />
    <event-speaker :isSpeaker="true" class="card-1 mt-5" />
    <event-speaker :isSpeaker="false" class="card-1 mt-5" />
  </div>
</template>
<script>
import EventCard from "./EventCard.vue";
import EventSpeaker from "./EventSpeaker.vue";
import SpeakerCard from "./SpeakerCard.vue";
export default {
  components: { SpeakerCard, EventCard, EventSpeaker },
  data: () => ({
    reveal: false,
  }),
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
.card-main {
  display: flex;
  gap: 40px;
  /* align-items: center; */
  justify-content: center;
  /* display: grid;
  grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
  gap: 40px;
  place-items: center; */
    /* height: 700px; */
}
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
  height: 12rem;
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
    transform: translateX(30px);
  }
}
.register-btn {
  /* background-image:  linear-gradient(145deg,#ff2197 0%,#ffd625 100%); */
/* align-items: center; */
/* margin: auto; */
 width: 100%;
  background-image: linear-gradient(145deg, #7e5ce6 0%, #25b8ee 100%);
  letter-spacing: 2px;
  font-size: 14px;
  font-weight: 700 !important;
  padding: 12px 20px !important;
}

@media only screen and (max-width: 700px) {
  .event-extra {
    /* flex-direction: column; */
  }
  .card-main {
    /* flex-direction: column; */
    display: block;
  }
  .card-extra-detail {
    margin-top: 25px;
  }
}
</style>
