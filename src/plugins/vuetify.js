import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  
    theme: {
        themes: {
          dark: {
            primary: "#ec7211",
            // primary: "#ecc434",
            secondary: "#4638a0",
            // secondary: "#222f40",
            tertiary:"#232f3e",
            textColor:"#444"
            // background: "#FFFFFF",
            // black: "#000000",
            // bg: "#e5e5e5"
          },
          light: {
            // primary: "#ec7211",
            // primary: "#4330d4",
            // primary: "#ff9904",
            primary: "#ff8054",
            secondary: "#4638a0",
            tertiary:"#232f3e",
            first:"#0129ac",
            second:"#809efc",
            third:"#a7daff",
            // secondary: "#222f40",
            textColor:"#444"
            // background: "#FFFFFF",
            // black: "#000000",
            // bg: "#e5e5e5"
          }
        }
      }
});
