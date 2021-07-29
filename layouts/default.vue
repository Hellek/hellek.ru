<template>
	<div class="min-h-screen flex flex-col text-white">
		<div class="bg-gray-700">
			<TheHeader class="base-container"/>
		</div>

		<div class="py-8 flex-grow about-bg">
			<div class="base-container">
				<Nuxt/>
			</div>
		</div>

		<div class="bg-gray-700">
			<TheFooter class="base-container"/>
		</div>
	</div>
</template>

<style lang="postcss">
.base-container {
	@apply container mx-auto px-1;
}
</style>

<style lang="scss">
.about-bg {
	background: linear-gradient(45deg, #2196f3 0%, darken(#2196f3, 50%) 100%);
	background-size: 200% 200%;
	height: 100%;
	width: 100%;
	animation: background 6s ease infinite;
}

@keyframes background {
	0% {
		background-position: 0% 50%;
	}

	50% {
		background-position: 100% 50%;
	}

	100% {
		background-position: 0% 50%;
	}
}
</style>
