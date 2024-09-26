<script>
    import Header1 from "../reusables/Header1.svelte";
    import Header2 from "../reusables/Header2.svelte";
    import Article from "../reusables/Article.svelte";
    import Memory from "./Memory.svelte";
    import GoBack from "../reusables/GoBack.svelte";
</script>
<GoBack />
<Header1>Compétences</Header1>

<Header2>"Skills Memory"</Header2>
<Article>
    <p>Voici un petit jeu de memory avec quelques technos avec lequels j'aime travailler.
    Je ne quantifierai pas mon niveau car c'est trop subjectif, je vous laisse vous fier à mon expérience et mes projets.
    </p>
    <center>
        <Memory />
    </center>
</Article>

<style lang="scss">
</style>
