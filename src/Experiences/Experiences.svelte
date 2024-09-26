<script>
    import Header1 from "../reusables/Header1.svelte";
    import Header2 from "../reusables/Header2.svelte";
    import Header3 from "../reusables/Header3.svelte";
    import Article from "../reusables/Article.svelte";
    import Splitter from "../reusables/Splitter.svelte";
    import GoBack from "../reusables/GoBack.svelte";
</script>
<GoBack />
<Header1>Parcours</Header1>

<Header2>Expériences</Header2>
<Article>
    <div>
        <Header3>Esabora Digital Services</Header3>
        <h4>2022 : Stage (12 semaines) puis CDD (6 semaines)</h4>
        <ul>
            <li>Développement Full-Stack C# & ASP.NET</li>
            <li>Intégration d'une lib de composants calendrier</li>
            <li>Travail sur des modèles d'impressions et des exports de données</li>
        </ul>

        <Header3>Ciril GROUP</Header3>
        <h4>2022 - 2025: Alternance</h4>
        <ul>
            <li>Développement Full-Stack Java + Vue 2 & 3</li>
            <li>Migration de moteur de templating vers Freemarker</li>
            <li>Travail sur de l'import de données en masse</li>
            <li>Travail sur l'extensibiilité d'un explorateur de ressources</li>
        </ul>
        <h4>2024 : Stage au Canada</h4>
        <ul>
            <li>Migration de serveur web de Play! vers Spring Boot</li>
        </ul>
    </div>
</Article>
<Header2>Formation</Header2>
<Article>
    <div>
        <Header3>IUT Info Lyon 1</Header3>
        <p>2020 - 2022</p>
        <p>Maitrise de l'algorithmie, les structures de données, le cycle de vie des applications, etc...</p>

        <Header3>CPE Lyon</Header3>
        <p>2022 - 2025</p>
        <p>Maitrise du DevOps, des Design Patterns, de l'architecture logicielle et réseaux</p>
        <p>Divers projets dans le cadre des cours:</p>
        <ul>
            <li>Application cartographique de calcul de trajets avec bornes de recharges (React + Leaflet)</li>
            <li>Création d'un Framework PHP</li>
            <li>Mise en place d'un simulateur d'incendies et d'une chaîne IoT pour les interventions</li>
            <li>Création d'une boutique de cartes à jouer en Microservices avec un Saga Orchestrator</li>
        </ul>
    </div>
</Article>
<Splitter/>

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
    li{
        list-style: none;
        border-top: 0.1em solid var(--blu);
        border-bottom: 0.1em solid var(--blu);
        margin: 0.5em;
    }
</style>
