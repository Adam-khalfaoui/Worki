import {Comments} from "./comments"
import {appuser} from "./AppUser"
export class Poste {

  "postId": number;
  "content": string;
  "nbComment":number;
  "nbreacts": number;
  "DatePost":Date;
  "imagePost":string;
  "datePost":Date;
  "sentiment":string;
  "comments":Array<Comments>;
  "analysis":string;
  "user":appuser;






}
