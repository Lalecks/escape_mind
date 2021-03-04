<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = new \App\User();
        $user->name = "sarah_mrct";
        $user->email = "sarah_mrct@gmail.com";
        $user->password = bcrypt("12345678");
        $user->save();


        // for ($i=0; $i < 3; $i++) { 
	    // 	DB::table('users')->insert([
	    //         'name' => str_random(8),
	    //         'email' => str_random(12).'@mail.com',
	    //         'password' => bcrypt('123456'),
        //         'remember_token' => NULL,
        //         'created_at' => '2020-03-17 10:09:20',
        //         'updated_at' => '2020-03-17 10:12:20',
	    //     ]);
    	// }
    }
}
