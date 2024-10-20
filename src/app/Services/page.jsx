// components/Services.js
import Image from "next/image";

export default function Services() {
    return (
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Web Services Card */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
  <Image
    src="/images/webservices.jpg"  // Replace with the correct path in your public folder
    alt="Web Services"
    width={400}
    height={250}
    className="w-full h-64 object-cover"  // This will ensure the image covers the area appropriately
  />
  <div className="p-6">
    <h3 className="text-xl font-bold mb-2">Web Services</h3>
    <p className="text-gray-600">Offering comprehensive web development solutions including custom websites, e-commerce, and web applications.</p>
  </div>
</div>
  
            {/* Software Development Card */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
    src="/images/myriam-jessier-eveI7MOcSmw-unsplash.jpg"  // Replace with the correct path in your public folder
    alt="Software Development"
    width={400}
    height={250}
    className="w-full h-64 object-cover"  // This will ensure the image covers the area appropriately
  />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Software Development</h3>
                <p className="text-gray-600">Custom software solutions tailored to your needs, from desktop applications to complex enterprise software.</p>
              </div>
            </div>
  
            {/* IoT Services Card */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
    src="/images/IoT.jpg"  // Replace with the correct path in your public folder
    alt="IoT Services"
    width={400}
    height={250}
    className="w-full h-64 object-cover"  // This will ensure the image covers the area appropriately
  />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">IoT Services</h3>
                <p className="text-gray-600">Innovative IoT solutions for smart devices, automation, and data collection to enhance operational efficiency.</p>
              </div>
            </div>
  
            {/* Data Analysis and AI Card */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
    src="/images/datascience.jpg"  // Replace with the correct path in your public folder
    alt="Data analysis and AI"
    width={400}
    height={250}
    className="w-full h-64 object-cover"  // This will ensure the image covers the area appropriately
  />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Data Analysis and AI</h3>
                <p className="text-gray-600">Advanced data analysis and AI solutions to help you make data-driven decisions and drive business growth.</p>
              </div>
            </div>
  
            {/* Networking Card */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
    src="/images/webservices.jpg"  // Replace with the correct path in your public folder
    alt="Networking"
    width={400}
    height={250}
    className="w-full h-64 object-cover"  // This will ensure the image covers the area appropriately
  />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Networking</h3>
                <p className="text-gray-600">Professional networking services to build and maintain robust and secure network infrastructures.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  