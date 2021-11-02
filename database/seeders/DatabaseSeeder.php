<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeders.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Administrator',
            'email' => 'admin@test.com',
            'username' => 'admin',
            'password' => Hash::make('Passw0rd!'),
            'role' => 'admin'
        ]);
        DB::table('users')->insert([
            'name' => 'User',
            'email' => 'user@test.com',
            'username' => 'user',
            'password' => Hash::make('Passw0rd!'),
            'role' => 'user'
        ]);
    }
}