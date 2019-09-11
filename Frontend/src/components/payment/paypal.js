import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

export default class paypal extends React.Component {
    render() {
        const client = {
            sandbox:    'AbqSx8i-kX1D6W2hfNaxJpw0QyoYM_YWp78WuJBHqA2HTfNeoheZDTWR6JNJcCQc3r07hW-tN3cXNqYI',
            production: 'YOUR-PRODUCTION-APP-ID',
        }
        return (
            <PaypalExpressBtn client={client} currency={'USD'} total={1.00} />
        );
    }
}