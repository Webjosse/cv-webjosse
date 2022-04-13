<script>
    import Header1 from "../reusables/Header1.svelte";
    import Header2 from "../reusables/Header2.svelte";
    import Header3 from "../reusables/Header3.svelte";
    import Article from "../reusables/Article.svelte";
    import Splitter from "../reusables/Splitter.svelte";
</script>

<Header1>Mon projet professionnel</Header1>

<Header2>Alternance</Header2>
<Article>
    <Header3>Alternant en informatique? Pourquoi ce choix?</Header3>
    <p>
        Dès le collège et le lycée, mes différents stages d'observation m'ont
        fait prendre conscience de l'importance de l'expérience dans le secteur
        de l'informatique. Que ce soit pour le développeur ou le chef de projet.
    </p>
    <p>
        Intégrer directement une formation en alternance me permettra d'acquérir
        de l'expérience plus tôt, et ainsi pouvoir être plus efficace, et aider
        les autres développeurs de mon équipe.
    </p>
    <p>
        <strong>
            C'est pourquoi, étant admis à l'école <i>CPE Lyon</i>, je cherche
            une entreprise pour une alternance de 3 ans dans la zone de
            Saint-Etienne/Lyon
        </strong>
    </p>
</Article>
<Header2>Mes objectifs</Header2>
<Article>
    <Header3>Développement Web</Header3>

    <Splitter part={1 / 4}>
        <img
            slot="left"
            src="/res/img/webdev.png"
            alt="Développement Web"
            style="width: 100%;aspect-ratio: 1/1;"
        />
        <div slot="right">
            <p>
                Je suis intéressé par le développement depuis le collège, j'ai
                toujours apprécié l'algorithmique et la possibilité de créer des
                outils qui simplifient la vie des utilisateurs
            </p>
            <p>Le secteur du web m'intéresse tout particulièrement car:</p>
            <ul>
                <li>
                    Les langages du web sont souvent de haut niveau: on peut se
                    concentrer sur le développement de fonctionnalités, sans
                    avoir à gérer certains contraintes techniques répétitives
                    (comme l'allocation de mémoire)
                </li>
                <li>
                    Les applications web sont disponibles partout et sur toutes
                    les plateformes, il suffit d'avoir un navigateur
                </li>
                <li>
                    Les applications web permettent le plus souvent de mettre en
                    relation plusieurs utilisateurs
                </li>
            </ul>
        </div>
    </Splitter>

    <Header3>Gestion de projet</Header3>

    <Splitter part={3 / 4}>
        <img
            slot="right"
            src="/res/img/designer.png"
            alt="Gestion de projet"
            style="width: 100%;aspect-ratio: 1/1;"
        />
        <div slot="left">
            <p>
                Même si l'aspect technique est celui qui m'intéresse le plus, je
                pense qu'intégrer la gestion des projets auxquels je participe
                me permettra d'améliorer davantage ceux-cis.
            </p>
            <p>
                Les projets que j'ai été amené à gérer durant mes études à l'IUT
                m'ont transmis le goût de la conception et du management
                d'équipe (projet tutoré, projets de communication, etc...).
                Cependant, je suis conscient qu'il me reste encore bien plus à
                apprendre dans ce domaine que sur l'aspect technique.
                (développement)
            </p>
        </div>
    </Splitter>
</Article>

<style>
    strong {
        font-weight: 900;
        font-size: 1.25em;
        text-shadow: 0.03em 0.03em var(--light);
    }
</style>
