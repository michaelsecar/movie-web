
<script>
    import { onMount } from "svelte";

    import TrailerCard from "$lib/components/trailers/TrailerCard.svelte";
    import Error from "$lib/components/Error.svelte";
    import Loading from "$lib/components/Loading.svelte";

    let trailers = []
    let loading = true
    let error = false
    
    const fetchTrailers = async () => {
        const res = await fetch("/api/trailers")
        const data = await res.json()
        trailers = data.trailers
    }

    onMount(async () => {
        try {
            await fetchTrailers()
        }
        catch (e) {
            error = true
        }
        loading = false
    })
</script>

<div trailers={trailers}>
    {#if loading }
        <Loading/>
    {/if}
    {#if error }
        <Error/>
    {/if}

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
        {#each trailers as trailer}
            <TrailerCard trailer={trailer}/>
        {/each}
    </div>
</div>