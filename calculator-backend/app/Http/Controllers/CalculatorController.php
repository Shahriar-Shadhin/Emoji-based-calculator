<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CalculatorController extends Controller
{
    public function calculate($operator, $operandOne, $operandTwo){
        // Statements for addition, subtraction, multiplication and division
        if($operator == "addition"){
            $result = $operandOne + $operandTwo;
            // If result is float then formating the result in two decimal point
            if(is_float($result)){
                $result = number_format($result, 2);
            }
            return response()->json(['result' => $result], 200);

        }elseif($operator == "subtraction"){
            $result = $operandOne - $operandTwo;
            // If result is float then formating the result in two decimal point
            if(is_float($result)){
                $result = number_format($result, 2);
            }
            return response()->json(['result' => $result], 200);

        }elseif($operator == "multiplication"){
            $result = $operandOne * $operandTwo;
            // If result is float then formating the result in two decimal point
            if(is_float($result)){
                $result = number_format($result, 2);
            }
            return response()->json(['result' => $result], 200);
            
        }elseif($operator == "division"){
            $result = $operandOne / $operandTwo;
            // If result is float then formating the result in two decimal point
            if(is_float($result)){
                $result = number_format($result, 2);
            }
            return response()->json(['result' => $result], 200);
        }
        

    }
    
}
