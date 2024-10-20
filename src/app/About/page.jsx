// pages/about.js
import Image from "next/image";

export default function About() {
    return (
      <div className="py-16 bg-gray-100 min-h-screen">
        <div className="container mx-auto px-4">
          {/* About eByte Section */}
          <section className="mb-16">
            <h1 className="text-3xl font-bold mb-4">About eByte</h1>
            <p className="text-lg text-gray-700">
              eByte is dedicated to providing cutting-edge solutions and innovative technologies to help businesses and individuals achieve their goals. Our mission is to drive digital transformation and make technology accessible and beneficial for everyone in Malawi.
            </p>
          </section>
  
          {/* Our Team Section */}
          <section>
            <h2 className="text-2xl font-bold mb-8">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team Member Card */}

        <div className="bg-white p-4 rounded-lg shadow-md">
          <Image
            src="/images/Fraser.jpg"  // Adjust the path accordingly
            alt="Team Member"
            width={300}
            height={300}  // You can adjust this based on your layout preference
            className="w-full object-contain rounded-t-sm mb-4"  // Use object-contain without fixed height
          />
          <h3 className="text-lg font-bold mb-1">Fraser Msusa</h3>
          <p className="text-sm text-gray-600">Electronics and Telecommunications Engineer</p>
          <p className="text-gray-700 mt-2">
            Fraser is a highly skilled engineer with extensive experience in the electronics and telecommunications field. He is proficient in web and mobile development, having created projects such as the Malawi Catholic Hymn book, a smart car park monitoring system, a premature baby monitoring system, an electricity bill prediction app, and more.
          </p>
        </div>
  
              {/* Add more team member cards as needed */}
              <div className="bg-white p-4 rounded-lg shadow-md">
              <Image
            src="/images/Getrude.jpg"  // Adjust the path accordingly
            alt="Team Member"
            width={300}
            height={300}  // You can adjust this based on your layout preference
            className="w-full object-contain rounded-t-sm mb-4"  // Use object-contain without fixed height
          />
                <h3 className="text-lg font-bold mb-1">Getrude Ng'oma</h3>
                <p className="text-sm text-gray-600">Biomedical Engineer</p>
                <p className="text-gray-700 mt-2">
                  Gertrude is an expert in biomedical engineering field. She has was an intern at Malawi University of business and Applied Science design studio where should focused more on building different technologies using IoT. She is currently working with Mechro as an AI engineering intern.
                </p>
              </div>
  
              {/* Add more team member cards as needed */}
            </div>
          </section>
        </div>
      </div>
    );
  }
  