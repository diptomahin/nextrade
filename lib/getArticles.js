export default async function getArticles(_id) {
  const result = await fetch(
    `https://nextrade-server.vercel.app/v1/api/articles/${_id}`
  );

  return result.json();
}
