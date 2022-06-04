<script lang="ts">
    import { base } from "$app/paths";
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import FaBars from "svelte-icons/fa/FaBars.svelte";
    import FaComment from "svelte-icons/fa/FaComment.svelte";
    import FaEnvelope from "svelte-icons/fa/FaEnvelope.svelte";
    import FaGamepad from "svelte-icons/fa/FaGamepad.svelte";
    import FaHome from "svelte-icons/fa/FaHome.svelte";
    import FaShoppingCart from "svelte-icons/fa/FaShoppingCart.svelte";
    import FaUserCircle from "svelte-icons/fa/FaUserCircle.svelte";

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
    <a href="{base}/" class="name">ISB Computer Club</a>
    <div class="pages">
        <a
            href="{base}/"
            class="page"
            class:active={$page.url.pathname == `${base}/` ||
                $page.url.pathname == `${base}`}
        >
            <FaHome />
            &nbsp;&nbsp;Home
        </a>
        <a
            href="{base}/about"
            class="page"
            class:active={$page.url.pathname == `${base}/about`}
        >
            <FaUserCircle />
            &nbsp;&nbsp;About
        </a>
        <a
            href="{base}/blog"
            class="page"
            class:active={$page.url.pathname == `${base}/blog`}
        >
            <FaComment />
            &nbsp;&nbsp;Blog
        </a>
        <a
            href="{base}/contact"
            class="page"
            class:active={$page.url.pathname == `${base}/contact`}
        >
            <FaEnvelope />
            &nbsp;&nbsp;Contact
        </a>
        <a
            href="{base}/techdrive"
            class="page"
            class:active={$page.url.pathname == `${base}/techdrive` ||
                $page.url.pathname.startsWith(`${base}/techdrive`)}
        >
            <FaShoppingCart />
            &nbsp;&nbsp;Tech&nbsp;Drive
        </a>
        <a
            href="{base}/game"
            class="page"
            class:active={$page.url.pathname == `${base}/game`}
        >
            <FaGamepad />
            &nbsp;&nbsp;Game
        </a>
    </div>
    <div class="mobile-menu-open" on:click={toggleMobileMenu}>
        <FaBars />
    </div>
    <div class="mobile-menu" class:open={isMobileMenuOpen}>
        <div class="pages">
            <a
                href="{base}/"
                class="page"
                class:active={$page.url.pathname == `${base}/` ||
                    $page.url.pathname == `${base}`}
                on:click={toggleMobileMenu}
            >
                <FaHome />
                &nbsp;&nbsp;Home
            </a>
            <a
                href="{base}/about"
                class="page"
                class:active={$page.url.pathname == `${base}/about`}
                on:click={toggleMobileMenu}
            >
                <FaUserCircle />
                &nbsp;&nbsp;About
            </a>
            <a
                href="{base}/blog"
                class="page"
                class:active={$page.url.pathname == `${base}/blog`}
                on:click={toggleMobileMenu}
            >
                <FaComment />
                &nbsp;&nbsp;Blog
            </a>
            <a
                href="{base}/contact"
                class="page"
                class:active={$page.url.pathname == `${base}/contact`}
                on:click={toggleMobileMenu}
            >
                <FaEnvelope />
                &nbsp;&nbsp;Contact
            </a>
            <a
                href="{base}/techdrive"
                class="page"
                class:active={$page.url.pathname == `/techdrive` ||
                    $page.url.pathname.startsWith(`${base}/techdrive`)}
                on:click={toggleMobileMenu}
            >
                <FaShoppingCart />
                &nbsp;&nbsp;Tech&nbsp;Drive
            </a>
            <a
                href="{base}/game"
                class="page"
                class:active={$page.url.pathname == `${base}/game`}
                on:click={toggleMobileMenu}
            >
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
            z-index: 100;
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

                    &.active {
                        background-color: var(--color-background-offset);

                        &:hover {
                            background-color: var(
                                --color-background-offset-hover
                            );
                        }

                        &:active {
                            background-color: var(
                                --color-background-offset-active
                            );
                        }
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

                &.active {
                    background-color: var(--color-background-offset);

                    &:hover {
                        background-color: var(--color-background-offset-hover);
                    }

                    &:active {
                        background-color: var(--color-background-offset-active);
                    }
                }
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
