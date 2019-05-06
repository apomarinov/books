<template>
    <div class="mt-5">
        <div v-show="enabled" class="columns" v-for="row in bookList" v-bind:key="row">
            <div class="column is-3" v-for="book in row" v-bind:key="book.id">
                <transition name="slide-fade" appear>
                    <book-item :book="book"></book-item>
                </transition>
            </div>
        </div>
    </div>
</template>

<style>
    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */ {
        transform: translateY(20px);
        opacity: 0;
    }
</style>

<script>
    import { mapGetters } from 'vuex';
    import BookItem from '../components/BookItem';

    export default {
        data() {
            return {
                enabled: false,
                loader: {}
            }
        },
        components: {
            BookItem
        },
        computed: {
            ...mapGetters(['books']),
            bookList() {
                this.enabled = true;
                return _.chunk(this.books, 4);
            }
        }
    }
</script>
