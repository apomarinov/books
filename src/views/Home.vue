<template>
    <div>
        <filters class="pb-10"></filters>
        <book-list></book-list>
    </div>
</template>

<script>
    import Filters from '../components/Filters';
    import BookList from '../components/BookList';

    export default {
        components: {
          Filters, BookList
        }
    }
</script>
