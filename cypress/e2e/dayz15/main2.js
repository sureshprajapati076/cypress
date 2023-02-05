

const getAllUserEmails = async ()=>{
    const response= await fetch("https://jsonplaceholder.typicode.com/users")
    const jsonUserData = await response.json()
    const userEmailArr = jsonUserData.map(user=>{
        return user.email
    })
    const myPromiseRes = await myPromise
    postToAnotherFun(myPromiseRes)
    postToAnyFunctin(userEmailArr)
   
}
const postToAnyFunctin = (data)=>{
   console.log(data)
 
}

const postToAnotherFun = (data)=>{
    console.log(data)
}


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

getAllUserEmails()






//Below are equivalent to above ones

/*

async function getAllUserEmails(){
    const response= await fetch("https://jsonplaceholder.typicode.com/users")
    const jsonUserData = await response.json()
    const userEmailArr = jsonUserData.map(user=>{
        return user.email
    })
    const myPromiseRes = await myPromise
    postToAnotherFun(myPromiseRes)
    postToAnyFunctin(userEmailArr)
   
}
function postToAnyFunctin(data){
   console.log(data)
}

function postToAnotherFun(data){
    console.log(data)
}


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

getAllUserEmails()







*/