<template>
  <div id="app">
    <main class="pt-5">
      <div class="columns">
        <div class="column"></div>
        <div class="column is-1">
          <header class="text-4xl font-bold">
            <h1>Library</h1>
          </header>
          <aside class="pt-8">
            <section class="ml-4">
              <ul class="list-reset">
                <li class="text-sm leading-loose">
                  <router-link class="text-black" to="/" exact>Home</router-link>
                </li>
                <li class="text-sm leading-loose" v-if="this.$store.state.favorites.all().length">
                  <router-link class="text-black" to="/favorites">Favorites</router-link>
                </li>
              </ul>
            </section>
          </aside>
        </div>
        <div class="column is-8">
          <router-view></router-view>
        </div>
        <div class="column"></div>
      </div>
    </main>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>
