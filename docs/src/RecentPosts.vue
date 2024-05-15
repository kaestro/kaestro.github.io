<template>
    <aside id="recent-posts" aria-label="recent-posts">
        <h2>최신 글</h2>
        <div v-for="post in posts" :key="post.id">
            <a :href="post.url">{{ post.title }}</a><br>
        </div>
    </aside>
</template>

<script>
export default {
    props: ['posts']
};
</script>

<style scoped>
/* CSS styles here */
</style>
