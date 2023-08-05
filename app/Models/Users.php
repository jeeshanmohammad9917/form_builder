<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Users extends Model
{
    use HasFactory;
    const ADMIN_ROLE = 1;
    const USER_ROLE = 0;

    protected $table='user';

    protected $primarykey='id';
    
    protected $fillable = [
        'name',
        'email',
        'password',
        'contact',
        'role_id'
    ];
}
