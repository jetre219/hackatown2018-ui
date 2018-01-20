var app = angular.module("readingcircle-app");
app.run([
    "$rootScope",
    "$cookies",
    function ($rootScope, $cookies) {
        $rootScope.lang = $cookies.get("lang");
        if ($rootScope.lang == null) {
            $cookies.put("lang", "en");
            $rootScope.lang = "en";
        }

        var dictionnary = {
            "MAIN_QUOTE":{
                "en" : "Let's read together",
                "fr" : "Lisons tous ensemble"
            },
            "WELCOMING_MESSAGE":{
                "en" : "Welcome to the first reading social network!",
                "fr" : "Bienvenue sur le premier réseau social de lecture!"
            },
            "AUTHOR" : {
                "en" : "Author",
                "fr" : "Auteur"
            },
            "WEEKLY_BOOK" : {
                "en" : "Book of the week",
                "fr" : "Livre de la semaine"
            }
        };

        $rootScope.translate = function (expr) {
            if (dictionnary[expr] == null) {
                return "tra:" + expr;
            }
            return dictionnary[expr][$rootScope.lang];
        };


        $rootScope.changeLanguage = function changeLanguage() {
            $cookies.put("lang", $rootScope.lang == 'en' ? 'fr' : 'en');

            location.reload();
        };
    }
]);
