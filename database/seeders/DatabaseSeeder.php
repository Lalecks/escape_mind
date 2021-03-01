<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        DB::table('users')->insert([
            // 'id' => 1,
            'name' => "sarah_mrcrt",
            'email' => 'sarah@live.fr',
            'email_verified_at' => NULL,
            'password' => '$2y$10$b0vEbyDy7XcSnQgPM9nE/OvMG/7Z6OMxdYnj0DyIbmsl1fKB4MLpq',
            'remember_token' => NULL,
            'created_at' => '2020-03-17 10:09:20',
            'updated_at' => '2020-03-17 10:12:20',
        ]);
    }
}
