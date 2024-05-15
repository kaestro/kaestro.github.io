<template>
    <aside id="category-list" aria-label="Category List">
        <h2>Categories</h2>
        <ul>
            <li v-for="category in categories" :key="category">
                <a :href="'/categories/' + category">{{ category }}</a>
            </li>
        </ul>
    </aside>
</template>

<script>
export default {
    props: ['categories']
};
</script>

<style scoped>
/* CSS styles here */
</style>
