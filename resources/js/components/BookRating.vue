<template>
    <rating class="pointer-events-none" :items="rating" :value="value"></rating>
</template>

<script>
    import Rating from 'vue-bulma-rating'

    export default {
        props: [
            'value'
        ],
        components: {
            Rating
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
        }
    }
</script>
