const hasMeeting=false
const myPromise = new Promise((resolve,reject)=>{
    if(!hasMeeting){
        const meetingDetails={
            title: 'Google Meeting',
            time: '4 PS CST'
        }
        resolve(meetingDetails)
    }else{
        reject('Already Scheduled Meeting Today')
    }
})



const mySecondPromise =  Promise.resolve({
    title: 'Facebook Meeting',
    time: '5 PS CST'
})


// myPromise.then((res)=>{
//     console.log(res)
// }).catch(err=>{
//     console.log(err)
// })

async function myMeeting(){
    const response= await myPromise
    const secondRes =  await mySecondPromise
    console.log(response)
    console.log(secondRes)
}

myMeeting()

