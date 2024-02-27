
<script>
    import SearchIcon from '../icons/Search.svelte'
    let value
    $: onInputChange(value)

    const onInputChange = (value) => {
        console.log("buscando...", value)
    }

</script>

<div class="
    flex
    focus-within:drop-shadow-primary
    duration-200
">
    <input placeholder="Buscar..." on:change={onInputChange} bind:value type="text"
        class="p-1 px-2 border-2 rounded-l-lg font-light
            focus:outline-none placeholder:text-secondary
            dark:bg-background dark:text-foreground dark:border-primary
        "
    />
    <button class="p-2 rounded-r-lg border-2 border-l-0
        dark:border-primary"
    ><SearchIcon/></button>
</div>
