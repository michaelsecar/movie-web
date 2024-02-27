<script>
    import MovieCard from "$lib/components/MovieCard.svelte";
    import Filters from "../lib/components/Filters.svelte";
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