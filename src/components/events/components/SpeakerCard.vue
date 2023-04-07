<template>
  <div class="flip-card" :class="showDetail ? 'flip-card-click' : ''">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <!-- <h1>Front</h1> -->
        <v-card class="flip-vcard-front">
          <img
            :src="require('../../../assets/speaker-mar-23/' + speaker.src)"
            alt=""
          />
          <!-- <img src="../../../assets/speaker-mar-23/aparajithan.png" alt="" /> -->
          <div class="front-detail">
            <div>
              <h2>{{ speaker.name }}</h2>
              <v-btn
                @click="showDetail = !showDetail"
                class="primary text-center"
                >View</v-btn
              >
            </div>
          </div>
        </v-card>
      </div>
      <div class="flip-card-back">
        <div class="back-card">
          <div>
            <h1 class="white--text">{{ speaker.name }}</h1>
            <h3 class="mt-5 white--text">{{ speaker.designation }}</h3>
          </div>

          <div class="front-detail mt-10">
            <v-btn
              @click="showDetail = !showDetail"
              class="primary--text text-center"
              >back</v-btn
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    speaker: {
      required: true,
    },
  },
  data() {
    return {
      showDetail: false,
    };
  },
};
</script>

<style scoped>
.back-card {
  padding: 10px;
  height: 410px;
  background-image: linear-gradient(145deg, #7e5ce6 0%, #25b8ee 100%);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.flip-card {
  /* background-color: red; */
  background-color: transparent;
  width: 300px;
  height: 420px;
  /* flex-grow: 1; */
  flex-basis: 1;
  /* height: 00px; */
  /* perspective: 1000px; */
}
.flip-vcard-front {
}
.front-detail {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100px;
  text-align: center;
}
.flip-card-inner {
  position: relative;
  width: 100%;
  width: 100%;
  transition: transform 0.5s ease-in;
  transform-style: preserve-3d;
}
/* .flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
} */
.flip-card-click .flip-card-inner {
  transform: rotateY(180deg);
}
.flip-card-front img {
  height: 300px;
  width: 100%;
  background-size: cover;
}
.flip-card-back img {
  /* height: 200px; */
}
.flip-card-front,
.flip-card-back {
  position: absolute;
  background-color: red;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
.flip-card-front {
}
.flip-card-back {
  transform: rotateY(180deg);
}
</style>
