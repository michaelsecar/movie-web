
<script>
    import Menu from "../icons/Menu.svelte"
    import Close from "../icons/Close.svelte"
    import Category from "../icons/Category.svelte"
    import Star from "../icons/Star.svelte"
    import Search from "$lib/components/Search.svelte"
    import Anchor from '$lib/components/Anchor.svelte'

    let showMenu = false
    const toggleMenu = () => {
        showMenu = !showMenu
        console.log(showMenu)
    }
</script>

<button on:click={toggleMenu}>
    <Menu/>
</button>

{#if showMenu}
    <div class="fixed top-0 right-0 h-screen border-l-2
        bg-background border-primary flex flex-col justify-between
        "
    >
        <div class="p-4">
            <ul class="flex gap-4 flex-col
                hover:[&>li>a]:text-secondary
                [&>li>a]:duration-100
            ">
                <li class="flex justify-around">
                    <button on:click={toggleMenu} class="border-2 rounded-full p-2 duration-200
                        text-primary border-primary
                        hover:bg-secondary hover:text-foreground
                    ">
                        <Close/>
                    </button>
                </li>
                <li class="flex items-center py-4">
                    <Search/>
                </li>
                <li>
                    <Anchor href="/categoria">
                        <Category/>
                        <span>Categorias</span>
                    </Anchor>
                </li>
                <li>
                    <Anchor href="/estrenos">
                        <Star/>
                        <span>Estrenos</span>
                    </Anchor>
                </li>
            </ul>
        </div>
        <div class="text-center font-light p-4
            bg-tertiary dark:text-foreground
        ">
            Copyright © 2024 Movie-Web
        </div>
    </div>
{/if}