<template>
    <div v-if="enabled">
        <div class="columns" v-for="row in bookList">
            <div class="column is-3" v-for="book in row">
                <book-item :book="book"></book-item>
            </div>
        </div>
    </div>
</template>

<style>
    .fave {
        margin-top: -60px;
        margin-left: 200px;
    }

    .is-fave {
        color: #F05654;
    }
</style>

<script>
    import { mapGetters, mapActions } from 'vuex';
    import BookItem from './BookItem';

    export default {
        data() {
            return {
                enabled: false
            }
        },
        components: {
            BookItem
        },
        computed: {
            ...mapGetters(['books']),
            bookList() {
                return _.chunk(this.books, 4);
            }
        },
        methods: {
            ...mapActions(['clearBooks'])
        },
        mounted() {
            this.enabled = true;
            console.log('create');
        }
    }
</script>
