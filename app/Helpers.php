<?php

use App\Models\Zip;
use Illuminate\Support\Facades\Http;

if (!function_exists('location')) {
    function location($zip = null, $city = null, $state = null, $lat = null, $lng = null, $timezone = null): array
    {
        return [
            'location' => [
                'zip' => $zip,
                'city' => $city,
                'state' => $state,
                'timezone' => $timezone,
                'lat' => $lat,
                'lng' => $lng,
            ]
        ];
    }
}
if (!function_exists('zipLookup')) {
    function zipLookup($zip): array
    {
        // get from zip with Opendatasoft api
        // $response = Http::get('https://public.opendatasoft.com/api/records/1.0/search/?dataset=us-zip-code-latitude-and-longitude&q='. $zip);

        $data = Zip::where('zip', $zip)->first();

        return location(
            $data->zip,
            null,
            $data->state,
            $data->lat,
            $data->lng,
            $data->timezone,
        );
    }
}
if (!function_exists('zipToLatLng')) {
    function zipToLatLng($zip): array
    {
        //get from zip with Opendatasoft api
        $response = Http::get('https://public.opendatasoft.com/api/records/1.0/search/?dataset=us-zip-code-latitude-and-longitude&q=' . $zip);

        $location = [];

        if (!($response->successful() && $response->json('records.*.fields'))) {
            return $location;
        }

        $fields = $response->json('records.*.fields');
        $location = location(
            $fields[0]['zip'],
            $fields[0]['city'],
            $fields[0]['state'],
            $fields[0]['latitude'],
            $fields[0]['longitude']
        );


        return $location;
    }
}
if (!function_exists('addressToLatLng')) {
    function addressToLatLng(array $input): array
    {
        $settings = [];
        if ($input['address'] && $input['city'] && $input['state']) {
            $query = "${input['address']} ${input['city']}  ${input['state']}";

            $response = Http::get("https://api.opencagedata.com/geocode/v1/json?q=" . $query . "&key=f87b8e5f9dd94152bc77548b68055b7e");

            if ($response->successful()
                && $response->json('results')
                && $response->json('results.*.components')
                && $response->json('results.*.geometry')
            ) {
                $result = $response->json('results')[0];

                $settings = location(
                    ($result['components']['postcode'] ?? $result['components']['zip']),
                    ($result['components']['town'] ?? $result['components']['village']),
                    ($result['components']['state_code'] ?? $result['components']['state']),
                    $result['geometry']['lat'],
                    $result['geometry']['lng']);
            }
        }
        return $settings;
    }
}
if (!function_exists('segmentToLinks')) {
    function segmentToLinks($segments, $currentSegment)
    {
        $link = url('/');

        foreach ($segments as $segment) {
            $link .= '/' . $segment;
            if ($currentSegment == $segment) break;
        }
        return $link;
    }
}


if (!function_exists('ddd')) {
    function ddd($variable, $name = null)
    {
        $bt = debug_backtrace();
        $caller = array_shift($bt);
        $file_line = basename($caller['file']) . ":" . $caller['line'];
        $name = $name ? " Name:$name " : "";
        $dumper = 'cli' === PHP_SAPI ? new \Symfony\Component\VarDumper\Dumper\CliDumper() : new \Symfony\Component\VarDumper\Dumper\HtmlDumper();

        switch (gettype($variable)) {
            case 'object':
                $output = $file_line . $name . '  Type:' . gettype($variable) . '  Class:' . get_class($variable);
                $data = collect($variable)->toArray();
                break;
            default:
                $output = $file_line . $name . '   Type:' . gettype($variable);
                $data = $variable;
                break;
        }

        // phpstorm plugin - https://plugins.jetbrains.com/plugin/7677-awesome-console
        // allows you to jump to file and line number
        // file and line number
        $dumper->dump((new Symfony\Component\VarDumper\Cloner\VarCloner())->cloneVar($output));

        $cloner = new Symfony\Component\VarDumper\Cloner\VarCloner();
        $dumper->dump($cloner->cloneVar($data));
    }
}


if (!function_exists('errors')) {
    function errors($error)
    {


        if (get_class($error) == Illuminate\Support\MessageBag::class) {
            return ['errors' => $error];
        }
        if (get_class($error) == Exception::class) {
            return json_encode(
                [
                    'errors' => [],
                    'exception' => [
                        'message' => $error->getMessage(),
                        'file' => $error->getFile(),
                        'line' => $error->getLine(),
                        'code' => $error->getCode(),
                    ]
                ]);
        }


    }
}
