<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
// use Illuminate\Support\Str;
use App\Model\Comment;

class CreateCommentsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();

        foreach (range(1, 200) as $list) {

            $comment = new  Comment();
            $comment->user_id = $faker->numberBetween($min=1,$max=200);
            $comment->comment =  $faker->paragraph(1);
            $comment->products_id =  $faker->numberBetween($min=1,$max=200);
            $comment->save();
        }
    }
}
