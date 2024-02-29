<script>
    import { onMount } from "svelte";
    import MovieCard from "$lib/components/MovieCard.svelte";
    import Filters from "../lib/components/Filters.svelte";

    const CHUNK_SIZE = 36

    let movies = []
    let chunk_index = 0

    const createChunks = (data) => {
        return Array.from(
            {length: Math.ceil(data.length / CHUNK_SIZE)},
            (v, i) => data.slice(i * CHUNK_SIZE, i * CHUNK_SIZE + CHUNK_SIZE)
        )
    }

    onMount(async () => {
        const res = await fetch("/api/top250")
        const data = (await res.json()).movies
        if (!data) return
        const chunked = createChunks(data)
        movies = chunked[chunk_index]
    })
</script>

<div class="flex flex-col w-full">
    <div class="flex py-4 flex-col sm:flex-row">
        <div class="flex flex-col sm:w-1/2 justify-center gap-10 pb-4 sm:pb-0">
            <h1 class="text-3xl font-bold text-primary">
                Películas en estreno, tendencias y más...
            </h1>
            <p>
                Revisa el el catalogo de peliculas disponible que tenemos para ti.
                Encuentralas de la mejor manera.
            </p>
        </div>
        <div class="flex sm:w-1/2 border-2 border-foreground-secondary h-80 rounded-lg overflow-hidden">
            <video src="https://www.w3schools.com/html/mov_bbb.mp4" class="w-fit">
                <track kind="captions" />
                Your browser does not support the video tag.
            </video>
        </div>
   </div>
    <Filters/>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-4 p-5
        border-2 border-t-0 border-foreground-secondary rounded-b-lg
        bg-background
    ">
        {#each movies as movie}
            <MovieCard movie={movie} />
        {/each}
    </div>
</div>