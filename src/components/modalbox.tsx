import Image from 'next/image';
import React from 'react';
import ChatInGroup from '../../public/aboutus.png';

const Modal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">About This Glimpshot</h2>
          <button onClick={onClose} className="text-[#abb836] hover:text-[#717b17] focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
              <path fill="currentColor" d="m8.4 17l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4l3.6 3.6L7 15.6L8.4 17Zm3.6 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z" />
            </svg>
          </button>
        </div>
        <div className="text-sm text-gray-700">
          <div className="w-full h-72 sm:h-auto sm:max-h-full">
            <Image src={ChatInGroup} alt="App Image" layout="responsive" className="w-full h-full rounded-lg mb-4" />
          </div>
          <p>Welcome to the Glimpshot built with <strong>Next.js</strong>, <strong>framer-motion</strong>, <strong>Tailwind CSS</strong>, <strong>MongoDB</strong>, <strong>Multiavatar</strong>, <strong>Culrs</strong>, and <strong>Vercel</strong>.</p>
          <p className="mt-4"><strong>Users can:</strong></p>
          <ul className="list-disc list-inside pl-4 mt-2">
            <li>Watch Short Videos</li>
            <li>Can Pause by click on video</li>
            <li>Can Like or Dislike Video</li>
          </ul>
          <p className="mt-4"><strong>All Videos are friendly Anyone can watch it </strong> and there is around 54 short videos.</p>
          <p className="mt-4"><strong>Glimpshot</strong> Name just random nothing behind of it, I found it cool and <strong>If you really enjoy this so share with your friends and show your support as well.</strong></p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
