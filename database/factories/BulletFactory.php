<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class BulletFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->sentence(),
            'post' => fake()->paragraph(1, true),
            'team' => fake()->randomElement(['Marketing', 'Public Relations', 'Sales', 'Accounting', 'Customer Services',  'Human Resource', 'Anonymous']),
            'author' => fake()->userName(),
        ];
    }
}
