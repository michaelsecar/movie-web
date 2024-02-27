
<script>
    import Genre from "./Filters/Genre.svelte";
    import Year from "./Filters/Year.svelte";
    import Name from "./Filters/Name.svelte";
</script>

<div class="flex border-2 p-4 rounded-t-lg bg-background
    border-foreground-secondary justify-around gap-2
    flex-col md:flex-row
">
    <Name/>
    <Genre/>
    <Year/>
</div>