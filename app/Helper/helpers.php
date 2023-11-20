<?php

if (!function_exists("response_error")) {
    /**
     * Handle error response.
     *
     * @param array $errorMessages
     * @param int $code
     * @return Illuminate\Http\JsonResponse|mixed
     */
    function response_error(array $errorMessages = [], int $code = 404)
    {
        $response = [
            'success' => false,
        ];

        if (!empty($errorMessages)) {
            $response['data'] = $errorMessages;
        }

        return response()->json($response, $code);
    }
}

if (!function_exists("response_non_data")) {
    /**
     * Handle non-data response.
     *
     * @return Illuminate\Http\JsonResponse|mixed
     */
    function response_non_data()
    {
        return response()->json(204);
    }
}

if (!function_exists("response_success")) {
    /**
     * Handle success response.
     *
     * @param mixed $result
     * @param string $message
     * @param int $code
     * @return Illuminate\Http\JsonResponse|mixed
     */
    function response_success($result, string $message, int $code = 200)
    {
        $response = [
            'success' => true,
            'data' => $result,
            'message' => $message,
        ];

        return response()->json($response, $code);
    }
}
