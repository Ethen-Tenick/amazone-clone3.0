import React, { useState, useEffect } from 'react'
import './Cart.css'
import { v4 } from 'uuid'

function Cart() {
    const [condition, setCondition] = useState(false)
    const [dataBaseCondition, setDataBaseCondition] = useState(false)

    const [totalPrice, setTotalPrice] = useState(0)
    const [totalcount, setTotalcount] = useState([])

    const [itemName, setItemName] = useState([])
    const [itemId, setItemId] = useState([])
    const [itemPrice, setItemPrice] = useState(0)

    const [getData, setGetData] = useState([
        {
            itemName: 'Tablet',
            itemId: 'first class',
            itemPrice: 100
        },
        {
            itemName: 'PC',
            itemId: 'second class',
            itemPrice: 200
        },
        {
            itemName: 'TV set',
            itemId: 'first class',
            itemPrice: 300
        },
        {
            itemName: 'Bugatti',
            itemId: 'Third class',
            itemPrice: 600
        }
    ])

    const aggregatePrices = () => {
        setTotalPrice(totalcount)
        setCondition(false)
        setDataBaseCondition(true)
    }
    // set the total to the variable of settotal price
    useEffect(() => {
        getData.map(item => {
            setTotalcount(prev => [...prev, (totalcount + item.itemPrice)])
        })

        //var count = 0;
        // for (var i = 0; i < totalcount.length; i++) {
        //     count + totalcount[i]
        // }
        // setTotalPrice(count)
        // console.log(totalcount)

    }, [getData])

    // end of the set to total variable function

    const addToCart = () => {
        setGetData(prev => [...prev, { itemName, itemId, itemPrice }])
    }

    return (
        <div className='cart_main_container'>
            <div>
                <div>
                    <input placeholder='Mouse' onChange={e => { setItemName(e.target.value) }} />
                    <input placeholder='Computing' onChange={e => { setItemId(e.target.value) }} />
                    <input placeholder='65000' onChange={e => { setItemPrice(e.target.value) }} />
                </div>
                <div>
                    <button onClick={() => { getData.pop() }}>delete from cart</button>
                    <button onClick={() => { aggregatePrices() }}>Total Cart Price</button>
                    <button onClick={() => { addToCart() }}>Add to cart</button>
                    <button onClick={() => { setCondition(!condition); setDataBaseCondition(false) }}>View cart {getData.length}</button>
                </div>
                <div key={v4()}>
                    {
                        (condition) ? getData.map(item => {
                            return <div key={v4()}>
                                <h4 key={item.itemName + v4()}>{item.itemName}</h4>
                                <h4 key={item.itemId + v4()}>{item.itemId}</h4>
                                <h4 key={item.itemPrice + v4()}>{item.itemPrice}</h4>
                            </div>
                        }) : null
                    }

                    {
                        (dataBaseCondition) ? <div><h3 key={totalPrice + v4()}>{totalPrice}</h3></div> : "null"
                    }
                </div>
            </div>



        </div>
    )
}

export default Cart