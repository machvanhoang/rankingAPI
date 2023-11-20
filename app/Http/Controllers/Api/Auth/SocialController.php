<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;

class SocialController extends Controller
{
    /**
     * Summary of googleUrl
     * @return \Illuminate\Http\Response
     */
    public function googleUrl()
    {
        $url = Socialite::driver('google')->stateless()->redirect()->getTargetUrl();
        return response_success(['url' => $url], "Success");
    }

    /**
     * Summary of googleLogin
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function googleLogin(Request $request)
    {
        try {
            $socialUser = Socialite::driver('google')->stateless()->user();
            $user = User::where('email', $socialUser->getEmail())->first();
            if (!$user) {
                $user = User::create([
                    'name' => $socialUser->getName(),
                    'email' => $socialUser->getEmail(),
                    'password' => bcrypt("admin"),
                ]);
            }
            auth()->login($user);
            $token = $user->createToken('access_token')->plainTextToken;
            return response_success(['token' => $token, 'user' => $user], "Login successful");
        } catch (\Exception $e) {
            return response_error([$e->getMessage()]);
        }
    }
}
