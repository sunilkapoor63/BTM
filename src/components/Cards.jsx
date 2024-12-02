const Cards = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
       
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <img
            src="/headphone.jpg"
            alt="Feature 1"
            className="w-full h-61 object-cover mb-4 rounded-lg"
          />
        
        </div>

       
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <img
            src="/mouse.jpg"
            alt="Feature 2"
            className="w-full h-61 object-cover mb-4 rounded-lg"
          />
          
        </div>

       
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <img
            src="/shirt.jpg"
            alt="Feature 3"
            className="w-full h-61 object-cover mb-4 rounded-lg"
          />
          
        </div>

       
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <img
            src="/trouser.jpeg"
            alt="Feature 4"
            className="w-full h-61 object-cover mb-4 rounded-lg"
          />
          
        </div>
      </div>
    </section>
  );
};

export default Cards;
