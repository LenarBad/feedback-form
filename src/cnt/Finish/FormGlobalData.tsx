import React from 'react';

let send = false;

/**
 * form global data
 */
export default function FormGlobalData({globalData: data}: { globalData: any; }) {
    React.useEffect(() => {
        setTimeout(() => {
            if (send) {
                return;
            }

            send = true;

            const elem = document.getElementById('form-global-data');
            if (!elem) {
                return;
            }

            (elem as HTMLFormElement).submit();
        }, 1000);
    }, []);

    return (
        <form
            action="https://here_need_past_link.ed"
            method="POST"
            id="form-global-data"
            style={{ display: 'none', }}
        >
            <input name="_site" type="hidden" value="feedback-form" required />
            <input name="_form" type="hidden" value="feedback Form" required />

            <input
                name="_error-page-redirect"
                type="hidden"
                value={`${window.location.host}/sending-error`}
                required
            />
            <input
                name="_success-page-redirect"
                type="hidden"
                value={`${window.location.host}/sending-success`}
                required
            />

            <input name="product" type="hidden" required value={data[0].values.product}/>
            <input name="datePurchase" type="hidden" required value={new Date(data[0].values.datePurchase).toISOString()}/>
            <input name="rating" type="hidden" required value={data[0].values.rating}/>
            <input name="wasUsed" type="hidden" required value={data[0].values.wasUsed}/>

            <input name="firstName" type="hidden" required value={data[1].values.first}/>
            <input name="lastName" type="hidden" required value={data[1].values.last}/>
            <input name="orderNumber" type="hidden" required value={data[1].values.orderNumber}/>
            <input name="email" type="hidden" required value={data[1].values.email}/>
            <input name="street" type="hidden" required value={data[1].values.street}/>
            <input name="city" type="hidden" required value={data[1].values.city}/>
            <input name="zipCode" type="hidden" required value={data[1].values.zipCode}/>
            <input name="usaState" type="hidden" required value={data[1].values.usaState}/>
            <input name="consentToSpecialOffer" type="hidden" required value={data[1].values.consentToSpecialOffer}/>

            <input name="freeProduct" type="hidden" required value={data[2].values.freeProduct}/>
            <input name="reviewText" type="hidden" required value={data[2].values.reviewText}/>
        </form>
    );
}
