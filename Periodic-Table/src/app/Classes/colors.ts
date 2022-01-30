import { Atom } from "../interface/atom";

export class Colors {
    constructor(){}

    findColor(atom: Atom):string{
        if(atom.cpkHexColor != "unknown"){
            switch(atom.groupBlock){
              case "nonmetal":
                return '#81da81';
              case "alkali metal":
                return '#d8be56';
              case "alkaline earth metal":
                return "#dede5d";
              case "transition metal":
                return "#e6b6a9";
              case "metal":
                return "#9fced9";
              case "metalloid":
                return "#92d3c3";
              case "halogen":
                return "#8ced8c";
              case "noble gas":
                return "#d3aed3"
              case "lanthanoid":
                return "#d6c190";
              case "actinoid":
                return "#e2bcc9";
              default:
                return "#" + atom.cpkHexColor;
            }
          }
          else{
            return "#eee";
          }
    }
}
