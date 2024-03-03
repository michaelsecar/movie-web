<script>
    export let description = ""
    export let catalog = ""
    export let href = ""

</script>

<a class="rounded-lg p-4 
    bg-gradient-to-br from-primary to-secondary
    hover:from-secondary hover:to-tertiary 
" href={href}>

    <div class="text-xl uppercase font-bold pb-5">
        {catalog}
    </div>
    <div>
        {description}
    </div>
</a>