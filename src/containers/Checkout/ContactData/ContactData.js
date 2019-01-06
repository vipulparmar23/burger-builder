import React, { Component } from 'react';
import Button from '../../../component/UI/Button/Button';
import classes from './ContactData.css';

class ContactData extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        address: {
            street: '',
            postalCode: ''
        }
    }

    render() {
        return (
            <div className={classes.ContactData}>
            <h4>Enter Your Contact Information</h4>
                <form>
                    <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
                    <input className={classes.Input} type="email" name="email" placeholder="Your Email" />
                    <input className={classes.Input} type="number" name="phone" placeholder="Your Phone" />
                    <input className={classes.Input} type="text" name="street" placeholder="Street" />
                    <input className={classes.Input} type="text" name="postal" placeholder="postal" />
                    <Button btnType="Success">Order</Button>
                </form>
            </div>
        );
    }
}

export default ContactData;