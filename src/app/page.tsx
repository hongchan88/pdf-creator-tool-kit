import Link from 'next/link';

const steps = [
  ['Choose your agreement', 'Start with the creative services contract and select Australia or United States.'],
  ['Add your details', 'Enter the service provider, business name and start date. Your preview updates as you type.'],
  ['Review the document', 'Check all five pages. You can optionally save a draft on your device and return later.'],
  ['Print or save as PDF', 'Open your browser print dialog and select Save as PDF to export your document.'],
];

export default function Home() {
  return (
    <div className='min-h-screen bg-slate-900 text-white'>
      <section className='mx-auto max-w-6xl px-6 py-16 sm:py-24'>
        <p className='mb-4 text-blue-300 font-medium'>A simpler document workflow</p>
        <h1 className='max-w-3xl text-4xl sm:text-6xl font-bold leading-tight'>Your next contract, ready to personalize.</h1>
        <p className='max-w-2xl text-lg text-slate-300 mt-6'>Fill in your details, review a live preview and save a creative services contract as PDF. Try the editor without creating an account.</p>
        <Link href='/serviceContract' className='inline-block mt-8 rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4'>Create a contract</Link>
        <p className='mt-4 text-sm text-slate-400'>One editable template · Five-page preview · Browser PDF export</p>
        <ol className='mt-16 grid gap-6 sm:grid-cols-2'>
          {steps.map(([title, description], index) => (
            <li key={title} className='rounded-xl border border-slate-700 bg-slate-800 p-6'>
              <h2 className='text-xl font-semibold'>{index + 1}. {title}</h2>
              <p className='mt-3 text-slate-300'>{description}</p>
            </li>
          ))}
        </ol>
        <p className='mt-8 max-w-2xl text-sm text-slate-400'>Document details stay in memory unless you enable draft saving on this device. Review the template and adapt it to your requirements before use.</p>
      </section>
      <footer className='px-6 py-6 text-center text-sm text-slate-400'>Craftify · Made by Hong</footer>
    </div>
  );
}
