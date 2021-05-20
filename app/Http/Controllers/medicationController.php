<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;

/**
 * Contains methods for getting medication information
 */

class medicationController extends Controller
{
    /**
     * gets normalized medication details
     *
     * @param String $medication
     * @return Array
     */
    public function details ($medication) {
        $details = $this->getRawDetails($medication)['drugGroup'];
        
        foreach ($details['conceptGroup'] as $key => &$value) {
            // removing medications without detail properties
            if(!isset($value['conceptProperties'])){
                unset($details['conceptGroup'][$key]);
                continue;
            }
            // maps additional medication details
            foreach ($value['conceptProperties'] as &$item){
                $item['ttyLong'] = $this->getTtyLongName($item['tty']);
                $item['ndcs'] = $this->getNdcs($item['rxcui']);
            }
        }
        $details['conceptGroup'] = array_values($details['conceptGroup']);
        
        return $details;
    }
    
    /**
     * returns long name for given term types
     *
     * @param String $tty
     * @return String
     */
    private function getTtyLongName ($tty) {
        $ttys = [
        'IN' => 'Ingredient',
        'PIN' => 'Precise Ingredient',
        'MIN' => 'Multiple Ingredients',
        'SCDC' => 'Semantic Clinical Drug Component',
        'SCDF' => 'Semantic Clinical Drug Form',
        'SCDG' => 'Semantic Clinical Dose Form Group',
        'SCD' => 'Semantic Clinical Drug',
        'GPCK' => 'Generic Pack',
        'BN' => 'Brand Name',
        'SBDC' => 'Semantic Branded Drug Component',
        'SBDF' => 'Semantic Branded Drug Form',
        'SBDG' => 'Semantic Branded Drug',
        'BPCK' => 'Brand Name Pack',
        'PSN' => 'Prescribable Name',
        'SY' => 'Synonym',
        'TMSY' => 'Tall Man Lettering Synonym',
        'DF' => 'Dose Form',
        'ET' => 'Dose Form Entry Term',
        'DFG' => 'Dose Form Group',
        'SBD' => 'Semantic Branded Drug',
        ];
        
        return isset($ttys[$tty]) ? $ttys[$tty] : 'N/A';
    }

    /**
     * gets the ndcs from rxnav
     *
     * @param String $rxcui
     * @return Array
     */
    private function getNdcs ($rxcui) {
        $response = Http::get("https://rxnav.nlm.nih.gov/REST/rxcui/$rxcui/ndcs.json");
        return $response['ndcGroup']['ndcList']['ndc'];
    }
    
    /**
     * gets raw medication details from rxnav
     * 
     * @return Array
     */
    private function getRawDetails ($medication) {
        return Http::get("https://rxnav.nlm.nih.gov/REST/drugs.json?name=$medication");
    }

    /**
     * returns a list of medication names used for search predictions
     *
     * @return Array
     */
    public function names () {
        return Http::get('https://rxnav.nlm.nih.gov/REST/displaynames.json')['displayTermsList']['term'];
    }

}
