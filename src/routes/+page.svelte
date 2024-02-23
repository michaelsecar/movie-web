<script>
    import MovieCard from "$lib/components/MovieCard.svelte";
    let movies = [
        {
            title:"Loter",
            description: "una peli",
            imageUrl:"https://picsum.photos/200/300"
        },
        {
            title:"Loter",
            description: "una peli",
            imageUrl:"https://picsum.photos/200/300"
        },
        {
            title:"Loter",
            description: "una peli",
            imageUrl:"https://picsum.photos/200/300"
        },
        {
            title:"Loter",
            description: "una peli",
            imageUrl:"https://picsum.photos/200/300"
        },
        {
            title:"Loter",
            description: "una peli",
            imageUrl:"https://picsum.photos/200/300"
        },
        {
            title:"Loter",
            description: "una peli",
            imageUrl:"https://picsum.photos/200/300"
        }
    ]

</script>

<div class="m-4 flex flex-col w-full">
    <h1 class="text-4xl font-bold">Películas</h1>
    <div class="py-4">
        <p>Visit kit.svelte.dev to read the documentation</p>
    </div>
    <div class="grid grid-cols-5 w-full gap-4">
        {#each movies as movie}
            <MovieCard movie={movie} />
        {/each}
    </div>
</div>
