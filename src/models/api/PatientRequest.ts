export type PatientRequest = {
    clinicId: number,
    patientId:number,
    firstName: string,
    lastName: string,
    pesel: string,
    birthDate: string | undefined,
    email: string,
    phoneNumber: string
}

export type PatientDescriptionUpdate ={
    clinicId: number | undefined,
    patientId: number | undefined,
    patientDescription: string | undefined
}