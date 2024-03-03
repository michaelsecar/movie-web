import { env } from '$env/dynamic/private'

/** @type {import('./$types').RequestHandler} */
export const GET = async () => {
    const url = 'https://moviesverse1.p.rapidapi.com/get-trending-trailers'
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': env.API_KEY,
            'X-RapidAPI-Host': env.API_HOST
        }
    }
    const response = await fetch(url, options)
    const result = await response.json()
    return new Response(JSON.stringify(result))
}
