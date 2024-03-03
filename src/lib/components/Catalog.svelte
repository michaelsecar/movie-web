<script>
    import CatalogItem from "$lib/components/CatalogItem.svelte";
</script>

<div class="grid grid-cols-2 gap-2 py-4">

<CatalogItem href="/top250" catalog="Top 250" description="Revisa las mejores películas en base a su puntuaciones"/>
<CatalogItem href="/trailers" catalog="Trailers" description="Échale un ojo a estos trailers"/>
<CatalogItem href="#" catalog="Populares" description="Las películas más votadas"/>
<CatalogItem href="#" catalog="Noticias" description="Noticias cinematrograficas"/>

</div>