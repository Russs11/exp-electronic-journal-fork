import React, { FC, useState } from 'react';
import ModalTitle from './ModalTitle';
import './Modal.scss'
import Input from './Input';
import ModalButton from './ModalButton';
import { ITypeOfService } from '../types/types';

interface ModalProps {
  type: string
}

const Modal: FC<ModalProps> = ({ type }) => {
  const [typeOfService, setTypeOfService] = useState<ITypeOfService>({ type: null })
  const [typeOfMaterial, setTypeOfMaterial] = useState<ITypeOfService>({ type: null })

  let unitOfService
  let article

  if (typeOfService.type === 'МВД') {
    unitOfService = <Input type='select' title='Орган инициатора' listName='unitOfService' listType='police' />
  } else if (typeOfService.type === 'ГСУ СК') {
    unitOfService = <Input type='select' title='Орган инициатора' listName='unitOfService' listType='investigation' />
  }
  else {
    unitOfService = <Input type='empty' title='empty' />
  }

  if (typeOfMaterial.type === 'УД') {
    article = <Input type='select' title='Статья' listName='article' />
  } else {
    article = <Input type='empty' title='empty' />
  }


  function onChangeTypeOfServiceHandler(value: string) {
    setTypeOfService((prev) => ({
      ...prev, type: value
    }))
  }
  function onChangeTypeOfMaterialHandler(value: string) {
    setTypeOfMaterial((prev) => ({
      ...prev, type: value
    }))
  }

  if (type === 'create') {
    return (
      <div className='modal-create'>
        <ModalTitle>Создание новой экспертизы</ModalTitle>
        <Input type='text' title='№ по порядку' />
        <Input type='date' title='Дата поступления' />
        <Input type='select' title='Вид службы' listName='typeOfService' onChangeTypeOfServiceHandler={onChangeTypeOfServiceHandler} />
        {unitOfService}
        <Input type='select' title='Вид материала' listName='typeOfMaterial' onChangeTypeOfMaterialHandler={onChangeTypeOfMaterialHandler} />
        <Input type='text' title='№ материала' />
        {article}
        <Input type='select' title='Вид экспертизы' listName='typeOfExpertise' />
        <Input type='select' title='Исполнитель' listName='executor' />
        <Input type='date' title='Дата вын. ходат-ва' />
        <Input type='date' title='Дата удов. ходат-ва' />
        <Input type='date' title='Дата продления' />
        <Input type='date' title='Дата окон-я прод-я' />
        <Input type='select' title='Результат эксп-зы' listName='result' />
        <Input type='date' title='Дата окончания' />
        <Input type='date' title='Дата завершения' />
        <ModalButton type='add' text='Добавить' />
        <ModalButton type='cancel' text='Отменить' />
      </div>
    );
  }
  if (type === 'search') {
    return (
      <div className='modal-search'>
        <ModalTitle>Поиск экспертизы</ModalTitle>
        <Input type='text' title='№ по порядку' />
        <Input type='date' title='Дата поступления' />
        <Input type='date' title='По дате поступ-я с' />
        <Input type='date' title='По дате поступ-я по' />
        <Input type='select' title='Вид службы' listName='typeOfService' />
        <Input type='select' title='Орган инициатора' listName='unitOfService' />
        <Input type='select' title='Вид материала' listName='typeOfMaterial' />
        <Input type='select' title='Статья' listName='article' />
        <Input type='select' title='Вид экспертизы' listName='typeOfExpertise' />
        <Input type='select' title='Исполнитель' listName='executor' />
        <Input type='select' title='Результат эксп-зы' listName='result' />
        <Input type='empty' title='empty' />
        <ModalButton type='clear' text='Сбросить' />
      </div>
    );
  }
  if (type === 'info') {
    return (
      <div className='modal-info'>
        info
      </div>
    );
  }
  if (type === 'update') {
    return (
      <div className='modal-update'>
        <ModalTitle>Создание новой экспертизы</ModalTitle>
        <Input type='text' title='№ по порядку' />
        <Input type='date' title='Дата поступления' />
        <Input type='select' title='Вид службы' listName='typeOfService' />
        <Input type='select' title='Орган инициатора' listName='unitOfService' />
        <Input type='select' title='Вид материала' listName='typeOfMaterial' />
        <Input type='select' title='Статья' listName='article' />
        <Input type='select' title='Вид экспертизы' listName='typeOfExpertise' />
        <Input type='select' title='Исполнитель' listName='executor' />
        <Input type='date' title='Дата вын. ходат-ва' />
        <Input type='date' title='Дата удов. ходат-ва' />
        <Input type='date' title='Дата продления' />
        <Input type='date' title='Дата окон-я прод-я' />
        <Input type='select' title='Результат эксп-зы' listName='result' />
        <Input type='date' title='Дата окончания' />
        <Input type='date' title='Дата завершения' />
        <ModalTitle>Справка о проверке</ModalTitle>
        <Input type='date' title='Дата назначения' />
        <Input type='date' title='Дата выполнения' />
        <Input type='text' title='№ проверки' />
        <Input type='text' title='№ уг. дела' />
        <Input type='select' title='Исполнитель' listName='executor' />
        <Input type='select' title='Результат пров-ки' listName='resultOfVerification' />
        <ModalButton type='update' text='Изменить' />
        <ModalButton type='cancel' text='Отменить' />
      </div>
    );
  }
  if (type === 'hidden') {
    return (
      <div className='modal-hidden'>

      </div>
    );
  }
  return null
};

export default Modal;