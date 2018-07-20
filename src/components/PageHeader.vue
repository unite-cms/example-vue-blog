<template>
  <header>
    <h1>{{ WebsiteSetting.title }}</h1>    
  </header>
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
  h1 {
    margin-top: 50px;
  }
</style>
