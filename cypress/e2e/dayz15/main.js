const hasMeeting = false
function meeting(name) {
    return new Promise((resolve, reject) => {
        if (!hasMeeting) {
            const meetingDetails = {
                title: `google meet with ${name}`,
                time: '2PM PST',
                duration: '30mins'
            }
            resolve(meetingDetails)
        } else {
            reject('meeting already scheduled')
        }
    })
}


// Below is one of way to use Promise... then can be chainable
meeting('Sunena').then(res => {
    console.log("within First THEN ")
    console.log(new Date())
    console.log(res)
    return {name:'suresh','age':35}
})

    .then(res2 => {
        console.log("within Second THEN ")
        console.log(new Date())
        console.log(res2)
    })

    .catch(err => console.log(err))



//Another clear way of using Promise is wrap around async function and use await to Promise    
async function meetingSchedule(name) {
    try {
        const response = await meeting(name);
        console.log(new Date())
        console.log(response)
        console.log('within scheduled meeting')
    }
    catch (error) {
        console.log(error)
    }

}

meetingSchedule('Suresh');
meetingSchedule('Praja');
console.log('hello should be first printed')
