import React from 'react';
import { Pool } from '../../../common/types';
import { useForm, useFieldArray } from 'react-hook-form';

export interface PoolsEditorProps {
  pool: Pool;
  submitHandler: (data: PoolEditorFormInput) => void;
}

export type PoolEditorFormInput = {
  pool: {
    name: string;
    wins: number;
  }[];
};

const PoolsEditor = ({ pool, submitHandler }: PoolsEditorProps) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<PoolEditorFormInput>({
    defaultValues: {
      pool: pool.map(({ player, wins }) => ({ name: player.name, wins })),
    },
  });
  const { fields, append, remove } = useFieldArray({
    name: 'pool',
    control,
  });
  const onSubmit = (data: PoolEditorFormInput) => submitHandler(data);
  return (
    <div className='border rounded-md p-2'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          {fields.map((field, index) => {
            return (
              <div className='grid grid-cols-3' key={`${field.id}-${index}-pool-node`}>
                <div
                  className='col-span-2'
                  key={`${field.id}-${index}-pool-editor-node`}
                >
                  <label className='text-xs text-slate-500'>
                    Player {index + 1}
                  </label>
                  <div className='mb-1 p-1 border rounded-md'>
                    <input
                      placeholder='name'
                      {...register(`pool.${index}.name` as const, {
                        required: true,
                      })}
                      className={
                        errors?.pool?.[index]?.name ? 'error w-full' : 'w-full'
                      }
                    />
                  </div>
                </div>
                <div
                  className='col-span-1'
                  key={`${field.id}-${index}-pool-wins-editor-node`}
                >
                  <div>
                    <label className='text-xs text-slate-500'>Wins</label>
                    <div className='mb-1 p-1 border rounded-md'>
                      <input
                        placeholder='Wins'
                        type='number'
                        {...register(`pool.${index}.wins` as const, {
                          valueAsNumber: true,
                          required: true,
                        })}
                        className={errors?.pool?.[index]?.wins ? 'error' : ''}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <br />
        <button className='rounded-md p-2 bg-blue-700 text-white' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default PoolsEditor;
