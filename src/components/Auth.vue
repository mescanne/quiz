<template lang="html">
  <div id="firebaseui-auth-container"></div>
</template>

<script>

import * as firebase from 'firebase/app';
//import * as firebaseui from 'firebaseui'

export default {
  name: 'auth',
  mounted() {
    console.log('firebase:', firebase);
    // var uiConfig = {
    //   signInSuccessUrl: '/success',
    //   signInOptions: [
    //     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    //     firebase.auth.EmailAuthProvider.PROVIDER_ID
    //   ]
    // };
    // console.log('firebaseui:', firebaseui);
    // var ui = new firebaseui.auth.AuthUI(firebase.auth());
    // ui.start('#firebaseui-auth-container', uiConfig);
  },
}
</script>
