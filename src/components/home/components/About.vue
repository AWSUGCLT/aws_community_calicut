<template>
  <v-container fluid class="mt-10">
    <div id="text">
      <span class="textColor--text">No Matter How Hard it is , <br /></span> 
      <span class="primary--text second"> Just Keep Learning </span>
    </div>
    <div>
      <h3 class="text-center mt-5 textColor--text">
        <span class="about"> About Us</span>
      </h3>

      <p class="ma-5 px-5 third font-weight-medium textColor--text">
        AWS User Group Calicut, is a group of passionate Amazon Web Services
        Developers, Solution Architects, DevOps Engineers, Users, Evangelists, &
        Partners who meet to share knowledge, share best practices, discuss
        about AWS technology services and product announcements . All skills
        levels including students who would like to learn about AWS are welcome
        to help accomplish our motto of learning, sharing and networking. Let’s
        join hands to empower this tech community to make it bigger and better !!
      </p>
    </div>
    <v-layout justify-center>
      <a href="https://www.linkedin.com/groups/9202512">
        <v-btn class="primary"> Join Now </v-btn>
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
  font-weight:500 ;   
  text-align: center;
  /* white-space: nowrap; */
}

#text .second {
  /* color: #444; */
  /* font-size: 30px; */
  font-size: 50px;
  /* font-size: 3.5vw; */
}
.third {
  font-weight: 100;
  font-size: 20px;
  /* font-size: 1.3vw; */
}
.about {
  text-decoration: underline;
  /* text-decoration-line: calc(20px) ; */
}
</style>
