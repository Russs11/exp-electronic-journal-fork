import React from 'react';
import "./Modal.scss"
import InfoTitle from './InfoTitle';
import TextItem from './TextItem';
import TextItemWrapper from './TextItemWrapper';
import TextItemVertical from './TextItemVertical';
import LineItem from './LineItem';
import ValueItem from './ValueItem';

const Modal = ({ type, expState }) => {

    if (type === "create") {
        return (
            <div className='modal-create'>

            </div>
        )
    }
    if (type === "search") {
        return (
            <div className='modal-search'>

            </div>
        )
    }
    if (type === "info") {
        let counterOfPocherk = 0
        let countOfTkedTotal = 0
        let countOfPortret = 0
        let countResOfPocherk = 0
        let countResOfTkedTotal = 0
        let countResOfPortret = 0
        let countResTotal = 0
        let countUdOfPocherk = 0
        let countUdOfTkedTotal = 0
        let countUdOfPortret = 0
        let countUdTotal = 0
        let countOfUd101Pocherk = 0
        let countOfUd101Tked = 0
        let countOfUd101Portret = 0
        let countOfUd101Total = 0
        let countOfUd105Pocherk = 0
        let countOfUd105Tked = 0
        let countOfUd105Portret = 0
        let countOfUd105Total = 0
        let countOfUd158Pocherk = 0
        let countOfUd158Tked = 0
        let countOfUd158Portret = 0
        let countOfUd158Total = 0

        expState.forEach((item) => {
            if (item.typeOfExpertise === "Почерк") {
                counterOfPocherk += 1
                if (item.result === "Результативная") {
                    countResOfPocherk += 1
                }
                if (item.typeOfMaterial === "УД") {
                    countUdOfPocherk += 1
                }
                if (item.article === "ст. 101 УК РФ") {
                    countOfUd101Pocherk += 1
                }
                if (item.article === "ст. 105 УК РФ") {
                    countOfUd105Pocherk += 1
                }
                if (item.article === "ст. 158, 159, 160 УК РФ") {
                    countOfUd158Pocherk += 1
                }
                
            }
            if (item.typeOfExpertise === "ТКЭД общ." || item.typeOfExpertise === "ТКЭД ден.") {
                countOfTkedTotal += 1
                if (item.result === "Результативная") {
                    countResOfTkedTotal += 1
                }
                if (item.typeOfMaterial === "УД") {
                    countUdOfTkedTotal += 1
                }
                if (item.article === "ст. 101 УК РФ") {
                    countOfUd101Tked += 1
                }
                if (item.article === "ст. 105 УК РФ") {
                    countOfUd105Tked += 1
                }
                if (item.article === "ст. 158, 159, 160 УК РФ") {
                    countOfUd158Tked += 1
                }
            }
            if (item.typeOfExpertise === "Портретная") {
                countOfPortret += 1
                if (item.result === "Результативная") {
                    countResOfPortret += 1
                }
                if (item.result === "Результативная") {
                    countUdOfPortret += 1
                }
                if (item.article === "ст. 101 УК РФ") {
                    countOfUd101Portret += 1
                }
                if (item.article === "ст. 105 УК РФ") {
                    countOfUd105Portret += 1
                }
                if (item.article === "ст. 158, 159, 160 УК РФ") {
                    countOfUd158Portret += 1
                }
            }
            countResTotal = countResOfPocherk + countResOfTkedTotal + countResOfPortret
            countUdTotal = countUdOfPocherk + countUdOfTkedTotal + countUdOfPortret
            countOfUd101Total = countOfUd101Pocherk + countOfUd101Tked + countOfUd101Portret
            countOfUd105Total = countOfUd105Pocherk + countOfUd105Tked + countOfUd105Portret
            countOfUd158Total = countOfUd158Pocherk + countOfUd158Tked + countOfUd158Portret
        })

        return (
            <div className='modal-info'>
                <InfoTitle text="Количество назначенных экспертиз" />
                <TextItem text="Почерковедческих: " />
                <TextItem text={counterOfPocherk} />
                <TextItem text="ТКЭД: " />
                <TextItem text={countOfTkedTotal} />
                <TextItem text="Портретных: " />
                <TextItem text={countOfPortret} />
                <TextItem text="Всего: " />
                <TextItem text={expState.length} />
                <InfoTitle text="Количество результативных экспертиз" />
                <TextItem text="Почерковедческих: " />
                <TextItem text={countResOfPocherk} />
                <TextItem text="ТКЭД: " />
                <TextItem text={countResOfTkedTotal} />
                <TextItem text="Портретных: " />
                <TextItem text={countResOfPortret} />
                <TextItem text="Всего: " />
                <TextItem text={countResTotal} />
                <InfoTitle text="Количество экспертиз по статьям" />
                <TextItemWrapper>
                    <TextItem />
                    <TextItemVertical text="Всего: " />
                    <TextItemVertical text="Почерко-ких" />
                    <TextItemVertical text="ТКЭД" />
                    <TextItemVertical text="Портретных" />
                    <TextItemVertical text="Проверок" />
                    <LineItem />
                    <TextItem text="Всего: " />
                    <ValueItem text={countUdTotal} />
                    <ValueItem text={countUdOfPocherk} />
                    <ValueItem text={countUdOfTkedTotal} />
                    <ValueItem text={countUdOfPortret} />
                    <ValueItem text="153" />
                    <LineItem />
                    <TextItem text="ст. 101 УК РФ:" />
                    <ValueItem text={countOfUd101Total} />
                    <ValueItem text={countOfUd101Pocherk} />
                    <ValueItem text={countOfUd101Tked}/>
                    <ValueItem text={countOfUd101Portret}/>
                    <LineItem />
                    <TextItem text="ст. 105 УК РФ:" />
                    <ValueItem text={countOfUd105Total} />
                    <ValueItem text={countOfUd105Pocherk} />
                    <ValueItem text={countOfUd105Tked} />
                    <ValueItem text={countOfUd105Portret} />
                    <LineItem />
                    <TextItem text="ст. 158, 159, 160 УК РФ:" />
                    <ValueItem text={countOfUd158Total} />
                    <ValueItem text={countOfUd158Pocherk} />
                    <ValueItem text={countOfUd158Tked} />
                    <ValueItem text={countOfUd158Portret} />
                    <LineItem />
                    <TextItem text="ст. 186, 187 УК РФ:" />
                    <LineItem />
                    <TextItem text="ст. 222 УК РФ:" />
                    <LineItem />
                    <TextItem text="ст. 264 УК РФ:" />
                    <LineItem />
                </TextItemWrapper>
                <InfoTitle text="Количество экспертиз по исполнителям" />
                <TextItemWrapper>
                    <TextItem />
                    <TextItemVertical text="Всего: " />
                    <TextItemVertical text="Почерко-ких" />
                    <TextItemVertical text="ТКЭД" />
                    <TextItemVertical text="Портретных" />
                    <TextItemVertical text="Проверок" />
                    <LineItem />
                    <TextItem text="Всего: " />
                    <ValueItem text="166" />
                    <ValueItem text="12" />
                    <ValueItem text="153" />
                    <ValueItem text="1" />
                    <ValueItem text="153" />
                    <LineItem />
                    <TextItem text="Польченко Т.В.:" />
                    <ValueItem text="32" />
                    <ValueItem text="4" />
                    <ValueItem text="28" />
                    <ValueItem text="" />
                    <ValueItem text="" />
                    <LineItem />
                    <TextItem text="Поволодцкий Д.Г.:" />
                    <ValueItem text="25" />
                    <ValueItem text="" />
                    <ValueItem text="25" />
                    <ValueItem text="" />
                    <ValueItem text="99" />
                    <LineItem />
                    <TextItem text="Васильев И.С.:" />
                    <ValueItem text="25" />
                    <ValueItem text="2" />
                    <ValueItem text="25" />
                    <ValueItem text="" />
                    <ValueItem text="" />
                    <LineItem />
                    <TextItem text="Арзяков Д.Н.:" />
                    <ValueItem text="2" />
                    <ValueItem text="2" />
                    <ValueItem text="" />
                    <ValueItem text="" />
                    <ValueItem text="" />
                    <LineItem />
                    <TextItem text="Халилов Р.Н.:" />
                    <ValueItem text="25" />
                    <ValueItem text="" />
                    <ValueItem text="25" />
                    <ValueItem text="" />
                    <ValueItem text="54" />
                    <LineItem />
                    <TextItem text="Балабанов А.А.:" />
                    <ValueItem text="26" />
                    <ValueItem text="" />
                    <ValueItem text="25" />
                    <ValueItem text="1" />
                    <ValueItem text="" />
                    <LineItem />
                    <TextItem text="Дружинина Е.Ю.:" />
                    <ValueItem text="2" />
                    <ValueItem text="2" />
                    <ValueItem text="" />
                    <ValueItem text="" />
                    <ValueItem text="" />
                    <LineItem />
                    <TextItem text="Еноткин А.А.:" />
                    <ValueItem text="2" />
                    <ValueItem text="2" />
                    <ValueItem text="" />
                    <ValueItem text="" />
                    <ValueItem text="" />
                    <LineItem />
                    <TextItem text="Киселев А.С.: " />
                    <ValueItem text="25" />
                    <ValueItem text="" />
                    <ValueItem text="25" />
                    <ValueItem text="" />
                    <ValueItem text="" />
                    <LineItem />
                    <TextItem text="Марчук В.А.: " />
                    <ValueItem text="2" />
                    <ValueItem text="" />
                    <ValueItem text="65" />
                    <ValueItem text="" />
                    <ValueItem text="70" />
                    <LineItem />
                    <TextItem text="Черногоров А.Ю.: " />
                    <ValueItem text="" />
                    <ValueItem text="" />
                    <ValueItem text="20" />
                    <ValueItem text="" />
                    <ValueItem text="" />
                    <LineItem />
                </TextItemWrapper>
            </div>
        )
    }
    return (
        <div className='modal-hidden'>

        </div>
    );
};

export default Modal;