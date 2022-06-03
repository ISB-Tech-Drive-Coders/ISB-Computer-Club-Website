<script context="module" lang="ts">
    export const prerender = true;

    let name = "";
    let email = "";
    let subject = "";
    let message = "";

    const handleSubmit = () => {
        if (
            name.replace(/\s/g, "") === "" ||
            email.replace(/\s/g, "") === "" ||
            subject.replace(/\s/g, "") === "" ||
            message.replace(/\s/g, "") === ""
        ) {
            alert("Please fill out all the fields!");
            return;
        }
        const url = `mailto:ISBtechdrive@hotmail.com?subject=${subject}&body=${message.replace(
            /\n/g,
            "%0D%0A"
        )}%0D%0A%0D%0A----------%0D%0AFor internal purposes - DO NOT DELETE!%0D%0AName: ${name}%0D%0AEmail: ${email}`;
        window.open(url);
    };
</script>

<svelte:head>
    <title>Contact Us</title>
    <meta name="description" content="Contact Us - ISB Computer Club" />
</svelte:head>

<section>
    <p>To contact us, you can use our email:</p>
    <a href="mailto:ISBtechdrive@hotmail.com" target="_blank"
        >ISBtechdrive@hotmail.com</a
    >

    <p>Or, you can use the form below:</p>
    <!-- We have to say the method is POST for accessibility. This allows autofill to work. -->
    <form action="" method="POST" on:submit|preventDefault={handleSubmit}>
        <label for="name">Name:</label>
        <input type="text" name="name" id="name" bind:value={name} />
        <label for="email">Email:</label>
        <input type="email" name="email" id="email" bind:value={email} />
        <label for="subject">Subject:</label>
        <input type="text" name="subject" id="subject" bind:value={subject} />
        <label for="message">Message:</label>
        <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            bind:value={message}
        />
        <input type="submit" value="Send" />
    </form>
</section>

<style lang="scss">
    section {
        padding: 1rem;
        background-color: var(--color-background-secondary);
        border-radius: 0.5rem;

        a {
            color: var(--color-text);
            font-weight: bold;
            transition: color 0.4s ease;

            &:hover {
                color: var(--color-text-secondary);
            }
        }

        form {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            padding: 1rem;
            border-radius: 0.5rem;
            background-color: var(--color-background);
            color: var(--color-text);
            transition: background-color 0.4s ease;
            width: 40%;

            label {
                padding: 0.25rem 0.4rem;
                background-color: var(--color-background);
                border-radius: 0.25rem;
                transition: background-color 0.4s ease;
                margin: 0.25rem 0;

                &:hover {
                    background-color: var(--color-background-hover);
                }
            }

            input,
            textarea {
                padding: 0.25rem 0.4rem;
                background-color: var(--color-background-secondary);
                border-radius: 0.25rem;
                transition: background-color 0.4s ease;
                margin-bottom: 1rem;
                border: none;
                width: calc(100% - 0.8rem);
                color: var(--color-text);
                outline: none;

                &:focus {
                    background-color: var(--color-background-hover);
                }
            }

            input:not([type="submit"]) {
                height: 2rem;
                color: var(--color-text) !important;
                text-indent: 0.5rem;
            }

            input[type="submit"] {
                background-color: var(--color-background-inverted);
                color: var(--color-text-inverted);
                border-radius: 0.25rem;
                transition: background-color 0.4s ease;
                border: none;
                cursor: pointer;
                padding: 0.5rem 1rem;
                width: 6rem;

                &:hover {
                    background-color: var(--color-background-hover-inverted);
                }
            }

            textarea {
                height: 10rem;
            }
        }

        @media screen and (max-width: 900px) {
            form {
                width: calc(100% - 2rem);
            }
        }
    }
</style>
