import React from 'react';

function HomeDivs2() {
    return(
        <>
            <div className='bg-black grid grid-cols-2 place-content-center pb-8'>
                <div>    
                    <img src="https://upload.wikimedia.org/wikipedia/en/4/44/MLS_Season_Pass_logo.png" alt='' />
                </div>  
                <div>
                    <img src="https://images.mlssoccer.com/image/private/t_keep-aspect-ratio-e-desktop/f_auto/mls-atl-prd/ktitkxubj324o2m9kebz.jpg" alt ="mls tickets" />
                </div>         
            </div>
            <div className='bg-black pt-8'>
                <div className='underline underline-offset-8 text-white text-center text-2xl'>
                    <h1>New Releases</h1>
                </div>
                <div className='grid grid-cols-3 pt-12 pb-12 h-[700px] ml-[249px] underline underline-offset-8 text-blue-400 text-justify text-l'>
                    <div className='w-[300px] h-[200px] text-center'>
                        <img src="https://images4.imagebam.com/0a/18/64/MEJAJJW_o.png" alt="card 1" />
                        <h3>Juan Soto 2018 Topps Brooklyn Collection</h3>
                    </div>
                    <div className='w-[300px] h-[200px] text-center'>
                    <img src="https://images4.imagebam.com/11/8e/8f/MEJAJKA_o.png" alt="card 2" />
                        <h3>Topps 2023 Series 1 Box</h3>
                    </div>
                    <div className='w-[300px] h-[200px] text-center'>
                    <img src="https://images4.imagebam.com/20/84/e0/MEJAJKI_o.png" alt="card 3" />
                        <h3>Tyrese Haliburton 2020 Donruss Optic</h3>
                    </div>
                </div>
            </div>
            <hr  style={{color: 'red', backgroundColor: 'red', height: 25, borderColor : 'red'}}/>

        </>
    )
}

export default HomeDivs2;