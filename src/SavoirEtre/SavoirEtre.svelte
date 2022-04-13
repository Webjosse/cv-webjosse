<script>
    import Header1 from "../reusables/Header1.svelte";
    import Header2 from "../reusables/Header2.svelte";
    import Header3 from "../reusables/Header3.svelte";
    import Article from "../reusables/Article.svelte";
    import Splitter from "../reusables/Splitter.svelte";
</script>

<Header1>Savoir-Être</Header1>

<Header2>Qualités</Header2>
<Article>
    <ul>
        <li>Esprit logique et créatif</li>
        <li>Sens du devoir</li>
    </ul>
</Article>

<Header2>Centres d'intérêt</Header2>
<Article>
    <ul>
        <li>Joueur amateur de Tetris et de jeux de stratégie</li>
        <li>Amateur de Mathématiques</li>
    </ul>
</Article>

<style lang="scss">
    ul {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
    li {
        margin: 0.2em;
        text-align: center;
        width: fit-content;
        list-style: none;
        padding: 0.2em;
        border: solid 0.1em var(--blu);
    }
</style>
