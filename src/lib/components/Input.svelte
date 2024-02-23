<script>
    /** @type {string} */
    export let placeholder=""
    /** @type {string} */
    let value
    /** @type {function}*/
    export let onChange 
    $: onChange(value)
</script>

<input 
    class="p-1 px-2 border-2 border-gray-400 rounded-l-lg font-normal focus:outline-none bg-primary text-secondary"
    type="text" bind:value placeholder={placeholder}
/>
