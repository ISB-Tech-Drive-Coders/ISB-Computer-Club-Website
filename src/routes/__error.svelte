<script context="module" lang="ts">
    export function load({ error, status }: { error: any; status: any }) {
        return {
            props: {
                title: `${status}: ${error.message}`,
            },
        };
    }
</script>

<script lang="ts">
    export let title: any;
</script>

<svelte:head>
    <title>Error {title.split(":").shift()}</title>
    <meta name="description" content="Svelte demo app" />
</svelte:head>
