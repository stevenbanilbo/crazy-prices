import React from 'react';

function Main(props) {
    return (
    
    <div className="md:flex p-10 text-center">
      <img className="rounded-l md:w-2/5 md:h-full"
           src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/3892e7104379431.5f61ca211f0c5.jpg"
           alt="About Coffee"/>
                <div className="md:h-full rounded overflow-hidden bg-gray-200 p-1 justify-between shadow-lg">
                  <img className="w-full h-48" src="https://nl-nl.giesencoffeeroasters.eu/wp-content/uploads/2020/04/Overzicht-1024x683.png" alt="Coffee beans"/>
                  <div className="px-6 py-4">
                    <a className="font-bold text-xl mb-2 underline animate-pulse" href="#">Fresh Coffee Beans</a>
                    <p className="text-gray-700 text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#coffee</span>
                    <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#coffeebeans</span>
      
                  </div>
                </div>

                
                <div className="md:h-full rounded bg-gray-200 p-1 justify-between shadow-lg">
                  <img className="w-full h-48" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/latte-art-in-a-yellow-cup-on-a-marble-table-royalty-free-image-1592427210.jpg?crop=0.606xw:0.455xh;0.00801xw,0.275xh&resize=640:*" alt="Coffee beans"/>
                  <div className="px-6 py-4">
                  <a className="font-bold text-xl mb-2 underline animate-pulse" href="#">Customize Your Favorite Espresso</a>
                    <p className="text-gray-700 text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                    </div>

                  <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#coffee</span>
                    <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#espresso</span>
                    <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ilovecoffee</span>
                  </div>
                </div>   
                
                {/* <div className="flex-col bg-yellow-300 p-10 rounded text-2xl uppercase animate-pulse"><p>Order Now</p></div>   */}


                  
                 
       
    </div>       
     
           
            


          
        
  

        
      
        
    );
}

export default Main;