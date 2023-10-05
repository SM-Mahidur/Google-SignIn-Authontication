const Orders = () => {
    return (
        <div className='text-center items-center'>
            <h2 className="text-2xl my-4">Your Personal Order History</h2>
            <ul>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
                <li>item 4</li>
                <li>item 5</li>
            </ul>


            <div className="pl-8 my-4 mx-8"> 
           
            <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
            <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
            <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
            <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
            <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
            <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
            <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
        
            <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
        
           
            </div>
         

        </div>
    );
};

export default Orders;