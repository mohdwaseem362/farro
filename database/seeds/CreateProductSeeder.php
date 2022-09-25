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

        foreach (range(1, 200) as $list) {

            $user = new  Products();
            $user->name = $faker->word;
            $user->user_id = $faker->numberBetween($min=1,$max=200);
            $user->description =  $faker->sentence;
            $user->summary =  $faker->sentence;
            $user->image = 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp';
            $user->price =  $faker->numberBetween($min = 1000, $max = 9000);
            $user->save();
        }
    }
}
