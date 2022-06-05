<script lang="ts">
    export let value = 0;
    export let options: string[] = [];
    export let title = "";

    let _options: {
        value: string;
        index: number;
        element: HTMLInputElement | null;
    }[] = options.map((o, i) => ({ value: o, index: i, element: null }));
</script>

<div class="radio-group">
    <h4>{title}</h4>
    <div class="options">
        {#each _options as option}
            <div class="option" on:click={() => (value = option.index)}>
                <span class="check"
                    >{@html value === option.index ? "&check;" : ""}</span
                >
                <p class="text">{@html option.value}</p>
            </div>
        {/each}
    </div>
</div>

<style lang="scss">
    .radio-group {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 1rem;

        h4 {
            margin-left: 4rem;
            margin-top: 0.5rem;
        }

        .options {
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            .option {
                display: flex;
                flex-direction: row;
                align-items: center;
                cursor: pointer;
                user-select: none;
                padding: 0;
                margin: 0.25rem;
                height: 2rem;

                .check {
                    width: 1.5rem;
                    height: 1.5rem;
                    border-radius: 50%;
                    border: none;
                    margin-right: 0.5rem;
                    outline: none;
                    background-color: var(--color-background);
                    color: var(--color-text);
                    text-align: center;
                }
            }
        }
    }
</style>
