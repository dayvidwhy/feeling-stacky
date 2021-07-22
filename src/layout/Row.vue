<style>
    /*rows go in grids*/
    .row {
        clear: both;
        overflow: auto;
    }
</style>

<template>
    <div class="row">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "Row"    
};
</script>
