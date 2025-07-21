import DummyPhoto from "public/judges/DummyPhoto.jpg";
import advaitmaybhatePhoto from "public/judges/advaitmaybhate.png";
import andrewsiahPhoto from "public/judges/andrewsiah.png";
import charleselkanPhoto from "public/judges/charleselkan.jpg";
import charlesfryePhoto from "public/judges/charlesfrye.png";
import jancarbonellPhoto from "public/judges/jancarbonell.jpeg";
import jennyfieldingPhoto from "public/judges/jennyfielding.webp";
import zoeweilPhoto from "public/judges/zoeweil.png";


const members = [
  {
    name: "Advait Maybhate",
    description: "Software Engineer at Warp",
    image: advaitmaybhatePhoto,
  },
  {
    name: "Andrew Siah",
    description: "Machine Learning Research at Columbia University",
    image: andrewsiahPhoto,
  },
  {
    name: "Charles Frye",
    description: "AI Engineer, PhD Berkeley at Modal",
    image: charlesfryePhoto,
  },
  {
    name: "Charles Peter Elkan",
    description: "Computer Science Professor at UCSD",
    image: charleselkanPhoto,
  },
  {
    name: "Jan Carbonell",
    description: "Co-Founder & President at Saturdays.ai",
    image: jancarbonellPhoto,
  },
  {
    name: "Jenny Fielding",
    description: "Managing Partner & Cofounder at Everywhere Ventures",
    image: jennyfieldingPhoto,
  },
  {
    name: "Zoe Weil",
    description: "Staff Applied Scientist at Etsy",
    image: zoeweilPhoto,
  },
];

export default function Judges() {
  return (
    <div id="judges" className="bg-white py-10 sm:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="mt-2 text-3xl sm:text-5xl font-cal font-semibold text-indigo-600">
            Judges
          </h2>
        </div>
        <div className="mt-16 -mx-6 lg:-mx-8">
          <div className="flex flex-wrap justify-center gap-8 px-4">
            {members.map((member) => (
              <div key={member.name} className="flex flex-col items-center text-center">
                <dt className="mb-4 text-xl sm:text-2xl font-bold leading-7 text-gray-900">
                  {member.name}
                </dt>
                <dd className="flex flex-col items-center">
                  <div className="w-[180px] h-[180px] sm:w-[230px] sm:h-[230px] relative rounded-lg overflow-hidden">
                    <img 
                      src={member.image.src} 
                      alt={member.name} 
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="mt-4 flex flex-col gap-1">
                    <p className="text-lg font-medium text-gray-900">
                      {member.description.split(" at ")[0]}
                    </p>
                    <p className="text-lg text-gray-600">
                      {member.description.split(" at ")[1] || ""}
                    </p>
                  </div>
                </dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
