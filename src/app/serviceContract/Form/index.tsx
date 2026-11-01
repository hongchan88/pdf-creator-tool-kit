import React, { useEffect, useState } from 'react';
import { useDataStore } from '../../../stores/dataStore';
import { Button } from '@/components/ui/button';
import { useReactToPrint } from 'react-to-print';
import { documentSamples } from './samples';

const DRAFT_KEY = 'craftify-contract-draft-v1';
const MAX_NAME_LENGTH = 120;

const Form: React.FC = () => {
  const { setData, data, setAgreementCountry, contentRef } = useDataStore();
  const [saveDraft, setSaveDraft] = useState(false);
  const [sampleId, setSampleId] = useState<string>(documentSamples[0].id);
  const [draftReady, setDraftReady] = useState(false);
  const [message, setMessage] = useState('');
  const [showErrors, setShowErrors] = useState(false);
  const print = useReactToPrint({ contentRef, documentTitle: 'Craftify-service-contract' });
  const errors = {
    creativeProfessionalName: !data.creativeProfessionalName.trim() ? 'Enter the service provider name.' : '',
    clientBusinessName: !data.clientBusinessName.trim() ? 'Enter the business name.' : '',
    startDate: !/^\d{4}-\d{2}-\d{2}$/.test(data.startDate) || Number.isNaN(Date.parse(data.startDate)) ? 'Choose a valid start date.' : '',
  };

  useEffect(() => {
    try {
      const raw = localStorage.getItem(DRAFT_KEY);
      if (raw) {
        const draft = JSON.parse(raw);
        if (typeof draft.creativeProfessionalName === 'string' && typeof draft.clientBusinessName === 'string' && typeof draft.startDate === 'string' && (draft.country === 'AU' || draft.country === 'US')) {
          setData('creativeProfessionalName', draft.creativeProfessionalName.slice(0, MAX_NAME_LENGTH));
          setData('clientBusinessName', draft.clientBusinessName.slice(0, MAX_NAME_LENGTH));
          setData('startDate', draft.startDate);
          setAgreementCountry(draft.country, true);
          setSaveDraft(true);
          setMessage('Saved draft restored from this browser.');
        } else {
          localStorage.removeItem(DRAFT_KEY);
          setMessage('The saved draft could not be restored.');
        }
      }
    } catch {
      setMessage('Browser draft storage is unavailable or the saved draft is invalid.');
    }
    setDraftReady(true);
  }, [setData, setAgreementCountry]);

  useEffect(() => {
    if (!draftReady || !saveDraft) return;
    try {
      localStorage.setItem(DRAFT_KEY, JSON.stringify({
        creativeProfessionalName: data.creativeProfessionalName,
        clientBusinessName: data.clientBusinessName,
        startDate: data.startDate,
        country: data.agreementCountry.AU ? 'AU' : 'US',
      }));
    } catch {
      setSaveDraft(false);
      setMessage('Unable to save this draft. Your current edits are still available.');
    }
  }, [data, draftReady, saveDraft]);

  const clearSavedDraft = () => {
    try { localStorage.removeItem(DRAFT_KEY); }
    catch { setMessage('Unable to remove the saved draft. Check your browser storage settings.'); return false; }
    return true;
  };

  return (
    <form className='space-y-6 max-w-md mx-auto p-4 text-black' noValidate onSubmit={(event) => {
      event.preventDefault();
      setShowErrors(true);
      if (Object.values(errors).some(Boolean)) {
        setMessage('Complete the required fields before exporting, or export an unfinished draft.');
        return;
      }
      setMessage('Use your browser print dialog to save as PDF.');
      print();
    }}>
      <h1 className='text-2xl font-bold'>Creative services contract</h1>
      <div className='rounded-lg border border-gray-300 p-3 space-y-3'>
        <label htmlFor='sample-document' className='block text-sm font-medium'>Try fictional sample details</label>
        <select id='sample-document' value={sampleId} onChange={(event) => setSampleId(event.target.value)} className='w-full rounded border border-gray-400 bg-white p-2 text-black'>
          {documentSamples.map((sample) => <option key={sample.id} value={sample.id}>{sample.label}</option>)}
        </select>
        <Button type='button' variant='outline' className='w-full' onClick={() => {
          const sample = documentSamples.find((item) => item.id === sampleId);
          if (!sample) return;
          const hasEdits = data.creativeProfessionalName || data.clientBusinessName || data.startDate;
          if (hasEdits && !window.confirm('Replace your current details with fictional sample data?')) return;
          setData('creativeProfessionalName', sample.creativeProfessionalName);
          setData('clientBusinessName', sample.clientBusinessName);
          setData('startDate', sample.startDate);
          setAgreementCountry(sample.country, true);
          setShowErrors(false);
          setMessage('Fictional sample loaded. Review the preview before exporting.');
        }}>Load sample</Button>
        <p className='text-xs text-gray-700'>Demo data only. These examples do not establish the legal suitability of the template.</p>
      </div>
      <fieldset>
        <legend className='font-medium mb-2'>Agreement country</legend>
        <div className='flex gap-4'>
          {(['AU', 'US'] as const).map((country) => (
            <label key={country} className='flex gap-2 items-center'>
              <input type='radio' name='country' value={country} checked={data.agreementCountry[country]} onChange={() => setAgreementCountry(country, true)} />
              {country === 'AU' ? 'Australia' : 'United States'}
            </label>
          ))}
        </div>
      </fieldset>
      {([
        ['creativeProfessionalName', 'Service provider name', 'text'],
        ['clientBusinessName', 'Business name', 'text'],
        ['startDate', 'Start date', 'date'],
      ] as const).map(([field, label, type]) => (
        <div key={field}>
          <label htmlFor={field} className='block text-sm font-medium mb-1'>{label} (required)</label>
          <input id={field} name={field} type={type} required maxLength={type === 'text' ? MAX_NAME_LENGTH : undefined} value={data[field]} onChange={(event) => setData(field, event.target.value)} aria-invalid={showErrors && Boolean(errors[field])} aria-describedby={showErrors && errors[field] ? `${field}-error` : undefined} className='w-full p-3 border border-gray-400 rounded-md bg-white text-black' />
          {showErrors && errors[field] && <p id={`${field}-error`} className='text-sm text-red-700 mt-1'>{errors[field]}</p>}
        </div>
      ))}
      <label className='flex gap-2 items-start text-sm'>
        <input type='checkbox' checked={saveDraft} disabled={!draftReady} onChange={(event) => {
          if (event.target.checked) { setSaveDraft(true); setMessage('Draft saving enabled on this browser.'); }
          else { setSaveDraft(false); if (clearSavedDraft()) setMessage('Saved draft removed.'); }
        }} />
        Save a draft on this device. Names and dates will remain in this browser until removed; avoid shared devices.
      </label>
      <div className='space-y-3'>
        <Button type='submit' disabled={!contentRef} className='w-full bg-blue-700 text-white'>Print / save completed PDF</Button>
        <Button type='button' variant='outline' disabled={!contentRef} className='w-full' onClick={() => {
          if (window.confirm('This draft may contain blank fields. Continue to the print dialog?')) print();
        }}>Print / save unfinished draft</Button>
        <Button type='button' variant='outline' className='w-full' onClick={() => {
          if (!window.confirm('Clear all document details and the saved draft?')) return;
          setSaveDraft(false);
          setData('creativeProfessionalName', ''); setData('clientBusinessName', ''); setData('startDate', '');
          setAgreementCountry('AU', true); setShowErrors(false);
          if (clearSavedDraft()) setMessage('Document details and saved draft cleared.');
        }}>Reset document</Button>
      </div>
      <p className='text-sm text-gray-700'>PDF saving uses your browser print dialog. Choose “Save as PDF” and review all pages before sharing.</p>
      <p role='status' aria-live='polite' className='text-sm'>{message}</p>
    </form>
  );
};

export default Form;
