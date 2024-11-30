<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\User\DashboardController;
use App\Models\Movie;
use App\Http\Controllers\User\MovieController;
use App\Http\Controllers\User\SubcriptionPlanController;
use App\Http\Controllers\Admin\MovieController as AdminMovieController;

// Route::get('admin', function () {
//    return 'Hi Admin';
// })->middleware('role:admin');

// Route::get('user', function () {
//    return 'Hi Admin';
// })->middleware('role:user');

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::redirect('/', '/login');

// Route::get('/dashboard', function () {
//     return Inertia::render('User/Dashboard/Index');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth', 'role:user')->prefix('dashboard')->name('user.dashboard.')-> group(function () {
    Route::get('/' , [DashboardController::class, 'index'])->name('index');

    Route::get('/movie/{movie:slug}', [MovieController::class, 'show'])->name('movie.show')->middleware('checkUserSubscription:true');

    Route::get('subcription-plan', [SubcriptionPlanController::class, 'index'])->name('subscriptionPlan.index')->middleware('checkUserSubscription:false');
    
    Route::post('subcription-plan/{subscriptionPlan}/user-subscribe}', [SubcriptionPlanController::class, 'userSubscribe'])->name('subscriptionPlan.userSubscribe')->middleware('checkUserSubscription:false');
});

Route::middleware('auth', 'role:admin')->prefix('admin')->name('admin.dashboard.')-> group(function () {
    Route::resource('movie', AdminMovieController::class);
});

// Route::middleware(['auth', 'role:admin'])
//     ->prefix('admin')
//     ->name('admin.dashboard.')
//     ->group(function () {
//         Route::resource('movie', AdminMovieController::class);
// });


Route::prefix('prototype')->name('prototype.')->group(function () {
    Route::get('/login' , function () {
        return Inertia::render('Prototype/Login');
    })->name('login');

    Route::get('/register' , function () {
        return Inertia::render('Prototype/Register');
    })->name('register');

    Route::get('/dashboard' , function () {
        return Inertia::render('Prototype/Dashboard');
    })->name('dashboard');

     Route::get('/subcriptionPlan' , function () {
        return Inertia::render('Prototype/SubcriptionPlan');
    })->name('subcriptionPlan');

    Route::get('/movie/{slug}' , function () {
        return Inertia::render('Prototype/Movie/Show');
    })->name('movie.show');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
