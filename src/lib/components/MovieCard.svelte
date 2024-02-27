
<script>
     export let movie 
</script>

<div class="rounded-lg overflow-hidden h-72 border-2 duration-100
    border-foreground-secondary dark:bg-background-secondary
    hover:drop-shadow-background hover:scale-102
">
    <div class="text-2xl p-2">
        {movie.title}
    </div>
    <div class="px-2">
        {movie.description}
    </div>
    <img class="w-full" src={movie.imageUrl} alt=""/>
</div>