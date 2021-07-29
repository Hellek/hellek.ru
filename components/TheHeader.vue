<template>
	<div class="py-4">
		<nuxt-link
			v-for="(link, i) in links"
			:key="i"
			:to="link.to"
			class="py-1 px-2 uppercase"
			:class="i === 0 ? 'bg-red-400' : 'hover:bg-yellow-400'"
			exact-active-class="bg-red-400"
		>{{ link.label }}</nuxt-link>
	</div>
</template>

<script>
export default {
	name: 'TheHeader',
	data() {
		return {
			links: [
				{ to: '/', label: 'Pro' },
				{ to: '/investments', label: 'Инвестиции' },
			],
		}
	},
}
</script>
