﻿var app = angular.module('MAQSoftwareApp', ['ngRoute', 'ngResource']);
app.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "/views/home.min.html",
        controller: "HomeController"
    })
    .when('/expertise', {
        templateUrl: '/views/datamanagement.min.html',
        controller: "DataManagementController"
    })
    .when('/expertise/datamanagement', {
        templateUrl: '/views/datamanagement.min.html',
        controller: "DataManagementController"
    })
    .when('/expertise/artificialintelligence', {
        templateUrl: '/views/artificialintelligence.min.html',
        controller: "ArtificialIntelligenceController"
    })
    .when('/expertise/selfservicebi', {
        templateUrl: '/views/selfservicebi.min.html',
        controller: "SelfServiceBIController"
    })
    .when('/expertise/selfservicebiviewall', {
        templateUrl: '/views/selfservicebiviewall.min.html',
        controller: "SelfServiceBIController"
    })
    .when('/expertise/appdevelopment', {
        templateUrl: '/views/appdevelopment.min.html',
        controller: "AppDevelopmentController"
    })
    .when('/expertise/cloudtransformation', {
        templateUrl: '/views/cloudtransformation.min.html',
        controller: "CloudTransformationController"
    })
    .when('/expertise/collaborationcontent', {
        templateUrl: '/views/collaborationcontent.min.html',
        controller: "CollaborationContentController"
    })
    .when('/engagement', {
        templateUrl: '/views/about.min.html',
        controller: "AboutController"
    })
    .when('/engagement/about', {
        templateUrl: '/views/about.min.html',
        controller: "AboutController"
    })
    .when('/engagement/recognitions', {
        templateUrl: '/views/recognitions.min.html',
        controller: "RecognitionsController"
    })
    .when('/news', {
        templateUrl: '/views/news.min.html',
        controller: "NewsController"
    })
    .when('/careers', {
        templateUrl: '/views/careers.min.html',
        controller: "CareersController"
    })
    .when('/contact', {
        templateUrl: '/views/contact.min.html',
        controller: "ContactController"
    })
    .when('/powerbisupport', {
        templateUrl: '/views/powerbisupport.min.html',
        controller: "PowerBISupportController"
    })
    .when('/privacystatement', {
        templateUrl: '/views/privacystatement.min.html',
        controller: "PrivacyStatementController"
    }).otherwise({ redirectTo: "/" });
    $locationProvider.html5Mode(true);
}])
.controller('HomeController', ["$scope", "$location", "$window", function ($scope, $location, $window) {
    $scope.$on('$viewContentLoaded', function () {
        loadPlugins();
        loadNewsMainPage();
        updateTitle();
    });
    $scope.$on('$routeChangeSuccess', function () {
        console.log('Route Change: ' + $location.url());
        $window.ga('set', 'page', $location.url());
        $window.ga('send', 'pageview', {
            'hitCallback': function () {
                console.log('GA hitCallback sent!');
            }
        });
    });
}]).controller('DataManagementController', ["$scope", "$location", "$window", function ($scope, $location, $window) {
    $scope.$on('$viewContentLoaded', function () {
        loadPlugins();
        setTabNavLinkBehavior();
        updateTitle("expertise");
    });
    $scope.$on('$routeChangeSuccess', function () {
        console.log('Route Change: ' + $location.url());
        $window.ga('set', 'page', $location.url());
        $window.ga('send', 'pageview', {
            'hitCallback': function () {
                console.log('GA hitCallback sent!');
            }
        });
        //$window.ga('send', {
        //    'hitType': 'screenview',
        //    'appName': 'MAQ Software',
        //    'screenName': $location.url(),
        //    'hitCallback': function () {
        //        console.log('GA hitCallback sent!');
        //    }
        //});
    });
}]).controller('ArtificialIntelligenceController', ["$scope", "$location", "$window", function ($scope, $location, $window) {
    $scope.$on('$viewContentLoaded', function () {
        loadPlugins();
        updateTitle("expertise");
    });
    $scope.$on('$routeChangeSuccess', function () {
        console.log('Route Change: ' + $location.url());
        $window.ga('set', 'page', $location.url());
        $window.ga('send', 'pageview', {
            'hitCallback': function () {
                console.log('GA hitCallback sent!');
            }
        });
    });
}]).controller('SelfServiceBIController', ["$scope", "$location", "$window", function ($scope, $location, $window) {
    $scope.$on('$viewContentLoaded', function () {
        loadPlugins();
        setTabNavLinkBehavior();
        updateTitle("expertise");
    });
    $scope.$on('$routeChangeSuccess', function () {
        console.log('Route Change: ' + $location.url());
        $window.ga('set', 'page', $location.url());
        $window.ga('send', 'pageview', {
            'hitCallback': function () {
                console.log('GA hitCallback sent!');
            }
        });
    });
}]).controller('AppDevelopmentController', ["$scope", "$location", "$window", function ($scope, $location, $window) {
    $scope.$on('$viewContentLoaded', function () {
        loadPlugins();
        setTabNavLinkBehavior();
        updateTitle("expertise");
    });
    $scope.$on('$routeChangeSuccess', function () {
        console.log('Route Change: ' + $location.url());
        $window.ga('set', 'page', $location.url());
        $window.ga('send', 'pageview', {
            'hitCallback': function () {
                console.log('GA hitCallback sent!');
            }
        });
    });
}]).controller('CloudTransformationController', ["$scope", "$location", "$window", function ($scope, $location, $window) {
    $scope.$on('$viewContentLoaded', function () {
        loadPlugins();
        setTabNavLinkBehavior();
        updateTitle("expertise");
    });
    $scope.$on('$routeChangeSuccess', function () {
        console.log('Route Change: ' + $location.url());
        $window.ga('set', 'page', $location.url());
        $window.ga('send', 'pageview', {
            'hitCallback': function () {
                console.log('GA hitCallback sent!');
            }
        });
    });
}]).controller('CollaborationContentController', ["$scope", "$location", "$window", function ($scope, $location, $window) {
    $scope.$on('$viewContentLoaded', function () {
        loadPlugins();
        setTabNavLinkBehavior();
        updateTitle("expertise");
    });
    $scope.$on('$routeChangeSuccess', function () {
        console.log('Route Change: ' + $location.url());
        $window.ga('set', 'page', $location.url());
        $window.ga('send', 'pageview', {
            'hitCallback': function () {
                console.log('GA hitCallback sent!');
            }
        });
    });
}]).controller('AboutController', ["$scope", "$location", "$window", function ($scope, $location, $window) {
    $scope.$on('$viewContentLoaded', function () {
        loadPlugins();
        loadNewsMainPage();
        updateTitle("engagement");
    });
    $scope.$on('$routeChangeSuccess', function () {
        console.log('Route Change: ' + $location.url());
        $window.ga('set', 'page', $location.url());
        $window.ga('send', 'pageview', {
            'hitCallback': function () {
                console.log('GA hitCallback sent!');
            }
        });
    });
}]).controller('RecognitionsController', ["$scope", "$location", "$window", function ($scope, $location, $window) {
    $scope.$on('$viewContentLoaded', function () {
        loadPlugins();
        loadNewsMainPage();
        updateTitle("engagement");
    });
    $scope.$on('$routeChangeSuccess', function () {
        console.log('Route Change: ' + $location.url());
        $window.ga('set', 'page', $location.url());
        $window.ga('send', 'pageview', {
            'hitCallback': function () {
                console.log('GA hitCallback sent!');
            }
        });
    });
}]).controller('NewsController', ["$scope", "$location", "$window", function ($scope, $location, $window) {
    $scope.$on('$viewContentLoaded', function () {
        loadPlugins();
        newsConstructor();
        updateTitle("news");
    });
    $scope.$on('$routeChangeSuccess', function () {
        console.log('Route Change: ' + $location.url());
        $window.ga('set', 'page', $location.url());
        $window.ga('send', 'pageview', {
            'hitCallback': function () {
                console.log('GA hitCallback sent!');
            }
        });
    });
}]).controller('CareersController', ["$scope", "$location", "$window", function ($scope, $location, $window) {
    $scope.$on('$viewContentLoaded', function () {
        loadPlugins();
        setTabNavLinkBehavior();
        onYouTubeIframeAPIReady();
        // call Career Constructor
        careersConstructor();
        updateTitle("careers");
        //var tag = document.createElement('script');
        //tag.src = "https://www.youtube.com/iframe_api";
        //var firstScriptTag = document.getElementsByTagName('script')[0];
        //firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    });
    $scope.$on('$routeChangeSuccess', function () {
        // load script dynamically using any method
        //var careerjs = document.createElement('script');
        //careerjs.setAttribute('src', 'js/careers.js');
        //document.head.appendChild(careerjs);
        console.log('Route Change: ' + $location.url());
        $window.ga('set', 'page', $location.url());
        $window.ga('send', 'pageview', {
            'hitCallback': function () {
                console.log('GA hitCallback sent!');
            }
        });
    });
}]).controller('ContactController', ["$scope", "$location", "$window", function ($scope, $location, $window) {
    $scope.$on('$viewContentLoaded', function () {
        loadPlugins();
        contactConstructor();
        updateTitle("contact");
    });
    $scope.$on('$routeChangeSuccess', function () {
        // load script dynamically using any method
        var googlemaps = document.createElement('script');
        googlemaps.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?v=3&sensor=true&key=AIzaSyBHkJlVTrAkgcD9jJxo_CyHx0YZZtX65iY&callback=initMap');
        document.head.appendChild(googlemaps);
        console.log('Route Change: ' + $location.url());
        $window.ga('set', 'page', $location.url());
        $window.ga('send', 'pageview', {
            'hitCallback': function () {
                console.log('GA hitCallback sent!');
            }
        });
    });
}]).controller('PowerBISupportController', ["$scope", "$location", "$window", function ($scope, $location, $window) {
    $scope.$on('$viewContentLoaded', function () {
        loadPlugins();
        updateTitle();
        redirectPowerBI(); 
    });
    $scope.$on('$routeChangeSuccess', function () {
        console.log('Route Change: ' + $location.url());
        $window.ga('set', 'page', $location.url());
        $window.ga('send', 'pageview', {
            'hitCallback': function () {
                console.log('GA hitCallback sent!');
            }
        });
    });
}]).controller('PrivacyStatementController', ["$scope", "$location", "$window", function ($scope, $location, $window) {
    $scope.$on('$viewContentLoaded', function () {
        loadPlugins();
        updateTitle("privacystatement");
    });
    $scope.$on('$routeChangeSuccess', function () {
        console.log('Route Change: ' + $location.url());
        $window.ga('set', 'page', $location.url());
        $window.ga('send', 'pageview', {
            'hitCallback': function () {
                console.log('GA hitCallback sent!');
            }
        });
    });
}]);