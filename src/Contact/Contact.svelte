<script>
    import Header1 from "../reusables/Header1.svelte";
    import Header2 from "../reusables/Header2.svelte";
    import Article from "../reusables/Article.svelte";
</script>

<Header1>Contacts</Header1>

<Header2>Mail</Header2>
<Article
    ><a href="mailto: contactme@webjosse.fr">contactme@webjosse.fr</a></Article
>

<Header2>Linkedin</Header2>
<Article>
    <a href="https://www.linkedin.com/in/josse-de-oliveira-4907391ba/">
        linkedin.com/in/josse-de-oliveira-4907391ba</a
    >
</Article>

<style>
    a {
        display: block;
        width: 100%;
        text-align: center;
        color: var(--blu);
        font-size: 2em;
    }
</style>
