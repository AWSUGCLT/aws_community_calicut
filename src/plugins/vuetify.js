import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  
    theme: {
        themes: {
          dark: {
            primary: "#ec7211",
            secondary: "#222f40",
            textColor:"#444"
            // background: "#FFFFFF",
            // black: "#000000",
            // bg: "#e5e5e5"
          },
          light: {
            primary: "#ec7211",
            secondary: "#222f40",
            textColor:"#444"
            // background: "#FFFFFF",
            // black: "#000000",
            // bg: "#e5e5e5"
          }
        }
      }
});
