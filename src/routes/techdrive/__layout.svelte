<script context="module" lang="ts">
    import { base } from "$app/paths";

    export const prerender = true;
</script>

<svelte:head>
    <title>Tech Drive</title>
    <meta name="description" content="Tech Drive - ISB Computer Club" />
</svelte:head>

<div class="content">
    <div class="sidebar">
        <a href="{base}/techdrive/donations">What should you donate?</a>
        <a href="{base}/techdrive/faq">FAQ</a>
    </div>
    <slot />
</div>

<style lang="scss">
    .content {
        display: flex;
        flex-direction: row;
        scroll-behavior: smooth;

        .sidebar {
            width: 35rem;
            background-color: var(--color-background-secondary);
            border-radius: 0.5rem;
            padding: 1rem;
            margin-right: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            scroll-behavior: smooth;
            height: 6rem;

            a {
                color: var(--color-text-primary);
                text-decoration: none;
                font-size: 1rem;
                font-weight: bold;
                margin-bottom: 1rem;
                padding: 0.5rem 0.75rem;
                border-radius: 0.5rem;
                cursor: pointer;
                user-select: none;
                background-color: var(--color-background);
                transition: background-color 0.4s ease;

                &:hover {
                    background-color: var(--color-background-hover);
                }

                &:active {
                    background-color: var(--color-background-active);
                }
            }
        }
    }

    @media screen and (max-width: 900px) {
        .content {
            flex-direction: column;

            .sidebar {
                margin-bottom: 1rem;
                width: calc(100% - 2rem);
                margin-right: 0;
            }
        }
    }
</style>
