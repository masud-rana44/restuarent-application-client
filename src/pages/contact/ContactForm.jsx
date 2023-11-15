import { Container } from "../../components/Container"
import { MyCaptcha } from "../../components/MyCaptcha"
import { SectionHeading } from "../../components/SectionHeading"

export const ContactForm = () => {
  return (
    <Container className='my-20'>
      <SectionHeading title='CONTACT FORM' subtitle='---Send Us a Message---'/>

       <section className="bg-white">
      <div className="py-8 lg:py-4 px-4 mx-auto max-w-screen-md">
        <form action="#" className="space-y-8">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <MyCaptcha/>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-yellow-700 sm:w-fit hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
    </Container>
  )
}
