<template>
    <div>
        <Content :content="content" />
        <Footer />
        <Buttons />
    </div>
</template>

<script>
import Content from './Content.vue';
import Footer from './Footer.vue';
import Buttons from './Buttons.vue';

export default {
    components: {
        Content,
        Footer,
        Buttons
    },
    data() {
        return {
            content: 'Your content here'
        };
    }
};
</script>

<style scoped>
/* CSS styles here */
</style>
