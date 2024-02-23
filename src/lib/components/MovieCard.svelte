
<script>
    /**
     * @type {{ 
     *  title: string; 
     *  description: string;
     *  imageUrl: string
     * }}
     */
     export let movie 

</script>

<div class="
    border-gray-400 rounded-lg overflow-hidden h-80 border-2 duration-200
    hover:drop-shadow-[0px_0px_10px_rgba(0,0,0,3)] hover:scale-105
    bg-secondary dark:bg-background
">
    <div class="text-2xl p-2">
        {movie.title}
    </div>
    <div class="px-2">
        {movie.description}
    </div>
    <img class="w-full" src={movie.imageUrl} alt=""/>
</div>