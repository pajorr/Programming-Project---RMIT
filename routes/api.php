<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/

Route::get("testopen", 'TestController@open');

Route::post('login', 'AuthController@login');
Route::post('register', 'AuthController@register');

Route::apiResources([
    'users' => 'UserController',
    'cars' => 'CarController',
    'books' => 'BookedController',
    'returncars' => 'ReturnCarController'
]);

Route::group(['middleware' => ['jwt.auth']], function() {
    Route::get('logout', 'AuthController@logout');
	Route::get('testclosed', 'TestController@closed');  
	Route::get('refreshtoken', 'AuthController@refreshtoken');	
});

