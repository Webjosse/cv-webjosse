<script>
    import Header1 from "../reusables/Header1.svelte";
    import Header2 from "../reusables/Header2.svelte";
    import Header3 from "../reusables/Header3.svelte";
    import Article from "../reusables/Article.svelte";
    import Splitter from "../reusables/Splitter.svelte";
</script>

<Header1>Mes compétences & formations</Header1>

<Header2>Formations</Header2>
<Article>
    <div style="text-align: center">
        <Header3>Baccalauréat Scientifique</Header3>
        <p>
            Baccalauréat S Sciences et Vie de la Terre Mention Très Bien au <u>
                Lycée Saint Paul
            </u> à Saint Etienne.
        </p>
        <p>
            <strong>Chinois LV2</strong> ,
            <strong>Spécialité Informatique et Sciences du Numérique.</strong>
        </p>
        <Header3>
            <span class="imgtxt">
                DUT Informatique <img
                    src="/res/img/loop.svg"
                    class="turning"
                    alt="En cours"
                    style="height:2em;"
                />
            </span>
        </Header3>
        <p>DUT Informatique 2022 à l'IUT Lyon 1 Site Doua.</p>
    </div>
</Article>
<Header2>Informatique</Header2>
<Article>
    <Header3>Développement Web</Header3>
    <Splitter part={1 / 2}>
        <div slot="left" class="separated">
            <h4>FRONT END</h4>
            <ul>
                <li class="s-3">HTML, CSS</li>
                <li class="s-3">Javascript</li>
                <li class="s-1">SASS, SCSS</li>
                <li class="s-2">JQuery , React</li>
                <li class="s-3">Svelte/SvelteKit</li>
            </ul>
        </div>
        <div slot="right" class="separated rsep">
            <h4>BACK END</h4>
            <ul>
                <li><span class="s-1">Flask</span> (API seulement)</li>
                <li><span class="s-2">ExpressJS</span> (API seulement)</li>
                <li>
                    <span class="s-3">PHP,</span><span class="s-1">
                        Symfony</span
                    >
                </li>
                <li class="s-2">C#, ASP.NET (stage en cours)</li>
                <li class="s-3">Maitrise du modèle MVC</li>
            </ul>
        </div>
    </Splitter>
    <Splitter part={1 / 6}>
        <div class="imgs" slot="left">
            <img src="/res/img/sql.jpg" alt="logo SQL" />
            <img src="/res/img/js.png" alt="logo Javascript" />
            <img src="/res/img/python.png" alt="logo Python" />
            <img src="/res/img/php.png" alt="logo PHP" />
            <img src="/res/img/java.jpg" alt="logo Java" />
            <img src="/res/img/c.png" alt="logo C" />
        </div>
        <div slot="right">
            <Header3>Bases de données</Header3>
            <ul>
                <li>
                    <span class="s-3">SQL</span> (
                    <span class="s-3">Oracle</span>,
                    <span class="s-2">MySQL</span>,
                    <span class="s-1">SQL Server</span>)
                </li>
                <li class="s-1">MongoDB</li>
            </ul>

            <Header3>Programmation orientée objet</Header3>
            <center>
                <p>
                    <span class="s-3">Java</span> , <span class="s-1">C#</span>
                    ,
                    <span class="s-3">Python</span>
                    , <span class="s-3">PHP</span> ,
                    <span class="s-3">Javascript</span>
                </p>
            </center>

            <Header3>Procédural</Header3>
            <center>
                <p>
                    <span class="s-3">C</span> , <span class="s-1">Rust</span> ,
                    <span class="s-1">Lua</span>
                    , <span class="s-1">Bash</span>
                </p>
            </center>

            <Header3>Conception</Header3>
            <center>
                <p>
                    <span class="s-2">Graphes UML</span>
                    <span class="s-1">PowerAMC</span>
                    <span class="s-1">Modélisation des données</span>
                </p>
            </center>

            <Header3>Business Intelligence</Header3>
            <center>
                <span class="s-1">Initié à PowerBI et Talend </span></center
            >

            <Header3>Développement de jeux vidéos</Header3>
            <ul>
                <li>
                    Portages SDL:
                    <span class="s-3">Pygame (Python)</span> et
                    <span class="s-2">Rust-SDL2</span>
                </li>
                <li class="s-2">GD Script</li>
            </ul>

            <Header3>Autres connaissances informatiques</Header3>
            <ul>
                <li>
                    <span class="s-3">Git</span>
                </li>
                <li class="s-2">Architecture réseau</li>
            </ul>
        </div>
    </Splitter>
</Article>

<Header2>Autres</Header2>
<Article>
    <ul style="font-size: 1.2em;">
        <li>Anglais Compréhension B2 (TOEIC) et Expression Orale C1 (CEC).</li>
        <li>Bases du Chinois (Bac LV2).</li>
    </ul>
</Article>

<style lang="scss">
    .imgtxt {
        display: inline-flex;
        flex-direction: row;
        align-items: center;
    }
    .turning {
        animation: rotating 1s normal infinite;
    }
    @keyframes rotating {
        0% {
            transform: rotate(0);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    .separated {
        width: 98%;
        padding: 1%;
        margin: 0;
        color: var(--darker);
        background: var(--light);
        h4 {
            margin-top: 0;
            text-align: center;
            font-size: 2em;
        }
    }

    ul {
        li {
            text-decoration: underline;
            text-align: center;
            display: block;
            list-style: none;
            margin-right: 2em;
            margin-left: 2em;
        }
    }
    .separated.rsep {
        background: var(--lighter);
    }

    .s-1 {
        font-size: 1em;
    }

    .s-2 {
        font-size: 1.3em;
    }

    .s-3 {
        font-size: 1.7em;
    }

    .imgs {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 100%;
        img {
            width: 100%;
            animation: upDownFloat 1.2s alternate infinite;
        }
        img:nth-child(3n + 1) {
            animation-delay: 0.8s;
        }
        img:nth-child(3n + 2) {
            animation-delay: 0.16s;
        }

        @media (max-width: 425px) {
            display: none;
        }
    }

    @keyframes upDownFloat {
        0% {
            transform: translateY(-25%);
        }

        100% {
            transform: translateY(25%);
        }
    }
</style>
