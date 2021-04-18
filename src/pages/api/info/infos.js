import { informacion } from "profilesInfo";

export default function handler( req, res ){
    res.status(200).json(informacion);
}