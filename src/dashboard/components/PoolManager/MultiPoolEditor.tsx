import React, { useEffect, useState } from 'react';
import { Pool } from '../../../common/types';
import { useForm, useFieldArray } from 'react-hook-form';
import MultiPoolEditorSelect from './MultiPoolEditorSelect';

export interface MultiPoolEditorProps {
  pools: Pool[];
  submitHandler: (data: MultiPoolEditorFormInput, currentPoolIndex: number) => void;
}

export type MultiPoolEditorFormInput = {
  pool: {
    name: string;
    wins: number;
  }[];
};

const MultiPoolEditor = ({ pools, submitHandler }: MultiPoolEditorProps) => {
  const [currentPoolIndex, setCurrentPoolIndex] = useState(0);
  const [currentPool, setCurrentPool] = useState(pools[0]);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<MultiPoolEditorFormInput>({
    defaultValues: {
      pool: currentPool.map(({ player, wins }) => ({ name: player.name, wins })),
    },
  });
  
  const { fields, append, remove } = useFieldArray({
    name: 'pool',
    control,
  });

  useEffect(() => {
    const newCurrentPool = pools[currentPoolIndex];
    setCurrentPool(newCurrentPool);
    reset({
      pool: newCurrentPool.map(({ player, wins }) => ({ name: player.name, wins })),
    })
  }, [currentPoolIndex]);


  const onSubmit = (data: MultiPoolEditorFormInput) => submitHandler(data, currentPoolIndex);
  return (<>
    <div className="bg-blue-700 px-4 py-2 flex items-center rounded-t-lg">
      <h1 className="font-bold text-xl text-white">Group Pools Editor</h1>
    </div>
    <div className='border rounded-b-md p-2 bg-white'>
      <div>
        <div className='text-xs text-slate-500'>
          Current Pool
        </div>
        <MultiPoolEditorSelect poolLength={pools.length} currentValue={currentPoolIndex.toString()} selectHandler={(value) => setCurrentPoolIndex(parseInt(value))} />
      </div>
      <br />
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
                        step='0.5'
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
        <button className='rounded-md px-7 py-2 bg-blue-700 text-white' type='submit'>
          Submit
        </button>
      </form>
    </div>
  </>
  );
};

export default MultiPoolEditor;
