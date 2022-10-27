import React, { useState } from "react";
import { useCheckoutForm } from "./context/FormProvider";
import { Label, Input, Form } from "../styledComponents/Forms";
import Address from "./Address";

const CheckoutForm = () => {
  const { security, card,exp } = useCheckoutForm().form;
  const { form, dispatch } = useCheckoutForm();
  const [check, setCheck] = useState(false);

  const change = (e) => {
    const { name, value } = e.target;
    dispatch(name, value);
  };
  const submit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  const checkbox = (e) => {
    setCheck(!check);
  };
  return (
    <Form onSubmit={submit}>
      <fieldset>
        <legend>Shipping Information</legend>
        <Address type="shipping" />
      </fieldset>

      <fieldset>
        <legend>Billing Information</legend>
        <div className="checkbox">
          <input type="checkbox" onChange={checkbox} />
          <label>
            Check this box if billing and shipping information are the same
          </label>
        </div>
        <div className="triple">
          <div>
            <Label>Card Number</Label>
            <Input
              type="text"
              name="card"
              onChange={change}
              placeholder="xxxx xxxx xxxx xxxx "
              value={card}
            />
          </div>
          <div>
            <Label>Exp. </Label>
            <Input
              type="text"
              name="exp"
              onChange={change}
              placeholder="xx/xx "
              value={exp}
            />
          </div>
          <div>
            <Label>Security Code</Label>
            <Input
              type="text"
              name="security"
              onChange={change}
              placeholder="xxx"
              value={security}
            />
          </div>
        </div>
        {!check && <Address type="billing" />}
      </fieldset>
    </Form>
  );
};

export default CheckoutForm;
