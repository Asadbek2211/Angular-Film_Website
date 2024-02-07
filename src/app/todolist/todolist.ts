import { AbstractControl ,ValidationErrors } from "@angular/forms";


export class TodolistValidators{
    static noSpace(control:AbstractControl):ValidationErrors | null {
        if((control.value as string).includes('')){
            return {noSpace:true}
        }
        return null;
    }


   static async isTaken(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, _reject) => {
        setTimeout(() => {
            if(control.value === "sardor") {
                resolve({ isTaken: true });
            } else {
               return null;
            }
        }, 2000);
    });
}

}