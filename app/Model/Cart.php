<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use App\Model\Products;

class Cart extends Model
{
   protected $table = 'cart';

   public function product(){

      return $this->hasOne(Products::class,$foreignKey = 'id','products_id');
      
   }
}
