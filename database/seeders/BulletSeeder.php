<?php

namespace Database\Seeders;

use App\Models\Bullet;
use Illuminate\Database\Seeder;

class BulletSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Bullet::factory()->count(30)->create();
    }
}
