

const Project = () => {
    return (
        <section id="projects" className=" py-16">
          <div className="max-w-4xl mx-auto  text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">My Projects</h2>
            <p className="text-lg text-gray-700 mb-6">
              Here are some of the projects I've worked on:
            </p>
            <div className="">
              {/* Example Project Cards */}
               
<div className="h-[540px]">
<h2 className="text-3xl font-bold text-gray-900  text-center py-10">Projects 1</h2>
  <div className="md:flex gap-20">
    <img
      src="https://i.ibb.co.com/jPdx9VVJ/Screenshot-2025-02-05-112205.png"
      className="md:max-w-sm rounded-lg shadow-2xl" />
    <div className="text-left px-6 mt-5">
      <h1 className="text-4xl font-bold ">Recomify</h1>
      <p className="py-2">
      <h3 className="text-xl font-bold py-2">Feature of Project</h3>
       <ul>
       <li>1.On <strong>My Queries</strong> page, you can view, update, and delete your own queries.</li>
  <li>2.You can recommend queries to others, view your recommendations, and delete them as needed.</li>
  <li>3.All queries are displayed in descending order in a card format on the <strong>Queries</strong> page.</li>
       </ul>
      </p>
      <div className="flex gap-4">
        <a  href='https://github.com/johhny47/product-recommendation-client'> <button className="btn btn-primary">Github</button></a>
      <a href=' https://assignment11-5d0f3.web.app'><button  className="btn btn-primary">Live preview</button></a>
      
      </div>
    
    </div>
  </div>
</div>
 
<div className="h-[650px] mt-10">
<h2 className="text-3xl font-bold text-gray-900  text-center py-16">Projects 2</h2>
  <div className="md:flex gap-20">
    <img
      src="https://i.ibb.co.com/dwFJS1pc/Screenshot-2025-02-05-110447.png"
      className="md:max-w-sm rounded-lg shadow-2xl" />
    <div className="text-left  px-6 mt-5">
      <h1 className="text-4xl font-bold">Sports Zone</h1>
      <p className="py-2">
      <h3 className="text-xl font-bold py-2">Feature of Project</h3>
       <ul>
       <li>1.You can add, update, and delete equipment.</li>
  <li>2.You can view all equipment by clicking <strong>All Sports Equipment</strong>.</li>
  <li>3.You can change the theme of the page.</li>
  <li>4.You can sort all equipment lists by price by clicking the <strong>Sort by Price</strong> button.</li>
       </ul>
      </p>
      <div className="flex gap-4">
        <a href='https://github.com/johhny47/sports-equipment-client'> <button  className="btn btn-primary">Github</button></a>
     <a href='https://assignment10-e2e4f.web.app/myequipment'>  <button  className="btn btn-primary">Live preview</button></a>
    
      </div>
    
    </div>
  </div>
</div>
 
<div className="h-[740px]">
<h2 className="text-3xl font-bold text-gray-900  text-center py-16">Projects 3</h2>
  <div className="md:flex gap-20">
    <img
      src="https://i.ibb.co.com/BD10Fw7/Screenshot-2025-02-05-112728.png"
      className="md:max-w-sm rounded-lg shadow-2xl" />
    <div className="text-left  px-6 mt-5">
      <h1 className="text-4xl font-bold">Resourcer</h1>
      <p className="py-2">
      <h3 className="text-xl font-bold py-2">Feature of Project</h3>
       <ul>
       <li>1.<strong>Registration & Login System:</strong> User authentication.</li>
  <li>2.<strong>Employee Dashboard:</strong> Task management, payment history.</li>
  <li>3.<strong>HR Dashboard:</strong> Employee list management, task progress overview, and salary details.</li>
  <li>4.<strong>Admin Dashboard:</strong> Employee verification, promotion/dismissal, and payroll management.</li>
  <li>5.<strong>Contact Us Page:</strong> Allows users to send feedback.</li>
       </ul>
      </p>
      <div className="flex gap-4">
        <a href="https://github.com/johhny47/Employee-mannagement-client" >  <button className="btn btn-primary">Github</button></a>
    <a href="https://assignment-12-576c4.web.app">  <button  className="btn btn-primary">Live preview</button></a>
    
      </div>
    
    </div>
  </div>
</div>
            </div>
          </div>
        </section>
    );
};

export default Project;