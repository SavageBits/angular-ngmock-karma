var baseUrl = 'http://www.omdbapi.com/?v=1&';

function OmdbSvc($http, $q) {
    OmdbSvc.search = function(query) {
        $http
            .get(baseUrl + 's=' + encodeURIComponent(query))
            .then(function(response) {
                console.log('got data back');
                console.log(response.data);
                return response.data;
            });


//        return {"Title":"Star Wars","Year":"1983","Rated":"N/A","Released":"01 May 1983","Runtime":"N/A","Genre":"Action, Adventure, Sci-Fi","Director":"N/A","Writer":"N/A","Actors":"Harrison Ford, Alec Guinness, Mark Hamill, James Earl Jones","Plot":"N/A","Language":"English","Country":"USA","Awards":"N/A","Poster":"N/A","Metascore":"N/A","imdbRating":"7.8","imdbVotes":"345","imdbID":"tt0251413","Type":"game","Response":"True"};
    }

    OmdbSvc.searchUsingQ = function(query) {
        var deferred = $q.defer();

        $http.get(baseUrl + 's=' + encodeURIComponent(query))
            .success(function(data) {
                console.log('got data back using q');
                console.log(data);
                deferred.resolve(data);
            });

        return deferred.promise;

    //        return {"Title":"Star Wars","Year":"1983","Rated":"N/A","Released":"01 May 1983","Runtime":"N/A","Genre":"Action, Adventure, Sci-Fi","Director":"N/A","Writer":"N/A","Actors":"Harrison Ford, Alec Guinness, Mark Hamill, James Earl Jones","Plot":"N/A","Language":"English","Country":"USA","Awards":"N/A","Poster":"N/A","Metascore":"N/A","imdbRating":"7.8","imdbVotes":"345","imdbID":"tt0251413","Type":"game","Response":"True"};
    }

    OmdbSvc.find = function(id) {
        var deferred = $q.defer();

        $http.get(baseUrl + 'i=' + id)
            .success(function(data) {
                deferred.resolve(data);
            });

        return deferred.promise;
        //return {"Title":"Star Wars","Year":"1983","Rated":"N/A","Released":"01 May 1983","Runtime":"N/A","Genre":"Action, Adventure, Sci-Fi","Director":"N/A","Writer":"N/A","Actors":"Harrison Ford, Alec Guinness, Mark Hamill, James Earl Jones","Plot":"N/A","Language":"English","Country":"USA","Awards":"N/A","Poster":"N/A","Metascore":"N/A","imdbRating":"7.8","imdbVotes":"345","imdbID":"tt0251413","Type":"game","Response":"True"};
    }

    return OmdbSvc;
}

angular
    .module('omdb', [])
    .factory('OmdbSvc', OmdbSvc);
