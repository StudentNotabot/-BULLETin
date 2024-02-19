<?php

use App\Http\Controllers\BulletController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [BulletController::class, 'index']);
Route::get('/bullet', [BulletController::class, 'show'])->middleware(['auth', 'verified'])->name('creater.bullet');;
Route::post('/bullet', [BulletController::class, 'store'])->middleware(['auth', 'verified'])->name('my.bullet');;
Route::get('/bullet/edit', [BulletController::class, 'edit'])->middleware(['auth', 'verified'])->name('edit.bullet');;
Route::post('/bullet/update', [BulletController::class, 'update'])->middleware(['auth', 'verified'])->name('update.bullet');;
Route::post('/bullet/delete', [BulletController::class, 'destroy'])->middleware(['auth', 'verified'])->name('delete.bullet');;




Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/mypost', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('mypost');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
