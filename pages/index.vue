<template>
  <div>
    <div v-for="component in article.Dynamic" :key="component.__typename">
      <componentResolver :content="component" />
    </div>
  </div>
</template>

<script>
import articleQuery from '~/apollo/queries/article/article'
import componentResolver from '~/components/ComponentResolver.vue'

export default {
  components: {
    componentResolver
  },
  data() {
    return {
      article: {}
    }
  },
  apollo: {
    article: {
      prefetch: true,
      query: articleQuery,
      variables() {
        return {
          id: 1
        }
      }
    }
  },
  head() {
    return {
      title: this.article.MetaTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.MetaDescription
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.article.MetaDescription
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.article.MetaImage.url
        }
      ]
    }
  }
}
</script>
