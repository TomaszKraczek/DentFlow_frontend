import {authorizedApi} from "../hooks/withAxiosIntercepted";
import {Tooth} from "../models/Tooth";
import dayjs from "dayjs";

export class TeethApi {
    static async saveToothStatus(request: {
        clinicId: number | undefined;
        tooth: Tooth | null;
        patientId: number | undefined
    }) {
        await authorizedApi.patch('/teeth/status', request)
    }

    static async saveToothDescription(request: {
        clinicId: number | undefined;
        patientId: number | undefined;
        tooth: Tooth | null;
        currentDateTime: string | undefined,
        doctorName: string | undefined
    }) {
        await authorizedApi.patch('/teeth/description', request)
    }
}