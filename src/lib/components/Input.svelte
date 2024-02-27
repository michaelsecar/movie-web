<script>
    export let placeholder=""
    export let onChange 
    let value
    $: onChange(value)
</script>

<input class="p-1 px-2 border-2 rounded-lg font-normal 
    dark:bg-background dark:text-foreground dark:border-primary
    focus:drop-shadow-primary focus:outline-none
"
    type="text" bind:value placeholder={placeholder}
/>
