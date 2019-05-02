<template>
    <div>
        <filters class="pb-10"></filters>
        <book-list></book-list>
    </div>
</template>

<script>
    import Filters from './Filters';
    import BookList from './BookList';

    export default {
        components: {
          Filters, BookList
        }
    }
</script>
