<script>
    import MemoryCard from "./MemoryCard.svelte";

    const techs = [
        'Bash',
        'CSharp',
        'CouchDB',
        'C',
        'Docker',
        'Git',
        'Godot',
        'Jasmine',
        'PHP',
        'PostgresSQL',
        'Python',
        'React',
        'Rust',
        'Sass',
        'Spring',
        'Svelte',
        'TypeScript',
        'Vue.js'
    ];
    let techMemory = [...techs, ...techs].sort(() => Math.random() - 0.5);
    let cards = new Array(36).fill(0).map(() => false);

    let selected = null;
    function select(idx){
        console.log(idx);
        if (selected === null){
            selected = idx;
            cards[idx] = true;
            return;
        }
        cards[idx] = true;
        const toFlip = [idx, selected];
        
        if (techMemory[selected] != techMemory[idx]){
            setTimeout(() => toFlip.forEach(i => cards[i] = false), 500);
        }
        selected = null;    
    }
</script>

{#if cards.every(b => b)}
    <button on:click={() => {
        cards = cards.map(() => false)
        setTimeout(() => techMemory = [...techs, ...techs].sort(() => Math.random() - 0.5), 500);

    }}>Jouer au Memory</button>
{:else}
    <button on:click={() => cards = cards.map(() => true)}>Voir les compétences</button>
{/if}


<ul>
    {#each techMemory as memory, i}
        <MemoryCard name={memory} upsideDown={!cards[i]} on:click={() => select(i)}/>
    {/each}
</ul>

<style lang="scss">
    button{
        font-size: inherit;
        border-color: transparent;
        background-color: var(--blu);
        color: var(--darker);
        box-shadow: 0.1em 0.1em var(--lighter);
        cursor: pointer;
    }
    
    ul {
        padding: 0;
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        list-style-type: none;
        padding: 0;
        aspect-ratio: 1/1;
        width: min-content;
    }
</style>