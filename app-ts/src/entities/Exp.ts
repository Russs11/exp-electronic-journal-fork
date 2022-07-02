import { IExp } from "../types/types";

export default class Exp implements IExp {
  id: string
  dateOfReceipt: string
  typeOfService: string
  unitOfService: string
  typeOfMaterial: string
  numberOfMaterial: string
  article: string
  typeOfExpertise: string
  executor: string
  difficult: string
  datePetitionStart: string
  datePetitionEnd: string
  dateProlongationStart: string
  valueOfProlongation: string
  result: string
  dateExpEnd: string
  dateExpComplete: string
  dateVerificationStart: string
  dateVerificationEnd: string
  numberVerification: string
  verificationNumberOfMaterial: string
  verificationExecutor: string
  verificationResult: string
  constructor(oldExp?: Exp, id?: string) {
    if (oldExp)
      this.id = oldExp?.getId() || ''
    else if (id)
      this.id = id || ''
    else this.id = ''
    this.dateOfReceipt = oldExp?.getDateOfReceipt() || ''
    this.typeOfService = oldExp?.getTypeOfService() || ''
    this.unitOfService = oldExp?.getUnitOfService() || ''
    this.typeOfMaterial = oldExp?.getTypeOfMaterial() || ''
    this.numberOfMaterial = oldExp?.getNumberOfMaterial() || ''
    this.article = oldExp?.getArticle() || ''
    this.typeOfExpertise = oldExp?.getTypeOfExpertise() || ''
    this.executor = oldExp?.getExecutor() || ''
    this.difficult = oldExp?.getDifficult() || ''
    this.datePetitionStart = oldExp?.getDatePetitionStart() || ''
    this.datePetitionEnd = oldExp?.getDatePetitionEnd() || ''
    this.dateProlongationStart = oldExp?.getDateProlongationStart() || ''
    this.valueOfProlongation = oldExp?.getValueOfProlongation() || ''
    this.result = oldExp?.getResult() || ''
    this.dateExpEnd = oldExp?.getDateExpEnd() || ''
    this.dateExpComplete = oldExp?.getDateExpComplete() || ''
    this.dateVerificationStart = oldExp?.getDateVerificationStart() || ''
    this.dateVerificationEnd = oldExp?.getDateVerificationEnd() || ''
    this.numberVerification = oldExp?.getNumberVerification() || ''
    this.verificationNumberOfMaterial = oldExp?.getVerificationNumberOfMaterial() || ''
    this.verificationExecutor = oldExp?.getVerificationExecutor() || ''
    this.verificationResult = oldExp?.getVerificationResult() || ''
  }
  getId(): string | null {
    return this.id
  }
  getDateOfReceipt(): string | null {
    return this.dateOfReceipt
  }
  getTypeOfService(): string | null {
    return this.typeOfService
  }
  getUnitOfService(): string | null {
    return this.unitOfService
  }
  getTypeOfMaterial(): string | null {
    return this.typeOfMaterial
  }
  getNumberOfMaterial(): string | null {
    return this.numberOfMaterial
  }
  getArticle(): string | null {
    return this.article
  }
  getTypeOfExpertise(): string | null {
    return this.typeOfExpertise
  }
  getExecutor(): string | null {
    return this.executor
  }
  getDifficult(): string | null {
    return this.difficult
  }
  getDatePetitionStart(): string | null {
    return this.datePetitionStart
  }
  getDatePetitionEnd(): string | null {
    return this.datePetitionEnd
  }
  getDateProlongationStart(): string | null {
    return this.dateProlongationStart
  }
  getValueOfProlongation(): string | null {
    return this.valueOfProlongation
  }
  getResult(): string | null {
    return this.result
  }
  getDateExpEnd(): string | null {
    return this.dateExpEnd
  }
  getDateExpComplete(): string | null {
    return this.dateExpComplete
  }
  getDateVerificationStart(): string | null {
    return this.dateVerificationStart
  }
  getDateVerificationEnd(): string | null {
    return this.dateVerificationEnd
  }
  getNumberVerification(): string | null {
    return this.numberVerification
  }
  getVerificationNumberOfMaterial(): string | null {
    return this.verificationNumberOfMaterial
  }
  getVerificationExecutor(): string | null {
    return this.verificationExecutor
  }
  getVerificationResult(): string | null {
    return this.verificationResult
  }
  setId(value: string): void {
    this.id = value
  }
  setDateOfReceipt(value: string): void {
    this.dateOfReceipt = value
  }
  setTypeOfService(value: string): void {
    this.typeOfService = value
  }
  setUnitOfService(value: string): void {
    this.unitOfService = value
  }
  setTypeOfMaterial(value: string): void {
    this.typeOfMaterial = value
  }
  setNumberOfMaterial(value: string): void {
    this.numberOfMaterial = value
  }
  setArticle(value: string): void {
    this.article = value
  }
  setTypeOfExpertise(value: string): void {
    this.typeOfExpertise = value
  }
  setExecutor(value: string): void {
    this.executor = value
  }
  setDifficult(value: string): void {
    this.difficult = value
  }
  setDatePetitionStart(value: string): void {
    this.datePetitionStart = value
  }
  setDatePetitionEnd(value: string): void {
    this.datePetitionEnd = value
  }
  setDateProlongationStart(value: string): void {
    this.dateProlongationStart = value
  }
  setValueOfProlongation(value: string): void {
    this.valueOfProlongation = value
  }
  setResult(value: string): void {
    this.result = value
  }
  setDateExpEnd(value: string): void {
    this.dateExpEnd = value
  }
  setDateExpComplete(value: string): void {
    this.dateExpComplete = value
  }
  setDateVerificationStart(value: string): void {
    this.dateVerificationStart = value
  }
  setDateVerificationEnd(value: string): void {
    this.dateVerificationEnd = value
  }
  setNumberVerification(value: string): void {
    this.numberVerification = value
  }
  setVerificationNumberOfMaterial(value: string): void {
    this.verificationNumberOfMaterial = value
  }
  setVerificationExecutor(value: string): void {
    this.verificationExecutor = value
  }
  setVerificationResult(value: string): void {
    this.verificationResult = value
  }

}