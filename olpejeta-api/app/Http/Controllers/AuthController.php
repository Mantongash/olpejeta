<?php

namespace App\Http\Controllers;

use App\Users;

use Illuminate\Http\Request;

class AuthController extends Controller
{

    public function register(Request $request){
        $request->validate([
            'user_email' => 'required', 
            'user_password' => 'required'
        ]);

            $user =new Users;
            $user->user_email=$request->user_email;
            $user->user_password=bcrypt($request->user_email);
            $user->save();


    }

    public function login(){

    }
}