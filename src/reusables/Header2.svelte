<script>
    import { tweened } from "svelte/motion";
    import { onShowed, onHide } from "../stores/link.js";
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

<center>
    <h2 style={`--prog-title: ${$progress};`}><slot /></h2>
</center>

<style>
    h2 {
        margin-right: 2em;
        margin-left: 2em;
        padding-left: 1em;
        padding-right: 1em;
        font-size: 3em;
        position: relative;
        clip-path: polygon(
            calc(var(--prog-title) * 50% - 1em) 0%,
            calc(var(--prog-title) * 50% - 1em) 100%,
            calc(100% - (var(--prog-title) * 50%) + 2em) 100%,
            calc(100% - (var(--prog-title) * 50%) + 2em) 0%
        );
        background-color: var(--dark);
        width: fit-content;
    }

    h2:after,
    h2:before {
        display: block;
        position: absolute;

        background-color: var(--dark);
        font-size: 1em;
        font-family: inherit;
        height: 100%;
        top: 0;
        border: 0.05em solid var(--dark);
    }

    h2:before {
        width: 1em;
        content: "<";
        left: calc(var(--prog-title) * 50%);
        transform: translateX(-100%);
    }

    h2:after {
        width: 2em;
        content: "/>";
        right: calc(var(--prog-title) * 50%);
        transform: translateX(100%);
    }
</style>
