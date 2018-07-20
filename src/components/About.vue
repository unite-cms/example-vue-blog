<template>
  <section>
    <article>
      <div class="block">
        <a href="#" class="back" v-on:click="navigateBack()">Go Back</a>
        <div v-html="WebsiteSetting.about_text"></div>
      </div>
    </article>
  </section>
</template>

<script>

import gql from 'graphql-tag'

export default {
  data() {
    return {
      WebsiteSetting: ''
    }
  },
  methods: {
    navigateBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
    }
  },
  apollo: {
    WebsiteSetting: gql`
      {
        WebsiteSetting {
          about_text
        }
      }
    `
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  section {
    max-width: 900px;
    margin: 50px auto;
  }

  section article {
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
  }

</style>
