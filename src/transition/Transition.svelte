<script>
    import { linkProg } from "../stores/link.js";
</script>

<div class="transition" style={`--prog-slash: ${$linkProg.toString()}`}>
    <div><slot /></div>
</div>

<style>
    div.transition {
        margin: 0;
        background-color: var(--darker);
        position: absolute;
        top: 0;
        clip-path: polygon(
            calc(140% - 160% * var(--prog-slash)) 0,
            100% 0,
            100% 100%,
            calc(120% - 160% * var(--prog-slash)) 100%
        );
        width: 100%;
        height: 100%;
    }
    div.transition:after,
    div.transition:before {
        content: "";
        position: absolute;

        background-color: var(--light);

        top: 0;
        height: 100%;
        width: 100%;
        left: 0;
        clip-path: polygon(
            calc(160% - 160% * var(--prog-slash)) 0,
            0 0,
            0 100%,
            calc(140% - 160% * var(--prog-slash)) 100%
        );
        z-index: 100;
    }

    div.transition:after {
        background-color: var(--blu);
        left: -5%;
    }
    div.transition > div {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: calc(100vh - 2em);
        overflow-y: auto;
        padding-bottom: 2em;
    }
</style>
