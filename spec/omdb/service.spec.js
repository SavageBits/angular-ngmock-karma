describe('omdb service', function() {
    var movieData = {"Title":"Star Wars","Year":"1983","Rated":"N/A","Released":"01 May 1983","Runtime":"N/A","Genre":"Action, Adventure, Sci-Fi","Director":"N/A","Writer":"N/A","Actors":"Harrison Ford, Alec Guinness, Mark Hamill, James Earl Jones","Plot":"N/A","Language":"English","Country":"USA","Awards":"N/A","Poster":"N/A","Metascore":"N/A","imdbRating":"7.8","imdbVotes":"345","imdbID":"tt0251413","Type":"game","Response":"True"}
    var movieDataById = {"Title":"Star Wars","Year":"1983","Rated":"N/A","Released":"01 May 1983","Runtime":"N/A","Genre":"Action, Adventure, Sci-Fi","Director":"N/A","Writer":"N/A","Actors":"Harrison Ford, Alec Guinness, Mark Hamill, James Earl Jones","Plot":"N/A","Language":"English","Country":"USA","Awards":"N/A","Poster":"N/A","Metascore":"N/A","imdbRating":"7.8","imdbVotes":"345","imdbID":"tt0251413","Type":"game","Response":"True"}
    var omdbApi = {};

    //this is effectively angular.mock.module('omdb')
    // and angular.mock.inject(...) below
    //ngMock makes module() and inject() available on the window object
    // so angular.mock is optional
    beforeEach(
        module('omdb')
    );

    beforeEach(
        inject(function(_OmdbSvc_) {
            omdbApi = _OmdbSvc_;
        })
    );

    it('should return movie search data', function() {
        //anonymous object pattern
        // angular
        //     .mock
        //     .module({
        //         'omdbApi' : {
        //             search: function(query) {
        //                 return movieData;
        //             }
        //         }
        //     });

        //anonymous service pattern via the $provide built-in
        // which registers components with the $injector
        // same as doing angular.module('my-module').factory(...)
        // angular.mock
        //     .module(function($provide) {
        //         $provide.factory('omdbApi', function() {
        //             return {
        //                 search: function(query) {
        //                     return movieData;
        //                 }
        //             }
        //         })
        //     });

        expect(omdbApi.search('star wars episode iv')).toEqual(movieData);
    });

    it('should return movie data by id', function() {
        expect(omdbApi.find('tt0251413')).toEqual(movieDataById);
    });
});
