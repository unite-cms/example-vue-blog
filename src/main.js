import VueRouter from 'vue-router'
import VueMoment from 'vue-moment'
import { ApolloClient } from 'apollo-client'
import { ApolloLink, from } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'

import Vue from 'vue'
import App from './App.vue'
import ArticleList from './components/ArticleList.vue'
import ArticleDetails from './components/ArticleDetails.vue'
import About from './components/About.vue'

// Install vue plugins
Vue.use(VueApollo);
Vue.use(VueMoment);
Vue.use(VueRouter);

// init graphql endpoint
const httpLink = new HttpLink({ uri: process.env.VUE_APP_UNITE_API_ENDPOINT });

// add the authorization to the headers
const authMiddleware = new ApolloLink((operation, forward) => {  
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: process.env.VUE_APP_UNITE_API_KEY,
    } 
  }));
  return forward(operation);
})


// Create apollo client and provider
const apolloClient = new ApolloClient({ 
  link: from([ authMiddleware, httpLink ]), 
  cache: new InMemoryCache() 
});
const apolloProvider = new VueApollo({ 
  defaultClient: apolloClient 
});


// Define routes
const router = new VueRouter({
  routes: [
    { path: '/', component: ArticleList },
    { path: '/about', component: About },
    { path: '/article/:id', component: ArticleDetails }
  ]
})

// Init vue app (with the apollo provider)
new Vue({
  router: router,
  provide: apolloProvider.provide(),
  render: h => h(App),
}).$mount('#app')
