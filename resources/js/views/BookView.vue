<template>
    <div class="pt-3">
        <div class="columns">
            <div class="column is-4">
                <div class="cover-empty rounded-lg shadow-md bg-grey-light field has-addons has-addons-centered" v-if="!book.imageMedium">
                    <i class="fas fa-images" ></i>
                </div>
                <img v-if="book.imageMedium" class="rounded-lg shadow-md" :src="book.imageMedium" :alt="book.title">

                <div class="pt-5 pin-b h-12">
                    <book-rating :value="Math.floor(book.rating)"></book-rating>
                    <div class="fave">
                        <!--<i slot="icon" @click="toggleFavorite" class="cursor-pointer fa fa-heart fa-2x" :class="{ 'is-fave': isFavorite }"></i>-->
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
            BookRating
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
