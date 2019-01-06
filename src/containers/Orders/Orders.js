import React, { Component } from 'react';
import Order from '../../component/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {

    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        axios.get('/orders.json')
            .then(response => {
                console.log(response.data);
                const fetchedOrders = [];
                for (let key in response.data) {
                    console.log(`key: ${key}`);
                    //   console.log(`key data: ${response.data[key]}`);
                    fetchedOrders.push({
                        ...response.data[key],
                        id: key
                    });
                }
                // console.log(`Fetched Data: ${fetchedOrders[0]}`);
                this.setState({ loading: false, orders: fetchedOrders });
            })
            .catch(error => {
                this.setState({ loading: false });
            })
    }

    render() {
        return (
            <div>
                {this.state.orders.map(order => (
                    <Order
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price} />
                ))}
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);