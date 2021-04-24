<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Monolog\ErrorHandler;

class RegisterController extends Controller
{
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
            return $user;
        } catch (\Exception $e) {
            return errors($e);
        }


    }
}
