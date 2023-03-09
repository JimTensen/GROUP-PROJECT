import React from 'react';

function HomeDivs2() {
    return(
        <>
            <div className='bg-black grid grid-cols-2 place-content-center pb-8'>
                <div>    
                    <img src="https://upload.wikimedia.org/wikipedia/en/4/44/MLS_Season_Pass_logo.png" />
                </div>  
                <div>
                    <img src="https://images.mlssoccer.com/image/private/t_keep-aspect-ratio-e-desktop/f_auto/mls-atl-prd/ktitkxubj324o2m9kebz.jpg" alt ="mls tickets" alt="cards" />
                </div>         
            </div>
            <div className='bg-black pt-8'>
                <div className='underline underline-offset-8 text-white text-center text-2xl'>
                    <h1>New Releases</h1>
                </div>
                <div className='grid grid-cols-3 pt-12 pb-12 pl-[160px] text-white text-justify text-2xl'>
                    <div>
                        <img src="https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e_400x400.jpg" alt="card 1" />
                        <h3>Granny Glock</h3>
                    </div>
                    <div>
                    <img src="https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e_400x400.jpg" alt="card 2" />
                        <h3>Granny Glock</h3>
                    </div>
                    <div>
                    <img src="https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e_400x400.jpg" alt="card 3" />
                        <h3>Granny Glock</h3>
                    </div>
                </div>
            </div>
            <hr  style={{color: 'red', backgroundColor: 'red', height: 25, borderColor : 'red'}}/>

        </>
    )
}

export default HomeDivs2;