import { KeyValueDiffers, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'morseCode'
})
export class MorseCodePipe implements PipeTransform {

  transform(value: string, args?: any): string {
    let result:string = "";
    value = value.toUpperCase();
    
    for(let i = 0; i < value.length; i++){
      result += this.ConvertToMorse(value.charAt(i));
    }
    return result;
  }

  ConvertToMorse(char:string):string{
    switch(char){
      case "A":{
        return ".-"
      }
      case "B":{
        return "-..."
      }
      case "C":{
        return "-.-."
      }
      case "D":{
        return "-.."
      }
      case "E":{
        return "."
      }
      case "F":{
        return "..-."
      }
      case "G":{
        return "--."
      }
      case "H":{
        return "...."
      }
      case "I":{
        return ".."
      }
      case "J":{
        return ".---"
      }
      case "K":{
        return "-.-"
      }
      case "L":{
        return ".-.."
      }
      case "M":{
        return "--"
      }
      case "N":{
        return "-."
      }
      case "O":{
        return "---"
      }
      case "P":{
        return ".--."
      }
      case "Q":{
        return "--.-"
      }
      case "R":{
        return ".-."
      }
      case "S":{
        return "..."
      }
      case "T":{
        return "-"
      }
      case "U":{
        return "..-"
      }
      case "V":{
        return "...-"
      }
      case "W":{
        return ".--"
      }
      case "X":{
        return "-..-"
      }
      case "Y":{
        return "-.--"
      }
      case "Z":{
        return "--.."
      }
      case "Æ":{
        return ".-.-"
      }
      case "Ø":{
        return "---."
      }
      case "Å":{
        return ".--.-"
      }
      case "1":{
        return ".----"
      }
      case "2":{
        return "..---"
      }
      case "3":{
        return "...--"
      }
      case "4":{
        return "....-"
      }
      case "5":{
        return "....."
      }
      case "6":{
        return "-...."
      }
      case "7":{
        return "--..."
      }
      case "8":{
        return "---.."
      }
      case "9":{
        return "----."
      }
      case ".":{
        return ".-.-.-"
      }
      case ",":{
        return "--..--"
      }
      case ":":{
        return "---..."
      }
      case ";":{
        return "..--.."
      }
      case "'":{
        return ".----."
      }
      case "-":{
        return "-....-"
      }
      case "/":{
        return "-..-."
      }
      case "(":{
        return "-.--."
      }
      case ")":{
        return "-.--.-"
      }
      case '"':{
        return ".-..-."
      }
      case "*":{
        return "-..-"
      }
      case "@":{
        return ".--.-."
      }
      default:{
        return ""
      }
    }
  }
}
