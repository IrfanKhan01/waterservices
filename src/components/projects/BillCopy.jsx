import React from 'react'
import '../../styles/style.css';

class BillCopy extends React.Component {
   render() {
       const { data } = this.props;
       console.log(data);
       return (
           <div className='container section project-detail'>
               <h5 className='center'>WATER SERVICES</h5>
               <p className='center line-height'>Near New Haji Camp, Sultanabad, Karachi<br/>Phone No. Off 0332-2002091, 021-99023400, 021-34431808, 0335-7611473 </p>
               <p className='center'></p>
               <div className="row">
                   <div className="col m2">Quantity Base</div>
                   <div className="col m4 border">{ data.quantityBase }</div>
                   <div className="col m2">TDR #</div>
                   <div className="col m4 border">{ data.TDRNo }</div>
               </div>
               <br/>
               <div className='row'>
                   <div className="col m2">Date/Time</div>
                   <div className="col m4 border">{ data.dateTime }</div>
                   <div className="col m2">MOU No.</div>
                   <div className="col m4 border">{ data.MOUNo }</div>
               </div>
               <br/>
               <div className='row'>
                   <div className="col m2">Contractor Name</div>
                   <div className="col m4 border">{ data.contractorName }</div>
                   <div className="col m2">Vehicle.Bower No.</div>
                   <div className="col m4 border">{ data.vehicleNo }</div>
               </div>
               <br/>
               <div className='row'>
                   <div className="col m2">Delivery Point</div>
                   <div className="col m10 border">{ data.deliveryPoint }</div>
               </div>
               <br/>
               <div className='row'>
                   <div className="col m2">CNIC</div>
                   <div className="col m4 border">{ data.cnic }</div>
               </div>
               <br/>
               <div className="row">
                   <div className="col m2">Prpared By</div>
                   <div className="col m4 border">{ data.preparedBy }</div>
   
                   <div className="col m2">Signature/Stamp</div>
                   <div className="col m4 border-bottom"></div>
               </div>
               <br/>
               <br/>
               <br/>
                <div className='col m12'>
                    <button className='btn large-btn right'>Get Printed Recipe</button>
                </div>
                <br/>
           </div>
       );
   }
}


export default BillCopy;
