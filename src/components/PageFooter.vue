<template>
  <footer>
    <span v-html="WebsiteSetting.footer_text"></span>
    <router-link to="/about">About</router-link>
  </footer>
</template>

<script>

import gql from 'graphql-tag'

export default {
  data() {
    return {
      WebsiteSetting: ''
    }
  },
  apollo: {
    WebsiteSetting: gql`
      {
        WebsiteSetting {
          title,
          footer_text
        }
      }
    `
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  span {
    display: inline-block;
    margin-right: 10px;
  }

  a {
    color: #3eaf7c;
    font-weight: bold;
  }
</style>
