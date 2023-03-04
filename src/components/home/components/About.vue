<template>
  <v-container fluid>
    <div id="text">
      <span class="dark--text first-1">No Matter How Hard it is , <br /></span>
      <span class="primary--text second-1"> Just Keep Learning </span>
    </div>
    <div>
      <h3 class="text-center mt-5 textColor--text">
        <span class="about dark--text"> About Us</span>
      </h3>

      <p class="third-1 font-weight-medium dark--text">
        AWS User Group Calicut, is a group of passionate Amazon Web Services
        Developers, Solution Architects, DevOps Engineers, Users, Evangelists, &
        Partners who meet to share knowledge, share best practices, discuss
        about AWS technology services and product announcements . All skills
        levels including students who would like to learn about AWS are welcome
        to help accomplish our motto of learning, sharing and networking. Let’s
        join hands to empower this tech community to make it bigger and better !
      </p>
    </div>
    <v-layout justify-center>
      <a
        href="https://www.linkedin.com/groups/9202512"
        style="text-decoration: none"
      >
        <v-btn class="tertiary white--text second-1 lighten-1 button-bg-1">
          Join Now
        </v-btn>
      </a>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({}),
};
</script>
<style>
#text {
  top: 20px;
  /* font-family: "Oswald", arial; */
  /* color: #ed002e; */
  font-size: 50px;
  /* font-size: 3.5vw; */
  font-weight: 500;
  text-align: center;
  
  /* white-space: nowrap; */
}

.button-bg-1 {
  background-image: linear-gradient(145deg, #ff2197 0%, #ffd625 100%);
  border-radius: 10px;
  letter-spacing: 2px;
  font-size: 14px;
  font-weight: 700 !important;
  padding: 22px 20px !important;
}
#text .second-1 {
  /* color: #444; */
  /* font-size: 30px; */
  font-size: 50px;
  font-weight: 600;
  letter-spacing: 0.5rem;
  /* background: -webkit-linear-gradient(145deg, #ff2197 0%, #ffd625 100%);;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */

  /* background-image:  linear-gradient(145deg,#ff2197 0%,#ffd625 100%); */

  /* font-size: 3.5vw; */
}
.first-1 {
  /* color: #444; */
  /* font-size: 30px; */
  /* font-size: 60px;
  font-weight: 700; */
  /* letter-spacing: .5rem; */
  /* font-size: 3.5vw; */
}
.third-1 {
  font-weight: 100;
  font-size: 20px;
  /* font-size: 1.3vw; */
}
.about {
  text-decoration: underline;
  /* text-decoration-line: calc(20px) ; */
}
</style>
