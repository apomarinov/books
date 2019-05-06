<template>
    <div>
        <div class="columns items-center justify-center">
            <div class="column"></div>
            <div class="column is-5">
                <b-field grouped>
                    <b-input v-model="filters.query" placeholder="Search..." expanded></b-input>
                    <p class="control">
                        <button class="button is-info" @click="filterBooks">Search</button>
                    </p>
                </b-field>
            </div>
            <div class="column is-1">
                <b-switch type="is-info" v-model="enabled">
                    Filters
                </b-switch>
            </div>
            <div class="column"></div>
        </div>
        <transition name="filters">
            <div class="columns items-center justify-center" v-if="enabled">
                <div class="column is-3">
                    <b-field>
                        <b-autocomplete
                            v-model="lang"
                            field="label"
                            :open-on-focus="true"
                            :data="filteredLanguageList()"
                            placeholder="Choose Language..."
                            icon="magnify"
                            @select="option => { filters.language = option; filterBooks(); }">
                            <template slot="empty">No results found</template>
                        </b-autocomplete>
                    </b-field>
                </div>
                <b-dropdown aria-role="list" v-model="filters.bookType" @change="filterBooks">
                    <button class="button" slot="trigger">
                        <span>Type{{ dropdownTitle(filters.bookType) }}</span>
                        <b-icon icon="menu-down"></b-icon>
                    </button>

                    <b-dropdown-item aria-role="listitem">None</b-dropdown-item>
                    <b-dropdown-item v-for="type in bookTypes" :key="type.value" aria-role="listitem" :value="type">{{ type.label }}</b-dropdown-item>
                </b-dropdown>
                <b-dropdown aria-role="list" v-model="filters.priceType" @change="filterBooks">
                    <button class="button" slot="trigger">
                        <span>Price{{ dropdownTitle(filters.priceType) }}</span>
                        <b-icon icon="menu-down"></b-icon>
                    </button>

                    <b-dropdown-item aria-role="listitem">None</b-dropdown-item>
                    <b-dropdown-item v-for="type in priceTypes" :key="type.value" aria-role="listitem" :value="type">{{ type.label }}</b-dropdown-item>
                </b-dropdown>
                <b-dropdown aria-role="list" v-model="filters.printType" @change="filterBooks">
                    <button class="button" slot="trigger">
                        <span>Print Type{{ dropdownTitle(filters.printType) }}</span>
                        <b-icon icon="menu-down"></b-icon>
                    </button>

                    <b-dropdown-item aria-role="listitem">None</b-dropdown-item>
                    <b-dropdown-item v-for="type in printTypes" :key="type.value" aria-role="listitem" :value="type">{{ type.label }}</b-dropdown-item>
                </b-dropdown>
            </div>
        </transition>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import LanguageCodes from '../language-codes';
    import Vue from 'vue';

    export default {
        data() {
            return {
                filters: {
                    query: '',
                    bookType: undefined,
                    language: undefined,
                    priceType: undefined,
                    printType: undefined,
                },
                bookTypes: [
                  {
                      value: 'ebooks',
                      label: 'eBooks'
                  },
                  {
                      value: 'partial',
                      label: 'Non eBooks'
                  }
                ],
                priceTypes: [
                  {
                      value: 'free-ebooks',
                      label: 'Free'
                  },
                  {
                      value: 'paid-ebooks',
                      label: 'Paid'
                  }
                ],
                printTypes: [
                  {
                      value: 'all',
                      label: 'All'
                  },
                  {
                      value: 'books',
                      label: 'Books'
                  },
                  {
                      value: 'magazines',
                      label: 'Magazines'
                  }
                ],
                languageList: LanguageCodes,
                lang: '',
                enabled: false
            }
        },
        methods: {
            ...mapActions([
                'getAllBooks'
            ]),
            filterBooks() {
                Vue.nextTick(() => {
                    let randomLetter = String.fromCharCode(97 + Math.floor(Math.random() * 25));
                    let params = {
                        q: randomLetter,
                        maxResults: 20,
                        filter:[]
                    };

                    if(this.filters.query.length) {
                        params.q = this.filters.query;
                    }
                    if(this.filters.bookType) {
                        params.filter.push(this.filters.bookType.value);
                    }
                    if(this.filters.priceType) {
                        params.filter.push(this.filters.priceType.value);
                    }
                    if(this.filters.language) {
                        params.langRestrict = this.filters.language.value;
                    }
                    if(this.filters.printType) {
                        params.printType = this.filters.printType.value;
                    }

                    this.getAllBooks(params);
                });
            },
            dropdownTitle(option) {
                return option ? ': ' + option.label : '';
            },
            filteredLanguageList() {
                return this.languageList.filter((option) => {
                    return option.label
                        .toString()
                        .toLowerCase()
                        .indexOf(this.lang.toLowerCase()) >= 0
                })
            }
        },
        created() {
            this.filterBooks();
        }
    }
</script>

<style scoped>
    .filters-enter-active {
        transition: all .3s ease;
    }
    .filters-leave-active {
        transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .filters-enter, .filters-leave-to {
        transform: translateY(-30px);
        opacity: 0;
    }
</style>
