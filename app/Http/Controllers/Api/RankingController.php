<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\DomCrawler\Crawler;

class RankingController extends Controller
{
    /**
     * Summary of pageSpeed
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function pageSpeed(Request $request)
    {
        $data = $request->all();
        $validator = Validator::make($data, [
            'url' => 'required|url',
        ]);
        if ($validator->fails()) {
            return response_error('Validation Error.', $validator->errors());
        }
        //https://developers.google.com/speed/docs/insights/v5/reference/pagespeedapi/runpagespeed
        $apiGoogle = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=" . $data["url"];
        $response = Http::get($apiGoogle);
        $responseData = $response->json();
        if (empty($responseData["lighthouseResult"])) {
            return response_error(['message' => 'Invalid API Response.']);
        }
        $audits = !empty($responseData["lighthouseResult"]["audits"]) ? $responseData["lighthouseResult"]["audits"] : [];
        return response_success($audits, "Success");
    }

    /**
     * Summary of seoGood
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function seoGood(Request $request)
    {
        $data = $request->all();
        $validator = Validator::make($data, [
            'url' => 'required|url',
        ]);
        if ($validator->fails()) {
            return sendError('Validation Error.', $validator->errors());
        }
        $response = Http::get($data['url']);
        $dataBody = $response->body();
        $crawler = new Crawler($dataBody);

        $faviconNode = $crawler->filter('link[type="image/x-icon"]');
        $seoTitleNode = $crawler->filter('title');
        $seoKeywordNode = $crawler->filter('meta[name="keywords"]');
        $seoDescriptionNode = $crawler->filter('meta[name="description"]');
        $metaRobotsNode = $crawler->filter('meta[name="robots"]');
        $viewPortNode = $crawler->filter('meta[name="viewport"]');
        $ogTitleNode = $crawler->filter('meta[property="og:title"]');
        $ogImageNode = $crawler->filter('meta[property="og:image"]');

        $seoTitle = $seoTitleNode->count() ? $seoTitleNode->text() : "";
        $seoKeyword = $seoKeywordNode->count() ? $seoKeywordNode->attr('content') : "";
        $seoDescription = $seoDescriptionNode->count() ? $seoDescriptionNode->attr('content') : "";

        $robots = $metaRobotsNode->count() ? $metaRobotsNode->attr("content") : "";
        $viewPort = $viewPortNode->count() ? $viewPortNode->attr("content") : "";

        $ogTitle = $ogTitleNode->count() ? $ogTitleNode->attr('content') : "";
        $ogImage = $ogImageNode->count() ? $ogImageNode->attr('content') : "";
        $favicon = $faviconNode->count() ? $faviconNode->attr('href') : "";

        // Heading
        $headings = [];
        for ($i = 1; $i <= 6; $i++) {
            $headingNodes = $crawler->filter("h$i");
            $headings["h$i"] = $headingNodes->each(function ($node) {
                return $node->text();
            });
        }
        // Alt Image
        $images = $crawler->filter('img');
        $imagesWithAlt = $images->each(function ($node) {
            $alt = $node->attr('alt');
            return !empty($alt);
        });
        // Text/HTML ratio
        $htmlContent = $crawler->html();
        $totalHtmlCharacters = mb_strlen($htmlContent);

        $textContent = $crawler->text();
        $totalTextCharacters = mb_strlen($textContent);

        // Flash
        $flashUsed = false;
        if (stripos($htmlContent, 'swf') !== false) {
            $flashUsed = true;
        }

        // Microformats
        $micMicroformatsr = false;
        $microformatsNodes = $crawler->filter('[class*="vcard"], [class*="hcard"], [class*="adr"], [class*="h-"], [class*="p-"]');
        if ($microformatsNodes->count()) {
            $micMicroformatsr = true;
        }

        // Schema
        $schemas = [];
        // The Open Graph
        $ogProperties = [];
        $ogMetaNodes = $crawler->filter('meta[property^="og:"]');
        if ($ogMetaNodes->count() > 0) {
            $ogMetaNodes->each(function ($node) use (&$ogProperties) {
                $property = $node->attr('property');
                $content = $node->attr('content');
                $ogProperties[$property] = $content;
            });
        }
        // Twitter
        $ogTwitters = [];
        $twitterMetaNodes = $crawler->filter('meta[name^="twitter:"]');
        if ($ogMetaNodes->count() > 0) {
            $twitterMetaNodes->each(function ($node) use (&$ogTwitters) {
                $name = $node->attr('name');
                $content = $node->attr('content');
                $ogTwitters[$name] = $content;
            });
        }
        // Language
        $langAttribute = $crawler->filter('html')->attr('lang');
        // Doctype
        $doctype = stripos($dataBody, '<!DOCTYPE html>') !== false;
        // Encoding
        $charset = $crawler->filter('meta[charset], meta[http-equiv="Content-Type"]')->attr('charset');
        return sendResponse([
            $charset,
            $doctype,
            $langAttribute,
            $ogTwitters,
            $ogProperties,
            $micMicroformatsr,
            $flashUsed,
            $seoTitle,
            $seoKeyword,
            $seoDescription,
            $robots,
            $viewPort,
            $ogTitle,
            $ogImage,
            $favicon,
            $headings,
            $imagesWithAlt,
            $totalHtmlCharacters,
            $totalTextCharacters,
        ], "Success");
    }
}
