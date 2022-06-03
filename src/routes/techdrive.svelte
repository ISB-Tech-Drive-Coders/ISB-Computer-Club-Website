<script context="module" lang="ts">
    export const prerender = true;
</script>

<svelte:head>
    <title>Tech Drive</title>
    <meta name="description" content="Tech Drive - ISB Computer Club" />
</svelte:head>

<section>
    <h4>Q: What do we do?</h4>

    <p>
        A: We donate tech to kids who need it. If you have any old technology
        (phones, computers, etc.) , please donate it, even if it doesn't work or
        if it is old. Boxes are located (we are deciding a location). Our goal
        is to stop e-waste and provide everyone with what they need to learn.
    </p>

    <h4>Q: Why should you donate?</h4>

    <p>
        A: What many people don't realize is there are many roadblocks holding
        computers back for around a decade, and you can still use a 15-year-old
        machine nicely now. That makes old computers great for us. Those
        computers can help kids in need with their learning. Your old device
        just needs a chance; <i><b>Give that chance to people in need!</b></i>
    </p>

    <h4>Q: What can I bring?</h4>

    <p>A: Whatever tech you can bring is accepted!</p>

    <h4>Q: Is this available in other languages?</h4>

    <p>
        A: Yes! For Spanish or Chinese translations, please send an email to:
        <a href="mailto:ISBtechdrive@hotmail.com" target="_blank"
            >ISBtechdrive@hotmail.com</a
        >
    </p>

    <p>
        Para obtener una versión en español de este sitio web, envíe un correo
        electrónico a:
        <a href="mailto:ISBtechdrive@hotmail.com" target="_blank"
            >ISBtechdrive@hotmail.com</a
        >
    </p>

    <p>
        如需本網站的中文版，請發送電子郵件至: <a
            href="mailto:ISBtechdrive@hotmail.com"
            target="_blank">ISBtechdrive@hotmail.com</a
        >
    </p>
</section>

<style lang="scss">
    section {
        padding: 1rem;
        background-color: var(--color-background-secondary);
        border-radius: 0.5rem;

        h4 {
            margin-top: 0rem;
            color: var(--color-text);
        }

        a {
            color: var(--color-text);
            text-decoration: underline;
            font-weight: bold;
            transition: color 0.4s ease;

            &:hover {
                color: var(--color-text-secondary);
            }
        }
    }
</style>
