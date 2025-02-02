import DummyPhoto from "public/judges/DummyPhoto.jpg";
import advaitmaybhatePhoto from "public/judges/advaitmaybhate.png";
import andrewsiahPhoto from "public/judges/andrewsiah.png";
import charleselkanPhoto from "public/judges/charleselkan.jpg";
import charlesfryePhoto from "public/judges/charlesfrye.jpeg";
import jennyfieldingPhoto from "public/judges/jennyfielding.webp";
import zoeweilPhoto from "public/judges/zoeweil.png";


const members = [
  {
    name: "Charles Peter Elkan",
    description: "Computer Science Professor at UCSD",
    image: charleselkanPhoto,
  },
  {
    name: "Jenny Fielding",
    description: "Managing Partner & Cofounder at Everywhere Ventures",
    image: jennyfieldingPhoto,
  },
  {
    name: "Andrew Siah",
    description: "Machine Learning Research at Columbia University",
    image: andrewsiahPhoto,
  },
  // {
  //   name: "Patrick Zhang",
  //   description: "CTO at Passes.com",
  //   image: DummyPhoto,
  // },
  {
    name: "Charles Frye",
    description: "Neuroscience PhD UC Berkeley, AI Engineer at Modal",
    image: charlesfryePhoto,
  },
  {
    name: "Advait Maybhate",
    description: "Software Engineer at Warp",
    image: advaitmaybhatePhoto,
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
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {members.map((member) => (
              <div key={member.name} className="flex flex-col items-center text-center">
                <dt className="mb-4 text-xl sm:text-2xl font-bold leading-7 text-gray-900">
                  {member.name}
                </dt>
                <dd className="flex flex-col items-center">
                  <div className="w-[230px] h-[230px] relative rounded-lg overflow-hidden">
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
                      {member.description.split(" at ")[1]}
                    </p>
                  </div>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
