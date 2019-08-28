<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Booked;
use App\Car;

class BookedController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Booked::all();
    }

    

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
       try{

            $var = Car::findOrFail($request->car_id);

            if($var->taken == false && $request->user_id != NULL && $request->car_id != NULL && $request->book_date != NULL){

                $newData = [
                'user_id' => $request->user_id,
                'car_id' => $request->car_id,
                'book_date' => $request->book_date,
                ];

                $fill = Booked::create($newData);

                $var->taken = true;
                $var->save();



                return response([
                    "Successful!",
                ]);
            }else{
                return response([
                    "Failed, car has been booked"
                ]);
            }

            
            
        }catch(\Exception $e){
            return response([
                $e->getMessage()
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try{
            
            $var = Booked::where('user_id',$id)->first();
            return response([
                'booked' => $var
            ]);
        }catch(\Exception $e){
            return response([
                $e->getMessage()
            ]);
        }

    }

   
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        
    }

   
}
