<script>
    import HomeLink from "./HomeLink.svelte";
</script>

<nav>
    <img src="/res/img/me.jpg" alt="Josse DE OLIVEIRA" />
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
    ol {
    }
</style>
