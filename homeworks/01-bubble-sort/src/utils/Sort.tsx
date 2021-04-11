import {arrayType} from "../App"

// почему не работает эспортированная типизация ?
export const sort=(copyArray:arrayType):arrayType=>{
//    export const Sort=(copyArray:number[]):number[]=>{

        for (let j = 0; j < copyArray.length; j++) {
                if (copyArray[j] > copyArray[j + 1]) {
                    let temp = copyArray[j];
                    copyArray[j] = copyArray[j + 1];
                    copyArray[j + 1] = temp;
                }
        }
 return copyArray

}







