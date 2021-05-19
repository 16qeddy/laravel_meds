<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

/**
 * returns a list of names used for auto complete
 * 
 * @return Array
 */

Route::get('names', 'medicationController@names');

/**
 * returns a medication and its related details
 * 
 * @return Array
 */

Route::get('details/{medication}', 'medicationController@details');
