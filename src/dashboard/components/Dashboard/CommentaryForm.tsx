import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

export interface CommentaryFormProps {
    handleCommentarySubmit: (data: any) => void;
}

type FormValues = {
    commentatorA: string;
    commentatorAHandle: string;
    commentatorB: string;
    commentatorBHandle: string;
}

const CommentaryForm = ({ handleCommentarySubmit }: CommentaryFormProps) => {
    const { register, handleSubmit } = useForm<FormValues>();

const onSubmit: SubmitHandler<FormValues> = (data) => {
    handleCommentarySubmit(data);
};

return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="input-field">Left Commentator:</label>
        <input
            className="mb-1 ml-2 p-1 border rounded-md shadow-sm mr-3"
            type="text"
            id="input-field"
            {...register("commentatorA")}
        />
        <label htmlFor="input-field">Handle:</label>
        <input
            className="mb-1 ml-2 p-1 border rounded-md shadow-sm mr-3"
            type="text"
            id="input-field"
            {...register("commentatorAHandle")}
        />
        <label htmlFor="input-field">Right Commentator:</label>
        <input
            className="mb-1 ml-2 p-1 border rounded-md shadow-sm mr-3"
            type="text"
            id="input-field"
            {...register("commentatorB")}
        />
        
        <label htmlFor="input-field">Handle:</label>
        <input
            className="mb-1 ml-2 p-1 border rounded-md shadow-sm mr-3"
            type="text"
            id="input-field"
            {...register("commentatorBHandle")}
        />
        <button className="
  bg-pink-500 
  hover:bg-pink-700 
  text-white 
  font-bold 
  py-2 
  px-4 
  rounded 
  focus:outline-none 
  focus:shadow-outline 
  transform 
  transition 
  duration-500 
  ease-in-out 
  hover:-translate-y-1 
  hover:scale-110
" type="submit">Submit</button>
    </form>
);
}

export default CommentaryForm;