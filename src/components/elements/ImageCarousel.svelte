<script lang="ts">
    import { onMount } from "svelte";

    import FaChevronLeft from "svelte-icons/fa/FaChevronLeft.svelte";
    import FaChevronRight from "svelte-icons/fa/FaChevronRight.svelte";

    interface ImageDefinition {
        src: string;
        alt: string;
        format: string;
    }

    export let images: ImageDefinition[] = [];

    export let currentImage = 0;
    export let interval = 5000;
    export let auto = true;

    onMount(() => {
        if (auto) {
            setInterval(() => {
                currentImage = (currentImage + 1) % images.length;
            }, interval);
        }
    });
</script>

<div class="carousel">
    <img
        src={images[currentImage].src}
        alt={images[currentImage].alt}
        class="current-image"
    />
    <div class="controls">
        <button
            class="control-button"
            on:click={() => (currentImage = (currentImage + 1) % images.length)}
        >
            <FaChevronLeft />
        </button>
        <button
            class="control-button"
            on:click={() => (currentImage = (currentImage + 1) % images.length)}
        >
            <FaChevronRight />
        </button>
    </div>
</div>

<style lang="scss">
    .carousel {
        height: 30rem;
        width: 30rem;

        .current-image {
            height: 100%;
            width: 100%;
            object-fit: cover;
            border-radius: 0.5rem;
        }

        .controls {
            margin-top: -100%;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            width: calc(100% - 2rem);
            height: calc(100% - 2rem);
            padding: 1rem;
            background-color: transparent;
            border-radius: 0.5rem;

            .control-button {
                width: 2rem;
                height: 2rem;
                border-radius: 1rem;
                background-color: var(--color-background);
                color: var(--color-text);
                border: none;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                outline: none;
                padding: 0.25rem;
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
