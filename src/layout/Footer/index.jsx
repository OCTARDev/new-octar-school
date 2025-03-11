import Image from "next/image";
import logo from "../../assets/logo.svg";

export default function Footer(){
    return (
      <footer className="bg-gradient-primary text-white py-10 mt-auto capitalize">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* first column : logo */}
            <div className="flex flex-col justify-end">
                <div className="">
                    <Image src={logo} alt={"logo"} className="w-18 h-18"/>
                <h3 className="text-lg font-bold uppercase">OCTAR School</h3>
                </div>
              <p>We are an educational platform that makes learning engaging and exciting for students.</p>
            </div>
            {/* second column : support */}
            <div className="flex flex-col justify-end">
              <h3 className="text-lg font-semibold">Support</h3>
              <ul>
                <li><a href="#" className="hover:underline">Help Center</a></li>
                <li><a href="#" className="hover:underline">Safety Center</a></li>
                <li><a href="#" className="hover:underline">Community Guidelines</a></li>
              </ul>
            </div>
            {/* third column : legal */}
            <div className="flex flex-col justify-end ">
              <h3 className="text-lg font-semibold">Legal</h3>
              <ul>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Terms of Service</a></li>
                <li><a href="#" className="hover:underline">Cookie Policy</a></li>
              </ul>
            </div>
            {/* fourth column : follow us */}
            <div className="flex flex-col justify-end">
              <h3 className="text-lg font-semibold">meet us</h3>
              <ul className=" flex flex-col">
                <li href="#" className="hover:text-gray-400">+1 (202) 860-8888</li>
                <a href="#" className="hover:text-gray-400">info@OCTAR.com</a>
                <a href="#" className="hover:text-gray-400">205. Cairo, Egypt BD23200</a>
              </ul>
            </div>
          </div>
          {/* under footer copy rights */}
          <div className="mt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} OCTAR SCHOOL. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
 Footer;
  