<?php

namespace App\Model;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    public function products(){

        return $this->belongsTo(Products::class,$foreignKey = 'product_id','id');
    }

    public function user(){
        return $this->hasOne(User::class,$foreignKey = 'id','user_id');
    }
}
