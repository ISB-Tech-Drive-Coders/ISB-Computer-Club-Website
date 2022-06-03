<script lang="ts">
    import FaHome from "svelte-icons/fa/FaHome.svelte";
    import FaUserCircle from "svelte-icons/fa/FaUserCircle.svelte";
    import FaComment from "svelte-icons/fa/FaComment.svelte";
    import FaEnvelope from "svelte-icons/fa/FaEnvelope.svelte";
    import FaShoppingCart from "svelte-icons/fa/FaShoppingCart.svelte";
    import FaGamepad from "svelte-icons/fa/FaGamepad.svelte";
    import FaBars from "svelte-icons/fa/FaBars.svelte";
    import { onMount } from "svelte";

    let isMobileMenuOpen = false;

    const toggleMobileMenu = () => {
        isMobileMenuOpen = !isMobileMenuOpen;
    };

    onMount(() => {
        window.addEventListener("resize", () => {
            if (window.innerWidth > 900) {
                isMobileMenuOpen = false;
            }
        });
    });
</script>

<div class="header">
    <a href="/" class="name">ISB Computer Club</a>
    <div class="pages">
        <a href="/" class="page">
            <FaHome />
            &nbsp;&nbsp;Home
        </a>
        <a href="/about" class="page">
            <FaUserCircle />
            &nbsp;&nbsp;About
        </a>
        <a href="/blog" class="page">
            <FaComment />
            &nbsp;&nbsp;Blog
        </a>
        <a href="/contact" class="page">
            <FaEnvelope />
            &nbsp;&nbsp;Contact
        </a>
        <a href="/techdrive" class="page">
            <FaShoppingCart />
            &nbsp;&nbsp;Tech&nbsp;Drive
        </a>
        <a href="/game" class="page">
            <FaGamepad />
            &nbsp;&nbsp;Game
        </a>
    </div>
    <div class="mobile-menu-open" on:click={toggleMobileMenu}>
        <FaBars />
    </div>
    <div class="mobile-menu" class:open={isMobileMenuOpen}>
        <div class="pages">
            <a href="/" class="page">
                <FaHome />
                &nbsp;&nbsp;Home
            </a>
            <a href="/about" class="page">
                <FaUserCircle />
                &nbsp;&nbsp;About
            </a>
            <a href="/blog" class="page">
                <FaComment />
                &nbsp;&nbsp;Blog
            </a>
            <a href="/contact" class="page">
                <FaEnvelope />
                &nbsp;&nbsp;Contact
            </a>
            <a href="/techdrive" class="page">
                <FaShoppingCart />
                &nbsp;&nbsp;Tech&nbsp;Drive
            </a>
            <a href="/game" class="page">
                <FaGamepad />
                &nbsp;&nbsp;Game
            </a>
        </div>
    </div>
</div>

<style lang="scss">
    .header {
        height: 3rem;
        background-color: var(--color-background-secondary);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 0.4rem;
        position: fixed;
        width: calc(100% - 0.8rem);

        .name {
            user-select: none;
            font-size: 1.1rem;
            color: var(--color-text);
            text-decoration: none;
            cursor: pointer;
            padding: 0.25rem 0.6rem;
            border-radius: 0.25rem;
            background-color: var(--color-background);
            transition: background-color 0.4s ease;

            &:hover {
                background-color: var(--color-background-hover);
            }

            &:active {
                background-color: var(--color-background-active);
            }
        }

        .mobile-menu-open {
            user-select: none;
            font-size: 1.1rem;
            color: var(--color-text);
            text-decoration: none;
            cursor: pointer;
            padding: 0.25rem 0.6rem;
            border-radius: 0.25rem;
            background-color: var(--color-background);
            transition: background-color 0.4s ease;
            height: 60%;
            display: none;

            &:hover {
                background-color: var(--color-background-hover);
            }

            &:active {
                background-color: var(--color-background-active);
            }
        }

        .mobile-menu {
            display: block;
            position: fixed;
            top: 3rem;
            left: 0;
            width: 100%;
            height: calc(100% - 3rem);
            background-color: var(--color-background-secondary);
            z-index: 1;
            transition: transform 0.4s ease;
            transform: translateY(100%);

            &.open {
                transform: translateY(0);
            }

            .pages {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                margin-top: 0.5rem;

                .page {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: flex-start;
                    user-select: none;
                    font-size: 1.1rem;
                    color: var(--color-text);
                    text-decoration: none;
                    cursor: pointer;
                    padding: 0.25rem 0.6rem;
                    border-radius: 0.25rem;
                    background-color: var(--color-background);
                    transition: background-color 0.4s ease;
                    height: 2rem;
                    margin: 0.5rem;

                    &:first-child {
                        margin-left: 1rem;
                    }

                    &:hover {
                        background-color: var(--color-background-hover);
                    }

                    &:active {
                        background-color: var(--color-background-active);
                    }
                }
            }
        }

        .pages {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            flex-direction: row;

            .page {
                color: white;
                font-size: 1rem;
                height: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: row;
                text-decoration: none;
                cursor: pointer;
                padding: 0.25rem 0.6rem;
                border-radius: 0.25rem;
                background-color: var(--color-background);
                transition: background-color 0.4s ease;

                &:hover {
                    background-color: var(--color-background-hover);
                }

                &:active {
                    background-color: var(--color-background-active);
                }

                &:not(:first-child) {
                    margin-left: 1rem;
                }
            }
        }

        @media screen and (max-width: 900px) {
            .pages {
                display: none;
            }
            .mobile-menu-open {
                display: block;
            }
        }
    }
</style>
