const cityname=document.getElementById('cityname');
const submitbtn=document.getElementById('submitbtn');
const city_name=document.getElementById('city_name');
const temp=document.getElementById('temp');
const temp_status =document.getElementById('temp_status');
const day =document.getElementById('day');
const tdy_date =document.getElementById('tdy_date');
const datahide=document.querySelector('.middle_layer');

const getInfo = async(event)=>
{
    //------- event and event.preventDefault() is used to protect form from refresh
     event.preventDefault();
    
    let cityval=cityname.value;
   
    if(cityval==="")
    {
        city_name.innerText=`plz enter city name`;
        // this to hide the previous output if black search perform
        datahide.classList.add('data_hide');
    }
    else{
        try{
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=f14d5a07e7049134ba14406b38cc811c`;
        const response= await fetch(url);//this is fetchin data in form of json 
        const data= await response.json();//we are making the json file into object
        const arrdata=[data];
        city_name.innerText=`${arrdata[0].name},${arrdata[0].sys.country}`;
        temp.innerText= arrdata[0].main.temp;
        tempStatus= arrdata[0].weather[0].main;

        if (tempStatus == "Sunny") {
            temp_status.innerHTML =
              "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
          } else if (tempStatus == "Clouds") {
            temp_status.innerHTML =
              "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
          } else if (tempStatus == "Rainy") {
            temp_status.innerHTML =
              "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
          }
          else if(tempStatus == "Clear")
          {
            temp_status.innerHTML =
              "<i class='fas  fa-sun' style='color:#f1f2f6;'></i>";
          }
           else {
            temp_status.innerHTML =
              "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";
          }
          //removing that data_hide if new valide input in search
          datahide.classList.remove('data_hide');
        
    }catch
    {
        city_name.innerText=`plz enter --valid-- city name`;
        // this to hide the previous output if error occure
        datahide.classList.add('data_hide');
    }
}
    
}
submitbtn.addEventListener('click',getInfo);
