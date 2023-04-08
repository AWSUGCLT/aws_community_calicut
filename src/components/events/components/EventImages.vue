<template>
    <v-row>
      <v-col
        v-for="n in 9"
        :key="n"
        class="d-flex child-flex"
        cols="4"
      >
        <v-img
          :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
          :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
          aspect-ratio="1"
          cover
          class="bg-grey-lighten-2"
        >
          <template v-slot:placeholder>
            <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
            >
              <v-progress-circular
                indeterminate
                color="grey-lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
  </template>
<script>
export default {};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 40px 20px 0 20px;
}

.container .heading {
  width: 50%;
  padding-bottom: 50px;
}
.container .heading h3 {
  font-size: 3em;
  font-weight: bolder;
  padding-bottom: 10px;
  border-bottom: 3px solid #222;
}

.container .heading h3 span {
  font-weight: 100;
}
.box{
    display: grid;
    width: 100vw;
    grid-template-columns: repeat(4,1fr);
}
/* .container .box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.container .box .dream {
  display: flex;
  flex-direction: column;
  width: 32.5%;
}

.container .box .dream .img {
  width: 100%;
  padding-bottom: 15px;
  border-radius: 5px;
}

.container .btn {
  margin: 40px 0 70px 0;
  background: #222;
  padding: 15px 40px;
  border-radius: 5px;
}

.container .btn a {
  color: #fff;
  font-size: 1.2em;
  text-decoration: none;
  font-weight: bolder;
  letter-spacing: 3px;
} */

@media only screen and (max-width: 769px) {
  .container .box {
    flex-direction: column;
  }

  .container .box .dream {
    width: 100%;
  }
}

@media only screen and (max-width: 643px) {
  .container .heading {
    width: 100%;
  }
  .container .heading h3 {
    font-size: 1em;
  }
}
</style>