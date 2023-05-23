import dayjs from "dayjs";
import "dayjs/plugin/isSameOrAfter";
import "dayjs/plugin/isSameOrBefore";

export function getMonth(currentMonth : number): dayjs.Dayjs[][]{
    const currentYear = dayjs().year();
    const firstDayOfMonth = dayjs(new Date(currentYear,currentMonth,0)).day()
    let currentMonthCount = 0-firstDayOfMonth;
    return new Array(5).fill([]).map(() => {
        return new Array(7).fill(null).map(() => {
            currentMonthCount++;
            return dayjs(new Date(currentYear, currentMonth, currentMonthCount))
        })
    })
}

export function getWeek(date:dayjs.Dayjs): dayjs.Dayjs[] {
    const dayjs = require('dayjs');
    require('dayjs/locale/pl'); // opcjonalnie, jeśli chcesz użyć języka polskiego
    const startOfWeek = date.startOf('week');
    const endOfWeek = startOfWeek.endOf('week'); // koniec tygodnia

    const weekDays = [];
     for (let day = startOfWeek; day <= endOfWeek; day = day.add(1, 'day')) {
        weekDays.push(dayjs(day));
    }
    return  weekDays
}

export function getTimeRemaining() {
    const dayjs = require('dayjs');
    require('dayjs/plugin/duration');
    dayjs.extend(require('dayjs/plugin/duration'));
    const now = dayjs(); // Pobierz aktualną datę i godzinę
    const targetTime = dayjs().hour(20).minute(0).second(0); // Ustaw docelową godzinę na 20:00

    const remainingTime = targetTime.diff(now); // Oblicz różnicę między aktualnym czasem a docelowym czasem
    const duration = dayjs.duration(remainingTime); // Konwertuj różnicę na obiekt Duration

    // Zwróć pozostały czas w formacie godzin:minuty:sekundy
    return duration.hours() *66 + duration.minutes() ;
}