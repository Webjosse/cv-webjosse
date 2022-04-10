<script>
    import { tweened } from "svelte/motion";
    import { onShowed, onHide } from "../stores/link.js";
    import { cubicIn } from "svelte/easing";
    const progress = tweened(0, { duration: 300, easing: cubicIn });
    onShowed(() => {
        progress.set(0, { duration: 0 });
        setTimeout(() => progress.set(1), 300);
    });

    onHide(() => {
        progress.set(1, { duration: 0 });
        setTimeout(() => progress.set(0), 300);
    });
</script>

<article style={`opacity: ${$progress};`}><slot /></article>

<style lang="scss">
    article {
        background-color: var(--dark);
        font-size: 1.5em;
        text-align: justify;
        @media (max-width: 425px) {
            font-size: 2em;
        }
        width: 90vw;
        padding: 1vw;
    }
</style>
