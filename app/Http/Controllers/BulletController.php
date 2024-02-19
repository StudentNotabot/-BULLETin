<?php

namespace App\Http\Controllers;

use App\Models\Bullet;
use App\Http\Controllers\Controller;
use App\Http\Resources\BulletCollection;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BulletController extends Controller
{
    public function index()
    {
        $bullet = new BulletCollection(Bullet::OrderByDesc('updated_at')->paginate(8));
        return Inertia::render('Homepage', [
            'title' => 'BULLETin Board',
            'description' =>  'Shoot Complaints, BULLETin Board Listens!',
            'bullet' => $bullet
        ]);
    }

    public function create()
    {
        //
    }


    public function store(Request $request)
    {
        $bullet = new Bullet();
        $bullet->title = $request->title;
        $bullet->post = $request->post;
        $bullet->team = $request->team;
        $bullet->updated_at = $request->updated_at;
        $bullet->author = auth()->user()->name;
        $bullet->save();
        return redirect()->back()->with('message', 'POSTED!');
    }


    public function show()
    {
        $myBullet =  Bullet::where('author', auth()->user()->name)->orderBy('updated_at', 'desc')->get();
        return Inertia::render('Dashboard', [
            'myBullet' => $myBullet
        ]);
    }


    public function edit(Request $request, Bullet $bullet)
    {
        return Inertia::render('EditBullet', [
            'myBullet' => $bullet->find($request->id)
        ]);
    }

    public function update(Request $request, Bullet $bullet)
    {
        $bullet = Bullet::findOrFail($request->id);
        $bullet->update([
            'title' => $request->title,
            'post' => $request->post,
            'team' => $request->team,
        ]);
        return redirect()->route('dashboard');
    }

    public function destroy(Request $request)
    {
        $bullet = Bullet::find($request->id);
        $bullet->delete();
        return redirect()->back();
    }
}
