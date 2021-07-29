<template>
	<div>
		<div class="text-2xl mb-6">{{ article.title }}</div>
		<div>{{ article.text }}</div>
	</div>
</template>

<script>
// import { getArticles } from 'Utils/index'

export default {
	name: 'Article',
	data() {
		return {
			article: {},
		}
	},
	/* async fetch() {
		const articles = await getArticles()
		this.article = articles.find(i => i.id === +this.$route.params.article) || {}
	}, */
}
</script>
