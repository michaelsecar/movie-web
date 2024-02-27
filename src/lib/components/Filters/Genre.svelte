
<script>
    import FilterContainer from "./FilterContainer.svelte";
</script>

<FilterContainer>
    <label for="genre" class="rounded-l-md h-full items-center flex px-2 min-w-20 md:w-auto">
        Género
    </label>
    <select name="genre" id="genre" class="h-10 rounded-r-md w-full focus:outline-none px-2
        bg-background-secondary border-primary
    ">
        <option value="todos">Todos</option>
        <option value="comedia">Comedia</option>
        <option value="romance">Romance</option>
        <option value="drama">Drama</option>
        <option value="terror">Terror</option>
    </select>
</FilterContainer>
