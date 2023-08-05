<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Users;
use Illuminate\Support\Facades\Hash;
use App\Mail\userReg;
use Illuminate\Support\Facades\Mail;




class drag extends Controller
{
    public function storeuser( Request $request){
   
        $this->validate($request,[
            'name' => 'required|min:5|max:20|string',
            'email' => 'required|min:5|max:50|unique:user,email',
            'password' => 'required|min:8|',
            'contact' => 'numeric|nullable',
        ]);
        $requestdata=$request->except(['_token','submit']);
        $requestdata['password']=Hash::make($request->password);
        $requestdata['role_id']=Users::USER_ROLE;
        Mail::to('zeeshanmohammad934@gmail.com')->send(new userReg($requestdata));
        $user=Users::create($requestdata);
        return redirect()->route('login',[] , 301)->with('success','user inserted successfully.');
        
    }
    public function login( Request $request){
       
        return view('login');

    }
}
