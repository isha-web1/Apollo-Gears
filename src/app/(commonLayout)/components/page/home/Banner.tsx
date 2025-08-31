"use client";
import { Button, Card, CardBody } from "@heroui/react";
import BannerButton from "./BannerButton";
import MotionCar from "./MotionCar";
export default function Banner() {
  return (
    <Card className="py-4 flex" shadow="none">
      <CardBody className="overflow-visible py-2 ">
        <div className="flex items-center justify-between">
          <div className="w-2/5">
            <h1 className="text-6xl font-bold mb-2 text-default-900">
              Explore the Finest <span className="text-red-500">Global</span>{" "}
              Offers
            </h1>
            <h4 className=" text-xl text-gray-500 my-4">
              Find your ideal ride for any adventure with our diverse range of
              affordable and dependable car rentals
            </h4>
            <div>
              <Button color="primary" variant="bordered">
                Bordered
              </Button>
               <Button color="primary">Primary</Button>
            </div>
          </div>
          <MotionCar />
        </div>
      </CardBody>
    </Card>
  );
}
