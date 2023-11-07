<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class ExtentionsServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        require_once app_path("/Helper/helpers.php");
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
