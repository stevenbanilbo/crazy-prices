import React from 'react';
import coffeehealth from '../images/coffeehealth.jpg'

function Services(props) {
    return (
        <div className="flex flex-wrap sm:flex-col">
   <div className="w-full p-5 bg-gray-200">
   <div className=" w-full lg:max-w-full lg:flex">
  <div className="h-48 lg:h-auto lg:w-48 flex text-center overflow-hidden"> <img src={coffeehealth} alt="coffee-health1"/>
  </div>


  <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex-1 flex-col justify-between leading-normal">
    
    <div className="mb-8">
      <p className="text-sm text-gray-600 flex items-center">
        Things to know About Coffee
      </p>
      <div className="text-gray-900 font-bold text-lg mb-2">Is coffee really good for your health?</div>
      <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
    </div>
    
    <div className="flex items-center">
     
      <div className="text-sm">
        <p className="text-gray-900 leading-none">Steven</p>
        <p className="text-gray-600">Dec 28</p>
      </div>
    </div>
  </div>
</div></div>
   


 

<div className="w-full p-5 bg-gray-300">
   <div className=" w-full lg:max-w-full lg:flex">
  <div className="h-48 lg:h-auto lg:w-48 flex text-center overflow-hidden"> <img src={coffeehealth} alt="coffeehealth2"/>
  </div>


  <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex-1 flex-col justify-between leading-normal">
    
    <div className="mb-8">
      <p className="text-sm text-gray-600 flex items-center">
        Things to know About Coffee
      </p>
      <div className="text-gray-900 font-bold text-lg mb-2">Is coffee really good for your health?</div>
      <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
    </div>
    
    <div className="flex items-center">
     
      <div className="text-sm">
        <p className="text-gray-900 leading-none">Steven B.</p>
        <p className="text-gray-600">May 3</p>
      </div>
    </div>
  </div>
</div></div>
   
<div className="w-full p-5 bg-gray-400">
   <div className=" w-full lg:max-w-full lg:flex">
  <div className="h-48 lg:h-auto lg:w-48 flex text-center overflow-hidden"> <img src={coffeehealth} alt="coffeehealth3"/>
  </div>


  <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex-1 flex-col justify-between leading-normal">
    
    <div className="mb-8">
      <p className="text-sm text-gray-600 flex items-center">
        Things to know About Coffee
      </p>
      <div className="text-gray-900 font-bold text-lg mb-2">Is coffee really good for your health?</div>
      <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
    </div>
    
    <div className="flex items-center">
     
      <div className="text-sm">
        <p className="text-gray-900 leading-none">Steven Banilbo</p>
        <p className="text-gray-600">Aug 18</p>
      </div>
    </div>
  </div>
</div></div>



   </div>
    );
}

export default Services;