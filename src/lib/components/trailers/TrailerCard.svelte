<script>
     export let trailer
     import Clock from "$lib/icons/Clock.svelte"
     import Calendar from "$lib/icons/Calendar.svelte"
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
    " src={trailer.image} alt=""/>
    <div class="float-start absolute w-full h-full pointer-events-none top-0 flex justify-between flex-col">
        <div class="h-1/4 font-bold text-lg p-2">
            {trailer.title}
        </div>
        <div class="h-1/2 px-2 pt-28">
            <div class="flex gap-1 items-center">
                <span class="flex gap-1 font-bold"><Clock/> DURACIÓN: </span> {trailer.trailerLength}
            </div>
            <div class="flex gap-1 items-center">
                <span class="flex gap-1 font-bold"><Calendar/> FECHA: </span> {trailer.releaseDate}
            </div>
        </div>
    </div>
</div>