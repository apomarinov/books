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
        data() {
            return {
                isFave: undefined
            }
        },
        methods: {
            ...mapActions([
                'toggleFavoriteBook'
            ]),
            toggleFavorite() {
                this.isFave = !this.isFave;
                this.toggleFavoriteBook(this.bookId);
            },
            isFavorite() {
                if(this.isFave === undefined) {
                    this.isFave = this.$store.state.favorites.all().indexOf(this.bookId) >= 0;
                }
                return this.isFave;
            }
        },
    }
</script>
