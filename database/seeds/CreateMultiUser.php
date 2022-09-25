<?php

use App\User;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use Illuminate\Support\Str;

class CreateMultiUser extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();

        // create a custom admin 
        $user = new  User();
        $user->name = 'Mohd Waseem';
        $user->email = 'mohdwaseem362@gmail.com';
        $user->email_verified_at = now();
        $user->password = '$2y$10$lEHZja1Hci6ONymCgD0bqepgSs5Mc3LsJphDHFBe9QMMRBxjyZBc.'; //
        $user->remember_token = Str::random(10);
        $user->save();

        foreach (range(1, 200) as $list) {

            $user = new  User();
            $user->name = $faker->name;
            $user->email = $faker->unique()->safeEmail;
            $user->email_verified_at = now();
            $user->password = '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'; // password
            $user->remember_token = Str::random(10);
            $user->save();
        }
    }
}
