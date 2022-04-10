<script>
    import { redirectEvent } from "../stores/link.js";
    export let href = "/";
</script>

<li><a on:click={redirectEvent} {href}><slot /></a></li>

<style lang="scss">
    a {
        display: inline-block;
        font-size: 5em;
        color: var(--light);
        text-decoration: none;
    }

    li {
        position: relative;
        list-style: none;
        padding-left: 4em;
        margin-top: 0.5em;
        margin-bottom: 0.5em;
        @media (max-width: 425px) {
            transform: translateX(-4em);
        }
    }

    li:before,
    li:after {
        content: "";
        position: absolute;
        background-color: var(--blu);
        left: 0;
        width: 3em;
        height: 100%;
        clip-path: polygon(2.1em 0, 100% 0, calc(100% - 2.1em) 100%, 0 100%);
    }
    li:before {
        transform: translateX(0.5em);
        background-color: var(--lighter);
    }
    li:hover:before {
        transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
        left: 100%;
        transform: translateX(0);
    }
    li:hover:after {
        transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
        width: 100%;
        z-index: -1;
    }
    li:hover {
        a {
            transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
            color: var(--lighter);
            transform: translateX(-0.4em);
        }
    }
</style>
