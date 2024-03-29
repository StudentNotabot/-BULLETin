<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bullet extends Model
{
    use HasFactory;
    protected $fillable = ['title', 'post', 'team'];
}
