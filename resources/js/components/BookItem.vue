<template>
    <div style="height: 380px; width: 260px" class="shadow rounded-lg p-4 flex flex-col bg-grey-light">
        <div class="flex-1">
            <div class="flex items-center justify-center pb-2 cursor-pointer">
                <div class="cover pt-24" v-if="!book.image">
                    <i class="fas fa-images" ></i>
                </div>
                <img @click="viewBook(book.id)" v-if="book.image" class="cover rounded-lg" :src="book.image" :alt="book.title">
            </div>
            <p class="has-text-centered">{{ book.price }}</p>
            <p class="has-text-centered overflow-hidden">{{ book.title | truncate(45) }}</p>
            <p v-if="book.authors" class="has-text-centered"><strong>{{ book.authors[0] | truncate(45) }}</strong></p>
        </div>
        <div class="pt-5 pin-b h-12">
            <book-rating :value="Math.floor(book.rating)"></book-rating>
            <div class="fave">
                <i slot="icon" @click="toggleFavorite" class="cursor-pointer fa fa-heart fa-2x" :class="{ 'is-fave': isFavorite }"></i>
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

    .is-fave {
        color: #F05654;
    }
</style>

<script>
    import { mapActions } from 'vuex';
    import Vue2Filters from 'vue2-filters';
    import BookRating from '../components/BookRating'

    export default {
        props: [
            'book'
        ],
        mixins: [Vue2Filters.mixin],
        components: {
            BookRating
        },
        data() {
          return {
              rating: [
                  {
                      title: '5 Stars',
                      value: 5
                  },
                  {
                      title: '4 Stars',
                      value: 4
                  },
                  {
                      title: '3 Stars',
                      value: 3
                  },
                  {
                      title: '2 Stars',
                      value: 2
                  },
                  {
                      title: '1 Star',
                      value: 1
                  }
              ]
          }
        },
        computed: {
          isFavorite() {
              return this.book.isFavorite;
          }
        },
        methods: {
            ...mapActions([
                'toggleFavoriteBook'
            ]),
            toggleFavorite(){
                this.book.isFavorite = !this.book.isFavorite;
                this.toggleFavoriteBook(this.book.id);
            }
        }
    }
</script>
