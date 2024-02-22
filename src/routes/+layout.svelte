<script>
    import "../app.css"
    import Navbar from "$lib/components/Navbar.svelte"
    import Sidebar from "$lib/components/Sidebar.svelte"
    import Footer from "$lib/components/Footer.svelte"
</script>


<body class="dark dark:bg-primary text-secondary">
    <Navbar/>
    <main class="flex">
        <Sidebar/>
        <slot/>
    </main>
    <Footer/>
</body>