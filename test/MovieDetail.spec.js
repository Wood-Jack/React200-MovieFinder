const expect = require('chai').expect;
const MovieDetail = require('../src/js/containers/MovieDetails/MovieDetailContainer');


describe('Movie detail', () =>  {
    
        beforeEach(() => {
            moviedetail = new MovieDetail();
        });
        
        it('there should be an go back function', () => {
            expect(moviedetail.goback).to.exist;
        });

});