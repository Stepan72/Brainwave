import { notification1 } from "@/assets";
import { notificationImages } from "@/constants";
import Image from "next/image";
import React from "react";

interface NotificationProps {
  title: string;
  className?: string;
}

const Notification = ({ title, className }: NotificationProps) => {
  return (
    <div
      className={`flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5 ${className}`}
    >
      <Image
        src={notification1}
        width={62}
        height={62}
        alt="image"
        className="rounded-xl"
      />

      <div className="flex-1">
        <h6 className="mb-1 font-semibold text-base">{title}</h6>

        <div className="flex items-center justify-between">
          <ul className="flex -m-0.5 gap-2">
            {notificationImages.map((image, index) => {
              return (
                <li
                  key={index}
                  className="flex w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden"
                >
                  <Image
                    src={image}
                    alt="user"
                    className="w-full"
                    width={20}
                    height={20}
                  />
                </li>
              );
            })}
          </ul>

          <p className="body-2 text-n-13">1m ago</p>
        </div>
      </div>
    </div>
  );
};

export default Notification;
