<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;
use App\Models\User;
use Illuminate\Support\Str; // composer require laravel/helpers
use Illuminate\Support\Facades\Hash;
use Faker\Factory as Faker;
use Carbon\Carbon;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /* Première façon d'imoportation */
        // Sarah
        $user1 = new User();
        $user1->name = "sarah_mrct";
        // $user1->email = "sarah_mrct@gmail.com";
        // $user1->password = bcrypt("12345678");
        // $user1->created_at = "2020-03-17 10:18:20";
        $user1->save();
        // Alex
        $user2 = new User();
        $user2->name = "Lalecks";
        // $user2->email = "alexlavaud@outlook.fr";
        // $user2->password = Hash::make('12345678');
        $user2->created_at = "2020-03-17 10:28:20";
        $user2->save();
        /* Deuxième façon d'imoportation */
        $faker = Faker::create();
        for ($i=0; $i < 14; $i++) { 
	    	DB::table('users')->insert([
	            'name' => $faker->name,
	            // 'email' => str_random(12).'@mail.com',
	            // 'password' => bcrypt('12345678'),
                // 'remember_token' => NULL,
                'time_game' => '2020-03-17 10:29:20',
                // 'created_at' => '2020-03-17 10:29:20',
                // 'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
	        ]);
    	}
    }
}