<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use App\Model\Comment;
use App\Model\Cart;

class Products extends Model
{
    protected $table = 'products';
    public $timestamps = true;

    public function comments(){
        
        return $this->hasMany(Comment::class);
    }

    public function cart(){
        return $this->belongsTo(Cart::class,$foreignKey = 'id');
    }

}
