<script>
    import SearchIcon from '$lib/icons/Search.svelte'
    import Input from '$lib/components/Input.svelte'

    const onInputChange = (/** @type {string} */ value) => {
        console.log(value)
    }
</script>

<section class="border-b-2 dark:border-secondary font-semibold flex dark:bg-background p-2">
    <ul class="flex justify-between w-full items-center">
        <li>
            <a class="text-2xl" href="/">MOVIE-WEB</a>
        </li>
        <li class="flex">
            <ul class="flex gap-4 items-center">
                <li>
                    <a href="/categoria">Categorias</a>
                </li>
                <li>
                    <a href="/estrenos">Estrenos</a>
                </li>
                <li class="flex items-center">
                    <Input placeholder="Buscar..." onChange={onInputChange}/>
                    <button class="p-2 rounded-r-lg border-gray-400 border-2 border-l-0"><SearchIcon/></button>
                </li>
            </ul>
        </li>
    </ul>
</section>