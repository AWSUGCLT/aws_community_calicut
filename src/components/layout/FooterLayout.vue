<template>
  <div>
    <!-- <v-layout justify-center>
      <v-card class="card" height="50vh" width="70%"> </v-card>
    </v-layout> -->
    <v-footer color="white " padless>
      <v-card
        class="popup-footer-card mt-15 tertiary lighten-1  text-center first-card"
        min-height="5vh"
        width="90%"
      >
        <div>
          <v-card-text class="mt-10">
            <a
              :href="icon.link"
              v-for="icon in icons"
              :key="icon"
              class="icon-link"
            >
              <v-btn class="mx-4 primary--text lighten-3" icon>
                <v-icon size="24px" color="">{{ icon.icon }}</v-icon>
              </v-btn>
            </a>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-text class="primary--text">
            {{ new Date().getFullYear() }} —
            <strong>{{ title }}</strong>
          </v-card-text>
        </div>
      </v-card>
      <v-card
        width="100%"
        flat
        tile
        elevation="6"
        class="second-footer primary darken-1"
        height="20vh"
      >
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    icons: [
      { icon: "mdi-facebook", link: "" },
      { icon: "mdi-twitter", link: "" },
      { icon: "mdi-linkedin", link: "https://www.linkedin.com/groups/9202512" },
      { icon: "mdi-instagram", link: "" },
    ],
  }),
};
</script>
<style>
.icon-link {
  text-decoration: none;
}
.first-card {
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
}
.card {
  position: relative;
  margin-bottom: 100px;
  z-index: 10;
}
.footer {
  background-color: #ecc434 !important;
}
.second-footer{
  /* background-color: #f9ae4c !important; */
}
.popup-footer-card {
  margin: auto;
  margin-bottom: -10vh;
  z-index: 12;
  display: flex;
  align-items: end;
  justify-content: center;
  /* background-color: #f3981e !important; */
}
</style>
