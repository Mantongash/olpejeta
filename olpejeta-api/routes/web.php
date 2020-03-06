<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});


$router->get('user/{id}', 'ExampleController@show');

$router->group(['prefix'=>'api'], function() use($router){
    $router->get('/birds', 'BirdController@index');
    $router->post('birds', 'BirdController@create');
    $router->get('birds/{id}', 'BirdController@show');
    $router->put('birds/{id}', 'BirdController@update');
    $router->delete('birds/{id}', 'BirdController@destroy');
    });
