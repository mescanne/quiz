<template>
    <b-navbar>
        <template slot="brand">
            <b-navbar-item tag="router-link" to="/">
                <img
                    src="img/KidsQuizTitle.svg"
                    alt="Kids Quiz"
                >
            </b-navbar-item>
            <b-navbar-item tag="router-link" to="/">
                Home
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-dropdown label="Info">
                <b-navbar-item @click="doAbout">
                    About
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>

	<!--
        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary">
                        <strong>Sign up</strong>
                    </a>
                    <a class="button is-light">
                        Log in
                    </a>
                </div>
            </b-navbar-item>
        </template>
	-->
    </b-navbar>
</template>

<script>
export default {
  name: 'Menu',
  methods: {
    doAbout() {
      this.$buefy.dialog.alert('Hello. About here.');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
