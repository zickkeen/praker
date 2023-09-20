import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#040D12',
        secondary: '#183D3D',
        accent: '#5C8374',
        error: '#b71c1c',
        info: '#2196f3',
        success: '#4caf50',
        warning: '#ff5722',
      }, 
    },
    dark: false,
  },
});
