<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles; 
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Relations\HasOne;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable, HasApiTokens, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    // public function getIsActiveAttribute()
    // {
    //     if ($this->LastActiveUserSubscription) {
    //         return false;
    //     }
    //     $dateNow = Carbon::now();
    //     $dateExpired = Carbon::create($this->LastActiveUserSubscription->expired_date);

    //     return $dateNow->lessThanOrEqualTo($dateExpired);
    // }

    public function getIsActiveAttribute()
    {
        // Periksa apakah LastActiveUserSubscription ada
        $activePlan = $this->LastActiveUserSubscription;
        
        // Jika LastActiveUserSubscription tidak ada, kembalikan false
        if (!$activePlan) {
            return false;
        }

        // Jika LastActiveUserSubscription ada, lanjutkan dengan perhitungan
        $dateNow = Carbon::now();
        $dateExpired = Carbon::create($activePlan->expired_date);

        return $dateNow->lessThanOrEqualTo($dateExpired);
    }


    public function LastActiveUserSubscription(): HasOne
    {
        return $this->hasOne(UserSubscription::class) -> wherePaymentStatus('paid') -> latest();
    }

}
