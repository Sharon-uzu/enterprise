import React,{useState} from 'react'
import Sidebar from '../Components/Sidebar'
import DashHeader from '../Components/DashHeader'
import { PiExportBold } from "react-icons/pi";
import { BsFileBarGraphFill } from "react-icons/bs";
import { BiSolidReceipt } from "react-icons/bi";
import { IoIosPricetags } from "react-icons/io";
import { FaUserPlus } from "react-icons/fa6";
import Chart from 'react-apexcharts';
import { IoFilterOutline } from "react-icons/io5";
import { colors } from '@mui/material';



const Dashboard = () => {
  const [state, setState] = useState({
    options: {
      chart: {
        id:'basic-bar'
      },
      
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
  })

  const [total, setTotal] = useState({
    options: {
      chart: {
        id:'basic-bar2'
      },
      xaxis: {
        categories: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri']
      }
    },
    series: [
      {
        name: "series-1",
        data: ['30k', '40k', '45k', '50k', '49k']
      }
    ]
  })

  return (
    <div>
      <section className='main-dash'>

        <Sidebar/>

        <div className='main'>
          <DashHeader/>
          
          <div className="first">

            <div className="first-l">

              <div className="first-l-top">
                <div>
                  <h3>Today’s Sales</h3>
                  <p>Sales Summary</p>
                </div>

                <span className='export'>
                  <PiExportBold className='e-i'/>
                  export

                </span>

              </div>

              <div className="first-l-cards">

                <div className="first-l-card" style={{backgroundColor:'#FFE2E5'}}>
                  <div>
                    <span style={{backgroundColor:'#FA5A7D'}}>
                      <BsFileBarGraphFill className='c-i'/>
                    </span>
                    <h2>$20K</h2>
                    <h6>Total Sales</h6>
                    <p>+8% from yesterday</p>
                  </div>
                  
                </div>


                <div className="first-l-card" style={{backgroundColor:'#FFF4DE'}}>
                  <div>
                    <span style={{backgroundColor:'#FF947A'}}>
                      <BiSolidReceipt className='c-i'/>
                    </span>
                    <h2>400</h2>
                    <h6>Total Order</h6>
                    <p>+5% from yesterday</p>
                  </div>
                </div>

                <div className="first-l-card" style={{backgroundColor:'#DCFCE7'}}>
                  <div>
                    <span style={{backgroundColor:'#3CD856'}}>
                      <IoIosPricetags className='c-i'/>
                    </span>
                    <h2>20</h2>
                    <h6>Product Sold</h6>
                    <p>+1.2% from yesterday</p>

                  </div>
                </div>


                <div className="first-l-card" style={{backgroundColor:'#F3E8FF'}}>
                  <div>
                    <span style={{backgroundColor:'#BF83FF'}}>
                      <FaUserPlus className='c-i'/>
                    </span>
                    <h2>12</h2>
                    <h6>New Customers</h6>
                    <p>+0.5% from yesterday</p>
                  </div>
                </div>

              </div>

            </div>

            <div className="first-r">
              <div>
                <h3>Staff performance</h3>
                {/* <Chart 
                  options={state.options}
                  series={state.series}
                  type="line"
                  width="100%"
                  height='300'
                  
                  
                  
                /> */}


                <Chart
                    type='line'
                    width='100%'
                    height='270'
                    series={[
                      {
                        names:'one',
                        data:[100, 220,224,300,310]
                      },
                      {
                        names:'two',
                        data:[80, 88,150,240,260]
                      }
                    ]}

                    options={
                      {
                        colors: ['#FA5A7D', '#BF83FF']
                    }
                    
                  }
                />  

            
              </div>

            </div>

          </div>


          <div className="second">
            <div className="second-l">
              <div>
                <h3>Total Revenue</h3>
                <Chart 
                options={total.options}
                series={total.series}
                type="bar"
                width="100%"
                height='300'
                
                
              />
              </div>
            </div>


            <div className="second-l second-r">
              <div>
                <h3>Volume vs Service Level</h3>
                {/* <Chart 
                options={total.options}
                series={total.series}
                type="bar"
                width="100%"
                height='300'
                
                
              /> */}


            <Chart
              type='bar'
              width='100%'
              height='300'
              series={[
                {
                  names:'one',
                  data:[100, 200,300,400,500]
                },
                {
                  names:'two',
                  data:[50, 70,120,140,200]
                }
              ]}

            options={
              {
                colors: ['#FA5A7D', '#BF83FF']
            }
            
          }
            />

              </div>
            </div>

          </div>


          <div className="product">
            <div className="top">
              <h3>Products</h3>

              <div>
                <button>Add Product</button>

                <span className="fil">
                  <IoFilterOutline className='f-i'/>
                  filter
                </span>

                <span className="fil">Download All</span>

              </div>
              
            </div>


            <table>
                <tr>
                  <th>Products</th>
                  <th>Buying Price</th>
                  <th>Quantity</th>
                  <th>Threshold Value</th>
                  <th>Expiry Date</th>
                  <th>Availability</th>
                </tr>

                <tr className='t-row'>

                  <td>Bread</td>
                  <td>$40</td>
                  <td>13 pack</td>
                  <td>20</td>
                  <td>11/12/22</td>
                  <td className='av'>in-stock</td>

                </tr>


                <tr className='t-row'>

                  <td>Shoe</td>
                  <td>$200</td>
                  <td>5 pair</td>
                  <td>10</td>
                  <td>23/12/22</td>
                  <td className='av'>out-of-stock</td>

                </tr>


                <tr className='t-row'>

                  <td>Bag</td>
                  <td>$100</td>
                  <td>2 pair</td>
                  <td>25</td>
                  <td>30/12/22</td>
                  <td className='av'>in-stock</td>

                </tr>


              </table>


          </div>
              

        </div>

      </section>
        
    </div>
  )
}

export default Dashboard