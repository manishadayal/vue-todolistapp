import Vue from 'vue';
import App from './App.vue';
import router from './router';
import firebase from 'firebase/app';
import store from './store'
import VueResource from "vue-resource"

var firebaseConfig = {
    apiKey: "AIzaSyAXoAkhPnmRxyAMGfrR-XQ-GYfIod7H1qw",
    authDomain: "authenticate-2b945.firebaseapp.com",
    projectId: "authenticate-2b945",
    storageBucket: "authenticate-2b945.appspot.com",
    messagingSenderId: "149891884043",
    appId: "1:149891884043:web:b03d71b720fd582c6bd30e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;
Vue.use(VueResource);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');