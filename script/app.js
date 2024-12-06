async function getAllData() {
    try {
      const response = await fetch('../data/data.json');
      return await response.json(); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }



dailyBtn.addEventListener('click', async () => {
    const data = await getAllData(); 
    const workData = data[0].timeframes.daily;
    const playData = data[1].timeframes.daily;
    const studyData = data[2].timeframes.daily;
    const exerciseData = data[3].timeframes.daily;
    const socialData = data[4].timeframes.daily;
    const selfCareData = data[5].timeframes.daily;

    workHrs.innerText = `${workData.current}hrs`;
    workPrevHrs.innerText = `Last Week - ${workData.previous}hrs`;
    playHrs.innerText = `${playData.current}hrs`;
    playPrevHrs.innerText = `Last Week - ${playData.previous}hrs`;
    studyHrs.innerText = `${studyData.current}hrs`;
    studyPrevHrs.innerText = `Last Week - ${studyData.previous}hrs`;
    exerciseHrs.innerText = `${exerciseData.current}hrs`;
    exercisePrevHrs.innerText = `Last Week - ${exerciseData.previous}hrs`;
    socialHrs.innerText = `${socialData.current}hrs`;
    socialPrevHrs.innerText = `Last Week - ${socialData.previous}hrs`;
    selfCareHrs.innerText = `${selfCareData.current}hrs`;
    selfCarePrevHrs.innerText = `Last Week - ${selfCareData.previous}hrs`;
});

weeklyBtn.addEventListener('click', async () => {
    const data = await getAllData();
    const workData = data[0].timeframes.weekly;
    const playData = data[1].timeframes.weekly;
    const studyData = data[2].timeframes.weekly;
    const exerciseData = data[3].timeframes.weekly;
    const socialData = data[4].timeframes.weekly;
    const selfCareData = data[5].timeframes.weekly;


    workHrs.innerText = `${workData.current}hrs`;
    workPrevHrs.innerText = `Last Week - ${workData.previous}hrs`;
    playHrs.innerText = `${playData.current}hrs`;
    playPrevHrs.innerText = `Last Week - ${playData.previous}hrs`;
    studyHrs.innerText = `${studyData.current}hrs`;
    studyPrevHrs.innerText = `Last Week - ${studyData.previous}hrs`;
    exerciseHrs.innerText = `${exerciseData.current}hrs`;
    exercisePrevHrs.innerText = `Last Week - ${exerciseData.previous}hrs`;
    socialHrs.innerText = `${socialData.current}hrs`;
    socialPrevHrs.innerText = `Last Week - ${socialData.previous}hrs`;
    selfCareHrs.innerText = `${selfCareData.current}hrs`;
    selfCarePrevHrs.innerText = `Last Week - ${selfCareData.previous}hrs`;
});

monthlyBtn.addEventListener('click', async () => {
    const data = await getAllData();
    const workData = data[0].timeframes.monthly;
    const playData = data[1].timeframes.monthly;
    const studyData = data[2].timeframes.monthly;
    const exerciseData = data[3].timeframes.monthly;
    const socialData = data[4].timeframes.monthly;
    const selfCareData = data[5].timeframes.monthly;

   
    workHrs.innerText = `${workData.current}hrs`;
    workPrevHrs.innerText = `Last Week - ${workData.previous}hrs`;
    playHrs.innerText = `${playData.current}hrs`;
    playPrevHrs.innerText = `Last Week - ${playData.previous}hrs`;
    studyHrs.innerText = `${studyData.current}hrs`;
    studyPrevHrs.innerText = `Last Week - ${studyData.previous}hrs`;
    exerciseHrs.innerText = `${exerciseData.current}hrs`;
    exercisePrevHrs.innerText = `Last Week - ${exerciseData.previous}hrs`;
    socialHrs.innerText = `${socialData.current}hrs`;
    socialPrevHrs.innerText = `Last Week - ${socialData.previous}hrs`;
    selfCareHrs.innerText = `${selfCareData.current}hrs`;
    selfCarePrevHrs.innerText = `Last Week - ${selfCareData.previous}hrs`;
});