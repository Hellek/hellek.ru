<template>
	<div>
		<div v-if="!articles.length">Эта категория пока пуста</div>

		<div v-else>
			<div
				v-for="(article, i) in articles"
				:key="article.id"
				:class="{'mb-8': articles.length - 1 > i}"
			>
				<nuxt-link :to="{name: 'category-article', params: { category: currentCategory, article: article.id }}" class="text-2xl mb-3">{{ article.title }}</nuxt-link>
			</div>
		</div>
	</div>
</template>

<script>
// import { getArticles } from 'Utils/index'

const categories = {
	investments: { ru: 'инвестиции' },
}

export default {
	name: 'Category',
	data() {
		return {
			articles: [],
		}
	},
	/* async fetch() {
		this.articles = await getArticles()
	}, */
	head() {
		return {
			title: `Про ${categories[this.currentCategory].ru}`,
		}
	},
	computed: {
		currentCategory() {
			return this.$route.params.category
		},
	},
}
</script>
