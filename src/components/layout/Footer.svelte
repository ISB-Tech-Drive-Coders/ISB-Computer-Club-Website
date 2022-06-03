<script lang="ts">
</script>

<div class="footer">
    <div class="col">
        <p>ISB Computer Club</p>
        <p>&copy; 2022 (MIT License)</p>
    </div>
    <div class="col">
        <h4>Links</h4>
        <a href="https://github.com/ISB-Tech-Drive-Coders">GitHub</a>
        <a
            href="https://sites.google.com/bsd48.org/isb-tech-drive/isb-tech-drive-homepage"
            >Old Website</a
        >
        <a
            href="https://github.com/ISB-Tech-Drive-Coders/ISB-Computer-Club-Website"
            >Source Code</a
        >
        <a href="ISBtechdrive@Hotmail.com">Contact Us</a>
    </div>
</div>

<style lang="scss">
    .footer {
        height: 12rem;
        background-color: var(--color-background-secondary);
        display: flex;
        align-items: flex-start;
        flex-direction: row;
        justify-content: flex-start;
        padding: 1rem 1rem;
        float: bottom;
        margin-top: auto;

        .col {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            height: 100%;
            width: 15rem;

            p,
            a,
            h4 {
                padding: 0;
                margin: 0.25rem;
                color: var(--color-text);
                text-decoration: none;
            }

            a {
                padding: 0.25rem 0.4rem;
                background-color: var(--color-background);
                border-radius: 0.25rem;
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
</style>
