import { Component } from "@angular/core";
import { User } from "./user";


@Component({
    selector:"user-form",
    templateUrl:"user-form.component.html"
})
export class UserComponent{
    model = new User("","","");
    countries = ['United States','Singapore','China','Australia']
    onSubmit(){

    }
}