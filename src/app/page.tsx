'use client';
import Image from 'next/image';
import styles from './styles.module.scss';
import { FlipWords } from '@/components/ui/flip-words';

export default function Home() {
  const features = [
    {
      title: 'Stage 1: Upload Your PDF',
      description:
        'Easily upload your existing PDF to get started. Whether it’s a proposal, report, or contract, Craftify supports all your business document needs.',
      color: 'bg-purple-800',
    },
    {
      title: 'Stage 2: Provide Customization Details',
      description:
        "Give us all the details of the text you’d like to customize, such as company names, length of contract period, logos, certifications, or other specific elements. We'll build your tailored PDF on our platform, and it will be ready for you on your account in a few days.",
      color: 'bg-green-800',
    },

    {
      title: 'Stage 3: Tailor for Your Clients',
      description:
        'Once your document is set up, Craftify enables you to quickly personalize each PDF for individual clients. Let your sales team take over, effortlessly creating customized documents on demand.',
      color: 'bg-orange-800',
    },
    {
      title: 'Stage 4: Export & Use Instantly',
      description:
        'Once the customization is complete, instantly export your tailored PDF. Save time and boost efficiency by generating professional documents in seconds.',
      color: 'bg-red-800',
    },
  ];

  const testimonials = [
    {
      name: 'Tina',
      title: 'Masters in Teaching',
      content:
        'Craftify has completely transformed how our sales team operates. We used to spend hours manually customizing PDFs for each client. Now, with Craftify, the process is seamless and efficient. Uploading, customizing, and exporting documents is a breeze, and the platform is incredibly user-friendly. Our team can now focus more on building relationships with clients rather than getting bogged down with admin tasks. It’s a game-changer for our workflow!',
      avatar: '/path/to/tina-avatar.png',
    },
    {
      name: 'Kevin',
      title: 'Bachelor in Physiotherapy',
      content:
        'As a small business owner, I struggled to create professional-looking proposals that could be tailored for different clients. Craftify made it so easy! I uploaded my existing PDFs, provided the customization details, and within days, I had a ready-to-use system. Now, I can generate personalized, high-quality documents in seconds. It’s saved me so much time and helped me leave a great impression with my clients!',
      avatar: '/path/to/kevin-avatar.png',
    },
  ];
  const words = [
    'Easy Customization',
    'Empower Your Sales Team',
    'Easy Customization',
  ];

  return (
    <div className=' bg-transparent text-white min-h-screen'>
      <main>
        <section className='text-center py-12 sm:py-20'>
          <h1 className='text-4xl sm:text-6xl font-bold mb-4'>
            <FlipWords words={words} /> <br />
          </h1>
          <p className='text-lg sm:text-xl mb-8'>
            Take control of your PDF creation process—upload, customize, and
            export with ease.
            <br className='hidden sm:inline' />
            Let your team focus on what they do best, while you handle the
            customization seamlessly.
          </p>
          <div className='container mx-auto px-4'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`${feature.color} p-4 rounded-lg flex flex-col gap-10`}
                >
                  <h3 className='font-bold text-3xl h-16'>{feature.title}</h3>
                  <p className='text-sm'>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* <section className='py-12 sm:py-20'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-8 text-center'>
            Testimonies
          </h2>
          <div className='container mx-auto px-4'>
            <div className='grid gap-8 sm:grid-cols-2'>
              {testimonials.map((testimonial, index) => (
                <div key={index} className='bg-gray-800 p-6 rounded-lg'>
                  <div className='flex items-center mb-4'>
                    <Image
                      src={testimonial.avatar}
                      alt={`${testimonial.name}'s avatar`}
                      width={64}
                      height={64}
                      className='rounded-full mr-4'
                    />
                    <div>
                      <h3 className='font-bold'>{testimonial.name}</h3>
                      <p className='text-sm text-gray-400'>
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                  <p className='text-sm'>{testimonial.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section> */}
      </main>

      <footer className='text-center py-4 text-sm text-gray-500'>
        Made with ❤️ by Hong
      </footer>
    </div>
  );
}
