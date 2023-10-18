import React from "react";
import leftimage from "./s1.jpg";

const Adminwelcome=()=>
{
    return(
    <>
     <h1 className="welcomeadmin my-3">Welcome Admin</h1>

      <div className="container mt-5">
     
     <div class="d-flex flex-row bg-secondary">

     <div class="p-2 bg-primary">
     <img className="welimg1"src="https://blogs.gartner.com/marc-brown/files/2018/08/important-employee-engagement-engaged-employee-stats.png" alt="stats"/>
     </div>

     <div class="p-2 bg-primary">
     <img className="welimg2"src="https://www.engagementfactory.com/hubfs/EngagementFactory_April2021/Images/EF-_Customer-Engagement-Framework-People_600x340@2x.jpg" alt="stats"/>
     </div>
     <div class="p-2 bg-primary">
     <img className="welimg3"src="https://cdn.emailmonday.com/wp-content/uploads/2014/08/benefits_of_marketing_automation.jpg" alt="stats"/>
     </div>
     </div>
     
    </div>
     <div className="container">
      <div class="d-flex flex-row bg-secondary">
      <div class="p-2 bg-primary">
     <img className="welimg4"src="https://www.tytonmedia.com/wp-content/uploads/web-design-statistics.png" alt="stats"/>
     </div>
     <div class="p-2 bg-primary">
     <img className="welimg5"src="https://www.researchgate.net/publication/333156824/figure/fig2/AS:759360670162944@1558057100241/Number-of-pharmaceutical-companies-in-China-Data-resource-China-National-Bureau-of.ppm" alt="stats"/>
     </div>
     <div class="p-2 bg-primary">
     <img src={leftimage} className="welimg6" alt="rightimage"/>
     </div>

     </div>
     </div>

    </>

    );
}
export default Adminwelcome;