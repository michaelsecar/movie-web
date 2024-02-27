
<script>
    export let href="#"
    export let text=""
</script>

<a href={href} class="flex items-center gap-2
    border-l-4 border-primary p-2 bg-background-secondary
">
    <slot/>
    {text}
</a>