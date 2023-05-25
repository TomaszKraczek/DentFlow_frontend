import {authorizedApi} from "../hooks/withAxiosIntercepted";
import {PatientDescriptionUpdate, PatientRequest} from "../models/api/PatientRequest";
import {PatientResponse} from "../models/api/PatientResponse";
import {PatientInfoRequest} from "../models/api/PatientInfoRequest";
import {EmployeeResponse} from "../models/api/EmployeeResponse";

export class PatientApi {
    static register = async(request: PatientRequest) =>
        await authorizedApi.post("/patients", request)

    static updatePatientData = async(request: PatientRequest) =>
        await authorizedApi.patch("/patients", request)

    static getVisitInfo = async(request: PatientInfoRequest)=> {
        const requestBody = {
            patientId: request.patientId,
            clinicId: request.clinicId
        }

        const response = await authorizedApi.get<PatientResponse>("/patients",
            {params: requestBody})
    }

    static updatePatientDescription = async(request: PatientDescriptionUpdate) =>
        await authorizedApi.put("/patients/change-description", request)

}