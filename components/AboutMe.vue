<template>
	<div class="flex-grow">
		<div class="mb-2">Привет! Я - Роман. Живу и работаю в Санкт-Петербурге 💪</div>
		<div class="mb-2">Это мой блог с личными заметками о финансах и программировании 🙂</div>

		<div>
			<span>Больше обо мне </span>

			<a
				href="https://career.habr.com/rbasharin"
				target="_blank"
				rel="noopener noreferrer"
				class="text-blue-400 font-semibold"
			>здесь 😄</a>
		</div>
	</div>
</template>

<script>
export default {
	name: 'AboutMe',
	head() {
		return {
			title: 'Про автора',
		}
	},
}
</script>
