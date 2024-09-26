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
    const techMemory = [...techs, ...techs].sort(() => Math.random() - 0.5);
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

<ul>
    {#each techMemory as memory, i}
        <MemoryCard name={memory} upsideDown={!cards[i]} on:click={() => select(i)}/>
    {/each}
</ul>

<style lang="scss">
    ul {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        list-style-type: none;
        padding: 0;
        aspect-ratio: 1/1;
        width: min-content;
    }
</style>