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

$router->group(['prefix' => 'api'], function () use ($router) {
    $router->get('/birds',  'ExampleController@show');
    $router->put('/birds',  'ExampleController@create');
    $router->update('/birds',  'ExampleController@update');
    $router->delete('/birds',  'ExampleController@delete'); 
    
  });


$router->group(['prefix' => 'api/birds'], function () use ($router) {
    $router->get('/species',  'SpeciesController@show');
    $router->put('/species',  'SpeciesController@create');
    $router->update('/species',  'SpeciesController@update');
    $router->delete('/species',  'SpeciesController@delete'); 
    
  });

  $router->group(['prefix' => 'api/birds'], function () use ($router) {
    $router->get('/categories',  'CategoriesController@show');
    $router->put('/categories',  'CategoriesController@create');
    $router->update('/categories',  'CategoriesController@update');
    $router->delete('/categories',  'CategoriesController@delete'); 
    
  });


  $router->group(['prefix' => 'api/birds'], function () use ($router) {
    $router->get('/sightings',  'SightingsController@show');
    $router->put('/sightings',  'SightingsController@create');
    $router->update('/sightings',  'SightingsController@update');
    $router->delete('/sightings',  'SightintgsController@delete'); 
    
  });

  $router->group(['prefix' => 'api'], function () use ($router) {
    $router->get('/users',  'UsersController@show');
    $router->put('/users',  'UsersController@create');
    $router->update('/users',  'UsersController@update');
    $router->delete('/users',  'UsersController@delete'); 
    
  });
