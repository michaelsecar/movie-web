<script>
    import Search from '$lib/components/Search.svelte'
    import Menu from '$lib/components/Menu.svelte'

    let showMenu = false
  
</script>

<section class="border-b-2 font-bold text-sm flex p-2 px-8 text-primary w-full
    border-tertiary dark:shadow-lg dark:shadow-background dark:bg-background
    fixed top-0
    z-10
">
    <ul class="flex justify-between w-full items-center">
        <li>
            <a class="text-3xl font-bolder" href="/">MOVIE-WEB</a>
        </li>
        <li class="flex md:hidden">
            <Menu/>
        </li>
        <li class="hidden md:flex">
            <ul class="flex gap-8 items-center
                hover:[&>li>a]:text-secondary
                [&>li>a]:duration-100
            ">
                <li>
                    <a href="/categoria">Categorias</a>
                </li>
                <li>
                    <a href="/estrenos">Estrenos</a>
                </li>
                <li class="flex items-center">
                    <Search/>
                </li>
            </ul>
        </li>
   </ul>
</section>