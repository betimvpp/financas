import * as C from './styles';
import {formaCurrentMonth} from '../../Helpers/DataFilter';
import {ResumeItem} from '../ResumeItem/index'

type Props = {
    currentMonth: string;
    onMonthChange: (newMonth: string) => void;
    income: number;
    expense: number;
}

export const InfoArea = ({currentMonth, onMonthChange, income, expense}: Props) =>{
    const handlePreviousMonth = () =>{
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth( currentDate.getMonth() - 1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    };

    const handleNexMonth = () =>{
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth( currentDate.getMonth() + 1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    }

    return(
        <C.Container>
            <C.MonthArea>
                <C.MonthArrow onClick={handlePreviousMonth}>⬅️</C.MonthArrow>
                <C.MonthTitle>{formaCurrentMonth(currentMonth)}</C.MonthTitle>
                <C.MonthArrow onClick={handleNexMonth}>➡️</C.MonthArrow>
            </C.MonthArea>
            <C.ResumeArea>  
                <ResumeItem title="Receitas" value={income}/>
                <ResumeItem title="Despesas" value={expense}/>
                <ResumeItem 
                title="Balanço" 
                value={income - expense} 
                color={(income - expense) < 10 ? 'red' : 'green'}/>
            </C.ResumeArea>
        </C.Container>
    );
}