import React from 'react';

function HomeDivs() {
    return(
        <div className='overflow-y-scroll bg-gray-800 w-[400px] h-[1100px] text-white border-solid border'>
            <div className='pt-1 pl-[47px]'>
                <div className='w-[300px] h-[170px]'>
                    <img src="https://img.mlbstatic.com/mlb-images/image/upload/t_5x2/t_w1024/mlb/klfja6irldzppekxl90x.png" alt='astros' />
                    <h3>Get Your Astros Season Tickets Now!</h3>
                </div>
                <div className='w-[300px] h-[250px] pt-12'>
                    <img src="https://www.golfchannel.com/sites/default/files/styles/thumbnail/public/2023/03/09/rahm_1920_players23_d1_miss_putt.jpg?itok=0ym-_z51" alt='rahm golf' />
                    <h3>Rahm Struggles With 3-Putt</h3>
                </div>
                <div className='w-[300px] h-[250px] pt-12'>
                    <img src="https://cdn.shopify.com/s/files/1/1832/7059/products/12303_e8bbd108-c09e-49c7-8817-24f80e9ef865_5000x.jpg?v=1537675647" alt='brett favre' />
                    <h3>Throwback to Football's Greatest MVP's</h3>
                </div>
                <div className='w-[300px] h-[250px] pt-[280px]'>
                    <img src="https://media.formula1.com/image/upload/v1678034269/trackside-images/2023/F1_Grand_Prix_of_Bahrain/1471454764.jpg.transform/4col-retina/image.jpg " alt='f1 hamilton' />
                    <h3>Hamilton Says W-14 Needs Work</h3>
                </div>
            </div>
        </div>
    )
}

export default HomeDivs;