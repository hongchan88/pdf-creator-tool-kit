import Image from 'next/image';
import styles from './styles.module.scss';


export default function Home() {
  const features = [
    { title: 'Open Source', description: 'The power of OSS', color: 'bg-purple-800' },
    { title: 'Blazingly fast', description: 'Document at the speed of thought', color: 'bg-green-800' },
    { title: 'Organized', description: 'Everything, in one place, as it should be', color: 'bg-orange-800' },
    { title: 'Free Forever*', description: '* maybe for like, $3', color: 'bg-red-800' },
  ];

  const testimonials = [
    {
      name: 'Tina',
      title: 'Masters in Teaching',
      content: "Love it, been using it for university and it's a life saver. I really like how the annotations for the PDF's are stacked next to each other. It saves so much time!",
      avatar: '/path/to/tina-avatar.png',
    },
    {
      name: 'Kevin',
      title: 'Bachelor in Physiotherapy',
      content: "It's not Microsoft Word, but slowly the features are getting there! I like how it's all free and kinda works???",
      avatar: '/path/to/kevin-avatar.png',
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <main>
        <section className="text-center py-12 sm:py-20">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">
            Read.<br />
            Think.<br />
            Write.
          </h1>
          <p className="text-lg sm:text-xl mb-8">
            Higher helps you make progress on that research<br className="hidden sm:inline" />
            when you don't want to.
          </p>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {features.map((feature, index) => (
                <div key={index} className={`${feature.color} p-4 rounded-lg`}>
                  <h3 className="font-bold">{feature.title}</h3>
                  <p className="text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Testimonies</h2>
          <div className="container mx-auto px-4">
            <div className="grid gap-8 sm:grid-cols-2">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.avatar}
                      alt={`${testimonial.name}'s avatar`}
                      width={64}
                      height={64}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-400">{testimonial.title}</p>
                    </div>
                  </div>
                  <p className="text-sm">{testimonial.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="text-center py-4 text-sm text-gray-500">
        Made with ❤️ by kndwin
      </footer>
    </div>
  );
}
