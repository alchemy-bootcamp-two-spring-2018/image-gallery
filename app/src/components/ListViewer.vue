<template>
    <div>
        <h3>List of Pokemon</h3>
        <ul v-if="images">
            <li
                v-for="image in images"
                :key="image.id"
            >
                <strong>{{ image.name }}</strong>
                &nbsp;
                <a
                :href="image.url"
                > {{ image.description }} 
                </a>
            </li>
            
        </ul>
    </div>
</template>

<script>
export default {
  props: ['images']
};
</script>

<style>

</style>
