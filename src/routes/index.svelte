<script lang="ts">
    import * as Icons from '$lib/icons'
    import { Icon } from '$lib'

    let value = ''

    const iconsFilter = (icons: typeof Icons, search: string) => {
        const iconsEntries = Object.entries(icons)
        if (!search) return iconsEntries
        const regExp = new RegExp(search, 'ig')
        return iconsEntries.filter(([name]) => regExp.test(name))
    }

    $: icons = iconsFilter(Icons, value)

    const handleClick = (name: string) => {
        prompt('Copy to clipboard: Ctrl+C, Enter', name)
    }
</script>

<input class="search" bind:value placeholder="Try to search an icon..." type="search" />
<div class="icon-list">
    {#each icons as [name, icon] (name)}
        <div class="icon-item" on:click={() => handleClick(name)}>
            <Icon>
                <svelte:component this={icon} />
            </Icon>
            {name}
        </div>
    {/each}
</div>

<style lang="scss">
    .search {
        display: block;
        width: 100%;
        outline: none;
        border-radius: 10px;
        border: 1px solid #eee;
        padding: 10px;
        margin-bottom: 10px;
        transition: border 0.2s;
        &:focus {
            border-color: #2080f0;
        }
    }
    .icon-list {
        display: grid;
        grid-template-columns: repeat(6, minmax(100px, 1fr));
    }
    .icon-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        cursor: default;
        padding: 30px 20px;
        color: #888;
        font-size: 13px;
        word-break: break-all;
        :global(.o-icon) {
            margin-bottom: 15px;
            color: #333;
            font-size: 26px;
        }
        &:hover {
            background-color: #f5f5f5;
        }
    }
</style>
