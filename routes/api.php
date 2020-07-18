<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::prefix('auth')->group(function () {
    Route::post('register', 'AuthController@register');
    Route::post('login', 'AuthController@login');
    Route::post('update', 'AuthController@update');
    Route::get('refresh', 'AuthController@refresh');
    Route::post('send-reset', 'SendResetController@sendPasswordResetLink');
    Route::post('reset-password', 'ResetPasswordController@callResetPassword')->name('password.reset');
    Route::post('send-verification/{id}', 'VerifyEmailController@resend');
    Route::post('email-verify', 'VerifyEmailController@verify')->name('verification.verify');
    Route::group(['middleware' => 'auth:api'], function(){
        Route::get('user', 'AuthController@user');
        Route::post('logout', 'AuthController@logout');
    });
});

Route::group(['middleware' => 'auth:api'], function(){
    // Users
    Route::get('users', 'UserController@index')->middleware('isAdmin');
    Route::get('users/{id}', 'UserController@show')->middleware('isAdminOrSelf');
    Route::get('user_data/{username}', 'UserController@showPublic'); // Public Data of User
});