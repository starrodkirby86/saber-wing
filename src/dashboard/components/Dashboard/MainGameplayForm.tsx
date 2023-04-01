import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

export interface MainGameplayFormProps {
    handleGameplaySubmit: (data: any) => void;
}

type FormValues = {
    player1: string;
    player2: string;
    player1Wins: string;
    player2Wins: string;
}

const MainGameplayForm = ({ handleGameplaySubmit }: MainGameplayFormProps) => {
    const { register, handleSubmit } = useForm<FormValues>();

const onSubmit: SubmitHandler<FormValues> = (data) => {
    handleGameplaySubmit(data);
};

return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="input-field">Player 1:</label>
        <input
            className="mb-1 ml-2 p-1 border rounded-md shadow-sm mr-3"
            type="text"
            id="input-field"
            {...register("player1")}
        />
        <label htmlFor="input-field">P1 Win Count:</label>
        <input
            className="mb-1 ml-2 p-1 border rounded-md shadow-sm mr-3"
            type="text"
            id="input-field"
            {...register("player1Wins")}
        />
        <label htmlFor="input-field">Player 2:</label>
        <input
            className="mb-1 ml-2 p-1 border rounded-md shadow-sm mr-3"
            type="text"
            id="input-field"
            {...register("player2")}
        />
        
        <label htmlFor="input-field">P2 Win Count:</label>
        <input
            className="mb-1 ml-2 p-1 border rounded-md shadow-sm mr-3"
            type="text"
            id="input-field"
            {...register("player2Wins")}
        />
        <button className="rounded-md px-7 py-2 bg-green-700 text-white" type="submit">Submit</button>
    </form>
);
}

export default MainGameplayForm;