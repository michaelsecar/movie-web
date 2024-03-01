<script>
    import FilterContainer from "$lib/components/filters/FilterContainer.svelte";
    let value = ""
    const onChange = (value) => {
        console.log(value)
    }
</script>

<FilterContainer>
    <label for="name" class="rounded-l-md h-full items-center flex px-2 min-w-20 md:w-auto">
        Nombre
    </label>
    <input type="text" name="name" id="name" bind:value on:change={onChange} placeholder="Nombre..." class="
        h-10 rounded-r-md w-full focus:outline-none px-2
        bg-background-secondary border-primary
    ">
</FilterContainer>