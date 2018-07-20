<template>
  <section>
    <article v-for="article in articles" v-bind:key="article.id">
      <div class="block" v-on:click="navigateToArticle(article.id)">
        <header>
          <img v-bind:src="article.image.url" v-bind:alt="article.headline" />
        </header>
        <h2>{{ article.headline }}</h2>
        <aside>{{ article.created|moment("d MMMM YYYY") }}</aside>
      </div>
    </article>
  </section>
</template>

<script>

import gql from 'graphql-tag'

export default {
  data() {
    return {
      articles: []
    }
  },
  methods: {
    navigateToArticle(id) {
      this.$router.push('article/' + id);
    }
  },
  apollo: {
    articles: {
      query: gql`
        {
          findArticles(
            sort: {
              field: "created",
              order: "DESC"
            },
            limit: 9,
            page: 1
          ) {
            result {
              id,
              created,
              headline,
              image {
                url
              }
            }
          }
        }
      `,
      update: (result) => { return result.findArticles.result; }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  section {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: center;
    max-width: 1140px;
    margin: 50px auto;
  }

  section article {
    width: 100%;
    max-width: 350px;
    box-sizing: border-box;
    padding: 10px;
  }

  section article .block {
    cursor: pointer;
    padding: 0;
  }  

  section article header {
    height: 150px;
    background: #333;
    text-align: center;
    overflow: hidden;
    line-height: 150px;
  }  

  section article img {
    width: 100%;
    height: auto;
    display: inline-block;
    vertical-align: middle;
    transition: all 0.5s ease-out;
  }

  section article h2 {
    opacity: 0.5;
    transition: all 0.3s ease-out;
  }

  section article aside {
    padding: 0 15px 10px;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    text-align: right;
    opacity: 0.5;
    transition: all 0.3s ease-out;
  }

  section article .block:hover {
    box-shadow: 0 10px 25px 3px rgba(0,0,0,0.2);
  }

  section article .block:hover header img {
    width: 110%;
    margin-left: -5%;
    margin-top: -5%;
  }

  section article .block:hover h2,
  section article .block:hover meta {
    opacity: 1;
  }

</style>
