<script>
    import Header1 from "../reusables/Header1.svelte";
    import Header2 from "../reusables/Header2.svelte";
    import Header3 from "../reusables/Header3.svelte";
    import Article from "../reusables/Article.svelte";
    import Splitter from "../reusables/Splitter.svelte";
</script>

<Header1>Expériences</Header1>

<Header2>Expériences Professionnelles</Header2>
<Article>
    <div>
        <Header3>Stage DUT</Header3>
        <h4>2022 - Esabora Digital Services</h4>
        <p>
            Développement Full-Stack C# & ASP.NET, Méthode agile avec l'outil
            Jira.
        </p>

        <Header3>Emplois d'été</Header3>
        <h4>2020 - Mairie de Saint Jean Bonnefonds</h4>
        <p>Enregistrement des élèves pour la cantine.</p>
        <h4>2021 - Géant Casino</h4>
        <p>Préparateur E-Commerce pendant 6 semaines.</p>

        <Header3>Stages d'observation</Header3>
        <Splitter part={1 / 2}>
            <div slot="right" class="separated">
                <h4>2017 - Avant Goût Studio</h4>
                <p>Développement Informatique.</p>
            </div>
            <div slot="left" class="separated rsep">
                <h4>2019 - SFI</h4>
                <p>Développement Web PHP & Symfony.</p>
            </div>
        </Splitter>
    </div>
</Article>
<Header2>Expérience Associative</Header2>
<Article>
    <div>
        <Header3>BDE Info Lyon 1</Header3>
        <p>Avril 2021 - Avril 2022</p>
        <p>
            Membre du pôle communication du Bureau des Étudiants 2021-2022 du
            département Informatique de l'IUT Lyon 1 Site Doua.
        </p>

        <Header3>Mission de Vie</Header3>
        <p>2018 - 2020</p>
        <p>Animations en maison de retraite, distribution de repas...</p>
    </div>
</Article>

<style lang="scss">
    div {
        text-align: center;
    }
    .separated {
        width: 98%;
        padding: 1%;
        margin: 0;
        color: var(--darker);
        background: var(--light);
    }

    .separated.rsep {
        background: var(--lighter);
    }

    h4 {
        font-size: 1.5em;
    }
</style>
