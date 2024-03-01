
<script>
    export let onClick = () => {}
</script>

<button class="
    bg-primary text-background px-4 rounded-md
    hover:bg-secondary 
" on:click={onClick}>
    <slot/>
</button>