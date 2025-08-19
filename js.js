const avt = document.querySelector('.avt');
avt.addEventListener('click', () => {
    console.log('Кнопка была нажата!');
    alert('Жизнь полна сюрпризов, не так ли? (о_о)');
});
document.getElementById("matchScheduleBtn").addEventListener("click", function() {
    window.open('https://www.soccer.ru/barselona/teamschedule');
});