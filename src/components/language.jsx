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
        <div className='col-sm-3 top-bar  '>
          <select className='language-select'>
            <option> English</option>
            <option> Hindi</option>
            <option> French</option>
          </select>
        </div>

      </div>

    </div>
  )
}

export default Language
