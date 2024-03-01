<script>
    import "../app.css"
    import Navbar from "$lib/components/Navbar.svelte"
    import Footer from "$lib/components/Footer.svelte"
    import Catalog from "$lib/components/Catalog.svelte"
</script>

<body class="dark 
    dark:bg-background dark:text-foreground
    dark:border-primary
    min-h-screen
">
    <Navbar/>
    <main class="flex justify-around ">
        <section class="bg-background-secondary flex w-5/6 pt-20 pb-8 px-8">
            <div class="flex flex-col w-full">
                <Catalog/>
                <div class="bg-background border-2 border-foreground-secondary rounded-lg">
                    <slot/>
                </div>
            </div>
        </section>
    </main>
    <Footer/>
</body>