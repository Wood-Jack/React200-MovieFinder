const expect = require('chai').expect;
const MovieSearch = require('../src/js/containers/MovieSearch');

describe('Movie Search', () =>  {
    
        beforeEach(() => {
            moviesearch = new MovieSearch();
        });
        
        it('there should be an handleMovie Input function', () => {
            expect(moviesearch.handleMovieInput).to.exist;
        });

        

        it('there should be an handle Data Click', () => {
            expect(moviesearch.fetchDataClick).to.exist;
        });

});
