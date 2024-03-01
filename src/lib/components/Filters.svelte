
<script>
    import Genre from "$lib/components/filters/Genre.svelte";
    import Year from "$lib/components/filters/Year.svelte";
    import Name from "$lib/components/filters/Name.svelte";
    import Button from "$lib/components/Button.svelte"
    import FilterIcon from "$lib/icons/Filter.svelte"
</script>

<div class="flex border-b-2 p-4 rounded-t-lg bg-background
    border-foreground-secondary justify-around gap-2
    flex-col md:flex-row
">
    <Name/>
    <Genre/>
    <Year/>
    <Button>
        <div class="flex items-center gap-1">
            <FilterIcon/><span>Filtrar</span>
        </div>
    </Button>
</div>