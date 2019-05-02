<template>
    <div class="pb-32">
        <book-list></book-list>
    </div>
</template>

<script>
    import Filters from '../components/Filters';
    import BookList from '../components/BookList';
    import { mapActions } from 'vuex';

    export default {
        components: {
            Filters, BookList
        },
        methods: {
            ...mapActions(['getFavoriteBooks'])
        },
        mounted() {
            this.getFavoriteBooks();
        }
    }
</script>
