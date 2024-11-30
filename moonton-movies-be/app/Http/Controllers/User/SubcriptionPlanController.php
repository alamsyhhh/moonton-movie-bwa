<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\SubscriptionPlan;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use App\Models\UserSubscription;

class SubcriptionPlanController extends Controller
{
    public function index()
    {
        // return $subscriptionPlans;
        
        $subscriptionPlans = SubscriptionPlan::all();
        return Inertia('User/Dashboard/SubscriptionPlan/Index', [
            'subscriptionPlans' => SubscriptionPlan::all(),
        ]);
    }

    public function userSubscribe(Request $request, SubscriptionPlan $subscriptionPlan)
    {
        $data = [
            'user_id' => Auth::id(),
            'subscription_plan_id' => $subscriptionPlan->id,
            'price' => $subscriptionPlan->price,
            'expired_date' => Carbon::now()->addMonths($subscriptionPlan->active_period_in_months),
            'payment_status' => 'paid',
        ];

        $userSubscription = UserSubscription::create($data);

        return redirect(route('user.dashboard.index'));

        // $subscriptionPlan = SubscriptionPlan::find($request->subscriptionPlan);
        // auth()->user()->subscription('default')->swap($subscriptionPlan);
        // return back();
    }
}
