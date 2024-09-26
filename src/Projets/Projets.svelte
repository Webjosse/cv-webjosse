<script>
    import Header1 from "../reusables/Header1.svelte";
    import Article from "../reusables/Article.svelte";
    import Splitter from "../reusables/Splitter.svelte";
</script>

<Header1>Mes projets</Header1>
<Article>
    <center>
        <img class="project_img" src="/res/img/dino.png" alt="Dino"/><br/>
        <a class="projet_link" href="https://dino.webjosse.fr" target="_blank" rel="noopener noreferrer">
         &gt;&gt; T-rex game, but in WASM &lt;&lt; 
        </a>
        <p>Une re-création du Dino Game en Web Assembly en utilisant Rust + wasm-pack. J'ai dû faire moi-même l'engine. (Pour le tester, je recommande un navigateur Chromium tel que Google Chrome ou Microsoft Edge)</p>
    </center>
</Article>
<Splitter />
<Article>
    <center>
        <div class="flex-center project_img">
            <img class="inner_project_img" src="/res/img/web_to_ffmpeg.png" alt="Web To FFMPEG"/>
            <img class="tiny_inner_project_img" src="/res/img/ffmpeg.gif" alt="Map Gif"/>
        </div>
        <a class="projet_link" href="https://github.com/Webjosse/FFmpeg-wms-filter" target="_blank" rel="noopener noreferrer">
         &gt;&gt; FFMPEG fork: WMS to video &lt;&lt; 
        </a>
        <p><em>(Projet abandonné)</em> Un fork de FFMPEG qui ajoute la possibilité de créer des vidéos depuis des Web Map services (WMS). Bien qu'il ait été abandonné avant de pouvoir prendre en charge tout le standard, il a permis de générer le GIF ci-dessus</p>
    </center>
</Article>
<Splitter />
<Article>
    <center>
        <a class="projet_link" href="https://bash-colors.webjosse.fr/" target="_blank" rel="noopener noreferrer">
         &gt;&gt; Bash colors palette &lt;&lt; 
        </a>
        <p>Page web permettant de copier-coller les codes couleurs Bash</p>
    </center>
</Article>
<Splitter />
<Article>
    <center>
        <a class="projet_link" href="https://github.com/cpe-lyon/4eti-tidal-projet-php-sarkozy/tree/main/php-sarkozy" target="_blank" rel="noopener noreferrer">
         &gt;&gt; Un simple "Framework" PHP &lt;&lt; 
        </a>
        <p>Créé par groupe de 3 dans le cadre de mes études à CPE Lyon, j'ai été en charge de l'architecture. Le nom est inspiré de <em>Symfony</em>, mais avec des jeux de mots</p>
    </center>
</Article>
<Splitter />

<style>
    strong {
        font-weight: 900;
        font-size: 1.25em;
        text-shadow: 0.03em 0.03em var(--light);
    }


    .inner_project_img{
        height: 100%;
    }

    
    .tiny_inner_project_img{
        height: 80%;
    }

    .project_img{
        max-height: 10em;
        max-width: 100%;
        aspect-ratio: 100/29;
    }
    .projet_link{
        color: var(--lighter);
        text-shadow: 0.1em 0.1em var(--blu);
    }

    .flex-center{
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
