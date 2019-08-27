<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
    protected $fillable = [
    	'car_name', 'car_type', 'plate_number', 'fuel'
    ];

     public function bookeds(){
    	return $this->hasOne('App\Booked', 'car_id');
    }
}
