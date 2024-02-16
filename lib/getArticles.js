export default async function getArticles(_id) {
    const result = await fetch(`https://nex-trade-server.vercel.app/v1/api/articles/${_id}`)
    
    return result.json()

}