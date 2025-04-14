function solution(fees, records) {
    let answer = []
    let carRecord = {};
    let leftCar = 0;
    let answerObj = {}
    let feeObj = {}
    let record = []
    const timeCalc = (carNum, checkTime) => {
        let inTime = carRecord[carNum].split(":").map(Number)
        let outTime = checkTime.split(":").map(Number)
        
        return (outTime[0] * 60 + outTime[1])-(inTime[0] * 60 + inTime[1] )
    }
    
    for(let car of records) {
        record = car.split(" ");
        
        if(record[2] === "IN"){
            if(!answerObj[record[1]] ) answerObj[record[1]] = 0 
            carRecord[record[1]] = record[0];
            leftCar++
        }
        else {
            answerObj[record[1]] += timeCalc(record[1], record[0])
            carRecord[record[1]] = 0
            leftCar--
        }
    }
    if(leftCar !== 0) {
        Object.keys(carRecord).forEach((item) => {
            if(carRecord[item]){
                
               answerObj[item]+=timeCalc(item,"23:59");
                
            }
        })
    }
      Object.keys(carRecord).forEach((item) => {
          if(answerObj[item] <= fees[0]){
            feeObj[item] = fees[1]
              
          } 
          else
              feeObj[item] = fees[1] + Math.ceil((answerObj[item]-fees[0]) / fees[2]) * fees[3]
        
    })
    
    answer = Object.keys(feeObj).sort((a,b) => Number(a)-Number(b)).map(item => feeObj[item])
    
    
    return answer;
}
