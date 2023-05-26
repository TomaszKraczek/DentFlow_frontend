import {authorizedApi} from "../hooks/withAxiosIntercepted";
import {PatientDescriptionUpdate, PatientRequest} from "../models/api/PatientRequest";
import {VisitResponse} from "../models/api/VisitResponse";


export class PatientApi {
    static getPatientVisits = async(request: { clinicId:number, patientId:number}) =>
        await authorizedApi.get<VisitResponse[]>("/patients", {params:request})
 static register = async(request: PatientRequest) =>
        await authorizedApi.post("/patients", request)

    static updatePatientData = async(request: PatientRequest) =>
        await authorizedApi.patch("/patients", request)

    static updatePatientDescription = async(request: PatientDescriptionUpdate) =>
        await authorizedApi.put("/patients/change-description", request)

}