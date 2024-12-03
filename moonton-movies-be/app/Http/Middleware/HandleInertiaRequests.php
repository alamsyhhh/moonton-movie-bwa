<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use Illuminate\Support\Facades\Session;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */

 private function activePlan()
    {
        $activePlan = Auth::user() ? Auth::user()->LastActiveUserSubscription : null;

        if (!$activePlan || !$activePlan->subscriptionPlan) {
            return null;
        }

        $lastDay = Carbon::parse($activePlan->updated_at)
            ->addMonths($activePlan->subscriptionPlan->active_period_in_months);
        $activeDays = Carbon::parse($activePlan->updated_at)->diffInDays($lastDay);
        // $remaingActiveDays = Carbon::parse($activePlan->expired_date)->diffInDays(Carbon::now());

        // Hitung remaining days
        $remaingActiveDays = Carbon::now()->diffInDays(Carbon::parse($activePlan->expired_date), false);
        if ($remaingActiveDays < 0) {
            $remaingActiveDays = 0;
        }

        // Membulatkan angka remaining days
        $remaingActiveDays = floor($remaingActiveDays);

        return [
            'name' => $activePlan->subscriptionPlan->name,
            'remainingActiveDays' => $remaingActiveDays,
            'activeDays' => $activeDays,
        ];
    }

    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
                'activePlan' => $this->activePlan(),
            ],
            'flashMessage' => [
                'message' => Session::get('message'),
                'type' => Session::get('type'),
            ],
            'env' => [
                'MIDTRANS_CLIENTKEY' => config('services.midtrans.clientKey')
                // env('MIDTRANS_CLIENTKEY')
            ],
            'ziggy' => fn () => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
        ];
    }
}
