
<script>
     export let movie 
     import Star from "../icons/Star.svelte"
     import Clock from "../icons/Clock.svelte"
     import Calendar from "../icons/Calendar.svelte"
</script>

<div class="rounded-lg overflow-hidden border-2 duration-100
    border-foreground-secondary
    hover:drop-shadow-background relative

    [&>div]:hidden
    [&>div]:hover:flex

    [&>div>div]:from-transparent [&>div>div]:to-transparent [&>div>div]:hover:from-black 

    [&>div>div:first-child]:bg-gradient-to-b
    [&>div>div:nth-child(2)]:bg-gradient-to-t
">
    <img class="h-full hover:scale-105 duration-100
    " src={movie.image} alt=""/>
    <div class="float-start absolute w-full h-full pointer-events-none top-0 flex justify-between flex-col">
        <div class="h-1/4 font-bold text-lg p-2">
            {movie.title}
        </div>
        <div class="h-1/2 px-2 pt-28">
            <div class="flex gap-1 items-center">
                <span class="flex gap-1 font-bold"><Calendar/> AÑO: </span> {movie.year}
            </div>
            <div class="flex gap-1 items-center">
                <span class="flex gap-1 font-bold"><Clock/> DURACIÓN: </span> {movie.timeline}
            </div>
            <div class="flex gap-1 items-center">
                <span class="flex gap-1 font-bold"><Star/> RATING: </span> {movie.rating}
            </div>
        </div>
    </div>
</div>