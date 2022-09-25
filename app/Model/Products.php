<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use App\Model\Comment;

class Products extends Model
{
    protected $table = 'products';
    public $timestamps = true;

    public function comments(){
        
        return $this->hasMany(Comment::class);
    }

}
