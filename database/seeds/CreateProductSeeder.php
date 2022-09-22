<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use Illuminate\Support\Str;
use App\Model\Products;

class CreateProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();

        foreach (range(1, 10) as $list) {

            $user = new  Products();
            $user->name = $faker->word;
            $user->description =  $faker->sentence;
            $user->summary =  $faker->sentence;
            $user->image =  $faker->imageUrl($width = 640, $height = 480);
            $user->price =  $faker->numberBetween($min = 1000, $max = 9000);
          
            $user->save();
        }
    }
}
