<template>
  <div class="main-one">
    <div class="home-container">
      <div class="home-main ">
        <div class="home-about">
          <about />
        </div>
        <div class="home-img">
          <v-img
        v-if="!(showImage>=2 && showImage<=3)"
          class="images fade-design"
          aspect-ratio="1"
          contain
          src="@/assets/images/banner.jpg"
        />
        <div v-else>
           <lottie-player v-if="showImage==2" src="https://assets3.lottiefiles.com/packages/lf20_27uy4hg5.json"  background="transparent"  speed=".5" class="svg-icon fade-design"   loop  autoplay></lottie-player>
        <lottie-player v-if="showImage==4"  src="https://assets8.lottiefiles.com/packages/lf20_3jezq8s4.json"   background="transparent" speed="1" class="svg-icon"  loop autoplay ></lottie-player>
        <lottie-player v-if="showImage==3" src="https://assets7.lottiefiles.com/packages/lf20_yswivetl.json"  background="transparent"  speed="1"  class="svg-icon fade-design"   loop  autoplay></lottie-player>
     
        </div>
        </div>
      </div>
    </div>
    <all-event-components />
  </div>
</template>

<script>
import AllEventComponents from "@/components/events/components/AllEventComponents.vue";
import About from "../components/About.vue";
export default {
  components: { About, AllEventComponents },

  // props: {
  //   banner: {
  //     type: String,
  //     default: require("@/assets/img/banner.jpg"),
  //   },
  // },
  data() {
    return {
      showImage: 1,
    };
  },
  methods: {},
  // computed: {
  //   headerStyle() {
  //     return {
  //       backgroundImage: `url(${this.image})`,
  //     };
  //   },
  //   signupImage() {
  //     return {
  //       backgroundImage: `url(${this.signup})`,
  //     };
  //   },
  // },
  created() {
    const rndInt = Math.floor(Math.random() * 3) + 1;
    console.log(rndInt);
    this.showImage = rndInt;
  },
};
</script>
<style>
#attribution_block:first-child {
  display: none !important;
}
.main-one{
  /* background-image: linear-gradient(165deg,#ff5e92 0%,#ffd4b6 100%); */

}
.home-container {
  /* background-image:   linear-gradient(#4500CA 4%, rgba(69,0,202,0) 50%), url(../../../assets/home_bg.jpg), linear-gradient(60deg, #28005f 16%, #8300e5 64%, #0f3bff 100%);  */
  /* background-image: url(../../../assets/home_bg.jpg); */
  /* background-size: cover;
  background-repeat: no-repeat;
  background-position-y: -300px;
  background-blend-mode: lighten ; */

  /* padding: 0; */
  /* padding-bottom: 12vw; */
  /* transform: translateY(50%); */
  /* linear-gradient(#4500CA 4%, rgba(69,0,202,0) 50%), url(../../../assets/home_bg.jpg), linear-gradient(60deg, #28005f 16%, #8300e5 64%, #0f3bff 100%); */
}
.home-main {
  display: flex;
  /* margin-top: 35px; */
  /* height: 100vh; */
  align-items: center;
  /* background-image: url(../../../assets/home_bg.jpg); */
  background-size: cover;
  background-repeat: no-repeat;
}
/* age: linear-gradient(#4500CA 4%, rgba(69,0,202,0) 50%), url(/images/divi/divi-gallery-hero-background.jpg), linear-gradient(60deg, #28005f 16%, #8300e5 64%, #0f3bff 100%);
} */
.svg-icon {
  /* height="100%" width="100%" */
  height: 100%;
  width: 100%;
}
.fade-design {
  opacity: 1;
  animation: fade 5s;
}
@keyframes fade {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.home-about,
.home-img {
  flex: 1;
}
.images {
  height: 100%;
  background-blend-mode: multiply;
}
.home-img {
  /* background-color: red; */
  height: 65vh;
}
@media screen and (max-width: 900px) {
  .home-main {
    flex-direction: column;
    align-items: normal;
  }
  .svg-icon {
    margin-top: 20px;
    margin-bottom: 20px;
    /* height="100%" width="100%" */
    height: 500%;
    /* width: 100%; */
  }
}
</style>
