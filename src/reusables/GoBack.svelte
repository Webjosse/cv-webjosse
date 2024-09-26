<script>
    import { tweened } from "svelte/motion";
    import { onShowed, onHide, redirectEvent } from "../stores/link.js";
    import { cubicIn } from "svelte/easing";
    const progress = tweened(1, { duration: 300, easing: cubicIn });
    onShowed(() => {
        progress.set(1, { duration: 0 });
        progress.set(0);
    });

    onHide(() => {
        progress.set(0, { duration: 0 });
        progress.set(1);
    });
</script>

<center style={`--prog-ret: ${$progress};`}>
    <a on:click={redirectEvent} href="/">&lt;&lt; Retour</a>
</center>

<style>
    a{
        margin: 0.5em;
        font-size: 2em;
        display: block;
        background-color: var(--darker);
        padding: 0.1em;
        color: var(--lighter);
        transform: translateY(calc(var(--prog-ret) * -30vh));
    }
</style>
