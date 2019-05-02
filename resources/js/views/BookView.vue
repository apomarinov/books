<template>
    <div class="pt-3">
        <div class="columns">
            <div class="column is-4">
                <div class="cover-empty rounded-lg shadow-md bg-grey-light field has-addons has-addons-centered" v-if="!book.imageMedium">
                    <i class="fas fa-images" ></i>
                </div>
                <img v-if="book.imageMedium" class="rounded-lg shadow-md" :src="book.imageMedium" :alt="book.title">

                <div class="level">
                    <div class="level-left">
                        <div class="level-item mt-5">
                            <book-rating :value="Math.floor(book.rating)"></book-rating>
                        </div>
                    </div>
                    <div class="level-right">
                        <div class="level-item">
                            <book-fave-button :book-id="book.id"></book-fave-button>
                        </div>
                        <div class="level-item">
                            <a v-if="book.buyLink" :href="book.buyLink" target="_blank" class="button is-warning is-rounded">Buy</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="columns">
                    <div class="column">
                        <h1 class="text-3xl font-bold">{{ book.title }}</h1>
                    </div>
                </div>
                <div class="columns" v-if="book.authors">
                    <div class="column">
                        <h4 class="font-bold">Authors</h4>
                        <ul class="list-reset">
                            <li v-for="a in book.authors" v-text="a"></li>
                        </ul>
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        <h4 class="font-bold">Date Published</h4>
                        <p>{{ book.publishedDate }}</p>
                    </div>
                    <div class="column">
                        <h4 class="font-bold">Page Count</h4>
                        <p>{{ book.pageCount }}</p>
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        <h4 class="font-bold">Identifiers</h4>
                        <ul class="list-reset">
                            <li v-for="i in book.identifiers"><strong>{{ i.type }}</strong> - {{ i.identifier }}</li>
                        </ul>
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        <h4 class="font-bold">Description</h4>
                        <p>
                            {{ book.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .cover-empty {
        height: 500px;
        padding-top: 250px;
    }
</style>

<script>
    import { mapActions } from 'vuex';
    import BookRating from '../components/BookRating';
    import BookFaveButton from '../components/BookFaveButton';

    export default {
        data() {
            return {
                book: {}
            };
        },
        methods: {
            ...mapActions(['getBook'])
        },
        components: {
            BookRating,
            BookFaveButton
        },
        created() {
            this.getBook({
                id: this.$route.params.bookId,
                callback: book => {
                    console.log(book);
                    this.book = book;
                }
            });
        }
    }
</script>
