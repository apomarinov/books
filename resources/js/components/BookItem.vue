<template>
    <div style="height: 380px; width: 260px" class="shadow rounded-lg p-4 flex flex-col bg-grey-light">
        <div class="flex-1">
            <div class="flex items-center justify-center pb-2 cursor-pointer">
                <div class="cover pt-24" v-if="!book.image">
                    <i class="fas fa-images" ></i>
                </div>
                <router-link class="text-black" :to="{ name: 'bookView', params: { bookId: book.id } }">
                    <img v-if="book.image" class="cover rounded-lg" :src="book.image" :alt="book.title">
                </router-link>
            </div>
            <p class="has-text-centered">{{ book.price }}</p>
            <p class="has-text-centered overflow-hidden">{{ book.title | truncate(45) }}</p>
            <p v-if="book.authors" class="has-text-centered"><strong>{{ book.authors[0] | truncate(45) }}</strong></p>
        </div>
        <div class="pt-5 pin-b h-12">
            <book-rating :value="Math.floor(book.rating)"></book-rating>
            <div class="fave">
                <book-fave-button :book-id="book.id"></book-fave-button>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .fave {
        margin-top: -60px;
        margin-left: 200px;
    }

    .cover {
        height: 200px;
    }

</style>

<script>
    import Vue2Filters from 'vue2-filters';
    import BookRating from '../components/BookRating'
    import BookFaveButton from '../components/BookFaveButton'

    export default {
        props: [
            'book'
        ],
        mixins: [Vue2Filters.mixin],
        components: {
            BookRating,
            BookFaveButton
        }
    }
</script>
