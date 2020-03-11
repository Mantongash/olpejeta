<?php

namespace App\Http\Controllers;

use App\Sightings;

use Illuminate\Http\Request;

class SightingsController extends Controller
{

    public function showAllSightings()
    {
        return response()->json(Sightings::all());
    }

    public function showOneSighting($id)
    {
        return response()->json(Sightings::find($id));
    }

    public function create(Request $request)
    {
        $sighting = Sightings::create($request->all());

        return response()->json($sighting, 201);
    }

    public function update($id, Request $request)
    {
        $sighting = Sightings::findOrFail($id);
        $sighting->update($request->all());

        return response()->json($sighting, 200);
    }

    public function delete($id)
    {
        Sightings::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}