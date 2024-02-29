
<script>
    import SearchIcon from '../icons/Search.svelte'
    let value=""

    const searchMovie = () => {
        if (!value) return
        console.log("buscando...", value)
    }

</script>

<div class="
    flex
    focus-within:drop-shadow-primary
    duration-200
">
    <input placeholder="Buscar..." bind:value type="text"
        class="p-1 px-2 border-2 rounded-l-lg font-light
            focus:outline-none 
            dark:bg-background-secondary dark:text-foreground dark:border-foreground-secondary
        "
    />
    <button on:click={searchMovie} class="p-2 rounded-r-lg border-2 border-l-0
        dark:border-foreground-secondary"
    ><SearchIcon/></button>
</div>
