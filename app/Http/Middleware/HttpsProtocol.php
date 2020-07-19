<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\App;

class HttpsProtocol
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $target_url = parse_url(env('APP_URL'));
        
        if (!$request->secure() && $target_url['scheme'] == 'https') {
            return redirect()->secure($request->getRequestUri());
        }

        return $next($request);
    }
}
