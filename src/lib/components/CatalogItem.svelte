<script>
    export let description = ""
    export let catalog = ""
    export let href = ""

</script>

<a class="border-2 rounded-lg p-4 
    border-foreground-secondary bg-background
    bg-gradient-to-r from-background to-background
    hover:from-background-secondary 
" href={href}>

    <div class="text-xl uppercase font-bold">
        {catalog}
    </div>
    <div>
        {description}
    </div>
</a>