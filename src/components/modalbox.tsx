import Image from 'next/image';
import React from 'react';
import ChatInGroup from '../../public/aboutus.png';

const Modal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50 ">
      <div className="bg-white w-[85%] max-w-md p-6 rounded-lg shadow-lg overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-[#a8b720]">About This Glimpshot</h2>
          <button onClick={onClose} className="text-[#a8b720] hover:text-[#717b17] focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
    <path fill="currentColor" d="m12 12.708l3.246 3.246q.14.14.344.15q.204.01.364-.15t.16-.354q0-.194-.16-.354L12.708 12l3.246-3.246q.14-.14.15-.344q.01-.204-.15-.364t-.354-.16q-.194 0-.354.16L12 11.292L8.754 8.046q-.14-.14-.344-.15q-.204-.01-.364.15t-.16.354q0 .194.16.354L11.292 12l-3.246 3.246q-.14.14-.15.344q-.01.204.15.364t.354.16q.194 0 .354-.16L12 12.708ZM12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924q-1.216-1.214-1.925-2.856Q3 13.87 3 12.003q0-1.866.708-3.51q.709-1.643 1.924-2.859q1.214-1.216 2.856-1.925Q10.13 3 11.997 3q1.866 0 3.51.708q1.643.709 2.859 1.924q1.216 1.214 1.925 2.856Q21 10.13 21 11.997q0 1.866-.708 3.51q-.709 1.643-1.924 2.859q-1.214 1.216-2.856 1.925Q13.87 21 12.003 21Z"/>
</svg>
          </button>
        </div>
        <div className="text-sm text-gray-700">
          <div className="w-full sm:w-full sm:max-w-full">
            <div className="w-full sm:h-72">
              <Image src={ChatInGroup} alt="App Image" layout="responsive" className="w-full h-full rounded-lg mb-4" />
            </div>
          </div>
          <p>Welcome to Glimpshot built with <strong>Next.js</strong>, <strong>framer-motion</strong>, <strong>Tailwind CSS</strong>, <strong>MongoDB</strong>, <strong>IconBuddy</strong>, <strong>Multiavatar</strong>, <strong>Culrs</strong>, and <strong>Vercel</strong>.</p>
          <p className="mt-4"><strong>Users can:</strong></p>
          <ul className="list-disc list-inside pl-4 mt-2">
  <li>Watch Short Videos </li>
  <li>Pause videos by clicking on them</li>
  <li>Can Like or Dislike videos (unlimited times)</li>
  <li>Live Count of likes and dislikes</li>
</ul>

<p className="mt-4">All videos are friendly; anyone can watch them. There are around <strong>52 short videos.</strong></p>
<p className="mt-4">The name <strong>Glimpshot</strong> was chosen randomly; it sounded cool to me hehe. <br/><br/>If you enjoy it, <strong>share with your friends and show your support.</strong></p>

        </div>
      </div>
    </div>
  );
};

export default Modal;
