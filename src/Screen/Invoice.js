import React from 'react'
import Sidebar from '../Components/Sidebar'
import DashHeader from '../Components/DashHeader'
import logo from '../images/Ellipse 240.png'

const Invoice = () => {
  return (
    <div>
        <section className='main-dash'>

            <Sidebar/>

            <div className='main'>
                <DashHeader/>

                <div className='invoice-s'>
                    <section className='invoice'>
                        <div className="in-h">
                            <h2>Invoice</h2>
                            <img src={logo} alt="" />
                        </div>

                        <div className="in-c">
                            <div className="in-l">
                                <h3>Mrs. John Doe</h3>
                                <p>Date: <span>23rd March, 2024</span></p>
                                <p>Invoice No. <span>3245</span></p>
                            </div>

                            <div className="in-r">
                                <p>No. 3 Faith Street,</p>
                                <p>Off Ada George, PH</p>
                            </div>
                        </div>

                        <table className='table1'>
                            <tr className='tr1'>
                                <th>PROD.</th>
                                <th>PRICE</th>
                                <th>QUAN.</th>
                                <th>SUBTOTAL</th>
                            </tr>
                            <tr>
                                <td>Bag</td>
                                <td>$20</td>
                                <td>3</td>
                                <td>$60</td>
                            </tr>

                            <tr>
                                <td>Shoes</td>
                                <td>$50</td>
                                <td>2</td>
                                <td>$100</td>
                            </tr>
                        </table>


                        <table className='table2'>
                            <tr className='tr2'>
                                <th>BANK ACCOUNT</th>
                                <th>TOTAL</th>
                            </tr>
                            <tr>
                                <td>
                                    <span>Account Number: <span>254 765 576 565 </span>
                                    <br />
                                    Bank: <span>UBA</span> 
                                    </span>
                                </td>
                                <td className='total'>$260</td>
                            </tr>
                            <tr>
                                <td>VAT</td>
                                <td>$5</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td className='total'>$265</td>
                            </tr>
                        </table>

                    </section> 
                    <p className='foot'>Enterprise Management | +00 0000 00 0000</p>
                </div>
                        

            </div>

        </section>
      
    </div>



    
  )
}

export default Invoice