<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Adaptive Website Template">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Adaptive</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="preload" as="style" href="https://fonts.googleapis.com/css?family=Raleway&display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway&display=swap" media="print" onload="this.media='all'" />

    <!-- Styles -->
    <link href="{{ asset('styles/style.css') }}" rel="stylesheet">

    <!-- Favicon -->
    <link rel="icon" type="image/png" href="favicon.png" />
</head>
<body>
    <noscript>
        <strong>We're sorry but this site does not work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="wrapper"></div>
</body>
</html>
