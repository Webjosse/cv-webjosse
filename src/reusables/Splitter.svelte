<script>
    export let part = 0.5;
</script>

<div class="splitter" style={`--part: ${(part * 100).toString()}%`}>
    <div>
        <slot name="left" />
    </div>
    <div>
        <slot name="right" />
    </div>
</div>

<style lang="scss">
    div.splitter {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: max-content;
        > div {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 1em;
            width: calc(var(--part) - 2em);
        }
        :last-child {
            width: calc(100% - var(--part) - 2em);
        }
        @media (max-width: 425px) {
            flex-direction: column;
            justify-content: flex-start;
            align-items: stretch;
            > div {
                width: auto;
            }
            :last-child {
                width: auto;
            }
        }
    }
</style>
