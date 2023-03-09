import React from 'react';

function HomeDivs() {
    return(
        <div className='overflow-y-scroll bg-gray-800 w-[400px] h-[800px] text-white border-solid border'>
            <div className='pt-1 pl-[47px]'>
                <div className='w-[300px] h-[170px]'>
                    <img src="https://img.mlbstatic.com/mlb-images/image/upload/t_5x2/t_w1024/mlb/klfja6irldzppekxl90x.png" alt='astros' />
                    <h3>Get Your Astros Season Tickets Now!</h3>
                </div>
                <div className='w-[300px] h-[250px]'>
                    <img src="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/7JQPEGWGHAI6ZDH7GOYFT5GBW4.jpg&w=767" alt='ja morant' />
                    <h3>Ja Morant Dunk Changes Course of Game 5</h3>
                </div>
                <div className='w-[300px] h-[250px] pt-[80px]'>
                    <img src="https://cdn.shopify.com/s/files/1/1832/7059/products/12303_e8bbd108-c09e-49c7-8817-24f80e9ef865_5000x.jpg?v=1537675647" alt='brett favre' />
                    <h3>Throwback to Football's Greatest MVP's</h3>
                </div>
            </div>
        </div>
    )
}

export default HomeDivs;