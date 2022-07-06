import React, { FC, useState } from 'react';
import ModalTitle from './ModalTitle';
import Input from './Input';
import ModalButton from './ModalButton';
import { IModal } from '../types/types';
import Exp from '../entities/Exp';

interface ModalCreateProps {
  dbExps: Exp[],
  setDbExps: React.Dispatch<Exp[]> | undefined,
  setModal: React.Dispatch<IModal>
}

const ModalCreate: FC<ModalCreateProps> = ({ dbExps, setDbExps, setModal }) => {

  const [expStorage, setExpStorage] = useState<Exp>(new Exp(undefined, `${dbExps.length + 1}`))

  let unitOfService
  let article

  function onChangeIdHandler(value: string): void {
    const localExp = new Exp(expStorage)
    localExp.setId(value)
    setExpStorage(localExp)
  }
  function onChangDateOfReceiptHandler(value: string): void {
    const localExp = new Exp(expStorage)
    localExp.setDateOfReceipt(value)
    setExpStorage(localExp)
  }
  function onChangeTypeOfServiceHandler(value: string): void {
    const localExp = new Exp(expStorage)
    localExp.setTypeOfService(value)
    setExpStorage(localExp)
  }
  function onChangeUnitOfServiceHandler(value: string): void {
    const localExp = new Exp(expStorage)
    localExp.setUnitOfService(value)
    setExpStorage(localExp)
  }
  function onChangeTypeOfMaterialHandler(value: string): void {
    const localExp = new Exp(expStorage)
    localExp.setTypeOfMaterial(value)
    setExpStorage(localExp)
  }
  function onChangeNumberOfMaterialHandler(value: string): void {
    const localExp = new Exp(expStorage)
    localExp.setNumberOfMaterial(value)
    setExpStorage(localExp)
  }
  function onChangeArticleHandler(value: string): void {
    const localExp = new Exp(expStorage)
    localExp.setArticle(value)
    setExpStorage(localExp)
  }
  function onChangeTypeOfExpertiseHandler(value: string): void {
    const localExp = new Exp(expStorage)
    localExp.setTypeOfExpertise(value)
    setExpStorage(localExp)
  }
  function onChangeDifficultOfExpertiseHandler(value: string): void {
    const localExp = new Exp(expStorage)
    localExp.setDifficult(value)
    setExpStorage(localExp)
  }
  function onChangeExecutorHandler(value: string): void {
    const localExp = new Exp(expStorage)
    localExp.setExecutor(value)
    setExpStorage(localExp)
  }
  function onChangeDatePetitionStartHandler(value: string): void {
    const localExp = new Exp(expStorage)
    localExp.setDatePetitionStart(value)
    setExpStorage(localExp)
  }
  function onChangeDatePetitionEndHandler(value: string): void {
    const localExp = new Exp(expStorage)
    localExp.setDatePetitionEnd(value)
    setExpStorage(localExp)
  }
  function onChangeDateProlongationStartHandler(value: string): void {
    const localExp = new Exp(expStorage)
    localExp.setDateProlongationStart(value)
    setExpStorage(localExp)
  }
  function onChangeValueOfProlongationHandler(value: string): void {
    const localExp = new Exp(expStorage)
    localExp.setValueOfProlongation(value)
    setExpStorage(localExp)
  }
  function onChangeResultHandler(value: string): void {
    const localExp = new Exp(expStorage)
    localExp.setResult(value)
    setExpStorage(localExp)
  }
  function onChangeDateExpEndHandler(value: string): void {
    const localExp = new Exp(expStorage)
    localExp.setDateExpEnd(value)
    setExpStorage(localExp)
  }
  function onChangeDateExpCompleteHandler(value: string): void {
    const localExp = new Exp(expStorage)
    localExp.setDateExpComplete(value)
    setExpStorage(localExp)
  }
  function onClickBtnAddHandler(): void {
    const localExpArr = [...dbExps]
    localExpArr.push(expStorage);
    setDbExps?.(localExpArr)
    setExpStorage(new Exp(undefined, `${localExpArr.length + 1}`))
    setModal({ type: null, idOfExp:null })
  }
  function onClickBtnCancelHandler(): void {
    setExpStorage(new Exp())
    setModal({ type: null, idOfExp: null })
  }

  if (expStorage.getTypeOfService() === 'МВД') {
    unitOfService = <Input type='select' title='Орган инициатора' name='unitOfService' listName='unitOfService' listType='police' onChangeUnitOfServiceHandler={onChangeUnitOfServiceHandler} />
  } else if (expStorage.getTypeOfService() === 'ГСУ СК') {
    unitOfService = <Input type='select' title='Орган инициатора' name='unitOfService' listName='unitOfService' listType='investigation' onChangeUnitOfServiceHandler={onChangeUnitOfServiceHandler} />
  }
  else {
    unitOfService = <Input type='empty' title='empty' name='empty' />
  }

  if (expStorage.getTypeOfMaterial() === 'УД') {
    article = <Input type='select' title='Статья' name='article' listName='article' onChangeArticleHandler={onChangeArticleHandler} />
  } else {
    article = <Input type='empty' title='empty' name='empty' />
  }
  return (
    <>
      <ModalTitle>Создание новой экспертизы</ModalTitle>
      <Input type='text' title='№ по порядку' name='id' value={`${expStorage.getId()}`} onChangeIdHandler={onChangeIdHandler} />
      <Input type='date' title='Дата поступления' name='dateOfReceipt' onChangDateOfReceiptHandler={onChangDateOfReceiptHandler} />
      <Input type='select' title='Вид службы' name='typeOfService' listName='typeOfService' onChangeTypeOfServiceHandler={onChangeTypeOfServiceHandler} />
      {unitOfService}
      <Input type='select' title='Вид материала' name='typeOfMaterial' listName='typeOfMaterial' onChangeTypeOfMaterialHandler={onChangeTypeOfMaterialHandler} />
      <Input type='text' title='№ материала' name='numberOfMaterial' onChangeNumberOfMaterialHandler={onChangeNumberOfMaterialHandler} />
      {article}
      <Input type='select' title='Вид экспертизы' name='typeOfExpertise' listName='typeOfExpertise' onChangeTypeOfExpertiseHandler={onChangeTypeOfExpertiseHandler} />
      <Input type='select' title='Сложность эксп-зы' name='difficultOfExpertise' listName='difficultOfExpertise' onChangeDifficultOfExpertiseHandler={onChangeDifficultOfExpertiseHandler} />
      <Input type='select' title='Исполнитель' name='executor' listName='executor' onChangeExecutorHandler={onChangeExecutorHandler} />
      <Input type='date' title='Дата вын. ходат-ва' name='datePetitionStart' onChangeDatePetitionStartHandler={onChangeDatePetitionStartHandler} />
      <Input type='date' title='Дата удов. ходат-ва' name='datePetitionEnd' onChangeDatePetitionEndHandler={onChangeDatePetitionEndHandler} />
      <Input type='date' title='Дата продления' name='dateProlongationStart' onChangeDateProlongationStartHandler={onChangeDateProlongationStartHandler} />
      <Input type='text' title='Срок продления' name='valueOfProlongation' onChangeValueOfProlongationHandler={onChangeValueOfProlongationHandler} />
      <Input type='select' title='Результат эксп-зы' name='result' listName='result' onChangeResultHandler={onChangeResultHandler} />
      <Input type='date' title='Дата окончания' name='dateExpEnd' onChangeDateExpEndHandler={onChangeDateExpEndHandler} />
      <Input type='date' title='Дата завершения' name='dateExpComplete' onChangeDateExpCompleteHandler={onChangeDateExpCompleteHandler} />
      <Input type='empty' title='empty' name='empty' />
      <ModalButton type='add' text='Добавить' onClickBtnAddHandler={onClickBtnAddHandler} />
      <ModalButton type='cancel' text='Отменить' onClickBtnCancelHandler={onClickBtnCancelHandler} />
    </>
  );
};

export default ModalCreate;