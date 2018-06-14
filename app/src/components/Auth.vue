<template>
  <div>
    <form>
      <h1 v-if="newUser">{{ label }}</h1>
      <a @click.prevent="newUser = ! newUser">{{ newUser ? "Already a member?" : "New user?"}}</a>
      Username: <input v-model="creds.username">
      Password: <input v-model="creds.password">  // Add show/hide
      <input
        type="button"
        @click.prevent="newUser ? handleSignUp() : handleSignIn()"
        value="Submit"
      > {{ newUser }}
    </form>
  </div>
</template>

<script>
import {
  signIn,
  signUp } from '../services/api.js';
export default {
  data() {
    return {
      newUser: true,
      creds: {},
      label: this.newUser ? 'Sign Up' : 'Sign In'
    };
  },
  methods: {
    handleSignUp() {
      console.log('here?');
      signUp(this.creds)
        .then(res => {
          console.log(res);
          this.creds = {};
        });
    },
    handleSignIn() {
      console.log('in the sign in');
      signIn();
    }
  }
};
</script>

<style>

</style>
