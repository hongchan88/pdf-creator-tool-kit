import React, { useState } from 'react';
import { useProposalStore } from '../../../stores/proposalStore';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Form: React.FC = () => {
  const { setData, data, setAgreementCountry } = useProposalStore();
  const [isAUAgreement, setIsAUAgreement] = useState(true);

  return (
    <div className='space-y-6 max-w-md mx-auto p-4'>
      <h1 className='text-3xl font-bold text-center mb-8 text-black'>
        CREATIVE SERVICES CONTRACT
      </h1>

      <div className='flex justify-center space-x-4 mb-8'>
        <Button
          variant={data.agreementCountry.AU ? 'default' : 'outline'}
          onClick={() => setAgreementCountry('AU', true)}
          className={cn(
            'rounded-full',
            data.agreementCountry.AU
              ? 'bg-blue-500 text-white'
              : 'bg-white text-black'
          )}
        >
          AU AGREEMENT
        </Button>
        <Button
          variant={data.agreementCountry.US ? 'default' : 'outline'}
          onClick={() => setAgreementCountry('US', true)}
          className={cn(
            'rounded-full',
            data.agreementCountry.US
              ? 'bg-blue-500 text-white'
              : 'bg-white text-black'
          )}
        >
          US AGREEMENT
        </Button>
      </div>

      <div className='space-y-6'>
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Creative Professional Name (PAGE 2 & 4)
          </label>
          <input
            type='text'
            className='w-full p-3 border border-gray-300 rounded-md bg-gray-100 text-black placeholder:text-gray-500'
            value={data.creativeProfessionalName}
            onChange={(e) =>
              setData('creativeProfessionalName', e.target.value)
            }
            placeholder='Creative Professional Name'
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Business Name (PAGE 2 & 4)
          </label>
          <input
            type='text'
            className='w-full p-3 border border-gray-300 rounded-md bg-gray-100'
            value={data.clientBusinessName}
            onChange={(e) => {
              setData('clientBusinessName', e.target.value);
            }}
            placeholder='Client Business Name'
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Start Date (PAGE 2)
          </label>
          <input
            type='text'
            className='w-full p-3 border border-gray-300 rounded-md bg-gray-100'
            value={data.startDate}
            onChange={(e) => {
              setData('startDate', e.target.value);
            }}
            placeholder='30 OCT 2024'
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
