<script lang="ts">
    import RadioGroup from "$elements/RadioGroup.svelte";

    $: value = 0;

    const options = [
        "It is in functional condition.",
        "It works in a way.",
        "It is smashed or broken.",
        "It is iCloud&trade; locked, but functional.",
        "It needs an OS, Windows product key, or something similar.",
    ];

    const handleSubmit = (value: number) => {
        switch (value) {
            case 0:
                return "We will see if we can use it. If not, we will wipe it and recycle it for free!";
            case 1:
                return "We will see if we can use it. If not, we will wipe it and recycle it for free!";
            case 2:
                return "We will see if we can use it. If not, we will wipe it and recycle it for free!";
            case 3:
                return "We will do our best to unlock it, and then see if we can use it. If not, we will wipe it and recycle it for free!";
            case 4:
                return "We will see if we can use it. If not, we will wipe it and recycle it for free!";
            default:
                return "We will see if we can use it. If not, we will wipe it and recycle it for free!";
        }
    };

    $: result = handleSubmit(value);
</script>

<section id="check">
    <h2>Can I donate my device?</h2>

    <p>Just a simple check to see where your device will end up.</p>

    <RadioGroup {options} bind:value title="Device Condition" />

    <p>{result}</p>
</section>
