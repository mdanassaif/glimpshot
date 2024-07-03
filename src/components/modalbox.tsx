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
              <path fill="currentColor" d="m11.292 12l-2.246 2.246q-.14.14-.15.344q-.01.204.15.364t.354.16q.194 0 .354-.16L12 12.708l2.246 2.246q.14.14.344.15q.204.01.364-.15t.16-.354q0-.194-.16-.354L12.708 12l2.246-2.246q.14-.14.15-.344q.01-.204-.15-.364t-.354-.16q-.194 0-.354.16L12 11.292L9.754 9.046q-.14-.14-.344-.15q-.204-.01-.364.15t-.16.354q0 .194.16.354L11.292 12Zm-6.677 7q-.69 0-1.152-.462Q3 18.075 3 17.385V6.615q0-.69.463-1.152Q3.925 5 4.615 5h14.77q.69 0 1.152.463q.463.462.463 1.152v10.77q0 .69-.462 1.152q-.463.463-1.153.463H4.615Z"/>
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
            <li>Watch Short Videos</li>
            <li>Pause videos by clicking on them</li>
            <li>Can Like or Dislike videos</li>
            <li>Live Count of like and dislike</li>
          </ul>
          <p className="mt-4"> All videos are friendly; anyone can watch them. There are around  <strong>52 short videos.</strong></p>
          <p className="mt-4"> The name <strong>Glimpshot</strong>  was chosen randomly; it sounded cool to me. If you enjoy it, <strong>share with your friends and show your support! </strong> </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
