<?php

use App\Http\Controllers\Api\Auth\SocialController;
use App\Http\Controllers\Api\ContentController;
use App\Http\Controllers\Api\RankingController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
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

Route::prefix('user')->middleware('auth:sanctum')->group(function () {
    Route::get('/', function (Request $request) {
        $user = $request->user();
        return sendResponse([
            'user' => $user,
        ], "Success");
    });

    Route::post('/logout', function (Request $request) {
        $request->user()->tokens()->delete();
        return sendResponse([], "success");
    });
});

Route::prefix('social')->controller(SocialController::class)->group(function () {
    Route::prefix('google')->group(function () {
        Route::get('url', 'googleUrl');
        Route::post('login', 'googleLogin');
    });
});

Route::prefix('ranking')->controller(RankingController::class)->group(function () {
    Route::post('page-speed', 'pageSpeed');
    Route::post('seo-good', 'seoGood');
});

Route::prefix('content')->controller(ContentController::class)->group(function () {
    Route::post('checking', 'checking');
});

Route::get('test', function () {
    $time1 = now()->format('h:i:s');
    $url1 = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://shopbetet.vn/may-dun-nuoc-pha-sua-news-100.html&locale=vi&category=accessibility&strategy=mobile";
    $url2 = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://shopbetet.vn/may-dun-nuoc-pha-sua-news-100.html&locale=vi&category=best-practices&strategy=mobile";
    $url3 = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://shopbetet.vn/may-dun-nuoc-pha-sua-news-100.html&locale=vi&category=performance&strategy=mobile";
    $response1 = Http::get($url1);
    $response2 = Http::get($url2);
    $response3 = Http::get($url3);
    $responseData1 = $response1->json();
    $responseData2 = $response2->json();
    $responseData3 = $response3->json();
    $time2 = now()->format('h:i:s');
    return [
        $time1,
        $time2,
        $responseData1,
        $responseData2,
        $responseData3,
    ];
});
