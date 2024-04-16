import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
          inventore nihil officia totam aperiam dicta ea? Dolores corporis
          quibusdam, perferendis aperiam earum ratione? Consequatur et
          excepturi, accusantium eos totam aliquid?
        </p>

        <br />

        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A laborum,
          voluptatum mollitia dicta, nihil unde deserunt consequuntur quos rem
          quae earum nam architecto natus commodi soluta dolor deleniti corporis
          veniam, eum quod! Distinctio iure, fuga magnam, animi libero
          consectetur nesciunt odio quis, odit enim omnis ipsam doloremque hic
          totam veniam!
        </p>
      </div>
    </div>
  );
};

export default About;
