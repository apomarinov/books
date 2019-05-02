<template>
    <div>
        <filters></filters>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <h1 class="font-normal text-3xl text-grey-darkest leading-none mb-8">Full Logo</h1>

        <div class="mb-10">
            <picture style="height: 382px;" class="shadow rounded-lg flex mb-6 items-center justify-center">
                <img src="/images/logo.svg" alt="logo">
            </picture>
            <div class="flex justify-between items-center">
                <p>Original logo on <strong>white</strong> background.</p>

                <a href="/images/logo.svg" class="border border-gray-light rounded-full px-5 py-2 text-black font-bold text-xs">logo.svg</a>
            </div>
        </div>
        <div>
            <picture style="height: 382px;" class="shadow rounded-lg flex mb-6 items-center justify-center bg-blue">
                <img src="/images/negative-logo.svg" alt="logo">
            </picture>
            <div class="flex justify-between items-center">
                <p>Negative logo on <strong>blue</strong> background.</p>

                <a href="/images/negative-logo.svg" class="border border-gray-light rounded-full px-5 py-2 text-black font-bold text-xs">negative-logo.svg</a>
            </div>
        </div>
    </div>
</template>

<script>
    import Filters from './Filters';
    import { mapActions, mapGetters } from 'vuex';

    export default {
        data() {
          return {
              filters: {}
          }
        },
        components: {
          Filters
        },
        computed: {
            ...mapGetters(['books'])
        },
        methods: {
            ...mapActions([
                'getAllBooks',
                'addFavoriteBook',
                'removeFavoriteBook'
            ]),
            filterBooks() {
                let randomLetter = 'a';//String.fromCharCode(97 + Math.floor(Math.random() * 25));
                let params = {
                    q: randomLetter,
                    maxResults: 20,
                    ...this.filters
                };
                this.getAllBooks(params);
            }
        },
        mounted() {

            // this.getBook({
            //     id: "wNOoBAAAQBAJ",
            //     callback: book => {
            //         console.log(book);
            //     }
            // });

            // this.addFavoriteBook("wNOoBAAAQBAJ");
            // this.addFavoriteBook("o5JbAAAAcAAJ");
            // this.getFavoriteBooks();

            // this.removeFavoriteBook("o5JbAAAAcAAJ");

            // this.addFavoriteBook("68PaAAAAMAAJ");
        }
    }
</script>
