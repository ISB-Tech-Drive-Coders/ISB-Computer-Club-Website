<script context="module" lang="ts">
    import { base } from "$app/paths";
    import { page } from "$app/stores";
    import "$styles/techdrive/layout.scss";

    export const prerender = true;
</script>

<svelte:head>
    <title>Tech Drive</title>
    <meta name="description" content="Tech Drive - ISB Computer Club" />
</svelte:head>

<div class="content">
    <div class="sidebar">
        <a
            href="{base}/techdrive"
            class:active={$page.url.pathname == `${base}/techdrive` ||
                $page.url.pathname == `${base}/techdrive/`}
            >What is the ISB tech drive?</a
        >
        <a
            href="{base}/techdrive/donations"
            class:active={$page.url.pathname == `${base}/techdrive/donations` ||
                $page.url.pathname == `${base}/techdrive/donations/`}
            >What should you donate?</a
        >
        <a
            href="{base}/techdrive/check"
            class:active={$page.url.pathname == `${base}/techdrive/check` ||
                $page.url.pathname == `${base}/techdrive/check/`}
            >Can I donate my device?</a
        >
        <a
            href="{base}/techdrive/faq"
            class:active={$page.url.pathname == `${base}/techdrive/faq` ||
                $page.url.pathname == `${base}/techdrive/faq/`}>FAQ</a
        >
        <a
            href="{base}/techdrive/thanks"
            class:active={$page.url.pathname == `${base}/techdrive/thanks` ||
                $page.url.pathname == `${base}/techdrive/thanks/`}
            >Special Thanks</a
        >
    </div>
    <slot />
</div>
