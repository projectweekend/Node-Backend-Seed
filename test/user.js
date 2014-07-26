var Chance = require('chance');
var expect = require( 'chai' ).expect;
var supertest = require( 'supertest' );
var api = supertest( 'http://192.168.13.81:3000' );
var chance = new Chance();

var claimedEmail;


describe( 'user signup', function () {

    describe( 'with valid data', function () {

        it( 'responds with 201 and data', function ( done ) {

            api.post( '/api/signup' )
                .set( 'Content-Type', 'application/json' )
                .send( {
                    email: chance.email(),
                    password: "123456"
                } )
                .expect( 201 )
                .end( function ( err, res ) {

                    if ( err ) {
                        return done( err );
                    }

                    expect( res.body ).to.have.a.property( '_id' );
                    expect( res.body ).to.have.a.property( 'email' );
                    expect( res.body ).to.have.a.property( 'password' );

                    claimedEmail = res.body.email;

                    done();

                } );
        } );

    } );

    describe( 'with invalid email', function () {

        it( 'responds with 400', function ( done ) {

            api.post( '/api/signup' )
                .set( 'Content-Type', 'application/json' )
                .send( {
                    email: "not an email",
                    password: "123456"
                } )
                .expect( 400 )
                .end( function ( err, res ) {

                    if ( err ) {
                        return done( err );
                    }

                    done();

                } );

        } );

    } );

    describe( 'with no password', function () {

        it( 'responds with 400', function ( done ) {

            api.post( '/api/signup' )
                .set( 'Content-Type', 'application/json' )
                .send( {
                    email: "test@test.com"
                } )
                .expect( 400 )
                .end( function ( err, res ) {

                    if ( err ) {
                        return done( err );
                    }

                    done();

                } );

        } );

    } );

    describe( 'with email already in use', function () {

        it( 'responds with 409 and message', function ( done ) {

            api.post( '/api/signup' )
                .set( 'Content-Type', 'application/json' )
                .send( {
                    email: claimedEmail,
                    password: "123456"
                } )
                .expect( 409 )
                .end( function ( err, res ) {

                    if ( err ) {
                        return done( err );
                    }

                    done();

                } );

        } );

    } );

} );
