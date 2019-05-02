<template>
    <i slot="icon" @click="toggleFavorite" class="cursor-pointer fa fa-heart fa-2x" :class="{ 'is-fave': isFavorite }"></i>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        props: [
            'value'
        ],
        methods: {
            ...mapActions('toggleFavorite')
        },
        computed: {
            isFavorite() {
                return this.book.isFavorite;
            }
        },
    }
</script>
