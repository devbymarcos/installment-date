//Dados vindo do input

const date = '2021-10-1';
const installment = 10;
const payment = '200,00';

//converter date para number
 const dateArr = date.split('-');
 const[year,month,day] = dateArr.map(Number);

 //Objeto Date
 const dateInit = new Date(year,month-1,day);

 let dataView ='';
 let daySyngle='';
 let monthSingle='';
 let yeaSingle ='';
 let repeat=0;

 for(let i =0;i<installment;i++){
      repeat++
      if(i === 0){
        dateInit.setMonth(dateInit.getMonth());
      }else{
        dateInit.setMonth(dateInit.getMonth()+1)
      }
       daySyngle = dateInit.getDate();
       monthSingle =dateInit.getMonth()+1;
       yeaSingle =dateInit.getFullYear();

       dataView = 'Dia '+daySyngle+'/'+monthSingle+'/'+yeaSingle+' parcela ' +repeat+'/'+installment+' valor da parcela R$ '+payment
       console.log(dataView);
 }
