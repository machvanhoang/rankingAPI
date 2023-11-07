<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
class ContentController extends Controller
{
    /**
     * Summary of checking
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function checking(Request $request)
    {
        $data = $request->all();
        $validator = Validator::make($data, [
            'slug' => 'required|max:255',
            'title' => 'required|max:255',
            'keyword' => 'required|max:255',
            'description' => 'required|max:255',
        ]);
        if ($validator->fails()) {
            return sendError('Checking error.', $validator->errors());
        }
        return sendResponse([$data], "");
    }
}
