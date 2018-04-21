import React, { Component } from 'react';
import ContactsConstants from '../../../../shared/constants/footer/ContactsConstants'

export default class Contacts extends Component {
    render() {
        let contacts = ContactsConstants.contacts.map((contact, contactIndex) => {
            let phones = contact.phones.map((phone, phoneIndex) => (
                <div key={phoneIndex}>
                    {phone}
                </div>
            ))
            return (
                <div key={contactIndex} className="col-lg-12 no-padding">
                    <div>
                        {contact.country}
                    </div>
                    <div>
                        {contact.town}
                    </div>
                    <div>
                        {contact.address}
                    </div>
                    <div>
                        {contact.address2}
                    </div>
                    <hr />
                    {phones}
                    <div>
                        {contact.email}
                    </div>
                    <br />
                </div>
            )
        });

        return (
            <div>
                <h4>
                    <strong>
                        {ContactsConstants.title}
                    </strong>
                </h4>
                <div className="row">
                    {contacts}
                </div>
            </div>
        );
    }
}
