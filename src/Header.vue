<template>
    <header class="page-header">
        <h1 class="project-name">{{ title }}</h1>
        <h2 class="project-tagline">
            <a href="/">{{ description }}</a>
        </h2>
        <div v-if="showDownloads">
            <a href="#" class="btn">Download .zip</a>
            <a href="#" class="btn">Download .tar.gz</a>
        </div>
    </header>
</template>

<script>
export default {
    props: ['title', 'description', 'showDownloads']
};
</script>

<style scoped>
/* CSS styles here */
</style>
