function changeClock(item , elem) {
    (elem < 10) ? item.innerHTML = '0' + elem : item.innerHTML = elem; 
}

function calculateTime() {
    const hourDate = document.querySelector('#hour');
    const minuteDate = document.querySelector('#minute');
    const secondDate = document.querySelector('#second');

    const date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    const monthNumber = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
    const dayNumber = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

    changeClock(hourDate, hour);
    changeClock(minuteDate, minute);
    changeClock(secondDate, second);

    setTimeout(calculateTime, 1000);
}

window.addEventListener('load', calculateTime);

