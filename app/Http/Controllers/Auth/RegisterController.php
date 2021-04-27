<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Monolog\ErrorHandler;

class RegisterController extends Controller
{
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required',
            'password' => 'required'
        ]);

        dump($request->all());

        if ($user = Auth::attempt($request->all())) {
            echo 'SUCCESS!';
            Auth::login($user);
        }


        Auth::login($user);

        return $validator;
    }
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required|confirmed|min:8'

        ]);

        if ($validator->fails()) {
            return errors($validator->errors());
        }


        try {
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);

            Auth::login($user);

            return $user;
        } catch (\Exception $e) {
            return errors($e);
        }


    }
}
