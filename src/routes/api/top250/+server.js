import { env } from '$env/dynamic/private';

/** @type {import('./$types').RequestHandler} */
export const GET = async () => {
    const url = 'https://moviesverse1.p.rapidapi.com/top-250-movies'
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': env.API_KEY,
            'X-RapidAPI-Host': env.API_HOST
        }
    }
    const response = await fetch(url, options)
    const data = await response.json()
    return new Response(JSON.stringify(data))
}
