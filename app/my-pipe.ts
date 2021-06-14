import { Pipe, PipeTransform } from "@angular/core";


@Pipe({name:'textpipe'})
export class MyPipe implements PipeTransform{

    transform(value:String)
    {
     return value[0]+value[1]+value[2]+value[3]+"...";
          
    }
}
