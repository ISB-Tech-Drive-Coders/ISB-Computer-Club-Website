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
        <a href="#donations">What should you donate?</a>
        <a href="#faq">FAQ</a>
    </div>
    <div class="sections">
        <section id="donations">
            <h2>What should you donate?</h2>

            <div class="grid">
                <div class="grid-item">
                    <img
                        src="{base}/images/items/Items_01.jpg"
                        alt="Items (01)"
                        class="item"
                    />
                    <p class="name">Laptops</p>
                    <p class="description">
                        Even if it's a really old computer, that will work too.
                        Really old computers, even though they are old, still
                        have their glory and shine.
                    </p>
                </div>
                <div class="grid-item">
                    <img
                        src="{base}/images/items/Items_02.jpg"
                        alt="Items (02)"
                        class="item"
                    />
                    <p class="name">Phones and Tablets</p>
                    <p class="description">
                        We happily accept phones and tablets, as they make great
                        devices for younger and older students. <b
                            >iCloud-locked devices accepted!</b
                        >
                    </p>
                </div>
                <div class="grid-item">
                    <img
                        src="{base}/images/items/Items_03.jpg"
                        alt="Items (03)"
                        class="item"
                    />
                    <p class="name">
                        Any broken tech is accepted for e-waste recycling.
                    </p>
                    <p class="description">
                        We will attempt to repair the device, if it does not
                        work by any means then it will be salvaged for parts
                        then recycled. The parts will go to FreeGeek, a company
                        based in Portland for diverting e-waste.
                    </p>
                </div>
                <div class="grid-item">
                    <img
                        src="{base}/images/items/Items_07.png"
                        alt="Items (07)"
                        class="item"
                    />
                    <p class="name">Desktop PCs</p>
                    <p class="description">
                        Desktop PCs were the most common thing a while ago, they
                        are highly upgradable, and we can upgrade it to today's
                        standards. This stuff is very common and they are <b
                            >INCREDIBLE</b
                        >! Great for higher grades, where any student take on
                        demanding tasks, such as filmmaking, and lot more!
                    </p>
                </div>
                <div class="grid-item">
                    <img
                        src="{base}/images/items/Items_05.jpg"
                        alt="Items (05)"
                        class="item"
                    />
                    <p class="name">Old cables & chargers</p>
                    <p class="description">
                        Kids at ISB who need a cable of some sort can receive
                        them. Laptop chargers fail often, and if it is a
                        proprietary cable, then it is going to be very hard to
                        find it normally. We can get you a special charger if we
                        have it. If it's listed in the Donation List page;
                        linked below, then send us a email if it's still
                        available! ISBtechdrive@hotmail.com
                    </p>
                </div>
                <div class="grid-item">
                    <img
                        src="{base}/images/items/Items_06.jpg"
                        alt="Items (06)"
                        class="item"
                    />
                    <p class="name">Computer Accessories</p>
                    <p class="description">
                        Computer accessories help people who have a computer
                        thing given to them by their school, but don't have the
                        port for it. As most intel macbooks released from 2016
                        to 2020 have needed adapters to plug most accessories
                        in. Docks are incredible! Speakers, keyboards, mice, and
                        trackpads can be donated.
                    </p>
                </div>
                <div class="grid-item">
                    <img
                        src="{base}/images/items/Items_04.jpg"
                        alt="Items (04)"
                        class="item"
                    />
                    <p class="name">Computer Parts</p>
                    <p class="description">
                        Computer parts, like RAM, storage, or anything you can
                        think of, are accepted here, as long as they help us
                        repair devices. We will investigate using the parts to
                        repair the broken chromebooks the school receives.
                    </p>
                </div>
            </div>
        </section>
        <section id="faq">
            <h2>Frequently Asked Questions</h2>

            <h4>Q: What do we do?</h4>

            <p>
                A: We donate tech to kids who need it. If you have any old
                technology (phones, computers, etc.) , please donate it, even if
                it doesn't work or if it is old. Boxes are located (we are
                deciding a location). Our goal is to stop e-waste and provide
                everyone with what they need to learn.
            </p>

            <h4>Q: Why should you donate?</h4>

            <p>
                A: What many people don't realize is there are many roadblocks
                holding computers back for around a decade, and you can still
                use a 15-year-old machine nicely now. That makes old computers
                great for us. Those computers can help kids in need with their
                learning. Your old device just needs a chance; <i
                    ><b>Give that chance to people in need!</b></i
                >
            </p>

            <h4>Q: What can I bring?</h4>

            <p>A: Whatever tech you can bring is accepted!</p>

            <h4>Q: Is this available in other languages?</h4>

            <p>
                A: Yes! For Spanish or Chinese translations, please send an
                email to:
                <a href="mailto:ISBtechdrive@hotmail.com" target="_blank"
                    >ISBtechdrive@hotmail.com</a
                >
            </p>

            <p>
                Para obtener una versión en español de este sitio web, envíe un
                correo electrónico a:
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
    </div>
</div>

<style lang="scss">
    .content {
        display: flex;
        flex-direction: row;
        scroll-behavior: smooth;

        .sidebar {
            width: 40%;
            background-color: var(--color-background-secondary);
            border-radius: 0.5rem;
            padding: 1rem;
            margin-right: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            scroll-behavior: smooth;

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

        .sections {
            height: calc(100vh - 10rem);
            overflow-y: scroll;
            scroll-behavior: smooth;

            section {
                padding: 1rem;
                background-color: var(--color-background-secondary);
                border-radius: 0.5rem;

                &:not(:last-of-type) {
                    margin-bottom: 1rem;
                }

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

                .grid {
                    display: grid;
                    grid-template-columns: auto auto auto auto;
                    grid-gap: 2rem;

                    .grid-item {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        width: 12rem;
                        padding: 1rem;
                        background-color: var(--color-background);
                        border-radius: 0.5rem;

                        .item {
                            width: 12rem;
                            height: 12rem;
                            object-fit: cover;
                            border-radius: 0.5rem;
                        }

                        .name {
                            font-size: 1rem;
                            font-weight: bold;
                            margin-top: 0.5rem;
                            margin-bottom: 0;
                        }

                        .description {
                            font-size: 0.9rem;
                            margin-bottom: 0;
                            margin-top: 0.5rem;
                        }
                    }
                }
            }
        }
    }
</style>
