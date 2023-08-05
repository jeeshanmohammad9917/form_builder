<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('form-builder');
});

Route::controller( \App\Http\Controllers\drag::class)->group(function(){
   
    Route::post('/register','storeuser')->name('store_user');
    Route::get('/login','login')->name('login');


});

