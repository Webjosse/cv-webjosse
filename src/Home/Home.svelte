<script>
    import { redirectEvent } from "../stores/link.js";
    import HomeLink from "./HomeLink.svelte";
</script>

<nav>
    <div>
        <img src="/res/img/me.jpg" alt="Josse DE OLIVEIRA" />
        <a on:click={redirectEvent} href="/contact">&#x1F4E7;</a>
    </div>
    <ol>
        <HomeLink href="/projet">MON PROJET</HomeLink>
        <HomeLink href="/competences">COMPÉTENCES</HomeLink>
        <HomeLink href="/experiences">EXPÉRIENCES</HomeLink>
        <HomeLink href="/savoir-etre">SAVOIR-ÊTRE</HomeLink>
    </ol>
</nav>

<style lang="scss">
    nav {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        @media (max-width: 425px) {
            flex-direction: column;
        }
    }
    img {
        width: 30em;
        border: 1em solid var(--light);
        border-radius: 50%;
        margin-right: 3em;
    }
    div {
        position: relative;
    }
    a {
        display: block;
        font-size: 5em;
        text-decoration: none;
        position: absolute;
        left: 1em;
        bottom: 1em;
        background-color: var(--blu);
        padding: 0.1em;
        border: 0.1em solid var(--light);
        border-radius: 50%;
        transform: translate(-50%, 50%);
    }
    a:hover {
        transform: translate(-50%, 50%) scale(1.1);
        transition: 0.5s all;
        border-width: 0.2em;
    }
</style>
