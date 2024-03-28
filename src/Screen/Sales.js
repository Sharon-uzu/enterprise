import React,{useState} from 'react'
import Sidebar from '../Components/Sidebar'
import DashHeader from '../Components/DashHeader'


const Sales = () => {
    const [product, setProduct] = useState(true)
    const [service, setService] = useState(true)

  return (
    <div>
    <section className='main-dash'>

      <Sidebar/>

      <div className='main'>
        <DashHeader/>

        <section className='sale-m'>

            
            
            {
                product ? (
                    <>
                        <form className='sale-form'>

                            <section>

                                <h2>PRODUCTS</h2>

                                <div>
                                    
                                    <select name="" id="">
                                        <option value="">Select Product</option>
                                        <option value="">Shoe</option>
                                        <option value="">Bag</option>
                                        <option value="">Cap</option>
                                        <option value="">Chair</option>
                                    </select>
                                </div>

                                <div>
                                    <input type="number" name="" id="" placeholder='Quantity'/>
                                </div>

                                <div>
                                    <input type="text" name="" id="" value='$40' disabled/>
                                </div>

                                <div>
                                    <input type="text" placeholder='Marketer code'/>
                                </div>

                                <div>
                                    <input type="text" placeholder='VAT code'/>
                                </div>

                                <button style={{backgroundColor:'#FA5A7D'}}>Add Another Product</button>

                                <button style={{backgroundColor:'#BF83FF'}}>Generate Invoice</button>

                            </section>

                        </form>
                    </>
                ) : null
            }
        </section>
               

      </div>

    </section>
      
  </div>
  )
}

export default Sales