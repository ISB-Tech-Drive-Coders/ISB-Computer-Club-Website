<script context="module" lang="ts">
    import { base } from "$app/paths";
    import ImageCarousel from "$elements/ImageCarousel.svelte";

    export const prerender = true;

    const ravImages = [
        {
            src: `${base}/images/Rav_01.jpg`,
            alt: "Ravinder Olivier Singh Dadiala (01)",
            format: "jpg",
        },
        {
            src: `${base}/images/Rav_02.jpg`,
            alt: "Ravinder Olivier Singh Dadiala (02)",
            format: "jpg",
        },
        {
            src: `${base}/images/Rav_03.jpg`,
            alt: "Ravinder Olivier Singh Dadiala (03)",
            format: "jpg",
        },
        {
            src: `${base}/images/Rav_04.jpg`,
            alt: "Ravinder Olivier Singh Dadiala (04)",
            format: "jpg",
        },
    ];

    const zoyaImages = [
        {
            src: `${base}/images/Zoya_01.png`,
            alt: "Zoya Ahmad (01)",
            format: "png",
        },
        {
            src: `${base}/images/Zoya_02.png`,
            alt: "Zoya Ahmad (02)",
            format: "png",
        },
    ];

    const milosImages = [
        {
            src: `${base}/images/Milos_01.png`,
            alt: "Milos Dmitrovic (01)",
            format: "png",
        },
        {
            src: `${base}/images/Milos_02.jpg`,
            alt: "Milos Dmitrovic (02)",
            format: "jpg",
        },
        {
            src: `${base}/images/Milos_03.png`,
            alt: "Milos Dmitrovic (03)",
            format: "png",
        },
    ];

    const sofiaImages = [
        {
            src: `${base}/images/Sofia_01.png`,
            alt: "Sofia Rosales-Vargas (01)",
            format: "png",
        },
        {
            src: `${base}/images/Sofia_02.png`,
            alt: "Sofia Rosales-Vargas (02)",
            format: "png",
        },
    ];

    const samuelImages = [
        {
            src: `${base}/images/Samuel_01.jpg`,
            alt: "Samuel Kim (01)",
            format: "jpg",
        },
        {
            src: `${base}/images/Samuel_02.png`,
            alt: "Samuel Kim (02)",
            format: "png",
        },
    ];

    const leilaImages = [
        {
            src: `${base}/images/Unknown.png`,
            alt: "Leila Dawson (01)",
            format: "png",
        },
    ];

    const yuvikaImages = [
        {
            src: `${base}/images/Unknown.png`,
            alt: "Yuvika Vora (01)",
            format: "png",
        },
    ];

    const timsonImages = [
        {
            src: `${base}/images/Unknown.png`,
            alt: "Timson Jharman Fordley the -5th (01)",
            format: "png",
        },
    ];

    const jacobImages = [
        {
            src: `${base}/images/Jacob_01.png`,
            alt: "Jacob Sapoznikow (01)",
            format: "png",
        },
    ];
</script>

<svelte:head>
    <title>About Us</title>
    <meta name="description" content="About Us - ISB Computer Club" />
</svelte:head>

<h2>The Team</h2>

<section class="person">
    <ImageCarousel images={ravImages} />
    <div class="info">
        <p class="name">Ravinder Olivier Singh Dadiala</p>
        <p class="role">
            <i
                ><b
                    >Chief Technology Officer, Sponsorship Manager, and
                    co-founder</b
                ></i
            >
        </p>
        <p class="description">
            Olivier is a tech centric, piano player, audiophil, and cat owner.
            His biggest hobby is flying drones. He loves tennis, of which is
            essentially the only sport he cares much about. Expensive pens,
            Parker fountain pens, specifically, are something people recognize
            right away. While doing all that he also enjoys music. He also loves
            to 3d print things on his <a
                href="https://cdn.shopify.com/s/files/1/2510/7166/products/ADV3_main_web.jpg?v=1625076418"
                >Flashforge Adventurer 3</a
            >! He loves cats and has a Ragdoll cat named Ramona. He has a little
            2 year old brother named Daniel who keeps him busy. He also can
            repair tech, which is one of the main reasons he was added first, as
            a "whether I'm crazy or not" check-in, and as to fix, repair, and
            prep tech; also likely due to the fact that he is very eco-focused
            and loves charity! He is the photographer that took most of these
            photos on this page. if you have any issues with your computer,
            please talk to me, or if your computer is not turning on I can
            either fix it or have you order a part I need to fix it.
        </p>
    </div>
</section>

<section class="person">
    <div class="info alt">
        <p class="name">Zoya Ahmad</p>
        <p class="role">
            <i><b>Overseer & Editor</b></i>
        </p>
        <p class="description" />
    </div>
    <ImageCarousel images={zoyaImages} />
</section>

<section class="person">
    <ImageCarousel images={milosImages} />
    <div class="info">
        <p class="name">Milos Dmitrovic</p>
        <p class="role">
            <i><b>Service tester & Graphics Card Enthusiast</b></i>
        </p>
        <p class="description">
            Hello, I am Milos Dmitrovic, I am a graphics card enthusiast for my
            unhealthy addiction to max graphics. I wish to support the ISB tech
            drive by finding out what tech people have (if you have a pc part
            you have no idea what its name is, talk to me). And am very good
            with technology.
        </p>
    </div>
</section>

<section class="person">
    <div class="info alt">
        <p class="name">Sofia Rosales-Vargas</p>
        <p class="role">
            <i><b>Assistant</b></i>
        </p>
        <p class="description" />
    </div>
    <ImageCarousel images={sofiaImages} />
</section>

<section class="person">
    <ImageCarousel images={samuelImages} />
    <div class="info">
        <p class="name">Samuel Kim</p>
        <p class="role">
            <i><b>Brand Manager</b></i>
        </p>
        <p class="description" />
    </div>
</section>

<section class="person">
    <div class="info alt">
        <p class="name">Leila Dawson</p>
        <p class="role">
            <i><b>Unknown</b></i>
        </p>
        <p class="description" />
    </div>
    <ImageCarousel images={leilaImages} />
</section>

<section class="person">
    <ImageCarousel images={yuvikaImages} />
    <div class="info">
        <p class="name">Yuvika Vora</p>
        <p class="role">
            <i><b>Marketing</b></i>
        </p>
        <p class="description" />
    </div>
</section>

<section class="person">
    <ImageCarousel images={jacobImages} />
    <div class="info">
        <p class="name">Jacob Sapoznikow</p>
        <p class="role">
            <i><b>Chief Developer and Full-Stack engineer</b></i>
        </p>
        <p class="description">
            Hi! My name is Jacob Sapoznikow, and I am a full-stack developer. I
            know several coding languages such as JavaScript/TypeScript, Java,
            C++, C#, Rust, and Go. My passions are coding, gaming, and music. I
            am currently a student at the International School of Beaverton,
            where I was the president of the ISB Coding Club, until the ISB Tech
            Club and the coding club merged. Now I work with the ISB Computer
            Club (temporary name), and we have lots of fun together, run tech
            drives, and make video games.
        </p>
    </div>
</section>

<h2>VIPs & Beta Testers</h2>

<section class="person">
    <ImageCarousel images={timsonImages} />
    <div class="info">
        <p class="name">Timson Jharman Fordley the -5th</p>
        <p class="role">
            <i><b>He beta tested our website and he is kind :).</b></i>
        </p>
        <p class="description" />
    </div>
</section>

<style lang="scss">
    h2 {
        font-size: 1.75rem;
        font-weight: bold;
        padding: 0.5rem 1rem;
        margin-bottom: 1rem;
        background-color: var(--color-background-secondary);
        border-radius: 0.5rem;
        color: var(--color-text);
        text-align: center;
        user-select: none;
        box-shadow: 0px 0px 0px 1px var(--color-background);
    }

    .person {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 34rem;
        width: calc(100% - 4rem);
        padding: 2rem;
        background-color: var(--color-background-secondary);
        border-radius: 0.5rem;
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
        overflow: hidden;
        position: relative;
        z-index: 1;

        &:not(:last-child) {
            margin-bottom: 1.5rem;
        }

        .info {
            width: 50%;
            margin-left: 4rem;

            &.alt {
                margin-left: 0;
                margin-right: 4rem;
            }

            .name {
                font-size: 2rem;
                font-weight: bold;
                color: var(--color-text);
                margin-bottom: 0.25rem;
            }

            .role {
                font-size: 1.1rem;
                color: var(--color-text-secondary);
                margin-top: 0;
            }

            .description {
                font-size: 1rem;
                color: var(--color-text-secondary);

                a {
                    color: var(--color-text-secondary);
                    text-decoration: underline;
                    transition: color 0.4s ease;
                    font-weight: bold;

                    &:hover {
                        color: var(--color-text);
                    }
                }
            }
        }
    }

    @media screen and (max-width: 900px) {
        .person {
            flex-direction: column;
            height: auto;

            .info {
                width: 100%;
                margin-left: auto;
                margin-right: auto;

                &.alt {
                    margin-right: auto;
                }
            }
        }
    }
</style>
