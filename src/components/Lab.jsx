import React from "react";
import { Container } from "react-bootstrap";
import  Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import "./Lab.css"
export const Lab =() =>{


    return(
        <div>
            {/*-------slide show started------*/}

           <Container className="slideshow_lab">
               <Carousel interval={4500}>
                   <Carousel.Item>
                       <img className="d-block w-100" src={require("./Images/praco1.png")} alt=""/>
                      <Carousel.Caption>

                          </Carousel.Caption> 
                   </Carousel.Item>

                   <Carousel.Item>
                       <img className="d-block w-100" src={require("./Images/praco2.png")} alt=""/>
                      <Carousel.Caption>

                          </Carousel.Caption> 
                   </Carousel.Item>

                   <Carousel.Item>
                       <img className="d-block w-100" src={require("./Images/praco3.png")} alt=""/>
                      <Carousel.Caption>

                          </Carousel.Caption> 
                   </Carousel.Item>
               </Carousel>
               </Container>

               {/*-------slide show ended------*/}

               <br />
               <br />

               <Container >
                  <div className="contact_lab">
                      <div className="contact_pic">
                         
                        <img src="https://www.practo.com/tests/public/images/call_to_order.svg" alt="" />
                         
                         <div>
                        <p>Need help with booking your test?</p>
                        <p>Our experts are here to help you</p>
                         </div>
                      </div>
                      <div className="contact_num">
                          
                          <div>
                         <img src = "https://www.practo.com/tests/public/icons/call-to-order.svg" alt="" />
                         </div>
                           <h4>+91 8045684087</h4> 
                      </div>
                 </div> 
               </Container>
               <br />
               <Container>
                   <div className="promo_code">
                   <h4>Coupons for lab tests</h4>
                   
                   <div className="promo_img">
                       <img src={require("./Images/promo1.png")} alt=""/>
                       <img src={require("./Images/promo2.png")} alt=""/>
                   </div>
                   </div>
               </Container>

               <br />
               <Container>
               
               <div className="top_tests">
               <h4>Top Booked Diagnostic Tests</h4>
               <br />
               
               <div className="test_flex">
                   
                   <div className="test_div">
                       <h6>Covid Antibody IGG</h6>
                       <p>Known as Covid Clia blood serum</p>
                       <p>E-Reports in 2 days</p>
                       <h5>₹ 1500</h5>
                       
                       <div></div><p>ADD</p>
                   </div>
                   <div className="test_div">
                   <h6>Fasting Blood Sugar</h6>
                       <p>Known as Glucose fasting blood</p>
                       <p>E-Reports on next day</p>
                       <h5>₹ 150</h5>
                       <div></div>
                       <p>ADD</p>
                   </div>
                   <div className="test_div">
                   <h6>Beta HCG</h6>
                       <p>Known as Beta Hcg Automated Blood</p>
                       <p>E-Reports on next day</p>
                       <h5>₹ 315</h5>
                       <div></div>
                       <p>ADD</p>
                   </div>
                   <div className="test_div">
                   <h6>Vitamin B12</h6>
                       <p>Known as Vitamin B12 Conventional Blood</p>
                       <p>E-Reports on next day</p>
                       <h5>₹ 490</h5>
                       <div></div>
                       <p>ADD</p>
                   </div>
                   <div className="test_div">
                   <h6>HbA1c</h6>
                       <p>Known as Glycosylated Haemoglobin Blood</p>
                       <p>E-Reports on next day</p>
                       <h5>₹ 550</h5>
                       <div></div>
                       <p>ADD</p>
                   </div>
                   <div className="test_div">
                   <h6>Liver Function Test</h6>
                       <p>Known as Liver Function Tests Blood</p>
                       <p>E-Reports on next day</p>
                       <h5>₹ 400</h5>
                       <div></div>
                       <p>ADD</p>
                   </div>
                   
               </div>
               
               </div>
               </Container>
<br />
               <Container>
                   <div className="health_div">
                       <h4>Find Tests by Health Concern</h4>
                       <br />
                       <div className="health_img">
                           <div className="h_img">
                               <img src={require("./Images/fever.png")} alt="" />
                               <p>Fever</p>
                           </div>
                           <div className="h_img"> <img src={require("./Images/diabaties.png")} alt="" />
                           <p>Diabaties</p></div>
                           <div className="h_img"> <img src={require("./Images/skin.png")} alt="" />
                           <p>Skin</p></div>
                           <div className="h_img"> <img src={require("./Images/kidney.png")} alt="" />
                           <p>Kidney</p></div>
                           <div className="h_img"> <img src={require("./Images/digestion.png")} alt="" />
                           <p>Digestion</p></div>
                           <div className="h_img"> <img src={require("./Images/cancer.png")} alt="" />
                           <p>Cancer</p></div>
                       </div>
                   </div>
               </Container>

               <br />

               <div className = "grey_bar">
                   </div>
               <Container >
                   
               

                   <br />
                   <h4 className="left">Top booked Medical tests</h4>
                   <p className="left">Get 10% Health Cashback*<strong>T&C</strong></p>
                   <br />
                   <div className="test_medical">
                      <div className="tests">
                      
                          <div className="flex">
                          
                              <img src="https://www.practo.com/tests/public/icons/testprofiles/lipid_profile.png"/>
                             <h5>Lipid Profile</h5>
                             </div>
                             
                             <div><h6>Cholesterol LDL Test</h6>
                             <p>Also known as Cholesterol Ldl Enzymatic Colorimetric Method Blood</p>
                             </div>
                             
                             <div><h6>Cholesterol HDL</h6>
                             <p>Also known as Cholesterol Hdl Enzymatic Colorimetric Method Blood</p>
                             </div>
                             
                             <div><h6>Total Cholesterol Test</h6>
                             <p>Also known as Cholesterol test</p>
                             </div>
                             
                             <div><h6>Triglycerides Test</h6>
                             <p>Also known as Triglycerides Blood</p>
                             </div>
                             <br />
                             <button >BOOK NOW</button>
                          
                      </div>
                      <div className="tests">
                      
                      <div className="flex">
                     

                              <img src="https://www.practo.com/tests/public/icons/testprofiles/liver_profile.png"/>
                             <h5>Liver Profile</h5>
                            
                             </div>
                             
                             <div><h6>Cholesterol LDL Test</h6>
                             <p>Also known as Cholesterol Ldl Enzymatic Colorimetric Method Blood</p>
                             
                             </div>
                             <div><h6>Cholesterol HDL</h6>
                             <p>Also known as Cholesterol Hdl Enzymatic Colorimetric Method Blood</p>
                             
                             </div>
                             <div><h6>Total Cholesterol Test</h6>
                             <p>Also known as Cholesterol test</p>
                             
                             </div>
                             <div><h6>Triglycerides Test</h6>
                             <p>Also known as Triglycerides Blood</p>
                             
                             </div>
                             
                             <br />

                             <button >BOOK NOW</button>
                         
                      </div>
                      <div className="tests">
                      
                      <div className="flex">
                          
                              <img src="https://www.practo.com/tests/public/icons/testprofiles/blood_sugar.png"/>
                             <h5>Blood Sugar</h5>
                            
                             </div>
                         
                             <div><h6>Cholesterol LDL Test</h6>
                             <p>Also known as Cholesterol Ldl Enzymatic Colorimetric Method Blood</p>
                            
                             </div>
                             <div><h6>Cholesterol HDL</h6>
                             <p>Also known as Cholesterol Hdl Enzymatic Colorimetric Method Blood</p>
                             
                             </div>
                             <div><h6>Total Cholesterol Test</h6>
                             <p>Also known as Cholesterol test</p>
                             
                             </div>
                             <div><h6>Triglycerides Test</h6>
                             <p>Also known as Triglycerides Blood</p>
                             </div>
                             <br />

                             <button >BOOK NOW</button>
                          
                      
                   </div>
                   </div>
               </Container>

               
              <br />
              <br />
               <img className="d-block w-100" src= {require("./Images/work_with_us.png")} alt="img" />
               <br />
               <Container>
               <div>
                   <h2>How it works?</h2>
                   <br />
                   
                   <div className="written_flex">
                       <p>Search for tests and packages and seamlessly book a home sample collection.</p>
                       <div className="small_line"></div>
                       <p>We will send a certified professional to your place to assist you with the sample collection</p>
                       <div className="small_line"></div>
                       <p>We will email you the reports. You can also access your reports within your account on the Practo app</p>
                   </div>
                   <br />
               </div>
               </Container>


               <div className="back_grey">
                   <Container>
                   <br />
                   <h2>We do great</h2>
                   <br />
                   <br />

                   <div className="great_flex">
                       <div>
                           <img src="https://www.practo.com/tests/public/icons/dogreat/user.png?1563954988" />
                          <br />
                           <h3>15 Million users every month</h3>
                       </div>
                       <div> 
                           <img src="https://www.practo.com/tests/public/icons/dogreat/briefcase.png?1563954997" />
                           <br />
                           <h3>Trusted by 2,00,000 professionals</h3>
                           </div>
                       <div> 
                           <img src="https://www.practo.com/tests/public/icons/dogreat/location.png?1563955004" />
                           <h3>We serve in 9 cities</h3>
                            </div>
                   </div>
                   <br />
                   <br />
                   </Container>
               </div>


               <Container className="h3">
                   <br />
                   <h2>Thousands of Happy Customers</h2>
                   <br />
                   
                   <Carousel  interval={2000}>
                       <Carousel.Item>

                           <h3>"Very professional phlebo. Excellent job in collecting the sample. No pain atvall. Got my report also within 24 hours</h3>
                           
                      <p className="font">Malathi Ganapathy</p>
                      <br />
                       </Carousel.Item>
                       <Carousel.Item>
                           <h3>"Everything went very wel and smoothly. Technician was right on time. Really happy with the service</h3>
                           
                           <p className="font">Ashish Garnaik</p>

                           <br />
                       </Carousel.Item>
                       <Carousel.Item>
                           <h3>"Good service, Practo is avoiding to stand in que for health checkups</h3>
                           
                            <p className="font">Lalita Hegde</p>
                            <br />
                       </Carousel.Item>
                       
                   </Carousel>
                   
               </Container>



               <div className = "grey_bar">
                   </div>
                   <br />
               <Container>
                  <div className="last_div">
                   <p>Book <strong>Diagnostic tests</strong> near you with Practo Associate Labs, your online lab test service provider for diagnostic, medical tests and health checkup packages</p>
                   <p>Get all the benefits of <strong>diagnostic centre</strong> and <strong>pathology labs</strong> right from the comfort of your home. With a phlebotomy team to ensure speedy home sample collection, and diagnostic services ranging from individual tests to complete health checkup packages for Men, Women, Senior Citizens & Corporates. Practo Associate Labs takes care of all your diagnostic needs.
</p>
                   <p><strong>Wide Selection of Tests:</strong>Wide Selection of Tests: Practo Associate Labs covers a wide array of tests like <strong>blood sugar tests, thyroid tests, pregnancy tests, allergy tests, lipid profile, liver profile, platelet count, VDRL test, vitamin B12 deficiency test and more</strong>. Get details of all these tests such as blood test cost, when to take the tests, why it is required, who should take the test and what to do before taking the blood tests at home.</p>
                   <p><strong>Sample Collection at Home:</strong>Sample Collection at Home: Book blood tests online from your home and our expert team of Practo Associate Labs technicians will arrive at the pre-scheduled time to pick up your sample. Once you get a diagnostic test done, you will receive your reports online.</p>
                   <p><strong>Digital Reports:</strong> Get all your diagnostic reports emailed directly to you with detailed blood test reports & secure storage to easily access your medical records online.</p>
                   <p> <strong>Full Body Health Checkup:</strong> Keep your health and well being in check with exclusive Health Checkup Packages like Men’s Health Package, Women’s Health Package, Vitamin Package, Health Package for Corporates, Diabetes Packages, Packages for Senior Citizens & more. Get full details of all tests available in a package when booking online pathology tests.

</p>
                   <p> <strong>Practo Associate Labs provides services to the following cities:</strong>Practo Associate Labs provides services to the following cities: Bangalore, Hyderabad, Chennai, Mumbai, Delhi, Pune, Kolkata, Navi Mumbai, Thane, Gurgaon, Noida, Ahmedabad, Chandigarh, Ghaziabad, Indore, Jaipur, Lucknow, Patna, Ernakulam, Bhubaneswar and Coimbatore.</p>
                   </div>
               </Container>
               <br />
               <p className="p">This site is protected by reCAPTCHA and the Google <strong>Privacy Policy</strong> and <strong>Terms of Service</strong> apply.</p>
        </div>
    )
}