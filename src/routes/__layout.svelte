<script lang="ts">
    import "../app.css";
    import "../app.scss";
    import Header from "$components/layout/Header.svelte";
    import Footer from "$layout/Footer.svelte";
    import "$styles/index.scss";
</script>

<div class="page">
    <header />

    <main>
        <slot />
    </main>

    <footer />
</div>

<style lang="scss">
    .page {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        main {
            flex: 1;
            display: flex;
            flex-direction: column;
            padding: 1rem;
            width: 100%;
            margin: 0 auto;
            box-sizing: border-box;
        }
    }
</style>
