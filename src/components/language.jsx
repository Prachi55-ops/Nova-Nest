import React from 'react'

const Language = () => {
  return (
    <div className='container '>
        <div className='row offer-box '>
            {/* <div className="col-sm-1"></div> */}
            <div className='col-sm-7 sale-para'>
                <p>Summer Sale For All Swim Suits And Free Delivery - OFF 50%!</p>
                <h4>ShopNow</h4>
                </div>
            <div className='col-sm-2'></div>
            <div className='col-sm-2 select-language '>
              <select className=" select-box" >
  <option  className='select-option'selected>Change Language</option>
  <option className='select-option' value="1">Hindi</option>
  <option className='select-option' value="2">English</option>
  
</select></div>
            <div className='col-sm-1'></div>
        </div>
      
    </div>
  )
}

export default Language
