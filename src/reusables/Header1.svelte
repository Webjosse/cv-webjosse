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
    <h1 style={`--prog-title: ${$progress};`}><slot /></h1>
</center>

<style>
    h1 {
        margin-right: 2em;
        margin-left: 2em;
        padding-left: 1em;
        padding-right: 1em;
        font-size: 4em;
        position: relative;
        clip-path: polygon(
            calc(var(--prog-title) * 50% - 0em) 0%,
            calc(var(--prog-title) * 50% - 1em) 100%,
            calc(100% - (var(--prog-title) * 50%) + 0em) 100%,
            calc(100% - (var(--prog-title) * 50%) + 1em) 0%
        );
        width: fit-content;
    }

    h1:after,
    h1:before {
        content: "";
        display: block;
        position: absolute;
        background-color: var(--blu);
        height: 100%;
        width: 1em;
        top: 0;
        border-right: 1em solid var(--light);
    }

    h1:after {
        left: calc(var(--prog-title) * 50%);
        clip-path: polygon(50% 0%, 100% 0%, 50% 100%, 0% 100%);
        transform: translateX(-50%);
    }

    h1:before {
        right: calc(var(--prog-title) * 50%);
        clip-path: polygon(50% 0%, 100% 0%, 50% 100%, 0% 100%);
        transform: translateX(50%);
    }
</style>
