<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet">

    <link rel="stylesheet" href="/css/app.css">

    <title>App4e </title>
</head>
<body class="font-sans">
<div id="app">
    <header class="py-6 px-8 mb-8">
        <h1>Books</h1>
    </header>
    <div class="container px-8 pb-10">
        <main class="flex">
            <aside class="w-64 pt-8">
                <section class="mb-10">
                    <h5 class="uppercase font-bold mb-5 text-base">Your Books</h5>
                    <ul class="list-reset">
                        <li class="text-sm leading-loose">
                            <router-link class="text-black" to="/" exact>Home</router-link>
                        </li>
                        <li class="text-sm leading-loose">
                            <router-link class="text-black" to="/favorites">Favorites</router-link>
                        </li>
                    </ul>
                </section>
            </aside>
            <div class="primary flex-1">
                <router-view></router-view>
            </div>
        </main>
    </div>
</div>
<script src="/js/app.js"></script>
</body>
</html>
