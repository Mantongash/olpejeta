<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class ExampleController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function show()
    {
        //get brids details;
        $species = DB::table('Species')        
        ->get();
        
        return response()->json(['bird_data'=>$species]);
    }

    //put details
    public function create(Request$request)
    {
        
        $AddBird = app('db')->
        insert([
            'species_name'=> $request->input('species_name')
        ]);

        return response()->json(['birds'=>$AddBird]);
    }
}
