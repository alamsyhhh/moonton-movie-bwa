<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\SubscriptionPlan;
use App\Models\UserSubscription;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
// use Config;
use Midtrans;
use Midtrans\Config;

class SubcriptionPlanController extends Controller
{
    public function __construct()
    {
        // Set your Merchant Server Key
        // \Midtrans\Config::$serverKey = env('MIDTRANS_SERVERKEY');
        // // Set to Development/Sandbox Environment (default). Set to true for Production Environment (accept real transaction).
        // \Midtrans\Config::$isProduction = false;
        // // Set sanitization on (default)
        // \Midtrans\Config::$isSanitized = false;
        // // Set 3DS transaction for credit card to true
        // \Midtrans\Config::$is3ds = false;

        Config::$serverKey = config('services.midtrans.serverKey');
        Config::$isProduction = config('services.midtrans.isProduction');
        Config::$isSanitized = config('services.midtrans.isSanitized');
        Config::$is3ds = config('services.midtrans.is3ds');
    }

    public function index()
    {
        // return $subscriptionPlans;

        $subscriptionPlans = SubscriptionPlan::all();

        return Inertia('User/Dashboard/SubscriptionPlan/Index', [
            'subscriptionPlans' => SubscriptionPlan::all(),
            'userSubscription' => null,
        ]);
    }

    public function userSubscribe(Request $request, SubscriptionPlan $subscriptionPlan)
    {
        $data = [
            'user_id' => Auth::id(),
            'subscription_plan_id' => $subscriptionPlan->id,
            'price' => $subscriptionPlan->price,
            // 'expired_date' => Carbon::now()->addMonths($subscriptionPlan->active_period_in_months),
            'payment_status' => 'pending',
        ];

        $userSubscription = UserSubscription::create($data);
        // $subscriptionPlan = $request->get('subscriptionPlan');
        // if ($subscriptionPlan === null) {
        //     // Handle the case when subscriptionPlan is not found
        //     return response()->json(['error' => 'Subscription plan not found'], 400);
        // }

        $params = [
            'transaction_details' => [
                'order_id' => $userSubscription->id.'-'.Str::random(5),
                'gross_amount' => $subscriptionPlan->price,
            ],
        ];

        $snapToken = Midtrans\Snap::getSnapToken($params);

        $userSubscription->update([
            'snap_token' => $snapToken,
        ]);

        // return Inertia('User/Dashboard/SubscriptionPlan/Index', [
        //     // 'subscriptionPlans' => $subscriptionPlans,
        //     'userSubscription' => $userSubscription,
        // ]);

        Log::info('Middleware CheckUserSubscription Triggered');

        return inertia('User/Dashboard/SubscriptionPlan/Index', [
            'userSubscription' => $userSubscription,
            // Log::info('UserSubscription Data:', $userSubscription->toArray());

            // 'subscriptionPlans' => SubscriptionPlan::all(),
            // 'userSubscription' => null,
        ]);

        // return redirect(route('user.dashboard.index'));

        // $subscriptionPlan = SubscriptionPlan::find($request->subscriptionPlan);
        // auth()->user()->subscription('default')->swap($subscriptionPlan);
        // return back();
    }
}
