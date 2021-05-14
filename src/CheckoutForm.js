import { useState } from "react";

export default function CheckoutForm() {
    const [name, setName] = useState("");
    const [card, setCard] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");

    const nameChanged = (e) => {
        setName(e.target.value);
    };

    const cardChanged = (e) => {
        setCard(e.target.value);
    };

    const monthChanged = (e) => {
        setMonth(e.target.value);
    };

    const yearChanged = (e) => {
        setYear(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        // postStuff({
        //     name: name,
        //     email: email,
        // });
    };
    return (
        <section className="CheckoutForm">
            <form onSubmit={onSubmit}>
                <div className="form_group">
                    <label htmlFor="name">Name</label>
                    <input type="text" onChange={nameChanged} name="name" value={name} />
                </div>
                <div className="form_group">
                    <label htmlFor="card">Creditcard</label>
                    <input type="tel" onChange={cardChanged} name="card" value={card} maxLength="19" minLength="19" placeholder="xxxx xxxx xxxx xxxx" pattern="[0-9\s]{13,19}" />
                </div>
                <div className="form_group">
                    <span className="expiration">
                        <label htmlFor="expiration">Expiration</label>
                        <input type="text" onChange={monthChanged} name="expiration" value={month} placeholder="MM" maxLength="2" size="2" />
                        <span>/</span>
                        <input type="text" onChange={yearChanged} name="expiration" value={year} placeholder="YY" maxLength="2" size="2" />
                    </span>
                </div>
                <input type="submit" value="Send" />
            </form>
        </section>
    );
}