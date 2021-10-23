import React from 'react';
import { useForm } from 'react-hook-form';
import './Shipping.css'
import Useauth from './../Hooks/UseAuth';

const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = Useauth();
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div className="Shipping-info">
            <form className="Shipping-form" onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue={user.displayName} {...register("example")} />
                <input defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span>This field is required</span>}

                <input placeholder="Adress" {...register("Adress",)} />
                <input placeholder="City" {...register("City",)} />
                <input placeholder="Phone number" {...register("phone number",)} />



                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;