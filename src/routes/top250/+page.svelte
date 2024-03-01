<script>
    import { onMount } from "svelte"
    import MovieCard from "$lib/components/MovieCard.svelte"
    import Filters from "$lib/components/Filters.svelte"
    import Loading from "$lib/components/Loading.svelte"
    import Error from "$lib/components/Error.svelte"

    const CHUNK_SIZE = 36

    let movies = []
    let chunk_index = 0
    let loading = true
    let error = false

    const createChunks = (data) => {
        return Array.from(
            {length: Math.ceil(data.length / CHUNK_SIZE)},
            (v, i) => data.slice(i * CHUNK_SIZE, i * CHUNK_SIZE + CHUNK_SIZE)
        )
    }

    onMount(async () => {
        const res = await fetch("/api/top250")
        const data = (await res.json()).movies

        if (!data) 
        {
            // Error en la carga de datos
            loading = false
            error = true
            return
        }
        const chunked = createChunks(data)
        movies = chunked[chunk_index]
        loading = false
    })
</script>

<Filters/>
{#if loading } <Loading/> {/if}
{#if error} <Error/> {/if}
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-4 p-5
    border-t-0 rounded-b-lg
    bg-background
">
    {#each movies as movie}
        <MovieCard movie={movie} />
    {/each}
</div>