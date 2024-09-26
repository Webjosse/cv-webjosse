<script>
    import { createEventDispatcher } from "svelte";

    export let name;

    export let upsideDown = true;

    const dispatch = createEventDispatcher();
</script>

<li>
    <button class={"card" + (upsideDown ? " upside-down" : "")} disabled={!upsideDown} on:click={() => dispatch("click")}>
        <img src={`/res/img/memory/${name}.png`} alt={name} />
    </button>
</li>

<style lang="scss">
    li, .card{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .card{
        font-size: max(1vw, 5px);
        margin: 0.5em;
        height: 6em;
        width: 6em;
        background-color: var(--blu);
        border-radius: 1em;
        transition: transform 0.5s;
        transform-style: preserve-3d;

        img {
            height: 5em;
            width: 5em;
            backface-visibility: hidden;
        }
        &.upside-down{
            transform: rotateY(180deg);
            cursor: pointer;
        }
    }
    
</style>