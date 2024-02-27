<script>
    import "../app.css"
    import Navbar from "$lib/components/Navbar.svelte"
    import Sidebar from "$lib/components/Sidebar.svelte"
    import Footer from "$lib/components/Footer.svelte"
</script>

<body class="dark 
    dark:bg-background dark:text-foreground
    dark:border-primary
">
    <Navbar/>
    <main class="flex justify-center">
        <Sidebar/>
        <section class="bg-background-secondary flex w-5/6 pt-16 pb-8 px-8">
            <slot/>
        </section>
    </main>
    <Footer/>
</body>