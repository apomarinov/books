<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css">

    <link rel="stylesheet" href="/css/app.css">

    <title>App4e </title>
</head>
<body class="font-sans">
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
<script src="/js/app.js"></script>
</body>
</html>
