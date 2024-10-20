// pages/contact.js

export default function Contact() {
    return (
      <div className="py-16 bg-gray-100 min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
            {/* <div className="mb-8">
              <h3 className="text-lg font-bold">Contact Details</h3>
              <p className="text-gray-700 mt-2">Phone: <a href="tel:+265990540155" className="text-blue-600">+265990540155</a>, <a href="tel:+265888073002" className="text-blue-600">+265888073002</a></p>
              <p className="text-gray-700">Email: <a href="mailto:frasermsusa@gmail.com" className="text-blue-600">frasermsusa@gmail.com</a></p>
            </div> */}
            <h3 className="text-lg font-bold mb-4">Contact Form</h3>
            <form
              action="#"
              method="post"
              className="space-y-4"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-gray-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
  