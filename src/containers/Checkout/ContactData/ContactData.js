import React, { Component } from 'react';
import Button from '../../../component/UI/Button/Button';
import Spinner from '../../../component/UI/Spinner/Spinner';
import Input from '../../../component/UI/Input/Input';

import classes from './ContactData.css';
import axios from '../../../axios-orders';

class ContactData extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Vipul Parmar',
                address: {
                    street: 'Teststreet 1',
                    zipCode: 12345,
                    country: 'Canada'
                },
                email: 'test@test.com',
            },
            deliveryMethod: 'fastest'
        }

        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false });
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({ loading: false });
                // console.log(error);
            });
    }

    render() {
        let form = (
            <form>
                <Input inputtype = "input" type="text" name="name" placeholder="Your Name" />
                <Input inputtype = "input" type="email" name="email" placeholder="Your Email" />
                <Input inputtype = "input" type="text" name="phone" placeholder="Your Phone" />
                <Input inputtype = "input" type="text" name="street" placeholder="Street" />
                <Input inputtype = "input" type="text" name="postal" placeholder="postal" />
                <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
            </form>
        );

        if (this.state.loading) {
            form = <Spinner />;
        }

        return (
            <div className={classes.ContactData}>
                <h4>Enter Your Contact Information</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;