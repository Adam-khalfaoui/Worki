import { appuser } from "./AppUser";
import { Event } from "./Event";

export class Demande{
    id! : number ;
    etat !: String;
    event !:Event;
    appuser!: appuser;
    name_user!:String;
    name_event!:String;


}