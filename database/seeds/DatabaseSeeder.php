<?php

use App\User;
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
        User::create([
            'name' => 'Admin',
            'email' => 'admin@test.com',
            'username' => 'admin',
            'password' => Hash::make('Passw0rd!'),
            'role' => 'admin'
        ]);
        User::create([
            'name' => 'User',
            'email' => 'user@test.com',
            'username' => 'user',
            'password' => Hash::make('Passw0rd!')
        ]);
    }
}
