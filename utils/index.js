export const getArticles = async () => {
	return await (await fetch('./articles.json')).json()
}
