
<script>
    import FilterContainer from "$lib/components/filters/FilterContainer.svelte";
    let value = 1950
</script>

<FilterContainer>
    <label for="genre" class="rounded-l-md h-full items-center flex px-2 min-w-20 md:w-auto">
        Año
    </label>
    <div class="flex items-center gap-2 h-10 bg-background-secondary w-full rounded-r-md px-2 accent-secondary ">
        {value}
        <input type="range" name="year" id="year" bind:value min="1950" max="2024" class="outline-none w-full">
    </div>

</FilterContainer>