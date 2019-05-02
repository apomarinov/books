<template>
    <i slot="icon" @click="toggleFavorite" class="cursor-pointer fa fa-heart fa-2x" :class="{ 'is-fave': isFavorite() }"></i>
</template>

<style>
    .is-fave {
        color: #F05654;
    }
</style>

<script>
    import { mapActions } from 'vuex';

    export default {
        props: [
            'bookId'
        ],
        methods: {
            ...mapActions([
                'toggleFavoriteBook',
                'getFavoriteBooks'
            ]),
            toggleFavorite() {
                this.toggleFavoriteBook(this.bookId);

                if(this.$route.fullPath == '/favorites' && !this.isFavorite()) {
                    this.getFavoriteBooks();

                    if(!this.$store.state.favorites.all().length) {
                        this.$router.push({ name: 'home'});
                    }
                }
            },
            isFavorite() {
                return this.$store.state.favorites.all().indexOf(this.bookId) >= 0;
            }
        },
    }
</script>
