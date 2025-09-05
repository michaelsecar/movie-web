import { env } from '$env/dynamic/private'

/** @type {import('./$types').RequestHandler} */
export const GET = async () => {
    const url = 'https://moviesverse1.p.rapidapi.com/most-trending-movies'
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': env.API_KEY,
            'x-rapidapi-host': env.API_HOST
        }
    }
    const response = await fetch(url, options)
    const result = await response.json()
    return new Response(JSON.stringify(result))
}
