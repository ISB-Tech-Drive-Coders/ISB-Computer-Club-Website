<script>
    import { base } from "$app/paths";

    import ImageCarousel from "$elements/ImageCarousel.svelte";

    const gilfordImages = [
        {
            src: `${base}/images/thanks/Gilford_1.png`,
            alt: "Andrew Gilford (01)",
            format: "png",
        },
    ];

    const brickenImages = [
        {
            src: `${base}/images/thanks/Bricken_1.png`,
            alt: "Ian Bricken (01)",
            format: "png",
        },
    ];

    const isbImages = [
        {
            src: `${base}/images/thanks/ISB_1.png`,
            alt: "ISB (01)",
            format: "png",
        },
    ];
</script>

<section>
    <h2>Special Thanks</h2>
    <p>
        These are some of the people in the world that gave us this chance to
        give others a chance.
    </p>

    <div class="person">
        <ImageCarousel images={gilfordImages} />
        <div class="info">
            <p class="name">Andrew Gilford</p>
            <p class="role">
                <i><b>Principal - International School of Beaverton</b></i>
            </p>
            <p class="description">
                If you asked me who I thought was the most helpful in putting
                this together, the answer would be Mr. Gilford. He is kind, open
                minded, and most important for our project, he is open to new
                ideas! I doubt any of my other principles would ever agree to
                this. He did. He is very interactive with the students, he does
                a lot for us and our school. I see him daily, unlike all of my
                previous principals. He is quite, by far, the best principle
                I've met! He is one of the people who make ISB into the
                incredibile school it is, big thanks to him!
            </p>
        </div>
    </div>

    <div class="person">
        <div class="info alt">
            <p class="name">Ian Bricken</p>
            <p class="role">
                <i
                    ><b
                        >Middle School Math Teacher - International School of
                        Beaverton</b
                    ></i
                >
            </p>
            <p class="description">
                Thank you to Mr. Bricken for letting us use his room for our
                tech area, and for encouraging our drive and letting us bring a
                bunch of tech in his room.
            </p>
        </div>
        <ImageCarousel images={brickenImages} />
    </div>

    <div class="person">
        <ImageCarousel images={isbImages} />
        <div class="info">
            <p class="description">
                Of course, what's the point of all of this if we didn't get
                donations! So big round of applause for our ISB Dragons! We at
                ISB embrace peace, and for those of you with a Samsung, or any
                Android phone for that matter, go and use Samsung Global Goals,
                to earn money to donate to charity by doing simple things, like
                using a global goals background. Then choose where to donate
                your earned money, which goal?! Learn more here:<br />
                <a
                    href="https://www.samsung.com/global/galaxy/apps/samsung-global-goals/"
                    target="_blank"
                >
                    Samsung Global Goals
                </a>
            </p>
        </div>
    </div>
</section>

<style lang="scss">
    .person {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 28rem;
        width: calc(100% - 4rem);
        padding: 2rem;
        background-color: var(--color-background);
        border-radius: 0.5rem;
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
        overflow: hidden;

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
            justify-content: flex-start;

            .info {
                width: 100%;
                margin-left: auto;
                margin-right: auto;

                &.alt {
                    margin-right: auto;
                    margin-top: 0;
                    margin-bottom: 1rem;
                }
            }
        }
    }
</style>
