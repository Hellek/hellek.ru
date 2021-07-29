<template>
	<div class="text-red-400">
		<h1 v-if="error.statusCode === 404">Страница не найдена</h1>
		<h1 v-else>Произошла ошибка :(</h1>
	</div>
</template>

<script>
export default {
	props: {
		error: {
			type: Object,
			default: () => ({}),
		},
	},
}
</script>
